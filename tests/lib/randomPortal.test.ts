import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getRandomPortal } from '@/lib/randomPortal';

// Module-level mock — hoisted by Vitest to run before imports
vi.mock('@/lib/wayback', () => ({
  checkAvailability: vi.fn(),
}));

// Import the mocked module to configure per-test
import { checkAvailability } from '@/lib/wayback';
const mockCheckAvailability = vi.mocked(checkAvailability);

const mockSnapshot = {
  url: 'https://web.archive.org/web/20100101000000/http://hypebeast.com/',
  timestamp: '20100101000000',
  available: true,
};

beforeEach(() => {
  vi.useFakeTimers();
  vi.clearAllMocks();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('getRandomPortal', () => {
  it('returns a PortalResult when checkAvailability succeeds', async () => {
    mockCheckAvailability.mockResolvedValue(mockSnapshot);

    const promise = getRandomPortal();
    await vi.runAllTimersAsync();
    const result = await promise;

    expect(result).not.toBeNull();
    expect(result?.archiveUrl).toBe(mockSnapshot.url);
    expect(result?.year).toBeGreaterThanOrEqual(1996);
    expect(result?.year).toBeLessThanOrEqual(2018);
    expect(typeof result?.title).toBe('string');
    expect(typeof result?.category).toBe('string');
  });

  it('returns null after 3 failed attempts', async () => {
    mockCheckAvailability.mockResolvedValue(null);

    const promise = getRandomPortal();
    await vi.runAllTimersAsync();
    const result = await promise;

    expect(result).toBeNull();
    expect(checkAvailability).toHaveBeenCalledTimes(3);
  });

  it('retries and succeeds on 2nd attempt', async () => {
    vi.mocked(checkAvailability)
      .mockResolvedValueOnce(null)
      .mockResolvedValue({
        url: 'http://example.com/',
        timestamp: '20100101000000',
        available: true,
      });
    const promise = getRandomPortal();
    await vi.runAllTimersAsync();
    const result = await promise;
    expect(result).not.toBeNull();
    expect(checkAvailability).toHaveBeenCalledTimes(2);
  });

  it('respects category filter', async () => {
    mockCheckAvailability.mockResolvedValue(mockSnapshot);

    const promise = getRandomPortal({ category: 'music' });
    await vi.runAllTimersAsync();
    const result = await promise;

    expect(result?.category).toBe('music');
  });

  it('returns null when no seeds match filters', async () => {
    mockCheckAvailability.mockResolvedValue(mockSnapshot);

    const promise = getRandomPortal({ category: 'fashion', vibe: 'nonexistent-vibe-xyz' });
    await vi.runAllTimersAsync();
    const result = await promise;

    expect(result).toBeNull();
  });
});

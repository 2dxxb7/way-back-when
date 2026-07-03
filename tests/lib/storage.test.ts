import { describe, it, expect, beforeEach } from 'vitest';
import { savePortal, getSavedPortals, removeSavedPortal, isPortalSaved } from '@/lib/storage';
import type { PortalResult } from '@/types';

const mockPortal: PortalResult = {
  seedId: 'hypebeast',
  title: 'Hypebeast',
  originalUrl: 'hypebeast.com',
  archiveUrl: 'https://web.archive.org/web/20100101000000/http://hypebeast.com/',
  timestamp: '20100101000000',
  year: 2010,
  category: 'fashion',
  vibes: ['streetwear', 'blog-era'],
};

const mockPortal2: PortalResult = {
  ...mockPortal,
  seedId: 'pitchfork',
  title: 'Pitchfork',
  originalUrl: 'pitchfork.com',
  archiveUrl: 'https://web.archive.org/web/20080101000000/http://pitchfork.com/',
  year: 2008,
  category: 'music',
};

beforeEach(() => {
  localStorage.clear();
});

describe('getSavedPortals', () => {
  it('returns empty array when nothing saved', () => {
    expect(getSavedPortals()).toEqual([]);
  });
});

describe('savePortal', () => {
  it('persists a portal', () => {
    savePortal(mockPortal);
    const saved = getSavedPortals();
    expect(saved).toHaveLength(1);
    expect(saved[0].title).toBe('Hypebeast');
  });

  it('prepends new portals (most recent first)', () => {
    savePortal(mockPortal);
    savePortal(mockPortal2);
    const saved = getSavedPortals();
    expect(saved[0].title).toBe('Pitchfork');
  });

  it('does not duplicate if same archiveUrl saved twice', () => {
    savePortal(mockPortal);
    savePortal(mockPortal);
    expect(getSavedPortals()).toHaveLength(1);
  });
});

describe('removeSavedPortal', () => {
  it('removes by archiveUrl', () => {
    savePortal(mockPortal);
    savePortal(mockPortal2);
    removeSavedPortal(mockPortal.archiveUrl);
    const saved = getSavedPortals();
    expect(saved).toHaveLength(1);
    expect(saved[0].title).toBe('Pitchfork');
  });
});

describe('isPortalSaved', () => {
  it('returns false when not saved', () => {
    expect(isPortalSaved(mockPortal.archiveUrl)).toBe(false);
  });

  it('returns true after saving', () => {
    savePortal(mockPortal);
    expect(isPortalSaved(mockPortal.archiveUrl)).toBe(true);
  });

  it('returns false after removing', () => {
    savePortal(mockPortal);
    removeSavedPortal(mockPortal.archiveUrl);
    expect(isPortalSaved(mockPortal.archiveUrl)).toBe(false);
  });
});

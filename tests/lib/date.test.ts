import { describe, it, expect } from 'vitest';
import { yearToTimestamp, timestampToYear, formatArchiveDate } from '@/lib/date';

describe('yearToTimestamp', () => {
  it('pads to YYYYMMDD format', () => {
    expect(yearToTimestamp(2010)).toBe('20100101');
  });
  it('works for late-90s years', () => {
    expect(yearToTimestamp(1998)).toBe('19980101');
  });
});

describe('timestampToYear', () => {
  it('extracts 4-digit year from full Wayback timestamp', () => {
    expect(timestampToYear('20101215120000')).toBe(2010);
  });
  it('works for 8-char timestamps too', () => {
    expect(timestampToYear('20050601')).toBe(2005);
  });
});

describe('formatArchiveDate', () => {
  it('formats full Wayback timestamp to MM/DD/YYYY', () => {
    expect(formatArchiveDate('20101215120000')).toBe('12/15/2010');
  });
  it('handles 8-char timestamp', () => {
    expect(formatArchiveDate('20050601000000')).toBe('06/01/2005');
  });
});

import { seedSites } from '@/data/seeds';
import { eras } from '@/data/eras';
import { yearToTimestamp } from '@/lib/date';
import { checkAvailability } from '@/lib/wayback';
import type { PortalFilters, PortalResult } from '@/types';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 400;

export async function getRandomPortal(
  filters?: PortalFilters
): Promise<PortalResult | null> {
  // Short-circuit: no point retrying if the filter itself matches nothing
  const candidates = seedSites.filter(s => {
    if (filters?.category && s.category !== filters.category) return false;
    if (filters?.vibe && !s.vibes.includes(filters.vibe)) return false;
    return true;
  });
  if (candidates.length === 0) return null;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await delay(RETRY_DELAY_MS * attempt);
    }
    const result = await tryGetPortal(filters);
    if (result) return result;
  }
  return null;
}

async function tryGetPortal(
  filters?: PortalFilters
): Promise<PortalResult | null> {
  let candidates = [...seedSites];

  if (filters?.category) {
    candidates = candidates.filter(s => s.category === filters.category);
  }
  if (filters?.vibe) {
    candidates = candidates.filter(s => s.vibes.includes(filters.vibe!));
  }
  if (candidates.length === 0) return null;

  const seed = candidates[Math.floor(Math.random() * candidates.length)];

  let fromYear: number;
  let toYear: number;

  if (filters?.eraId) {
    const era = eras.find(e => e.id === filters.eraId);
    fromYear = era?.from ?? 1998;
    toYear = era?.to ?? 2016;
  } else if (seed.preferredYears) {
    [fromYear, toYear] = seed.preferredYears;
  } else {
    fromYear = 1998;
    toYear = 2016;
  }

  const year = fromYear + Math.floor(Math.random() * (toYear - fromYear + 1));
  const timestamp = yearToTimestamp(year);

  const snapshot = await checkAvailability(seed.url, timestamp);
  if (!snapshot) return null;

  return {
    seedId: seed.id,
    title: seed.title,
    originalUrl: seed.url,
    archiveUrl: snapshot.url,
    timestamp: snapshot.timestamp,
    year,
    category: seed.category,
    vibes: seed.vibes,
    description: seed.description,
  };
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

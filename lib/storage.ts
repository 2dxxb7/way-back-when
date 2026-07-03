import type { PortalResult } from '@/types';

const STORAGE_KEY = 'wbw_portals';

export function savePortal(portal: PortalResult): void {
  const saved = getSavedPortals();
  if (saved.some(p => p.archiveUrl === portal.archiveUrl)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([portal, ...saved]));
}

export function getSavedPortals(): PortalResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PortalResult[]) : [];
  } catch {
    return [];
  }
}

export function removeSavedPortal(archiveUrl: string): void {
  const filtered = getSavedPortals().filter(p => p.archiveUrl !== archiveUrl);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function isPortalSaved(archiveUrl: string): boolean {
  return getSavedPortals().some(p => p.archiveUrl === archiveUrl);
}

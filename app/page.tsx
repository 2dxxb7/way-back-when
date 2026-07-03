'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Hero } from '@/components/Hero';
import { FilterBar } from '@/components/FilterBar';
import { PortalCard } from '@/components/PortalCard';
import { SavedPortalCard } from '@/components/SavedPortalCard';
import { LoadingPortal } from '@/components/LoadingPortal';
import { ErrorState } from '@/components/ErrorState';
import { getRandomPortal } from '@/lib/randomPortal';
import { savePortal, getSavedPortals, removeSavedPortal } from '@/lib/storage';
import type { PortalFilters, PortalResult, PortalState } from '@/types';

export default function HomePage() {
  const [portalState, setPortalState] = useState<PortalState>({ status: 'idle' });
  const [filters, setFilters] = useState<PortalFilters>({});
  const [chaosMode, setChaosMode] = useState(false);
  const [savedPortals, setSavedPortals] = useState<PortalResult[]>([]);
  const [noMatches, setNoMatches] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const lastRequestRef = useRef(0);

  // Hydrate saved portals from localStorage after mount
  useEffect(() => {
    setSavedPortals(getSavedPortals());
  }, []);

  const handleOpen = useCallback(async () => {
    const now = Date.now();
    if (now - lastRequestRef.current < 2000) return;
    lastRequestRef.current = now;

    setNoMatches(false);
    setRateLimited(false);
    setPortalState({ status: 'loading' });
    try {
      const result = await getRandomPortal(chaosMode ? {} : filters);
      if (result) {
        setPortalState({ status: 'success', result });
      } else {
        const hasFilters =
          !chaosMode &&
          (!!filters.category || !!filters.eraId || !!filters.vibe);
        setNoMatches(hasFilters);
        setPortalState({ status: 'error' });
      }
    } catch (err) {
      if (err instanceof Error && err.message === 'rate_limited') setRateLimited(true);
      setPortalState({ status: 'error' });
    }
  }, [chaosMode, filters]);

  // Space bar to reroll
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.code === 'Space' && !(['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName) || t.isContentEditable)) {
        e.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleOpen]);

  const handleSave = () => {
    if (portalState.status !== 'success') return;
    savePortal(portalState.result);
    setSavedPortals(getSavedPortals());
  };

  const handleRemoveSaved = (archiveUrl: string) => {
    removeSavedPortal(archiveUrl);
    setSavedPortals(getSavedPortals());
  };

  const isSaved =
    portalState.status === 'success'
      ? savedPortals.some(p => p.archiveUrl === portalState.result.archiveUrl)
      : false;

  return (
    <div className="flex flex-col gap-8">
      <Hero onOpen={handleOpen} isLoading={portalState.status === 'loading'} />

      <FilterBar
        filters={filters}
        onChange={setFilters}
        chaosMode={chaosMode}
        onChaosToggle={() => setChaosMode(c => !c)}
      />

      {portalState.status === 'loading' && <LoadingPortal />}

      {portalState.status === 'error' && (
        <ErrorState onRetry={handleOpen} noMatches={noMatches} rateLimited={rateLimited} />
      )}

      {portalState.status === 'success' && (
        <PortalCard
          result={portalState.result}
          onSave={handleSave}
          onReroll={handleOpen}
          isSaved={isSaved}
        />
      )}

      {savedPortals.length > 0 && (
        <div>
          <div className="font-mono text-xs text-zinc-700 tracking-widest uppercase mb-3">
            Recent Discoveries
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {savedPortals.slice(0, 3).map(p => (
              <SavedPortalCard
                key={p.archiveUrl}
                portal={p}
                onRemove={() => handleRemoveSaved(p.archiveUrl)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

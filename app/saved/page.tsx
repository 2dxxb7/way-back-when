'use client';

import { useState, useEffect } from 'react';
import { SavedPortalCard } from '@/components/SavedPortalCard';
import { getSavedPortals, removeSavedPortal } from '@/lib/storage';
import type { PortalResult } from '@/types';

export default function SavedPage() {
  const [portals, setPortals] = useState<PortalResult[]>([]);

  useEffect(() => {
    setPortals(getSavedPortals());
  }, []);

  const handleRemove = (archiveUrl: string) => {
    removeSavedPortal(archiveUrl);
    setPortals(getSavedPortals());
  };

  return (
    <div>
      <div className="font-mono mb-8">
        <div className="text-xs text-zinc-700 tracking-widest uppercase mb-2">Archive</div>
        <h1 className="text-3xl text-zinc-100 font-bold">Saved Discoveries</h1>
        <p className="text-zinc-600 text-xs mt-2 font-mono">
          {portals.length} portal{portals.length !== 1 ? 's' : ''} saved
        </p>
      </div>

      {portals.length === 0 ? (
        <div className="border border-zinc-800 p-10 text-center font-mono">
          <div className="text-zinc-600 text-sm mb-2">No discoveries saved yet.</div>
          <div className="text-zinc-700 text-xs">
            Open a portal on the{' '}
            <a href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2">
              homepage
            </a>{' '}
            and save it to see it here.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portals.map(p => (
            <SavedPortalCard
              key={p.archiveUrl}
              portal={p}
              onRemove={() => handleRemove(p.archiveUrl)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

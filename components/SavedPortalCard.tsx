'use client';

import type { PortalResult } from '@/types';

interface SavedPortalCardProps {
  portal: PortalResult;
  onRemove: () => void;
}

export function SavedPortalCard({ portal, onRemove }: SavedPortalCardProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-900/40 p-4 font-mono">
      <div className="text-xs text-zinc-700 tracking-widest uppercase mb-2">
        {portal.year} · {portal.category}
      </div>
      <h3 className="text-zinc-200 font-bold text-sm mb-0.5 leading-tight">
        {portal.title}
      </h3>
      <div className="text-zinc-700 text-xs mb-3">{portal.originalUrl}</div>

      <div className="flex flex-wrap gap-1 mb-4">
        {portal.vibes.slice(0, 3).map(vibe => (
          <span
            key={vibe}
            className="text-xs border border-zinc-800/80 text-zinc-700 px-1.5 py-0.5"
          >
            {vibe}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={portal.archiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-400 border border-green-500/30 px-3 py-1.5 hover:bg-green-500/10 hover:border-green-400 transition-all"
        >
          Open
        </a>
        <button
          onClick={onRemove}
          className="text-xs text-zinc-700 border border-zinc-800 px-3 py-1.5 hover:border-zinc-700 hover:text-zinc-500 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

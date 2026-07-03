'use client';

import type { PortalResult } from '@/types';

interface PortalCardProps {
  result: PortalResult;
  onSave: () => void;
  onReroll: () => void;
  isSaved: boolean;
}

export function PortalCard({ result, onSave, onReroll, isSaved }: PortalCardProps) {
  return (
    <div className="border border-zinc-700/80 bg-zinc-900/60 p-6 max-w-xl mx-auto font-mono">
      <div className="text-green-400 text-xs tracking-[0.25em] uppercase mb-5 flex items-center gap-2">
        <span className="text-green-500">▶</span>
        Temporal Snapshot Found
      </div>

      <div className="mb-5">
        <h2 className="text-zinc-100 text-2xl font-bold leading-tight mb-1">
          {result.title}
        </h2>
        <div className="text-zinc-600 text-xs">{result.originalUrl}</div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-xs">
        <span className="text-zinc-500">
          Year:{' '}
          <span className="text-zinc-200">{result.year}</span>
        </span>
        <span className="text-zinc-500">
          Category:{' '}
          <span className="text-zinc-200">{result.category}</span>
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {result.vibes.map(vibe => (
          <span
            key={vibe}
            className="text-xs border border-zinc-800 text-zinc-500 px-2 py-0.5"
          >
            {vibe}
          </span>
        ))}
      </div>

      {result.description && (
        <p className="text-zinc-500 text-xs mb-5 border-l-2 border-zinc-800 pl-3 leading-relaxed">
          {result.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <a
          href={result.archiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-green-500/50 text-green-400 text-xs px-4 py-2 hover:bg-green-500/10 hover:border-green-400 hover:text-green-300 transition-all tracking-wider"
        >
          [ Open Archived Page ]
        </a>

        <button
          onClick={onSave}
          disabled={isSaved}
          className="border border-zinc-700 text-zinc-400 text-xs px-4 py-2 hover:border-zinc-500 hover:text-zinc-200 transition-all tracking-wider disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isSaved ? '[ Saved ✓ ]' : '[ Save Discovery ]'}
        </button>

        <button
          onClick={onReroll}
          className="border border-zinc-800 text-zinc-600 text-xs px-4 py-2 hover:border-zinc-700 hover:text-zinc-400 transition-all tracking-wider"
        >
          [ Reroll ]
        </button>
      </div>
    </div>
  );
}

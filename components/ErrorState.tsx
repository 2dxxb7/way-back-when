'use client';

interface ErrorStateProps {
  onRetry: () => void;
  noMatches?: boolean;
}

export function ErrorState({ onRetry, noMatches = false }: ErrorStateProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-900/40 p-8 text-center font-mono max-w-xl mx-auto">
      <div className="text-amber-500 text-xs tracking-widest uppercase mb-3">
        {noMatches ? 'No Portals Found' : 'Signal Lost'}
      </div>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {noMatches ? (
          <>
            No portals match these filters.
            <br />
            Try loosening your search.
          </>
        ) : (
          <>
            The dead web didn't answer this time.
            <br />
            Try another jump.
          </>
        )}
      </p>
      <button
        onClick={onRetry}
        className="border border-zinc-700 text-zinc-300 text-sm px-6 py-2 hover:border-zinc-500 hover:text-zinc-100 transition-all font-mono tracking-wider"
      >
        [ Reroll ]
      </button>
    </div>
  );
}

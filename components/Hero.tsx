'use client';

interface HeroProps {
  onOpen: () => void;
  isLoading: boolean;
}

export function Hero({ onOpen, isLoading }: HeroProps) {
  return (
    <div className="flex flex-col items-center text-center pt-12 pb-8 px-4">
      <div className="text-xs tracking-[0.3em] text-zinc-600 uppercase font-mono mb-6">
        Internet Archive Portal
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold text-zinc-100 tracking-tight mb-4 leading-none">
        WAY BACK WHEN
      </h1>

      <p className="text-zinc-500 text-sm font-mono mb-10 tracking-wide">
        Spin the dead web. Every click is a lost room.
      </p>

      <button
        onClick={onOpen}
        disabled={isLoading}
        className={
          'border font-mono text-sm px-8 py-4 tracking-widest uppercase transition-all duration-200 ' +
          'disabled:opacity-40 disabled:cursor-not-allowed ' +
          (isLoading
            ? 'border-green-500/30 text-green-500/60'
            : 'border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:text-green-300')
        }
      >
        {isLoading ? '[ Searching… ]' : '[ Open Random Portal ]'}
      </button>

      <div className="mt-6 text-xs font-mono text-zinc-700">
        Press{' '}
        <kbd className="border border-zinc-800 bg-zinc-900 text-zinc-600 px-1.5 py-0.5 text-xs">
          Space
        </kbd>{' '}
        to reroll
      </div>
    </div>
  );
}

import Link from 'next/link';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="border-b border-zinc-800/60">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between font-mono">
          <Link
            href="/"
            className="text-sm text-zinc-300 hover:text-zinc-100 tracking-widest uppercase transition-colors"
          >
            Way Back When
          </Link>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link href="/saved" className="hover:text-zinc-300 transition-colors tracking-wider">
              Saved
            </Link>
            <Link href="/about" className="hover:text-zinc-300 transition-colors tracking-wider">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-zinc-800/60 py-4 text-center font-mono text-xs text-zinc-700">
        Powered by the{' '}
        <a
          href="https://archive.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-500 transition-colors"
        >
          Internet Archive Wayback Machine
        </a>
        {' '}· Not affiliated with archive.org
      </footer>
    </div>
  );
}

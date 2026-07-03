export default function AboutPage() {
  return (
    <div className="max-w-2xl font-mono">
      <div className="text-xs text-zinc-700 tracking-widest uppercase mb-2">About</div>
      <h1 className="text-3xl text-zinc-100 font-bold mb-10">Way Back When</h1>

      <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
        <p>
          Way Back When is a portal into forgotten internet culture. It uses public
          archival links from the Internet Archive&apos;s Wayback Machine to help people
          rediscover old websites, blogs, scenes, and digital artifacts.
        </p>
        <p>
          Every click opens a snapshot from a different era of the web &mdash; before
          the algorithm, before the feed, before everything looked the same.
        </p>
        <div className="border-l-2 border-zinc-800 pl-4 text-zinc-600 text-xs leading-relaxed">
          This project is unofficial and not affiliated with the Internet Archive or
          archive.org. All archived content is served via the Wayback Machine&apos;s
          public infrastructure.
        </div>
        <div>
          <div className="text-zinc-300 mb-3 text-xs tracking-widest uppercase">How it works</div>
          <ul className="space-y-2 text-zinc-500 text-xs">
            <li className="flex gap-2">
              <span className="text-zinc-700">→</span>
              A curated list of seed sites is filtered by your era and category preferences
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-700">→</span>
              A random year is selected from within the site&apos;s preferred era range
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-700">→</span>
              The Wayback Machine is queried for the closest archived snapshot
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-700">→</span>
              If found, the archive URL is surfaced for you to explore in a new tab
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-700">→</span>
              If no snapshot exists, the app automatically tries up to 3 different seeds
            </li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-300 mb-3 text-xs tracking-widest uppercase">Add more sites</div>
          <p className="text-zinc-600 text-xs leading-relaxed">
            The seed list lives in <code className="text-zinc-400 bg-zinc-900 px-1">data/seeds.ts</code>.
            Each entry is a domain with a category, vibes, and optional preferred year range.
            Open that file and follow the instructions at the top.
          </p>
        </div>

        <div className="border-t border-zinc-800/60 pt-6 mt-2">
          <p className="text-zinc-600 text-xs leading-relaxed">
            Way Back When is a dead-web archive portal created by TOi under the (U)ni System.
          </p>
          <p className="text-zinc-700 text-xs mt-2">
            &copy; 2026 Christopher Remel Stokes Jr. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

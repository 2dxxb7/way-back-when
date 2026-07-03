'use client';

import { useEffect, useState } from 'react';

const MESSAGES = [
  'Opening portal…',
  'Searching dead web…',
  'Temporal lock acquired.',
  'Scanning archive…',
  'Locating snapshot…',
  'Calibrating time index…',
];

export function LoadingPortal() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(i => (i + 1) % MESSAGES.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-zinc-800 bg-zinc-900/40 p-8 text-center font-mono max-w-xl mx-auto">
      <div className="text-green-400 text-sm tracking-widest mb-6 min-h-[1.5rem]">
        ▋ {MESSAGES[msgIndex]}
      </div>
      <div className="flex justify-center gap-1">
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className="w-1 bg-green-500/30 animate-pulse"
            style={{
              height: `${8 + Math.sin(i * 1.2) * 6 + 6}px`,
              animationDelay: `${i * 120}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

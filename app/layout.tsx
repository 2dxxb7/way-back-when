import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Way Back When — Spin the dead web',
  description:
    'A random portal for forgotten internet culture. Explore archived websites from the Wayback Machine — old blogs, forums, personal sites, and digital ruins.',
  keywords: [
    'wayback machine',
    'internet archive',
    'old websites',
    'web nostalgia',
    'dead internet',
    'retro web',
    'forgotten internet',
    'web history',
  ],
  openGraph: {
    title: 'Way Back When',
    description: 'A random portal for forgotten internet culture. Every click is a lost room.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

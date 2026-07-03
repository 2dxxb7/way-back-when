import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Way Back When — Spin the dead web',
  description:
    'A portal for forgotten internet culture. Random archived websites from the Wayback Machine.',
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

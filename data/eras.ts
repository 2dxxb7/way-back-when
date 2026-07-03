import type { Era } from '@/types';

export const eras: Era[] = [
  { id: 'late-90s',      label: 'Late 90s',           from: 1996, to: 1999 },
  { id: 'y2k',           label: 'Y2K Web',            from: 2000, to: 2004 },
  { id: 'blog-era',      label: 'Blog Era',           from: 2005, to: 2009 },
  { id: 'tumblr-era',    label: 'Tumblr Era',         from: 2010, to: 2014 },
  { id: 'pre-algorithm', label: 'Pre-Algorithm Drift', from: 2015, to: 2018 },
];

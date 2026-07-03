export type SeedCategory =
  | 'fashion'
  | 'rap-blog'
  | 'music'
  | 'personal-site'
  | 'forum'
  | 'streetwear'
  | 'anime'
  | 'gaming'
  | 'art'
  | 'weird-web'
  | 'brand-archive';

export type SeedSite = {
  id: string;
  title: string;
  url: string;
  category: SeedCategory;
  vibes: string[];
  preferredYears?: [number, number];
  description?: string;
};

export type Era = {
  id: string;
  label: string;
  from: number;
  to: number;
};

export type PortalResult = {
  seedId: string;
  title: string;
  originalUrl: string;
  archiveUrl: string;
  timestamp: string;
  year: number;
  category: string;
  vibes: string[];
  description?: string;
};

export type PortalFilters = {
  category?: SeedCategory;
  eraId?: string;
  vibe?: string;
};

export type PortalState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; result: PortalResult }
  | { status: 'error' };

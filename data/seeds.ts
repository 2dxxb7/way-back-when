import type { SeedSite } from '@/types';

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD MORE SEEDS
//
// Copy any entry below and change the fields. Required: id, title, url,
// category, vibes. Optional: preferredYears ([fromYear, toYear]), description.
//
// Good sources: old Blogspot/WordPress blogs, early brand sites, forums,
// GeoCities mirrors, personal pages, pre-2015 music blogs.
// ─────────────────────────────────────────────────────────────────────────────

export const seedSites: SeedSite[] = [
  // ── FASHION ────────────────────────────────────────────────────────────────
  {
    id: 'hypebeast',
    title: 'Hypebeast',
    url: 'hypebeast.com',
    category: 'fashion',
    vibes: ['streetwear', 'blog-era', '2000s'],
    preferredYears: [2007, 2013],
    description: 'Early sneaker and streetwear blog before it became a media empire.',
  },
  {
    id: 'highsnobiety',
    title: 'Highsnobiety',
    url: 'highsnobiety.com',
    category: 'fashion',
    vibes: ['streetwear', 'blog-era', '2000s'],
    preferredYears: [2008, 2014],
    description: 'European streetwear blog that predated the algorithm.',
  },

  // ── RAP BLOG ───────────────────────────────────────────────────────────────
  {
    id: 'nah-right',
    title: 'Nah Right',
    url: 'nahright.com',
    category: 'rap-blog',
    vibes: ['mixtape-era', 'blogspot-adjacent', 'rap-internet'],
    preferredYears: [2006, 2013],
    description: 'Classic rap blog era. The sound of the 2000s internet.',
  },
  {
    id: '2dopeboyz',
    title: '2DopeBoyz',
    url: '2dopeboyz.com',
    category: 'rap-blog',
    vibes: ['mixtape-era', 'rap-internet', 'blog-era'],
    preferredYears: [2007, 2014],
    description: 'Daily rap blog that drove hip-hop culture online.',
  },
  {
    id: 'illrootz',
    title: 'Ill Roots',
    url: 'illrootz.com',
    category: 'rap-blog',
    vibes: ['mixtape-era', 'rap-internet'],
    preferredYears: [2007, 2012],
    description: 'Underground rap blog from the mixtape era.',
  },

  // ── MUSIC ──────────────────────────────────────────────────────────────────
  {
    id: 'pitchfork',
    title: 'Pitchfork',
    url: 'pitchfork.com',
    category: 'music',
    vibes: ['indie-web', 'blog-era', '2000s'],
    preferredYears: [2000, 2012],
    description: 'Indie music criticism from before Pitchfork went full magazine.',
  },
  {
    id: 'stereogum',
    title: 'Stereogum',
    url: 'stereogum.com',
    category: 'music',
    vibes: ['indie-web', 'blog-era', '2000s'],
    preferredYears: [2004, 2012],
    description: 'Music blog that thrived before streaming killed the mp3 post.',
  },
  {
    id: 'sputnikmusic',
    title: 'Sputnikmusic',
    url: 'sputnikmusic.com',
    category: 'music',
    vibes: ['community', 'forum-culture', '2000s'],
    preferredYears: [2006, 2014],
    description: 'User-driven music reviews and passionate forum culture.',
  },
  {
    id: 'absolutepunk',
    title: 'AbsolutePunk',
    url: 'absolutepunk.net',
    category: 'music',
    vibes: ['community', 'forum-culture', 'blog-era'],
    preferredYears: [2005, 2013],
    description: 'Punk/emo community hub before the scene fragmented.',
  },

  // ── PERSONAL SITE ──────────────────────────────────────────────────────────
  {
    id: 'dooce',
    title: 'Dooce',
    url: 'dooce.com',
    category: 'personal-site',
    vibes: ['indie-web', 'blog-era', 'nostalgia'],
    preferredYears: [2001, 2012],
    description: 'One of the most-read personal blogs in the early web era.',
  },
  {
    id: 'maddox',
    title: 'The Best Page in the Universe',
    url: 'maddox.xmission.com',
    category: 'personal-site',
    vibes: ['webmaster-era', 'indie-web', 'nostalgia'],
    preferredYears: [1997, 2008],
    description: 'Old internet swagger. Deliberately bad HTML, deliberately great writing.',
  },
  {
    id: 'xanga',
    title: 'Xanga',
    url: 'xanga.com',
    category: 'personal-site',
    vibes: ['early-social', 'tumblr-era', 'nostalgia'],
    preferredYears: [2003, 2010],
    description: 'Where teenagers blogged before they had a choice.',
  },

  // ── FORUM ──────────────────────────────────────────────────────────────────
  {
    id: 'niketalk',
    title: 'NikeTalk',
    url: 'niketalk.com',
    category: 'forum',
    vibes: ['streetwear', 'forum-culture', '2000s'],
    preferredYears: [2003, 2014],
    description: 'Sneaker forum where the grail hunt was born.',
  },
  {
    id: 'something-awful',
    title: 'Something Awful',
    url: 'somethingawful.com',
    category: 'forum',
    vibes: ['weird-web', 'forum-culture', '2000s'],
    preferredYears: [2000, 2012],
    description: 'Seminal internet comedy forum. Birthed many memes.',
  },
  {
    id: 'bodybuilding-misc',
    title: 'Bodybuilding.com Misc',
    url: 'bodybuilding.com/fun/bbmainmisc.htm',
    category: 'forum',
    vibes: ['forum-culture', 'community', '2000s'],
    preferredYears: [2006, 2014],
    description: 'The misc board. A lawless space. A time capsule.',
  },

  // ── STREETWEAR ─────────────────────────────────────────────────────────────
  {
    id: 'the-hundreds',
    title: 'The Hundreds',
    url: 'thehundreds.com',
    category: 'streetwear',
    vibes: ['streetwear', 'blog-era', 'brand-archive'],
    preferredYears: [2006, 2015],
    description: 'Streetwear brand that built its identity through the blog.',
  },
  {
    id: 'supreme',
    title: 'Supreme New York',
    url: 'supremenewyork.com',
    category: 'streetwear',
    vibes: ['streetwear', 'brand-archive', '2000s'],
    preferredYears: [2008, 2015],
    description: 'Supreme site before the resell market exploded.',
  },
  {
    id: 'stussy',
    title: 'Stüssy',
    url: 'stussy.com',
    category: 'streetwear',
    vibes: ['streetwear', 'brand-archive', '2000s'],
    preferredYears: [2005, 2015],
    description: 'The OG streetwear brand. Archive gold.',
  },

  // ── ANIME ──────────────────────────────────────────────────────────────────
  {
    id: 'myanimelist',
    title: 'MyAnimeList',
    url: 'myanimelist.net',
    category: 'anime',
    vibes: ['community', 'forum-culture', '2000s'],
    preferredYears: [2004, 2014],
    description: 'The anime internet before it went mainstream.',
  },
  {
    id: 'crunchyroll-early',
    title: 'Crunchyroll (early)',
    url: 'crunchyroll.com',
    category: 'anime',
    vibes: ['community', 'early-social', '2000s'],
    preferredYears: [2006, 2011],
    description: 'Before Crunchyroll was a streaming giant, it was a fan site.',
  },
  {
    id: 'animenewsnetwork',
    title: 'Anime News Network',
    url: 'animenewsnetwork.com',
    category: 'anime',
    vibes: ['community', 'nostalgia', '2000s'],
    preferredYears: [2001, 2013],
    description: 'The news wire for anime culture in its grassroots era.',
  },

  // ── GAMING ─────────────────────────────────────────────────────────────────
  {
    id: 'ign-old',
    title: 'IGN',
    url: 'ign.com',
    category: 'gaming',
    vibes: ['nostalgia', '2000s', 'community'],
    preferredYears: [2000, 2010],
    description: 'Gaming coverage from the era of cheat codes and FAQs.',
  },
  {
    id: 'gamespot',
    title: 'GameSpot',
    url: 'gamespot.com',
    category: 'gaming',
    vibes: ['nostalgia', '2000s', 'community'],
    preferredYears: [2000, 2011],
    description: 'Before streaming, you read the review. This was it.',
  },
  {
    id: 'joystiq',
    title: 'Joystiq',
    url: 'joystiq.com',
    category: 'gaming',
    vibes: ['blog-era', '2000s', 'indie-web'],
    preferredYears: [2004, 2012],
    description: 'Gaming blog from the Weblogs Inc. golden age.',
  },

  // ── ART ────────────────────────────────────────────────────────────────────
  {
    id: 'deviantart',
    title: 'DeviantArt',
    url: 'deviantart.com',
    category: 'art',
    vibes: ['community', 'early-social', 'nostalgia'],
    preferredYears: [2001, 2012],
    description: 'Where a generation of internet artists grew up.',
  },
  {
    id: 'empty-kingdom',
    title: 'Empty Kingdom',
    url: 'emptykingdom.com',
    category: 'art',
    vibes: ['indie-web', 'blog-era', 'tumblr-era'],
    preferredYears: [2007, 2014],
    description: 'Curated art blog with a distinctive editorial voice.',
  },

  // ── WEIRD WEB ──────────────────────────────────────────────────────────────
  {
    id: 'albinoblacksheep',
    title: 'Albino Blacksheep',
    url: 'albinoblacksheep.com',
    category: 'weird-web',
    vibes: ['flash-era', 'webmaster-era', 'nostalgia'],
    preferredYears: [2000, 2010],
    description: 'Flash games, animations, and general internet weirdness.',
  },
  {
    id: 'newgrounds',
    title: 'Newgrounds',
    url: 'newgrounds.com',
    category: 'weird-web',
    vibes: ['flash-era', 'community', '2000s'],
    preferredYears: [2000, 2012],
    description: 'The site that made the early internet feel dangerous and creative.',
  },
  {
    id: 'ytmnd',
    title: 'YTMND',
    url: 'ytmnd.com',
    category: 'weird-web',
    vibes: ['flash-era', 'weird-web', '2000s'],
    preferredYears: [2004, 2012],
    description: 'You\'re the man now dog. Looping image + audio internet culture.',
  },

  // ── BRAND ARCHIVE ──────────────────────────────────────────────────────────
  {
    id: 'carhartt',
    title: 'Carhartt',
    url: 'carhartt.com',
    category: 'brand-archive',
    vibes: ['brand-archive', 'nostalgia', '2000s'],
    preferredYears: [2005, 2015],
    description: 'Workwear brand site from before the streetwear crossover.',
  },
  {
    id: 'diesel',
    title: 'Diesel',
    url: 'diesel.com',
    category: 'brand-archive',
    vibes: ['brand-archive', '2000s', 'nostalgia'],
    preferredYears: [2005, 2013],
    description: 'Bold, strange fashion brand design from the 2000s web era.',
  },
];

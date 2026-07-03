# Way Back When

**Way Back When** is a random portal for forgotten internet culture.

It uses archived snapshots from the Internet Archive's Wayback Machine to send users into old websites, blogs, scenes, and digital ruins from different eras of the web.

Think of it like StumbleUpon for the dead internet.

Every click is a lost room.

---

## Live Demo

Coming soon.

---

## Preview

> Add screenshot here after deployment.

---

## Concept

The modern internet feels compressed into the same few platforms. Way Back When is built to rediscover the older, stranger, more personal web — fashion blogs, rap blogs, personal sites, forums, old brand pages, and forgotten digital artifacts.

Each portal pull hits the Wayback Machine's availability API to find a real archived snapshot, then surfaces the link for you to explore.

---

## Features

- Random archived website generator
- Era filters (Late 90s, Y2K, Blog Era, Tumblr Era, Pre-Algorithm)
- Category filters (fashion, rap blogs, music, personal sites, forums, streetwear, anime, gaming, art, weird web, brand archives)
- Vibe tags
- Chaos Mode — ignores all filters, picks anything from any era
- Saved discoveries (stored locally in your browser)
- Wayback Machine snapshot links that open in a new tab
- Press `Space` to reroll
- Nostalgic terminal-style interface

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Internet Archive Wayback Machine API](https://archive.org/help/wayback_api.php)

---

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Build for production
npm run build

# Run production server
npm start
```

---

## Adding More Seed Sites

The curated list of seed sites lives in [`data/seeds.ts`](data/seeds.ts).

Each entry looks like this:

```ts
{
  id: 'site-id',
  title: 'Site Name',
  url: 'example.com',
  category: 'fashion',       // see SeedCategory type in types/index.ts
  vibes: ['y2k', 'nostalgic'],
  preferredYears: [2002, 2008],  // optional — narrows the year range
  description: 'Optional one-liner shown on the portal card.',
},
```

Open `data/seeds.ts` and follow the comment block at the top of the file.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** and import your GitHub repository.
4. Keep the default Next.js build settings — no environment variables needed.
5. Click **Deploy**.
6. After deployment, copy the live URL and add it to this README.

No environment variables are required. The app uses only the public Wayback Machine availability API.

---

## Creator

Created by **TOi** under the **(U)ni System**.

© 2026 Christopher Remel Stokes Jr. All rights reserved.

---

## Disclaimer

Way Back When is an independent project and is not affiliated with the Internet Archive. It uses public archival links from the Wayback Machine. All archived content is served via the Wayback Machine's public infrastructure.

---

## License

MIT

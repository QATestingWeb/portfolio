# Mughees Khan — Portfolio (Next.js)

Cinematic, scroll-driven portfolio built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**.
No UI libraries — all animation is plain CSS + `requestAnimationFrame`, so it stays fast.

**Live:** https://mughees-khan.vercel.app/

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Requires **Node.js 18.18+** (Node 20 or 22 recommended).

## Deploy (free) on Vercel

1. Push this folder to a GitHub repository.
2. Go to **vercel.com → Add New → Project**, import the repo, keep the defaults, click **Deploy**.
3. Add your own domain under **Project → Settings → Domains**.
4. Link previews on WhatsApp/LinkedIn use `profile.url` in `data/site.ts` (currently `https://mughees-khan.vercel.app`). If you move to another domain, update it there, or set `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables** to override it.

## Edit your content

Almost everything is in **`data/site.ts`**:

| What | Where |
|---|---|
| Name, site URL, email, WhatsApp, GitHub, LinkedIn, CV path | `profile` |
| Projects (text, links, screenshots, colors) | `projects` |
| Jobs, education, certifications | `experience`, `education`, `certifications` |
| Skills + filter groups | `skills`, `skillFamilies` |
| Background poses + camera zoom per section | `cameraShots` |

The About paragraph and the 3 stat boxes are in `components/About.tsx`.

## Replace media

| File | Used for |
|---|---|
| `public/videos/intro.mp4` | Talking intro video in the hero (keep it under ~5 MB) |
| `public/images/intro-poster.jpg` | First frame shown while the video loads |
| `public/images/badge.webp` | Photo on the hanging developer ID badge |
| `public/images/poses/*.webp` | Background "main character" poses |
| `public/images/projects/*.webp` | Project screenshots |
| `public/Mughees-Khan-Resume.pdf` | Download CV buttons |

To use a new video with your own voice, replace `public/videos/intro.mp4` (same name) and
make a new poster from it, for example:

```bash
ffmpeg -i my-video.mp4 -vf scale=1432:-2 -c:v libx264 -crf 20 -preset slow \
  -c:a aac -b:a 128k -movflags +faststart public/videos/intro.mp4
ffmpeg -i public/videos/intro.mp4 -frames:v 1 -q:v 2 public/images/intro-poster.jpg
```

## Project structure

```
app/
  layout.tsx       fonts (Geist, Geist Mono, Instrument Serif) + SEO metadata
  page.tsx         puts the sections together
  globals.css      all styles and animations
components/
  Background.tsx   stars, aurora, 3D grid floor, scroll "camera" over your poses
  Hero.tsx         pinned hero, expanding video card, sound / tap-to-hear logic
  About.tsx        bio, stats, CV button, swinging ID badge
  Projects.tsx     pinned accordion that opens one project per scroll step
  Experience.tsx   timeline with scroll-filled glowing line
  Skills.tsx       periodic-table skills with family filters
  Contact.tsx      contact card + footer
  Dock.tsx         floating section dock + sticky WhatsApp button
data/site.ts       all content
lib/motion.ts      small animation helpers
```

## Notes

- **Sound:** browsers block video sound until the visitor interacts with the page. The site tries
  autoplay with sound first; if blocked, it plays muted, shows "Tap anywhere to hear my intro", and
  the first tap turns the voice on.
- **Accessibility:** everything respects `prefers-reduced-motion` (animations switch off).
- **Mobile:** under 900px the project accordion becomes a normal list; the background camera moves less.
deploy
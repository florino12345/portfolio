# my-dev-portfolio

A single-page developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Dark/light theme, smooth-scroll sections, and a contact form wired up to email via Resend.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost everything on the page — your name, bio, socials, tech stack, projects, services, store items, stats — lives in one file:

```
data/site.ts
```

Edit the values there and the site updates; you shouldn't need to touch any component in `/components` for normal content changes. A few notes:

- **Profile photo**: add your photo to `/public` (e.g. `profile.jpg`) and update `avatar` in `data/site.ts` to point at it. A placeholder SVG (`/public/profile.svg`) is used until then.
- **Project/product screenshots**: replace the files in `/public/projects` (or add new ones) and update the `image` paths in `data/site.ts`.
- **Tech stack icons**: pulled live from [Simple Icons](https://simpleicons.org) using the `slug` field — find a slug by searching simpleicons.org.
- **Site URL**: update `url` in `data/site.ts` once you have a domain — it feeds the metadata, Open Graph image, and `sitemap.ts`.

## Environment variables (contact form)

The contact form posts to `/api/contact`, which sends the message to your inbox using [Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`.
2. Create a Resend account, verify a sending domain (or use their `onboarding@resend.dev` test address during development), and add your API key.

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=you@example.com
```

Without these set, the form will show a friendly error asking visitors to email you directly instead of failing silently.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL` as environment variables in the Vercel project settings.
4. Deploy. Vercel will build and host the app automatically on every push.

## Tech stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes · Resend

## Project structure

```
app/            routes, layout, metadata, sitemap.ts, robots.ts, api/contact
components/     one component per section (Navbar, Hero, Projects, Contact, ...)
data/site.ts    all editable content
lib/            small shared helpers
public/         images, favicon, placeholder screenshots
```

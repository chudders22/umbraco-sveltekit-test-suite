# FrontendNextJs — Umbraco Headless Blog (Next.js)

A [Next.js](https://nextjs.org/) (App Router) frontend for the Umbraco headless blog, consuming the Umbraco Content Delivery API v2. This is a feature-equivalent port of the SvelteKit frontend in `../Frontend/`.

## Architecture

- **Next.js 16** with the App Router — all routes are React Server Components by default
- **Tailwind CSS v4** for styling
- **TypeScript** throughout
- All content is fetched **server-side** from Umbraco on every request (`force-dynamic`)
- Media is proxied through a Next.js route handler at `/media/[...path]`

### Two-Level Content Dispatch

1. `src/app/[...slug]/page.tsx` fetches content by URL path from Umbraco and dispatches to a layout component based on `content.contentType` (e.g. `"homepage"` → `Homepage.tsx`)
2. Layout components pass block lists to `BlockList.tsx`, which maps each block's `contentType` to a component via `src/lib/utils/componentMap.tsx`

### Key Files

| File | Purpose |
|---|---|
| `src/app/[...slug]/page.tsx` | Catch-all route — content fetch, layout dispatch, `generateMetadata` for SEO |
| `src/app/layout.tsx` | Root layout — renders Header and Footer, wraps app in `ThemeProvider` |
| `src/app/media/[...path]/route.ts` | Proxies media requests to Umbraco |
| `src/lib/utils/umbracoApi.ts` | All server-side Umbraco API fetch helpers + `resolveMediaUrl` utility |
| `src/lib/utils/componentMap.tsx` | Maps Umbraco content type aliases → React components |
| `src/lib/components/BlockList.tsx` | Renders a block list by delegating each item to `componentMap` |
| `src/lib/context/ThemeContext.tsx` | React context for dark/light theme (replaces Svelte store) |
| `src/lib/types/umbraco.d.ts` | Auto-generated Umbraco API types — never edit directly |

## Prerequisites

- [Node.js 20+](https://nodejs.org/)
- The Umbraco backend running at `https://localhost:44356`

## Setup

### 1. Environment

Create a `.env.local` file:

```bash
# FrontendNextJs/.env.local
NEXT_PUBLIC_UMBRACO_API_URL="https://localhost:44356"
```

### 2. Install and Run

```bash
npm install
npm run dev   # http://localhost:3000
```

> **TLS Note:** The `dev` script sets `NODE_TLS_REJECT_UNAUTHORIZED=0` via `cross-env` to handle Umbraco's self-signed localhost certificate. Never carry this into production.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:3000` |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run generate-types` | Regenerate `src/lib/types/umbraco.d.ts` from the live Swagger endpoint (requires backend running) |

## Media Proxy

Umbraco returns absolute media URLs (e.g. `https://localhost:44356/media/...`). The `resolveMediaUrl(url)` utility in `umbracoApi.ts` strips the origin to produce relative paths (e.g. `/media/...`). These are then handled by the route handler at `src/app/media/[...path]/route.ts`, which proxies the request to Umbraco server-side.

This mirrors the Vite proxy used by the SvelteKit frontend and ensures media works correctly regardless of where Umbraco is hosted.

## Adding a New Content Block

1. Define the block in the Umbraco backoffice and commit the uSync schema changes.
2. Run `npm run generate-types` to update `src/lib/types/umbraco.d.ts`.
3. Create `src/lib/components/MyBlock/MyBlock.tsx`.
4. Register it in `src/lib/utils/componentMap.tsx`.
5. Use `resolveMediaUrl()` for any image `src` attributes.

## Client Components

Most components are React Server Components. Use `'use client'` only when browser APIs or React state are needed. Current client components:

- `ThemeToggle`, `Header`, `NavigationArea`, `NavigationLink`, `NavigationToggle` — interactive nav/theme
- `BlogListing` — load-more pagination
- `Button` — ripple effect
- `NewsletterSignup` — form state
- `CodeEmbed` — copy-to-clipboard


# Frontend — Umbraco Headless Blog (SvelteKit)

A [SvelteKit](https://kit.svelte.dev/) frontend for the Umbraco headless blog, consuming the Umbraco Content Delivery API v2. All content is fetched server-side; the browser receives fully rendered HTML.

## Architecture

- **SvelteKit** with Svelte 5 runes (`$state`, `$derived`, `$props`, `$effect`)
- **Tailwind CSS v4** for styling
- **TypeScript** throughout
- **Storybook 10** with Vitest + Playwright for visual regression testing

### Two-Level Content Dispatch

```
Browser request
  └─ [...slug]/+page.server.ts     fetches content item from Umbraco by URL path
       └─ +page.svelte             reads content.contentType → picks a layout component
            └─ Homepage.svelte     (or Blog, BlogArticle, ContentPage)
                 └─ BlockList.svelte   iterates pageContent blocks
                      └─ componentMap.ts   maps contentType alias → Svelte component
                           └─ HeroBlock.svelte, TextBlock.svelte, …
```

### Key Files

| File | Purpose |
|---|---|
| `src/routes/+layout.server.ts` | Fetches header and footer from Umbraco for every page |
| `src/routes/+layout.svelte` | Root layout — renders Header, Footer, initialises theme |
| `src/routes/[...slug]/+page.server.ts` | Fetches page content by path; also pre-fetches blog posts and sidebar data when needed |
| `src/routes/[...slug]/+page.svelte` | Dispatches to layout component based on `content.contentType` |
| `src/lib/utils/componentMap.ts` | Maps Umbraco content type aliases → Svelte components |
| `src/lib/components/BlockList.svelte` | Renders a block list, delegating each item via `componentMap` |
| `src/lib/components/SingleBlock.svelte` | Renders a single block item via `componentMap` |
| `src/lib/stores/themeStore.svelte.ts` | Svelte 5 rune-based theme store (light/dark, persisted to `localStorage`) |
| `src/lib/types/umbraco.d.ts` | Auto-generated Umbraco API types — never edit directly |
| `src/lib/utils/pageHeaderUtils.ts` | Helper to detect `imageOffsetPageHeader` blocks |

### Directory Structure

```
src/
├── routes/
│   ├── +layout.server.ts     # Header/footer fetch
│   ├── +layout.svelte        # Root layout
│   ├── +error.svelte         # Error page
│   ├── layout.css            # Global layout styles
│   ├── [...slug]/            # Catch-all content route
│   ├── api/                  # SvelteKit API routes
│   └── blog/                 # Blog-specific routes
├── lib/
│   ├── assets/               # Static assets (SVGs, icons)
│   ├── components/           # All block and UI components
│   ├── layouts/              # Page-level layout components
│   ├── stores/               # Svelte stores (theme)
│   ├── types/                # umbraco.d.ts (auto-generated)
│   └── utils/                # componentMap, pageHeaderUtils
└── app.d.ts                  # SvelteKit type augmentation
```

### Layout Components

| File | Umbraco `contentType` |
|---|---|
| `layouts/Homepage.svelte` | `homepage` |
| `layouts/Blog.svelte` | `blog` |
| `layouts/BlogArticle.svelte` | `blogArticle` |
| `layouts/ContentPage.svelte` | `contentPage` |

### Block Components

| Component | Umbraco `contentType` |
|---|---|
| `HeadingBlock` | `heading` |
| `TextBlock` | `textBlock` |
| `HeroBlock` | `heroBlock` |
| `ImageGallery` | `imageGalleryBlock` |
| `VideoEmbed` | `videoEmbedBlock` |
| `CodeEmbed` | `codeEmbedBlock` |
| `CallToActionBlock` | `callToActionBlock` |
| `ServicesBlock` | `servicesBlock` |
| `LogoCloud` | `logoCloudBlock` |
| `ProcessBlock` | `processBlock` |
| `AccordionBlock` | `accordionBlock` |
| `TestimonialsBlock` | `testimonialsBlock` |
| `StatsBlock` | `statsBlock` |
| `TwoColumnBlock` | `twoColumnBlock` |
| `FeaturedProjectBlock` | `featuredProjectBlock` |
| `NewsletterSignup` | `newsletterSignup` |
| `BlogListing` | `blogListingBlock` |
| `CallToActionPageHeader` | `callToActionPageHeader` |
| `ImageOffsetPageHeader` | `imageOffsetPageHeader` |

## Prerequisites

- [Node.js 20+](https://nodejs.org/)
- The Umbraco backend running at `https://localhost:44356`

## Setup

### 1. Environment

Create a `.env` file in this directory:

```bash
# Frontend/.env
PUBLIC_UMBRACO_API_URL="https://localhost:44356"
```

An `.env.example` is included for reference.

### 2. Install and Run

```bash
npm install
npm run dev   # http://localhost:5173
```

> **TLS Note:** The `dev` script sets `NODE_TLS_REJECT_UNAUTHORIZED=0` to handle Umbraco's self-signed localhost certificate. Never carry this into production.

The dev server also proxies `/media` requests to Umbraco via `vite.config.ts`, so media images load through the local dev server at `http://localhost:5173/media/...`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `http://localhost:5173` |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run `svelte-check` for type and template checking |
| `npm run check:watch` | Run `svelte-check` in watch mode |
| `npm run lint` | Check formatting with Prettier |
| `npm run format` | Format all files with Prettier |
| `npm run generate-types` | Regenerate `src/lib/types/umbraco.d.ts` from the live Swagger endpoint (requires backend running) |
| `npm run storybook` | Start Storybook dev server at `http://localhost:6006` |
| `npm run build-storybook` | Build the Storybook static site |
| `npm run test:storybook` | Run all Vitest/Playwright visual regression tests |
| `npm run test:storybook:ui` | Run tests with the Vitest UI |

## Storybook & Visual Testing

Every component has a co-located `.stories.ts` file (e.g. `HeroBlock.stories.ts` next to `HeroBlock.svelte`).

- **Stories tagged `snapshot`** participate in automated visual regression using `storybook-addon-vis`. Baselines are stored in `__vis__/local/__baseline/`.
- **Update baselines** intentionally when a UI change is expected — never commit stale baselines.
- Storybook also runs `@storybook/addon-a11y` for accessibility auditing.

```bash
# Run all visual regression tests
npm run test:storybook

# Test a single component by name
npx vitest --project=storybook run -t "HeroBlock"

# Test a specific story file
npx vitest --project=storybook run src/lib/components/HeroBlock/HeroBlock.stories.ts
```

## Theme System

Theme state is managed by a Svelte 5 rune-based store in `src/lib/stores/themeStore.svelte.ts`.

- On init, reads from `localStorage` (falling back to `prefers-color-scheme`)
- Applies the `dark` class to `<html>` for Tailwind's class-based dark mode
- `theme.toggle()` switches between light and dark and persists the choice

## Adding a New Content Block

1. **Define in Umbraco:** Create the Document Type and block in the Umbraco backoffice.
2. **Commit schema:** uSync serialises the change — commit updated files under `uSync/`.
3. **Generate Types:** Run `npm run generate-types` to update `src/lib/types/umbraco.d.ts`.
4. **Build the component:** Create `src/lib/components/MyBlock/MyBlock.svelte`. Use `$props()` to receive Umbraco properties typed from `umbraco.d.ts`.
5. **Register the mapping:** Add an entry to `src/lib/utils/componentMap.ts` (`camelCaseAlias → MyBlock`).
6. **Add a story:** Create `src/lib/components/MyBlock/MyBlock.stories.ts`. Tag it `['snapshot']` for visual regression coverage.

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Umbraco content type alias | camelCase | `heroBlock` |
| Svelte component filename | PascalCase | `HeroBlock.svelte` |
| Story file | co-located, same name | `HeroBlock.stories.ts` |
| `componentMap.ts` key | camelCase alias | `heroBlock` |


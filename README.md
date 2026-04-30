# Umbraco Headless Blog

A modern headless blog built with [Umbraco CMS](https://umbraco.com/) serving content via the Content Delivery API v2, with two frontend implementations consuming it.

## Architecture

| Layer | Technology | Role |
|---|---|---|
| Backend | Umbraco (.NET 10) | Headless CMS — content modelling, Delivery API, media |
| Frontend (SvelteKit) | SvelteKit + TypeScript + Svelte 5 | SSR rendering, Storybook visual testing |
| Frontend (Next.js) | Next.js 16 + TypeScript + App Router | SSR rendering, React Server Components |
| Styling | Tailwind CSS v4 | Utility-first CSS, class-based dark mode |

### .NET Solution Structure

| Project | Role |
|---|---|
| `Application.Cms` | Umbraco host app — bootstraps CMS, Delivery API, Swagger, uSync, CORS. Uses SQLite. |
| `Application.Core` | Class library for custom backend logic. Feature-folder pattern under `Features/`. |
| `Application.Models` | Auto-generated ModelsBuilder models. Never edit files in `Generated/` directly. |

## Features

- **Block-based page building** — hero, text, image galleries, video/code embeds, services, stats, testimonials, process, accordion, CTA, logo clouds, and more
- **Headless Content Delivery** — Umbraco Delivery API v2 with public access
- **End-to-end type safety** — `openapi-typescript` generates types directly from the live Swagger definition
- **uSync** — document type schema is serialised to source control and auto-imported on first boot
- **Dual frontend** — the same Umbraco backend is consumed by both a SvelteKit and a Next.js frontend
- **Visual regression testing** — Storybook stories with `storybook-addon-vis` (SvelteKit frontend)

## Prerequisites

- [.NET SDK 10+](https://dotnet.microsoft.com/download)
- [Node.js 20+](https://nodejs.org/)

---

## 1. Backend Setup (Umbraco)

The backend uses **SQLite** — no database installation needed.

```bash
cd Application.Cms
dotnet run
```

| URL | Description |
|---|---|
| `https://localhost:44356/umbraco` | Backoffice |
| `https://localhost:44356/umbraco/swagger` | Swagger / API explorer |

### Default credentials (unattended install)

| Field | Value |
|---|---|
| Email | `admin@example.com` |
| Password | `password12345` |

uSync imports all document type schema from source control on first boot — no manual backoffice setup required.

> **Tip:** If you see a migration error on startup, delete `Application.Cms/umbraco/Data/Umbraco.sqlite.db` (and its `-wal`/`-shm` siblings) and restart. Umbraco will recreate the database from scratch and re-import schema via uSync.

### Backend Commands

```bash
cd Application.Cms
dotnet run                          # Run the CMS
dotnet build ../Application.slnx   # Build all projects
```

---

## 2. Frontend — SvelteKit

**[→ Full SvelteKit README](./Frontend/README.md)**

```bash
# Frontend/.env
PUBLIC_UMBRACO_API_URL="https://localhost:44356"
```

```bash
cd Frontend
npm install
npm run dev   # http://localhost:5173
```

---

## 3. Frontend — Next.js

**[→ Full Next.js README](./FrontendNextJs/README.md)**

```bash
# FrontendNextJs/.env.local
NEXT_PUBLIC_UMBRACO_API_URL="https://localhost:44356"
```

```bash
cd FrontendNextJs
npm install
npm run dev   # http://localhost:3000
```

---

## How Content Rendering Works

Both frontends use the same two-level dispatch pattern:

1. A catch-all route fetches the Umbraco content item by URL path
2. The `contentType` of the response determines which **page layout** component renders (e.g. `homepage`, `blogArticle`)
3. Layout components iterate the page's `pageContent` block list
4. Each block's `contentType` is looked up in `componentMap` to find the right **block component**

---

## Adding a New Content Block

1. Define the Document Type / block in the Umbraco backoffice
2. Commit the uSync schema files under `uSync/`
3. Run `npm run generate-types` in each frontend to update `umbraco.d.ts`
4. Create the component in each frontend (`MyBlock.svelte` / `MyBlock.tsx`)
5. Register it in each frontend's `componentMap`
6. Add a Storybook story in the SvelteKit frontend (`MyBlock.stories.ts`)

### Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Umbraco content type alias | camelCase | `heroBlock` |
| Component filename | PascalCase | `HeroBlock.svelte` / `HeroBlock.tsx` |
| `componentMap` key | camelCase alias | `heroBlock` |



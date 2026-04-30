# Umbraco & SvelteKit Blog

A modern headless blog built with [Umbraco CMS](https://umbraco.com/) serving content via the Content Delivery API v2, and a [SvelteKit](https://kit.svelte.dev/) frontend consuming it.

## Architecture

| Layer | Technology | Role |
|---|---|---|
| Backend | Umbraco (.NET 10) | Headless CMS — content modelling, Delivery API, media |
| Frontend | SvelteKit + TypeScript | SSR rendering, fetches all content server-side |
| Styling | Tailwind CSS v4 | Utility-first CSS |
| Testing | Storybook + Vitest | Isolated component development, visual regression |

### .NET Solution Structure

| Project | Role |
|---|---|
| `Application.Cms` | Umbraco host app — bootstraps CMS, Delivery API, Swagger, uSync, CORS. Uses SQLite. |
| `Application.Core` | Class library for custom backend logic. Feature-folder pattern under `Features/`. |
| `Application.Models` | Auto-generated ModelsBuilder models. Never edit files in `Generated/` directly. |

## Features

*   **Blocklist Editor:** Component-based page building in Umbraco (hero, headers, text blocks, image galleries, video/code embeds, and more).
*   **Headless Content Delivery:** Umbraco Content Delivery API v2 with public access enabled.
*   **End-to-end Type Safety:** `openapi-typescript` generates `src/lib/types/umbraco.d.ts` directly from the live Swagger definition.
*   **uSync:** Serialises all Umbraco document type schema to source control. Imported automatically on first boot so the content structure is ready immediately.
*   **Storybook Integration:** Every component has a co-located `.stories.ts` file. Stories tagged `snapshot` participate in automated visual regression testing.

## Prerequisites

*   [.NET SDK 10+](https://dotnet.microsoft.com/download)
*   [Node.js 20+](https://nodejs.org/)

## Getting Started

### 1. Backend Setup (Umbraco)

The backend uses a **SQLite database** — no database installation or configuration required.

```bash
cd Application.Cms
dotnet run
```

*   **Umbraco Backoffice:** `https://localhost:44356/umbraco`
*   **Swagger API Docs:** `https://localhost:44356/umbraco/swagger`

#### Default Login Credentials

On first run Umbraco performs an **unattended install** and seeds an admin account automatically:

| Field | Value |
|---|---|
| Email | `admin@example.com` |
| Password | `password12345` |

uSync also imports all document type schema from source control on first boot, so the full content structure is ready without any manual backoffice steps.

### 2. Frontend Setup (SvelteKit)

#### Environment Configuration

Create a `.env` file in the `Frontend` directory:

```bash
# Frontend/.env
PUBLIC_UMBRACO_API_URL="https://localhost:44356"
```

This tells SvelteKit where to find the Umbraco Delivery API. The dev server automatically proxies `/media` requests to Umbraco via `vite.config.ts`.

> **Note:** `hooks.server.ts` disables TLS certificate verification in development to handle the self-signed localhost certificate. Never carry this into production.

#### Install and Run

```bash
cd Frontend
npm install
npm run dev   # http://localhost:5173
```

Ensure the Umbraco backend is running before starting the frontend.

#### Frontend Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `http://localhost:5173` |
| `npm run build` | Build the SvelteKit app for production |
| `npm run check` | Run `svelte-check` for type checking |
| `npm run check:watch` | Run `svelte-check` in watch mode |
| `npm run lint` | Check formatting with Prettier |
| `npm run format` | Format code with Prettier |
| `npm run generate-types` | Regenerate `src/lib/types/umbraco.d.ts` from the live Swagger endpoint (requires backend running) |
| `npm run storybook` | Start Storybook dev server at `http://localhost:6006` |
| `npm run build-storybook` | Build the Storybook static site |
| `npm run test:storybook` | Run all Vitest/Playwright browser tests |
| `npm run test:storybook:ui` | Run tests with the Vitest UI |

## Component Workflow

### Adding a New Content Block

1. **Define in Umbraco:** Create the Document Type and Block in the Umbraco backoffice.
2. **Commit schema:** uSync serialises the change automatically — commit the updated files under `uSync/`.
3. **Generate Types:** Run `npm run generate-types` to update `src/lib/types/umbraco.d.ts`.
4. **Build Component:** Create `Frontend/src/lib/components/MyBlock/MyBlock.svelte`.
5. **Register Mapping:** Add the entry to `src/lib/utils/componentMap.ts` (maps camelCase content type alias → PascalCase Svelte component).
6. **Add Stories:** Create a co-located `MyBlock.stories.ts` for Storybook and visual regression coverage.

### Naming Conventions

*   Umbraco document type aliases are **camelCase** — e.g. `heroBlock`, `blogArticle`.
*   Svelte component filenames are **PascalCase** — e.g. `HeroBlock.svelte`.
*   The mapping lives in `componentMap.ts`.

### API Types

`src/lib/types/umbraco.d.ts` is **auto-generated** — never edit it by hand. Regenerate it with `npm run generate-types` any time Umbraco document types change. The backend must be running when you do this.

## Testing with Storybook

Stories live alongside their components (e.g. `HeroBlock.stories.ts` next to `HeroBlock.svelte`).

*   **Visual Regression:** Stories tagged `snapshot` use `storybook-addon-vis` for visual regression. Baselines are stored in `Frontend/__vis__/local/__baseline/`. Update baselines intentionally when a UI change is expected.
*   **Accessibility:** `autodocs`-tagged stories are also used for accessibility auditing in the Storybook docs panel.

```bash
# Run all story tests
npm run test:storybook

# Run tests for a single component
npx vitest --project=storybook run -t "HeroBlock"

# Run tests for a specific story file
npx vitest --project=storybook run src/lib/components/HeroBlock/HeroBlock.stories.ts
```

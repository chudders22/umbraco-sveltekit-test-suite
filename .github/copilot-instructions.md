# Copilot Instructions

## Architecture Overview

This is a **headless Umbraco CMS blog** — a .NET 10 solution (`Application.slnx`) serving content via the Umbraco Content Delivery API v2, consumed by a SvelteKit frontend.

### .NET Projects

| Project | Role |
|---|---|
| `Application.Cms` | Umbraco host app. Bootstraps CMS, Delivery API, Swagger, uSync, CORS. SQLite DB, no DB setup needed. |
| `Application.Core` | Class library for custom Umbraco backend logic. Follows vertical slice / feature folders (e.g. `Features/ContentCreationRestrictions/`). |
| `Application.Models` | Class library for auto-generated ModelsBuilder models. `Generated/` is managed automatically — don't edit those files. |

### Frontend (`Frontend/`)

SvelteKit + TypeScript + Tailwind CSS v4. Fetches all content server-side via the Umbraco Delivery API.

**Two-level content dispatch:**
1. `routes/[...slug]/+page.server.ts` fetches content by URL path from Umbraco; `+page.svelte` maps `content.contentType` (e.g. `"homepage"`) → a layout component in `src/lib/layouts/`.
2. Layout components use `BlockList.svelte`, which maps each block's `contentType` (e.g. `"heroBlock"`) → a block component via `src/lib/utils/componentMap.ts`.

## Commands

### Backend
```bash
cd Application.Cms
dotnet run          # https://localhost:44356
                    # Backoffice: /umbraco  Swagger: /umbraco/swagger
dotnet build Application.slnx   # Build all projects from repo root
```

### Frontend
```bash
cd Frontend
npm install
npm run dev             # http://localhost:5173
npm run build
npm run check           # svelte-check type checking
npm run check:watch
npm run lint            # prettier --check
npm run format          # prettier --write
npm run generate-types  # Regenerate umbraco.d.ts from Swagger (requires CMS running)
```

### Storybook & Tests
```bash
npm run storybook           # Dev server on port 6006
npm run test:storybook      # Run all Vitest/Playwright browser tests
npm run test:storybook:ui   # Same with Vitest UI

# Run a single story test by name pattern
npx vitest --project=storybook run -t "ComponentName"
# Run tests for a specific story file
npx vitest --project=storybook run src/lib/components/Button.stories.ts
```

## Key Conventions

### Content Type Aliases
Umbraco document type aliases are **camelCase** (e.g. `homepage`, `blogArticle`, `heroBlock`). Svelte component filenames are **PascalCase** (e.g. `HeroBlock.svelte`). The mapping between them lives in `componentMap.ts`.

### Adding a new content block
1. Define the block/document type in the Umbraco backoffice.
2. Run `npm run generate-types` to update `src/lib/types/umbraco.d.ts`.
3. Create `src/lib/components/MyBlock.svelte`.
4. Register it in `src/lib/utils/componentMap.ts`.
5. Add a co-located `MyBlock.stories.ts` for Storybook/visual testing.

### Adding new backend logic
- Add a feature folder under `Application.Core/Features/`.
- Register services/handlers using an `IComposer` class with `IUmbracoBuilder`.
- All projects have `<Nullable>enable</Nullable>` and implicit usings — no need to add `using` statements for BCL types.

### API Types
`src/lib/types/umbraco.d.ts` is **auto-generated** — never edit it directly. Types follow the pattern `components['schemas']['HomepageContentResponseModel']`. Regenerate with `npm run generate-types` whenever Umbraco document types change.

### Tests
Tests are Storybook stories (co-located with components as `*.stories.ts`), not separate `*.test.ts` files. Stories tagged `['snapshot']` participate in visual regression via `storybook-addon-vis`; baselines are in `Frontend/__vis__/local/__baseline/`. Visual baselines must be updated intentionally when UI changes.

### Environment
- Frontend requires `Frontend/.env` with `PUBLIC_UMBRACO_API_URL="https://localhost:44356"`.
- Backend uses SQLite (`Umbraco.sqlite.db`, auto-created) and runs unattended install on first boot (`admin@example.com` / `password12345`).
- `hooks.server.ts` disables TLS verification in dev to handle the self-signed localhost cert. Vite proxies `/media` to Umbraco via `vite.config.ts`.
- uSync imports schema from source on first boot (`ImportOnFirstBoot: true`) — schema changes are tracked in source control.

### Git
The **only** permitted git operation is creating a new local branch:
1. `git fetch origin`
2. `git checkout -b <branch-name> origin/main`

Everything else — committing, pushing, merging, rebasing, tagging, PRs — is the user's responsibility and must never be performed by an agent.
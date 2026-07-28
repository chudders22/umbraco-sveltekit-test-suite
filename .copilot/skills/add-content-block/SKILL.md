---
name: add-content-block
description: End-to-end workflow for adding a new content block (or block-based layout) to this headless Umbraco + SvelteKit blog. Use when the user wants to add, create, or wire up a new Umbraco block/document type and render it in the SvelteKit frontend — covering the doc-type definition, regenerating types, the Svelte component, the componentMap registration, and the co-located Storybook story with a visual baseline.
---

# Add a Content Block

## Overview

A "content block" in this project spans **two systems**: an Umbraco Element/Document Type
(defined in the backoffice, camelCase alias) and a Svelte component (PascalCase file) that
renders it. A block is only fully wired when the frontend can look up its `contentType`
alias in `componentMap.ts` and render a matching component that reads the block's
`properties`. Miss any step and the block renders as a yellow "Unrecognized block
component" warning.

This skill is the canonical checklist so nothing is skipped and the new block matches
existing conventions (Svelte 5 runes, Tailwind v4, co-located snapshot stories).

## When to Use

- The user wants to add a new block that editors can drop into a page's Block List.
- The user wants to render a new Umbraco Document Type as a full-page layout.
- A block already exists in Umbraco but shows the "Unrecognized block component" warning
  (only the frontend half is missing — start at Step 3).
- The user asks to "wire up", "register", or "map" a block to a Svelte component.

**When NOT to use:**

- Pure styling/logic tweaks to an existing, already-registered block — just edit it.
- Backend C# feature work (composers, handlers) — that's a different concern under
  `Application.Core/Features/`.

## Key Facts About This Codebase

- **Components live in per-component folders**: `src/lib/components/<Name>/<Name>.svelte`
  with a co-located `<Name>.stories.ts` (NOT a flat `components/` dir).
- **Two dispatch levels**:
  - Page layouts: `routes/[...slug]/+page.svelte` maps `content.contentType` →
    `src/lib/layouts/*.svelte` via its local `pageLayouts` map.
  - Blocks: `src/lib/components/BlockList.svelte` maps each `item.content.contentType` →
    a component via `src/lib/utils/componentMap.ts`.
- **Aliases are camelCase** (`heroBlock`, `statsBlock`); **component files are PascalCase**.
- **Types are auto-generated**: `src/lib/types/umbraco.d.ts` comes from Swagger via
  `npm run generate-types`. Never hand-edit it.
- **Nested/child blocks** (e.g. a `statsBlock` containing `statItem` blocks) arrive as a
  Block List: iterate `parent.items` and read `item.content.properties`.
- **Stories** use title `Blocks/<Name>`, tags `['autodocs', 'snapshot']`; the `snapshot`
  tag opts the story into visual regression via `storybook-addon-vis`.
- **Visual baselines** live in `Frontend/__vis__/local/__baselines__/lib/components/<Name>/`
  and are committed to source control.

## The Process

```
DEFINE ──→ GENERATE ──→ COMPONENT ──→ REGISTER ──→ STORY ──→ VERIFY
   │           │            │             │           │          │
   ▼           ▼            ▼             ▼           ▼          ▼
 Umbraco    npm run     <Name>.svelte  componentMap  co-located  check +
 doc type   generate-   (runes, TW4)   .ts entry     .stories.ts snapshot
 (backoffice) types                                  (Blocks/*)
```

### Step 1 — Define the Umbraco type

**Goal:** create the source content model in Umbraco so the Delivery API emits the shape your
Svelte component will read.

**Decide first:**

- Use an **Element Type** for reusable blocks inside Block List properties.
- Use a **Document Type** for page-level content rendered by `routes/[...slug]/+page.svelte`.

**Inputs to lock before creating anything:**

- Type alias in **camelCase** (example: `statsBlock`).
- Human name in Umbraco (example: `Stats Block`).
- Property list: alias, editor type, and whether each property is optional.
- For nested content, decide child element aliases (example: `statItem`).

**Backoffice folder pattern (required):**

- Block element/document types must live under the top-level `Blocks` folder in the document
  type tree.
- If a block has child element types, create/use a subfolder named after the parent display
  name and place both parent + child there.
  - Example: `Blocks -> Meet The Team -> Meet The Team Block + Meet The Team Person`.
- Do not leave newly created block types at document-type root (`Level 1`, parent `-1`).
- Keep related block-list data types under the data-type `BlockLists` folder.
- Record the chosen folder path as part of Step 1 outputs.

**Property editor verification (required before create):**

- For each planned field, confirm the exact editor/data type to use (don't assume by label).
- Prefer existing data types/editors already used in this project for consistency.
- Reuse an existing fit-for-purpose data type before creating a new one
  (for example, reuse an existing accordion-item Block List configuration if it already
  matches your field model).
- Use MCP data to inspect real configurations and avoid drift:
  - discover candidates: `find-data-type`, `get-all-data-types`
  - inspect full setup: `get-data-type`, `get-data-type-schema`, `get-data-type-batch`
  - validate editor options/constraints: min/max, allowed items, picker configuration, etc.
- Write a simple mapping table before creating the type:
  `property alias -> data type name/id -> editor alias/ui alias -> expected value shape`.
- If MCP calls intermittently fail with SQLite lock errors, retry in small serial calls and
  cross-check in backoffice before proceeding.

**Implementation options:**

- **Backoffice:** run `dotnet run` in `Application.Cms`, open `/umbraco`, create the
  type, then add properties.
- **MCP tools:** if available in your runtime, use `umbraco-mcp` endpoints such as
  `create-element-type`, `create-document-type`, `find-data-type`, and `get-icons`.
  Use tree/navigation endpoints first to resolve the correct parent folder before creation
  (`get-document-type-root`, `get-document-type-children`, `get-data-type-root`,
  `get-data-type-children`). If create endpoints can only create at root, immediately move the
  created types into the required folders using `move-document-type` / `move-data-type`.

**Critical conventions:**

- Property aliases become runtime keys under `item.content.properties`; typos here become
  missing props in Svelte.
- Keep aliases stable once used by frontend code. Renaming aliases is a breaking change.
- Use existing data types/property editors where possible for consistency.

**Done when:**

- Type exists in Umbraco with final alias and property aliases.
- Type is created in the correct backoffice folder pattern (matching existing conventions).
- uSync schema files are updated in source control.
- You have a written list of `alias -> expected value shape` to drive component props.

### Step 2 — Regenerate types

**Goal:** sync frontend types with current Delivery API schema so block props can be typed.

**Prerequisite:** CMS is running on `https://localhost:44356`.

Quick reachability check (recommended):

```bash
curl.exe -k -s -o NUL -w "%{http_code}" https://localhost:44356/umbraco/swagger/delivery/swagger.json
```

Expect `200` before running type generation.

```bash
cd Frontend
npm run generate-types
```

This rewrites `src/lib/types/umbraco.d.ts`.

**Validate immediately:**

- Search for the PascalCase schema generated from your alias
  (example pattern: `StatsBlock...PropertiesModel`).
- Confirm new/changed property aliases appear with expected nullable/array shapes.

**If it fails:**

- Confirm Swagger is reachable:
  `https://localhost:44356/umbraco/swagger/delivery/swagger.json`
- Prefer a direct `curl -k` status check when local HTTPS/dev-cert behavior is intermittent.
- Re-check TLS/dev cert and that backend is fully booted.

**Done when:**

- `umbraco.d.ts` contains the new type(s) and compiles cleanly in editor tooling.

### Step 3 — Create the component

**Goal:** implement render logic that exactly matches the new Umbraco property shape.

If you want deep frontend quality guidance (typing/accessibility/responsive/story standards),
run the companion skill: `frontend-block-implementation`.

Create:

- Block component: `src/lib/components/<Name>/<Name>.svelte`
- Story file (next step): `src/lib/components/<Name>/<Name>.stories.ts`

Use `templates/Block.svelte` as baseline.

**Required implementation details:**

- Lock a render contract before coding:
  `property alias -> expected value shape -> UI responsibility`.
- Svelte 5 runes:
  `let { ... }: Props = $props();` and derived values with `$derived`.
- Props mirror Umbraco aliases exactly.
- Prefer generated API types from `$lib/types/umbraco` when practical; otherwise define a
  local `interface Props` with nullable fields where Umbraco allows missing values.
- For nested Block List values, iterate `items` and read `item.content.properties`.
- Include a graceful empty state for empty or missing collections.
- If using `{@html}`, escape user-provided strings first.
- Style with Tailwind v4 and include dark-mode variants where relevant.

**Worked example (Accordion Gallery):**

- Parent aliases: `title`, `gallery`, `accordion`
- Child accordion item aliases: `title`, `content` (`content` is Rich Text)
- Layout behavior: stacked on mobile, two-column on desktop
  (gallery column + accordion column)
- Null safety expectations:
  - missing `gallery.items` => render gallery empty-state
  - missing `accordion.items` => render accordion empty-state
  - missing `title` => omit heading without collapsing spacing

**For page layouts instead of blocks:**

- Create `src/lib/layouts/<Name>.svelte`.
- Accept typed `content` prop.
- Delegate page block area to `<BlockList items={...} />`.
- Keep layout-level concerns (SEO/layout wrappers) aligned with existing layout files.

**Done when:**

- Component renders for populated and empty data without runtime warnings.
- Props and nested data access paths match the API payload shape.

### Step 4 — Register it

**Goal:** wire runtime dispatch so content type aliases resolve to the new Svelte component.

- **Block path:** add import and alias mapping in `src/lib/utils/componentMap.ts`.
- **Layout path:** add mapping in `routes/[...slug]/+page.svelte` `pageLayouts` object.

```ts
import StatsBlock from '../components/StatsBlock/StatsBlock.svelte';
// ...
statsBlock: StatsBlock,
```

**Non-negotiable rule:** alias key must exactly match the Umbraco alias (`contentType`).
Mismatch causes the yellow fallback warning:
`Warning: Unrecognized block component "<alias>"`.

**Common mistakes to avoid:**

- PascalCase key in map instead of camelCase.
- Registering in the wrong map (`componentMap` vs `pageLayouts`).
- Forgetting import path uses per-component folders.

**Done when:**

- Runtime payload alias resolves to your component with no fallback warning.

### Step 5 — Add a Storybook story

**Goal:** create executable documentation and visual regression coverage for the new block.

Create `src/lib/components/<Name>/<Name>.stories.ts` using
`templates/Block.stories.ts` conventions:

- `title: 'Blocks/<Name>'`
- `tags: ['autodocs', 'snapshot']`
- Component-level docs description explaining alias mapping and prop behavior.
- Realistic `args` with representative content, not placeholder-only values.

**Minimum story set:**

- `Default` (typical content)
- `WithTitle` or equivalent optional-field variant (if applicable)
- `Empty` (no items / null optional collections)

**Strongly recommended:**

- One edge story exercising long text, null optionals, or unusual value combinations.

**Browser validation with Chrome DevTools MCP (recommended):**

- Open Storybook and navigate to `Blocks/<Name>` stories.
- Review each state (`Default`, variant, `Empty`) in a real browser runtime.
- Check console output for runtime warnings/errors caused by prop/null handling.
- Verify semantic structure and interactive affordances from the rendered DOM.
- Resize viewport (mobile + desktop) to confirm responsive layout behavior.
- Capture a screenshot/snapshot of each key state before baseline updates.

**Done when:**

- Story renders all expected states and is understandable without opening source code.

### Step 6 — Verify

**Goal:** confirm type safety, runtime wiring, and visual baselines for the new block.

```bash
cd Frontend
npm run check
npx vitest --project=storybook run src/lib/components/<Name>/<Name>.stories.ts
```

**What to inspect:**

- Type-check passes with no prop-shape drift from generated types.
- Storybook tests for the new component pass.
- Snapshot output is expected and readable in both content and spacing.
- The test run actually executed tests (not all skipped due to a mismatched `-t` filter).

If you prefer filtering by name, use `-t` as a secondary option only after confirming the test
titles match your pattern.

First snapshot run creates baseline files under:
`Frontend/__vis__/local/__baselines__/lib/components/<Name>/`

Treat baseline updates as intentional product changes:

- Review visual diffs; do not auto-accept unexpected changes.
- Keep baseline updates in same change set as component/story updates.

**Done when:**

- Type-check and targeted story tests pass.
- Baselines are reviewed and committed intentionally.
- No unregistered alias warnings appear in runtime rendering.

### Step 7 — Review frontend quality and reuse opportunities

**Goal:** verify code quality and decide whether any new UI logic should be extracted into shared components.

**Recommended skill-assisted review passes:**

- Run `frontend-block-implementation` (or your global `frontend-ui-engineering`) as a focused
  frontend quality pass.
- Run `code-review-and-quality` for a broader correctness/risk pass.

**Reusable-component assessment (required):**

- Inspect newly created component parts (carousels, accordions, cards, media wrappers, controls).
- Extract to a shared component when **2 or more** of these are true:
  - The same UI/behavior pattern already exists elsewhere or is expected in upcoming blocks.
  - The logic is stateful/non-trivial (keyboard behavior, pagination, media controls).
  - The styling contract is stable enough to be reused without heavy branching.
  - Extraction reduces duplication without harming clarity in the parent block.
- Keep logic local when reuse would introduce premature abstraction or context leakage.

**Done when:**

- A deliberate keep-local vs extract decision is documented for each substantial new sub-UI.
- Any extracted shared component has a clear API and remains state-safe for multiple instances
  on the same page.
- Follow-up stories/validation are updated if extraction changed behavior.

## Checklist

- [ ] Umbraco type exists with final camelCase alias and finalized property aliases
- [ ] uSync schema updates are present in the same branch
- [ ] `npm run generate-types` completed and `umbraco.d.ts` includes the new schema
- [ ] `src/lib/components/<Name>/<Name>.svelte` created with Svelte 5 runes and safe null handling
- [ ] Nested block list properties (if any) read via `item.content.properties`
- [ ] Registration added to the correct map (`componentMap.ts` or `pageLayouts`)
- [ ] `src/lib/components/<Name>/<Name>.stories.ts` added with `Blocks/<Name>` and `snapshot` tag
- [ ] `npm run check` and targeted Storybook test run pass
- [ ] Visual baselines in `__vis__/local/__baselines__/...` reviewed and committed intentionally
- [ ] Frontend review pass completed (quality + accessibility + responsive behavior)
- [ ] Reusability review completed; shared extraction decisions are explicit and justified

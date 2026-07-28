---
name: frontend-block-implementation
description: Extends the global frontend-ui-engineering skill for this Umbraco + SvelteKit codebase. Use after content modeling is locked to implement block components with strict alias-driven typing, safe nested block rendering, accessible and responsive UI behavior, and Storybook snapshot coverage using this repo's conventions.
---

# Frontend Block Implementation

## Overview

This is a **specialization skill**.  
It inherits the quality bar from your global `frontend-ui-engineering` skill and adds
project-specific rules for Umbraco-delivered block content in SvelteKit.

Use this when:

1. Content type + property aliases are already defined.
2. You are implementing the frontend component(s) that render that content.
3. You need consistency with this repo's dispatch, typing, story, and visual-baseline patterns.

This skill pairs with `add-content-block`:

- `add-content-block` = cross-system workflow (Umbraco + types + registration + baseline flow)
- `frontend-block-implementation` = frontend execution quality

## Relationship to Global Skill

Apply your global `frontend-ui-engineering` guidance first (component quality,
accessibility, responsive polish, interaction quality).  
Then apply the additional constraints in this skill:

- alias-accurate prop contracts from Umbraco
- nested block-list data-shape handling
- repository-specific component registration and story conventions

If there is a conflict, follow this skill for Umbraco block specifics and the global skill
for general UI quality decisions.

## When to Use

- Building a new block component from an existing Umbraco element/document type.
- Refactoring an existing block component to match updated Umbraco property shapes.
- Fixing fallback-rendering issues caused by alias/registration mismatches.
- Creating or improving block stories used for docs + visual regression.

**Do not use this skill** for Umbraco schema/data-type design (use `add-content-block`).

## Inputs Required Before Coding

- Block alias (camelCase) and component name (PascalCase).
- Property contract:
  `alias -> value shape -> optional/required -> rendering responsibility`.
- Any nested block contract:
  child alias + child property aliases.
- Responsive intent (stacked, two-column, breakpoint behavior).

Do not start implementation without this contract. Frontend alias guesses produce brittle code.

## Implementation Standard

### 1) Props and typing

- Use Svelte 5 runes: `$props`, `$derived`.
- Keep prop aliases identical to Umbraco aliases.
- Prefer generated types from `$lib/types/umbraco` where practical.
- Model nullable data explicitly; do not assume fields exist.
- Keep data-shape conversions local and obvious; do not hide them in unrelated helpers.

### 2) Data access and safety

- Nested block lists should read from `items` and `item.content.properties`.
- Guard for `null`/empty arrays before rendering loops.
- If any `{@html}` is used, sanitize/escape untrusted input first.
- Avoid success-shaped defaults that mask bad data contracts.

### 3) Accessibility baseline

- Use semantic structure (`section`, heading order, list semantics where appropriate).
- Ensure interactive controls are keyboard reachable and labelled.
- Preserve visible focus styles.
- Avoid color-only meaning.
- Treat story states as accessibility test fixtures (empty, dense, long-text).

### 4) Responsive layout quality

- Implement mobile-first layout.
- Encode desktop enhancements at explicit breakpoints.
- Avoid brittle fixed widths; prefer grid/flex patterns matching existing components.

### 5) Storybook contract

- Co-locate story: `<Name>.stories.ts`.
- Use:
  - `title: 'Blocks/<Name>'`
  - `tags: ['autodocs', 'snapshot']`
- Include at minimum:
  - `Default`
  - one optional/variant state
  - `Empty`
- Story args should be realistic editorial content, not placeholders only.
- Add at least one stress case (long content, many items, or sparse optional data).

## Implementation Workflow (Frontend-Only)

1. Lock prop contract from Umbraco aliases.
2. Implement component structure + typed props.
3. Implement responsive layout and null-safe rendering.
4. Add/adjust stories for normal + edge states.
5. Register alias mapping in `componentMap.ts` (or `pageLayouts` for layout types).
6. Run frontend checks/story test for the component scope.

## Repo-Specific Guardrails

- Components are folder-based (`components/<Name>/<Name>.svelte`), not flat.
- Registration happens in `src/lib/utils/componentMap.ts` for block content types.
- Snapshot baselines are in `Frontend/__vis__/local/__baselines__/...`.
- Layout dispatch for page types is in `src/routes/[...slug]/+page.svelte`.
- Unknown aliases surface through the yellow fallback warning in `BlockList.svelte`.

## Done Criteria

- Component renders correctly for populated + empty/null states.
- Prop typing matches Delivery API shape without unsafe shortcuts.
- Storybook stories cover core and edge states.
- Block is registered and resolves from `contentType` without fallback warning.
- Changes are aligned with both this skill and the global frontend-ui-engineering quality bar.

---
name: frontend-ui-engineering
description: Builds production-quality UI for this Umbraco + SvelteKit repository. Use when creating or changing user-facing components, layouts, and interactions, with strong accessibility, responsive behavior, and Storybook-first validation.
---

# Frontend UI Engineering (Project-Local)

## Overview

This is the repo-local version of frontend UI engineering guidance so all contributors can
apply the same standards without relying on personal/global skills.

For this codebase, frontend work means Svelte 5 + Storybook + visual baselines, using
Delivery API shapes from `src/lib/types/umbraco.d.ts`.

## When to Use

- Building or refactoring components in `Frontend/src/lib/components/**`
- Updating page/layout rendering in `Frontend/src/lib/layouts/**` and `routes/[...slug]`
- Implementing interactions (carousels, accordions, toggles, etc.)
- Improving accessibility, keyboard support, and responsive behavior

## Repository-Specific Rules

1. **Component structure**
- Use folder-based components: `components/<Name>/<Name>.svelte`.
- Add/update co-located stories: `components/<Name>/<Name>.stories.ts`.

2. **Typing**
- Prefer generated API types from `$lib/types/umbraco`.
- Keep aliases aligned with Umbraco payload keys.
- Handle nullable/missing values explicitly.

3. **Accessibility baseline**
- Interactive UI uses semantic controls (`button`, `details/summary`, etc.).
- Keyboard reachable with visible focus states.
- Use ARIA only where needed; keep accessible names explicit.
- Do not rely on color alone for meaning.

4. **Responsive baseline**
- Mobile-first classes.
- Validate behavior at common breakpoints (mobile/tablet/desktop).

5. **Storybook + visual validation**
- Stories should include realistic content (not only trivial placeholders).
- Include at least normal + edge/empty states.
- Use `tags: ['autodocs', 'snapshot']` for block-style visual coverage.
- Review snapshot diffs intentionally when UI changes.

## Implementation Checklist

- [ ] Types align with `umbraco.d.ts` and no unsafe assumptions
- [ ] Keyboard and focus behavior verified for interactive controls
- [ ] Empty/error-like states are intentional and readable
- [ ] Storybook stories cover primary and edge states
- [ ] Snapshot updates (if any) match intended visual changes

## Related Skills

- `add-content-block`: end-to-end Umbraco + frontend workflow
- `frontend-block-implementation`: block-specific implementation standard
- `code-review-and-quality`: post-implementation correctness/risk review

---
name: code-review-and-quality
description: Performs a project-local quality review for this repository. Use after implementing changes to find high-confidence correctness, accessibility, and maintainability issues before merge.
---

# Code Review and Quality (Project-Local)

## Overview

This is the repo-local review skill so every contributor runs the same review lens.
It focuses on high-signal issues (logic, safety, runtime behavior, and regressions), not
style nitpicks.

## When to Use

- After implementing any non-trivial feature or refactor
- Before considering frontend changes complete
- When a change touches Umbraco schemas + generated types + component wiring

## Review Focus

1. **Correctness**
- Does behavior match the requested outcome across all affected surfaces?
- Any alias mismatches between Umbraco content type and frontend registration?
- Any null/undefined data paths that can fail at runtime?

2. **Frontend quality**
- Are interactions keyboard accessible and focus-visible?
- Are responsive layouts stable (mobile to desktop)?
- Are empty states meaningful and intentional?

3. **Reuse assessment**
- Did new UI logic duplicate an existing pattern?
- Should any non-trivial UI (carousel, accordion controls, media wrappers) be extracted?
- If extracted, is state kept at the appropriate owner level for multiple instances?

4. **Regression risk**
- Are Storybook stories and snapshots updated where behavior changed?
- Are generated types and uSync/config artifacts in sync with implementation?

## Expected Outputs

- A concise list of high-confidence findings (if any)
- Clear keep-local vs extract-shared decisions for new component logic
- Any required follow-up actions to reduce risk

## Related Skills

- `frontend-ui-engineering`
- `frontend-block-implementation`
- `add-content-block`

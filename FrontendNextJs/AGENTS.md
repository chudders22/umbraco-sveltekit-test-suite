<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Git
The **only** permitted git operation is creating a new local branch:
1. `git fetch origin`
2. `git checkout -b <branch-name> origin/main`

Everything else — committing, pushing, merging, rebasing, tagging, PRs — is the user's responsibility and must never be performed by an agent.
<!-- END:nextjs-agent-rules -->

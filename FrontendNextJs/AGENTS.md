<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Git
- **Never commit directly to `main`.** All changes must go on a feature branch.
- Do not automate any git operations (commits, PRs, pushes, etc.) unless explicitly asked by the user.
- If asked to commit, always ensure you are on a feature branch first. If the current branch is `main`, stop and ask the user which branch to use.
<!-- END:nextjs-agent-rules -->

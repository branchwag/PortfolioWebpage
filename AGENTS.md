<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Branch & deploy workflow

See [`WORKFLOW.md`](./WORKFLOW.md). Key points: `main` is production and **branch-protected** (no direct pushes — use a PR); `staging` is the UAT branch where all development happens. Do not `git push` to `main`.

# Branch & Deploy Workflow

This repo is deployed on **Vercel** (Hobby project `portfolio-webpage`). Read this before pushing anything.

## Environments

| Environment | Branch | URL | Access |
|-------------|--------|-----|--------|
| 🔴 **Production** | `main` | https://portfolio-webpage-pink-theta.vercel.app | Public — this is the live site |
| 🧪 **UAT / Staging** | `staging` | `portfolio-webpage-git-staging-leannes-projects-e03734f4.vercel.app` | Private (requires Vercel login) |

- `main` deploys to **production** — the live public site.
- `staging` deploys to a **stable preview** used for UAT/testing. **Do all development here.**

## Rules

- **`main` is branch-protected.** Direct pushes, force-pushes, and deletions are blocked — enforced for admins too. You **cannot** `git push` to `main`; it will be rejected. All changes to production go through a PR.
- Self-merge is allowed (0 required approvals), but the PR step is mandatory.
- Preview deployments are intentionally **private** (Vercel Deployment Protection is ON). Preview URLs require being logged into Vercel. To share externally, set Deployment Protection to "Only Production" in the Vercel dashboard.

## Day-to-day

```bash
# Work on staging
git switch staging
git pull
# ...make changes...
git add -A && git commit -m "your change"
git push                       # → rebuilds the private staging preview; live site untouched
```

## Shipping to production

```bash
gh pr create --base main --head staging --title "Release" --fill
gh pr merge --merge            # → main redeploys to the live site
git switch staging             # keep working on staging
```

## Gotcha: preview didn't build?

Vercel skips building a branch whose HEAD commit was **already deployed** (identical SHA). A `staging` preview only appears once `staging` has at least one commit that `main` doesn't. This is the normal state once you're actively working.

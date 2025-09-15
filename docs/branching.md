# Git Branching Strategy

## Overview

We use **GitHub Flow** with tag-based deployments to manage our codebase and deployments to Fly.io environments. This strategy balances simplicity with deployment control, making it ideal for continuous deployment while maintaining staging validation.

## Branch Structure

### Main Branch

- **`main`** - The single source of truth
  - Always deployable and stable
  - All features merge here via Pull Requests
  - Protected branch with required reviews
  - Automatically deployed to staging on merge

### Feature Branches

- **`feature/feature-name`** - Short-lived branches for development
  - Created from `main`
  - Merged back to `main` via Pull Request
  - Deleted after merge
  - Should be small, focused changes

## Deployment Strategy

### Environments

- **Staging**: `app-name-staging.fly.dev`
- **Production**: `app-name.fly.dev`

### Tag-Based Deployments

#### Staging Deployment

- **Trigger**: Merge to `main` branch
- **Automatic**: Every merge triggers staging deployment
- **Purpose**: Validate changes before production

#### Production Deployment

- **Trigger**: Git tags matching pattern `v*.*.*` (semantic versioning)
- **Manual**: Controlled release process
- **Examples**: `v1.0.0`, `v1.2.3`, `v2.0.0-beta.1`

## Workflow

### 1. Feature Development

```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b feature/add-user-authentication

# Develop feature
git add .
git commit -m "feat: implement user authentication"
git push origin feature/add-user-authentication
```

### 2. Code Review & Merge

1. Create Pull Request from feature branch to `main`
2. Request code review from team members
3. Address feedback and update branch
4. Merge PR (squash merge preferred)
5. **Automatic staging deployment triggered**
6. Delete feature branch

### 3. Staging Validation

- Test deployed changes on staging environment
- Verify functionality with team/stakeholders
- Run smoke tests and integration tests
- Validate with staging data

```bash
# After features are ready for user testing
git tag rc-1.2.0
git push origin rc-1.2.0  # Deploys to staging

# User testing happens on staging...
```

### 4. Production Release

```bash
# After staging validation, create release tag
git checkout main
git pull origin main

# Create and push tag (triggers production deployment)
git tag v1.2.0 rc-1.2.0  # Tag the same commit
git push origin v1.2.0   # Deploys to production
```

## Fly.io Configuration

### Fly.io Apps Configuration

- **Staging**: `fly-staging.toml`
- **Production**: `fly-production.toml`
- Separate configurations for different environments

## Branch Protection Rules

### Main Branch Protection

- Require pull request reviews (minimum 1)
- Complete pr tempate
- Require status checks to pass
- Require branches to be up to date
- Restrict pushes (no direct commits)
- Delete head branches after merge

## Naming Conventions

### Branches

- `feat/[short_name]` - New features
- `fix/[short_name]` - Bug fixes
- `docs/[short_name]` - Documentation updates
- `refactor/[short_name]` - Code refactoring
- `chore/[short_name]` - Maintenance tasks

### Tags

- `v1.0.0` - Major release
- `v1.1.0` - Minor release (new features)
- `v1.1.1` - Patch release (bug fixes)
- `v2.0.0-beta.1` - Pre-release versions

### Commits

Follow [Conventional Commits](https://conventionalcommits.org/):

- `feat: add new feature`
- `fix: resolve bug in authentication`
- `docs: update API documentation`
- `style: format code with prettier`
- `refactor: restructure user service`
- `test: add unit tests for auth`
- `chore: update dependencies`

## Hotfix Process

### Critical Production Issues

1. Create hotfix branch from `main`:

```bash
git checkout main
git checkout -b fix/[name_of_fix]
```

2. Implement fix and test locally

3. Create PR for code review (expedited)

4. Merge to `main` and tag for staging (triggers staging deployment)

```bash
git tag v1.1.2
git push origin v1.1.2
```

5. Validate fix in staging environment

6. Create immediate production tag:

```bash
git tag v1.1.2
git push origin v1.1.2
```

## Best Practices

### Development

- Keep feature branches small and focused
- Regularly rebase/merge from `main` to stay current
- Write descriptive commit messages
- Include tests with new features

### Code Review

- Review for functionality, security, and performance
- Check that PR follows acceptance criteria
- Verify tests are included and passing
- Ensure documentation is updated

### Deployment

- Always validate on staging before production
- Use semantic versioning for tags
- Document releases with changelog
- Monitor deployments and have rollback plan

### Emergency Procedures

- Hotfixes can bypass normal review for critical issues
- Document emergency deployments
- Conduct post-incident reviews
- Update processes based on lessons learned

## Rollback Strategy

### Staging Rollback

- Deploy previous commit from `main`
```bash
git checkout main
git log 
# choose the commit hash that you would like to 
```
- Fix forward with new commits preferred

### Production Rollback

```bash
# Quick rollback to previous tag
git tag v1.1.2-rollback v1.1.1
git push origin v1.1.2-rollback

# Or redeploy previous version
flyctl deploy --app app-name-production --image previous-version
```

## Monitoring & Alerts

### Deployment Monitoring

- Set up alerts for deployment failures
- Monitor application health post-deployment
- Track deployment frequency and success rates
- Log deployment activities for audit

### Branch Health

- Monitor long-lived feature branches
- Alert on branches without recent activity
- Track PR merge time and review cycles

---

## Quick Reference

| Action            | Command                                    |
| ----------------- | ------------------------------------------ |
| New feature       | `git checkout -b feature/name`             |
| Staging deploy    | Merge PR to `main`                         |
| Production deploy | `git tag v1.0.0 && git push origin v1.0.0` |
| Hotfix            | `git checkout -b hotfix/name`              |
| Rollback          | Deploy previous tag or commit              |

This strategy provides the simplicity of GitHub Flow while giving precise control over production deployments through semantic versioning tags.

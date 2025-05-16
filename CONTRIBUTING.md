# Contributing Guidelines

## Branching Strategy

- `main` - Production code only
- `develop` - Integration branch
- Feature branches: `feature/feature-name`
- Bugfix branches: `bugfix/bug-name`
- Release branches: `release/version`

## Commit Message Convention

Format: `<type>: <description>`

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc)
- refactor: Code changes that neither fix bugs nor add features
- test: Adding or modifying tests
- chore: Changes to build process or auxiliary tools

## Pull Request Process

1. Create feature branch from `develop`
2. Implement your changes
3. Submit PR to `develop`
4. Address review comments
5. Once approved, merge using squash merging

## Code Review Guidelines

- Review for functionality
- Check for code quality and style
- Verify tests are included
- Ensure documentation is updated

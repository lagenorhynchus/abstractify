# Contributing to Abstractify 🤝

Thank you for considering contributing to Abstractify! We welcome contributions from everyone.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher)
- npm (comes with Node.js)
- Git

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/abstractify-app.git
   cd abstractify-app
   ```

2. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/abstractify-app.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### 1. Create a Branch
```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Test your changes thoroughly

### 3. Code Quality
Before submitting your changes, ensure they pass all checks:

```bash
# Run linting
npm run lint

# Type check
npx tsc --noEmit

# Build the project
npm run build
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### 5. Push and Create a Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub with:
- A clear title and description
- Reference to any related issues
- Screenshots (if applicable)

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use descriptive prop names

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors

### File Organization
```
src/
├── app/          # Next.js pages
├── components/   # Reusable UI components
├── types/        # TypeScript type definitions
├── utils/        # Utility functions
└── hooks/        # Custom React hooks
```

## 🐛 Bug Reports

When filing a bug report, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps to reproduce the bug
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**: Browser, OS, Node.js version
6. **Screenshots**: If applicable

## 💡 Feature Requests

For feature requests, please provide:

1. **Problem**: What problem does this feature solve?
2. **Solution**: Detailed description of the proposed feature
3. **Alternatives**: Any alternative solutions considered
4. **Additional Context**: Screenshots, mockups, or examples

## 🧪 Testing

Currently, the project uses:
- **ESLint** for code linting
- **TypeScript** for type checking
- **Build testing** to ensure the app compiles

Future testing improvements welcome:
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright

## 📋 Pull Request Checklist

Before submitting a pull request, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Self-review of the code completed
- [ ] Code is properly commented
- [ ] Changes generate no new ESLint warnings
- [ ] TypeScript compilation passes
- [ ] Build completes successfully
- [ ] PR description clearly describes the changes

## 🆘 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Discord/Slack**: [Add your community links here]

## 📄 License

By contributing to Abstractify, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project README (for significant contributions)
- Release notes (for major features)

---

Thank you for making Abstractify better! 🚀

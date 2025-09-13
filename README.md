# Abstractify 📚

**Scientific Papers Simplified** - A Next.js application that makes complex scientific research accessible to everyone by providing simplified summaries alongside original abstracts.

## 🌟 Features

- **Simplified Scientific Papers**: View complex research papers with easy-to-understand summaries
- **Infinite Scroll**: Seamlessly browse through multiple papers with automatic loading
- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **TypeScript**: Full type safety for better development experience
- **Category Filtering**: Papers organized by scientific categories
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/abstractify-app.git
   cd abstractify-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Creates an optimized production build |
| `npm start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code issues |

## 📁 Project Structure

```
abstractify-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable React components
│   │   └── PaperCard.tsx       # Paper display component
│   └── types/                  # TypeScript type definitions
│       └── paper.ts            # Paper interface
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🧩 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Runtime**: [React 19](https://react.dev/)
- **Build Tool**: [Turbopack](https://turbo.build/pack) (Next.js built-in)

## 🎨 Features Overview

### Paper Card Component
Each scientific paper is displayed in a clean card format featuring:
- **Category badge** with color-coded classification
- **Publication date** for temporal context
- **Author information** with multiple author support
- **Simplified summary** for quick understanding
- **Original abstract** for detailed information

### Infinite Scroll
- Automatically loads more papers as you scroll
- Smooth loading indicators
- Efficient pagination system

## 🔧 Development

### Code Quality
- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Path Aliases**: `@/` prefix for clean imports

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: Easy to implement dark theme

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 📱 Mobile devices (320px and up)
- 📊 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Works with static exports
- **Railway**: Full-stack deployment
- **Digital Ocean**: App Platform deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and assets from various sources

---

**Made with ❤️ for making science accessible to everyone**

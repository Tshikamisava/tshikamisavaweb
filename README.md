# Tshikamisava Holdings Website

A modern, professional website for Tshikamisava Holdings built with React, TypeScript, and Vite.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📁 Project Structure

```
tshikamisavaweb/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── ContactSection.tsx
│   │   └── ServiceCard.tsx
│   ├── data/           # Static data and constants
│   │   └── services.ts
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   │   └── geminiService.ts
│   ├── styles/         # CSS files
│   │   ├── App.css
│   │   └── index.css
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── .env.example        # Environment variables template
├── .gitignore
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tshikamisavaweb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your API keys.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features

- Software Development Services
- Graphic Design Services
- Remote ICT Support
- Contact Form with AI-powered responses
- Responsive Design
- Modern UI/UX

## 📧 Contact

For inquiries, please visit the contact section on the website.

## 📄 License

© 2024 Tshikamisava Holdings. All rights reserved.

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

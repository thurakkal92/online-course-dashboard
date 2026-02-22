# 🪺 CodeNest — Online course dashboard

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)
![Figma](https://img.shields.io/badge/Figma-Design_System-F24E1E?style=flat-square&logo=figma)

---

## 📖 Project Overview

**CodeNest** is a full-featured and responsive online course dashboard. It provides progress tracking, trending courses, course recommendations based on your interested topics.

The project is built on a predefined design tokens (typography, color palettes, spacing), reusable atomic components, and consistent patterns — mirrored in both code and figma that includes:

- 🎨 **Color Tokens & Palettes** — Brand , semantic, and neutral scales
- 🔤 **Typography System** — Font sizes, weights, line heights as design tokens
- 🧩 **Component Library** — Atoms, molecules, and organisms mapped to Figma frames
- 📐 **Spacing & Radius Tokens** — Consistent layout primitives

---

## Handoff

Figma -> [Prototype](https://www.figma.com/proto/odS99oV8LQlyg1CT2cpHgr/Online-learning-platform?page-id=1006%3A87&node-id=1023-1424&p=f&viewport=-802%2C307%2C0.94&t=RWq2xkQennMnscMg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1023%3A1424)

Figma designs -> [Design](https://www.figma.com/design/odS99oV8LQlyg1CT2cpHgr/Online-learning-platform?node-id=1023-1424&t=ZMW8YundTALCATNd-1)

Figma components -> [Components](https://www.figma.com/design/odS99oV8LQlyg1CT2cpHgr/Online-learning-platform?node-id=1023-1334&t=ZMW8YundTALCATNd-1)

Github Repo -> [Link](https://github.com/thurakkal92/online-course-dashboard)

Website link -> [Dashboard link](https://online-course-dashboard-xi.vercel.app/)

## ✨ Highlights

### 🎨 Scalable UI

- Predefined **design tokens** for color, typography, spacing, and border radius
- Token-driven approach
- Figma component library with documented variants and states

### 🧩 Component Architecture

- **Atomic Design pattern** — Atoms → Organisms → Views
- components -> common -> ui -> feature components
- Fully typed props with TypeScript interfaces

### 📊 Dashboard Features

- Course progress tracking with visual progress bars
- Dashboard summary
- Recommend courses based on interested topics
- Optioned to add interested topics

### ⚡ Performance

- Server-Side Rendering with Next.js App Router
- Optimized images via Next.js `<Image />` component
- Code splitting per view

---

## 🏗️ Project Structure

```
codenest/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles & CSS variables (design tokens)
│   ├── layout.tsx                # Root layout with providers
│   ├── loading.tsx               # Global loading UI
│   ├── page.tsx                  # Home / Landing page
│
│
├── components/                   # All React components
│   │
│   ├── ui/                       # ⚛️ Atoms — base-level UI primitives
│   │   ├── button.tsx            # Button variants (primary, outline, ghost)
│   │   ├── badge.tsx             # Status & category badges
│   │   ├── avatar.tsx            # User avatar with fallback
│   │   ├── card.tsx              # Base card container
│   │   ├── input.tsx             # Form input field
│   │   ├── progress.tsx          # Linear progress bar
│   │   ├── etc
│   │
│   ├── common/                   # 🧩 Shared layout components
│   │   ├── header/
│   │   ├── footer/
│   │   │   └── Footer.tsx        # Site footer
│   │   ├── sidebar/
│   │   │   └── Sidebar.tsx       # Collapsible side navigation for mobile
│   │
│   │
│   └── features/                 # 🏗️ Feature-specific components
│       ├── search-modal/
│
│       ├── summary-cards/
│
│
├── views/                        # 📄 Full page view compositions
│   ├── continue-course-view
│   ├── dashboard-summary-view
│   ├── recommended-course-view
│   ├── trending-course-view
│
│
├── hooks/                        # Custom React hooks
│   ├── use-break-point.ts

│
├── lib/                          # Utilities & configuration
│
│   ├──constants
│   ├── utils.ts                  # General helpers
│
│
├── types/                        # TypeScript type definitions
│   ├── index.ts
│
│
│
├── public/                       # Static assets
│
├── .eslintrc.json                # ESLint configuration
├── .gitignore
├── next.config.mjs               # Next.js configuration
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts            # Tailwind config
└── tsconfig.json
```

## 🛠️ Technology Stack

| Layer           | Technology              |
| --------------- | ----------------------- |
| **Framework**   | Next.js 15 (App Router) |
| **Language**    | TypeScript 5.x          |
| **Styling**     | Tailwind CSS 3.x        |
| **Icons**       | Lucide React            |
| **Design Tool** | Figma (Design System)   |
| **State**       | React                   |
| **Linting**     | ESLint + Prettier       |
| **Deployment**  | Vercel                  |

---

## 🚀 Getting Started

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/thurakkal92/online-course-dashboard
cd online-course-dashboard
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**5. Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

```bash
# Development
npm run dev           # Start dev server (http://localhost:3000)

# Production
npm run build         # Build for production
npm run start         # Start production server

```

---

## 📁 Component Philosophy

```
ui/          →  Atoms       →  No business logic. Pure presentation.
common/      →  Layout      →  Header, Footer, Sidebar used across all pages.
features/    →  Organisms   →  Business-aware, composed from ui/ atoms.
views/       →  Pages       →  Full layout composition. One per route.
```

---

## 👤 Author

**Nabeel Thurakkal**

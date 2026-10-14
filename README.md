# Full-Stack TypeScript React Application

## Overview

This project is a modern full-stack web application built using TypeScript, React, Vite, Tailwind CSS on the frontend, and Node.js with Express (or similar framework) on the backend. It leverages modern development tools and practices to deliver a scalable and maintainable codebase.

- **Frontend**: React with TypeScript, styled with Tailwind CSS, built with Vite.
- **Backend**: Node.js using TypeScript, with Express (or similar) for server-side routing and APIs.
- **Build Tool**: Vite for fast development and build.
- **Package Management**: npm via `package.json` and `package-lock.json`.
- **Code Quality & Style**: Configured with ESLint and Prettier.

## Project Structure

```plaintext
/
├── dist/                      # Build output (frontend assets, server, etc.)
│
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── auth/              # Auth related components (EntraLogin, RequireAuth)
│   │   ├── chat/              # Chat UI components
│   │   ├── landing/           # Landing page components
│   │   └── ui/                # UI elements (buttons, modals, badges, etc.)
│   ├── router.tsx             # React routing setup
│   ├── routeTree.gen.ts       # Route tree generation (possibly code-generated)
│   ├── server.ts              # Entry point for backend server
│   ├── start.ts               # Startup scripts
│   └── styles.css             # Tailwind CSS and custom styles
│
├── node_modules/              # Dependencies
│
├── .gitignore                 # Git ignore rules
├── package.json               # NPM dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── eslint.config.js           # ESLint configuration
├── .prettierrc                # Prettier formatting config
├── .prettierignore            # Files to ignore for Prettier
│
└── additional configs and asset files as needed
```

---

## Setup Instructions

### Prerequisites

- Node.js 16.x or higher (preferably latest LTS)
- npm (version 6+)

### Installation

```bash
git clone <repository_url>
cd <repository_directory>
```

### Install Dependencies

```bash
npm install
```

This will install both frontend and backend dependencies as specified in `package.json`.

---

## Development Commands

### Run Development Server

```bash
npm run dev
```

This will start both the Vite frontend development server and the backend server concurrently, typically accessible at `http://localhost:3000` or similar.

### Build the Project

```bash
npm run build
```

Creates optimized production assets for both frontend and backend.

### Run Linter

```bash
npm run lint
```

Lint the codebase according to ESLint rules.

### Format Code

```bash
npm run format
```

Automatically format code with Prettier.

### Run Backend Server Only (if needed)

```bash
npm run start:server
```

---

## Additional Notes

- The `dist/` directory contains the build artifacts; do not commit these files.
- For environment variables, configure `.env` files as needed (not included here).
- Ensure that any data files such as DOCX, PDF, or other documents in the `data/` folder are added to `.gitignore` (details below).

---

## `.gitignore`
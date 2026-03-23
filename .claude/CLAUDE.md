# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build (also auto-runs next-sitemap via postbuild)
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + Motion (animations)

### Content & Data

All portfolio content (projects, experience, skills, bio) lives in [src/lib/portfolio.json](src/lib/portfolio.json). This is the single source of truth — pages read from it directly. Navigation links and shared constants are in [src/lib/constants.js](src/lib/constants.js).

### Page Structure

Pages live in `src/app/` using the App Router convention. Each page imports data from `portfolio.json` and composes components. The root layout ([src/app/layout.js](src/app/layout.js)) sets global metadata, Google Fonts, and mounts Vercel Analytics.

### Component Organization

Components in `src/components/` are split by role:
- `buttons/` — NavLink, LinkButton, SubmitButton, IconButton, etc.
- `cards/` — ProjectCard, ProfileCard, TimelineCard, TitleCard
- `forms/` — ContactForm (client component wired to a server action)
- `layout/` — Container, SideBar, BottomNavigation
- `ui/` — atomic elements: Icon, Input, Heading, Tag, Skills

### Contact Form → Google Sheets

[src/lib/handleContactForm.js](src/lib/handleContactForm.js) is a Next.js server action that submits contact form data to a Google Sheet via the Google Sheets API (`googleapis` + `google-auth-library`). Credentials come from environment variables.

### Animations

[src/lib/motion.js](src/lib/motion.js) defines reusable animation variant presets (fadeIn, slideIn*, wipeIn*) used across components via the Motion library. Components that animate must be client components (`"use client"`).

### Path Alias

`@/*` maps to `./src/*` (configured in [jsconfig.json](jsconfig.json)).

### Styling

Tailwind CSS v4 via PostCSS. Dark theme throughout — base background is `bg-black`. Custom CSS variables for primary color and shadows are defined in [src/app/globals.css](src/app/globals.css). Prettier is configured with `prettier-plugin-tailwindcss` for automatic class sorting.

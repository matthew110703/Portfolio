# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build (also auto-runs next-sitemap via postbuild)
npm run start     # Start production server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript type checking
```

No test suite is configured.

## Architecture

**Stack:** Next.js 16 (App Router) + TypeScript + React 19 + Tailwind CSS v4 + Motion (animations)

### Content & Data

All portfolio content (hero, about, projects, case studies, experience, education, capabilities, contact, SEO metadata) lives in [src/data/portfolio.ts](src/data/portfolio.ts), typed by interfaces in [src/types/portfolio.ts](src/types/portfolio.ts). The downloadable resume lives at [public/Mathew_R_Resume.pdf](public/Mathew_R_Resume.pdf).

### Page Structure

Pages live in `src/app/` using the App Router convention:
- `(v2)/` — Current editorial portfolio wrapped in `AppShell`:
  - `/` — Overview hero, selected work, experience snapshot, capabilities, contact CTA
  - `/portfolio` — Featured 5 projects + secondary `Earlier work` archive
  - `/portfolio/[slug]` — Statically generated case studies (`generateStaticParams`)
  - `/about` — Narrative bio, quick facts, full experience, capabilities, education
  - `/contact` — Accessible contact form + direct channels and resume actions
- `v1/` — Strict-TypeScript archive of the original bento portfolio (`/v1`, `/v1/about`, `/v1/portfolio`, `/v1/contact`), backed by `src/v1/`, scoped with `.v1-root`, marked `noindex`, and excluded from `sitemap.xml` via [next-sitemap.config.js](next-sitemap.config.js).

The root layout ([src/app/layout.tsx](src/app/layout.tsx)) sets global metadata, loads `Space_Grotesk`, `Inter`, and `JetBrains_Mono` via `next/font/google`, embeds `Person` JSON-LD, wraps routes in `MotionProvider`, mounts the persistent bottom-right `TimeMachine` switcher, and mounts Vercel Analytics.

### Component Organization

Components in `src/components/` are split by role (with archived v1 equivalents under `src/v1/components/`):
- `layout/` — `AppShell`, `Header`, `Footer`, `BottomNavigation`, `MotionProvider` (`MotionConfig reducedMotion="user"`), `TimeMachine` (`v1` / `v2` floating switcher)
- `sections/` — `ProjectCard`, `ArchiveCard`, `ExperienceCard`, `CapabilitiesGrid`
- `ui/` — `SectionHeader`, `Badge`, `Reveal`, `ProjectDiagram` (bespoke abstract SVG architecture diagrams)
- `forms/` — `ContactForm` (client component wired to a server action)
- `icons/` — client-boundary re-exports for `@ant-design/icons`

### Contact Form → Google Sheets

[src/lib/handleContactForm.ts](src/lib/handleContactForm.ts) is a Next.js server action that submits contact form data to a Google Sheet via the Google Sheets API (`googleapis` + `google-auth-library`). Credentials come from environment variables (`GOOGLE_CREDENTIALS`, `SPREADSHEET_ID`).

### Animations

[src/lib/motion.ts](src/lib/motion.ts) defines restrained animation variant presets (`fadeUp`, `fadeIn`, `staggerContainer`, `staggerItem`). `Reveal` and `MotionProvider` handle viewport reveals while respecting `prefers-reduced-motion`.

### Path Alias

`@/*` maps to `./src/*` (configured in [tsconfig.json](tsconfig.json)).

### Styling

Tailwind CSS v4 via PostCSS. Dark editorial theme using tokens in [src/app/globals.css](src/app/globals.css) (`--color-canvas`, `--color-surface`, `--color-primary`, etc.) and `.bg-tech-grid`. Prettier is configured with `prettier-plugin-tailwindcss` for automatic class sorting.

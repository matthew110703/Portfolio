# Mathew R — Developer Portfolio

Personal portfolio and engineering case studies for **Mathew R**, a frontend-focused Software Development Engineer based in Bengaluru, India.

Live site: https://mathew-pi.vercel.app

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **UI:** React 19, Tailwind CSS v4, `@ant-design/icons`
- **Motion:** Motion (`motion/react` & `motion/react-client` with `reducedMotion="user"`)
- **Integrations:** Vercel Analytics (`@vercel/analytics/next`), Google Sheets contact form server action (`googleapis` + `google-auth-library`), `next-sitemap`

## Project Structure

- `src/app/` — App Router entry, root metadata, and global `TimeMachine` switcher:
  - `(v2)/` — Current portfolio routes (`/`, `/portfolio`, `/portfolio/[slug]`, `/about`, `/contact`) wrapped in `AppShell`
  - `v1/` — Archived TypeScript snapshot of the original bento portfolio (`/v1`, `/v1/about`, `/v1/portfolio`, `/v1/contact`; excluded from `sitemap.xml` and marked `noindex`)
- `src/data/portfolio.ts` — Typed single source of truth for v2 copy, projects, experience, education, capabilities, and SEO metadata
- `src/v1/` — Self-contained TypeScript components, motion presets, and data for the `v1` archive
- `src/types/portfolio.ts` — Shared v2 TypeScript interfaces
- `src/components/` — `layout/` (`AppShell`, `Header`, `Footer`, `BottomNavigation`, `MotionProvider`, `TimeMachine`), `sections/` (`ProjectCard`, `ArchiveCard`, `ExperienceCard`, `CapabilitiesGrid`), `ui/` (`SectionHeader`, `Badge`, `Reveal`, `ProjectDiagram`), `forms/` (`ContactForm`), and `icons/` (client-boundary `@ant-design/icons` re-exports)
- `src/lib/` — `handleContactForm.ts` server action and `motion.ts` presets
- `public/Mathew_R_Resume.pdf` — Local downloadable resume asset

## Scripts

```bash
npm run dev        # Start local development server (Turbopack)
npm run build      # Production build + next-sitemap generation via postbuild
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript compiler check (tsc --noEmit)
```

## Environment Variables

Only required if running the `/contact` Google Sheets submission locally or in deployment:

```env
GOOGLE_CREDENTIALS='{"type":"service_account",...}'
SPREADSHEET_ID='your-google-spreadsheet-id'
```

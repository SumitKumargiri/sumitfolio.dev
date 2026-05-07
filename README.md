# Premium Developer Portfolio Website

A modern, fully responsive portfolio website built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Features

- Next.js App Router architecture
- SEO optimized (metadata + sitemap)
- Contact form API route
- Dark mode support
- Responsive, accessible UI

## Quick Start

### Prerequisites

- Node.js 18.17+
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
pnpm type-check
```

## Project Structure

```text
src/
  app/            # Next.js App Router
  components/     # UI + sections + navigation
  hooks/
  lib/
  services/
  styles/
  types/
  constants/
  providers/
  middleware.ts
```

## API Routes

- GET /api/health
- POST /api/contact

## Environment Variables

See `.env.example`.

## Deployment

- Recommended: Vercel
- Other: `pnpm build` then `pnpm start`

## License

MIT

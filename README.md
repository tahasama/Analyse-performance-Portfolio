# Maatof Taha — Portfolio

A personal portfolio site, a Document Control professional who builds
performance-reporting systems. It showcases six live/deployment-ready systems (status
reporting, performance measurement, diagnosis, quarterly review, projection, and
commitment tracking), the DCIOM governance architecture behind them, a documentation
research reference (DBoK), and a full experience/skills page.

## Pages

- **Home** — the six systems introduced as one performance flow, split into two
  groups: three Reporting systems (Status & Visibility, Flow & Performance,
  Findings & Advisory) that observe, measure, and diagnose; and three Decision
  systems (Process & Action, Strategy & Impact, Commitment & Tracking) that act
  on that diagnosis, project trajectory, and verify commitments.
- **Six project pages** (`/project/:id`) — one per system, each with the
  problem it solves, what was built, what it delivers, real evidence
  screenshots, and why it matters.
- **Architecture** (`/architecture`) — DCIOM (Document Control Intelligence &
  Operations Management), the independently designed governance framework the
  six systems sit inside: its three pillars, three handshakes between them,
  six operating principles, and the formal internal standard that specifies
  it (shown at a "what was designed and why" level — exact formulas,
  thresholds, and scoring logic stay in the controlled specification).
- **Research** (`/research`) — DBoK (Documentation Body of Knowledge), an
  independently authored reference mapping the wider documentation and
  information-governance landscape, shown through its chapter structure,
  recurring knowledge types, and architectural patterns.
- **Experience** (`/experience`) — role history, education, skills grouped by
  category, and contact information.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) for routing
- [Vitest](https://vitest.dev/) + Testing Library for tests

## Project structure

```
src/
  pages/            Route-level pages (Home, Architecture, Experience, Research, per-project pages)
  components/
    layout/         Header, Footer, page shell
    diagrams/       Architecture/DBoK diagrams, pillar/handshake/principle grids
    project/        Shared project-page building blocks (evidence gallery, breadcrumb, ...)
    ui/             shadcn/ui primitives
  data/             Content as typed data (projects, architecture, experience, research)
  assets/           Screenshots and other static evidence images
```

Page content lives in `src/data/*.ts` rather than being hardcoded in JSX — edit those
files to change copy, and the pages that consume them update automatically.

## Getting started

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Install dependencies
npm i

# Start the dev server with hot reload
npm run dev

# Type-check + build for production
npm run build

# Preview a production build locally
npm run preview

# Run tests
npm run test
```

## Deployment

The site deploys as a static SPA (see `vercel.json` for the rewrite rule that routes
all paths to `index.html` so client-side routing works on refresh/deep links).

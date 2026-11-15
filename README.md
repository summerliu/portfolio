# summerliu.dev

Personal portfolio of Summer Liu, a frontend developer from Taiwan. Live at **https://summerliu.github.io/portfolio/**.

## Stack

- [React 19](https://react.dev) + [TypeScript 7](https://www.typescriptlang.org) (strict)
- [Vite](https://vite.dev) for dev server and builds
- [React Router](https://reactrouter.com) for client-side routing
- Plain modern CSS: CSS modules, cascade layers, native nesting, OKLCH colour with `light-dark()`,
  fluid `clamp()` type, `@starting-style`, scroll-driven animations and view transitions
- Self-hosted Inter and Fraunces variable fonts via Fontsource
- [Biome](https://biomejs.dev) for linting and formatting
- [Vitest](https://vitest.dev) + Testing Library for tests

## Getting started

Requires Node.js 22.12+ (24 recommended; see `.nvmrc`).

```sh
npm install
npm run dev        # start the dev server
```

## Scripts

| Script              | What it does                                       |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Dev server with HMR                                |
| `npm run build`     | Typecheck and build to `dist/`                     |
| `npm run preview`   | Serve the production build locally                 |
| `npm run lint`      | Lint and format check (`lint:fix` to apply fixes)  |
| `npm run typecheck` | TypeScript type check                              |
| `npm test`          | Run tests once (`test:watch` for watch mode)       |
| `npm run deploy`    | Build and publish `dist/` to the `gh-pages` branch |

## Project layout

```
src/
  content.ts          # name, links, CV URL, socials — edit content here
  components/         # Layout, SiteHeader, SiteFooter, ThemeToggle
  pages/              # Home, About, NotFound (each with a CSS module)
  styles/global.css   # design tokens, reset, base styles, utilities
public/               # static files copied as-is (favicon, manifest)
```

## Deployment

`npm run deploy` publishes to GitHub Pages via the `gh-pages` branch. The site is a project site, so
Vite's `base` and the router's `basename` are both `/portfolio/`. The build writes `dist/404.html` so
client-side routes like `/portfolio/about` work on a hard refresh.

To move to a custom domain later, add `public/CNAME`, set `base: '/'` in `vite.config.ts`, and set the
domain under the repo's Settings → Pages.

Never commit directly to `gh-pages`.

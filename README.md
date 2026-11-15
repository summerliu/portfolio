# summerliu.dev

Personal portfolio of Summer Liu, a frontend developer from Taiwan. Live at **https://summerliu.github.io/portfolio/**.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with **static export**: every page is prerendered HTML
- [React 19](https://react.dev) + [TypeScript 7](https://www.typescriptlang.org) (strict)
- [Tailwind CSS v4](https://tailwindcss.com): design tokens live in `@theme` in `src/app/globals.css`
  (OKLCH colours with `light-dark()` for automatic dark mode, fluid `clamp()` type)
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

| Script              | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Dev server at http://localhost:3000/portfolio     |
| `npm run build`     | Typecheck and export the static site to `out/`    |
| `npm start`         | Serve `out/` locally                              |
| `npm run lint`      | Lint and format check (`lint:fix` to apply fixes) |
| `npm run typecheck` | TypeScript type check                             |
| `npm test`          | Run tests once (`test:watch` for watch mode)      |
| `npm run deploy`    | Build and publish `out/` to the `gh-pages` branch |

## Project layout

```
src/
  app/
    layout.tsx        # root layout: metadata, header, footer, theme bootstrap
    page.tsx          # home
    about/page.tsx    # about
    not-found.tsx     # 404 (exported as 404.html)
    manifest.ts       # web app manifest
    globals.css       # Tailwind import, @theme tokens, base styles, utilities
  components/         # SiteHeader, SiteFooter, ThemeToggle
  content.ts          # name, links, CV URL, socials — edit content here
public/               # static files (.nojekyll, logo)
```

## Deployment

The site is a GitHub Pages project site at https://summerliu.github.io/portfolio/.

- `next.config.ts` sets `output: 'export'`, `basePath: '/portfolio'` and `trailingSlash: true`, so
  `/about` is exported as `out/about/index.html` and is served with a normal 200.
- Images are served unoptimized (`next/image`'s optimizer needs a server).
- `public/.nojekyll` stops GitHub Pages from hiding the `_next/` directory; `npm run deploy` publishes
  dotfiles so it is included.

`npm run deploy` publishes `out/` to the `gh-pages` branch. Never commit directly to `gh-pages`.

To move to a custom domain later, add `public/CNAME`, remove `basePath` from `next.config.ts`, update
`site.url` in `src/content.ts`, and set the domain under the repo's Settings → Pages.

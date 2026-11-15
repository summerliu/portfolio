import type { NextConfig } from 'next';

/** GitHub Pages project site: https://summerliu.github.io/portfolio/ */
export const basePath = '/portfolio';

const nextConfig: NextConfig = {
  // Emit a fully static site to out/ — GitHub Pages has no Node server.
  output: 'export',
  basePath,
  // /about -> out/about/index.html, so GitHub Pages serves it with a 200.
  trailingSlash: true,
  // The next/image optimizer needs a server; serve images as-is.
  images: { unoptimized: true },
  // Type-check every <Link href> against the routes in app/.
  typedRoutes: true,
};

export default nextConfig;

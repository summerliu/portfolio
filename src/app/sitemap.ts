import type { MetadataRoute } from 'next';
import { site } from '../content';
import { routes } from '../routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // site.url ends in '/', and trailingSlash: true means every page URL does too.
  return Object.values(routes).map((path) => ({
    url: new URL(path === '/' ? '' : `${path.slice(1)}/`, site.url).href,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}

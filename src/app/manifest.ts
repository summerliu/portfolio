import type { MetadataRoute } from 'next';
import { basePath } from '../../next.config';
import { site } from '../content';
import { defaultLocale, getDictionary } from '../i18n';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${getDictionary(defaultLocale).site.role}`,
    short_name: site.name,
    start_url: `${basePath}/`,
    display: 'standalone',
    theme_color: '#fbf9f4',
    background_color: '#fbf9f4',
    icons: [
      { src: `${basePath}/favicon.ico`, sizes: '64x64 32x32 24x24 16x16', type: 'image/x-icon' },
      { src: `${basePath}/logo192.png`, sizes: '192x192', type: 'image/png' },
    ],
  };
}

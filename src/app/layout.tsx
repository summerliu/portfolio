import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { basePath } from '../../next.config';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { site } from '../content';
import './globals.css';

// Font Awesome's CSS is imported above; don't inject it again at runtime.
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.name} is a frontend developer from ${site.location} who turns ideas into thoughtful, well-crafted web experiences.`,
  icons: { icon: `${basePath}/favicon.ico`, apple: `${basePath}/logo192.png` },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: 'Turn your ideas into reality.',
    url: site.url,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf9f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1915' },
  ],
};

// Apply a saved theme before first paint to avoid a flash.
const themeScript = `try{const t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch{}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The theme script may set data-theme before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, inlined theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="visually-hidden">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

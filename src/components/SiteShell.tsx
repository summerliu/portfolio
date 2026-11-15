import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { ReactNode } from 'react';
import '../app/globals.css';
import { getDictionary, type Locale } from '../i18n';
import { headerProps } from './headerProps';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { themeScript } from './themeScript';

// Font Awesome's CSS is imported above; don't inject it again at runtime.
config.autoAddCss = false;

/** The <html> document for one locale: each locale's root layout renders this. */
export default function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);

  return (
    // The theme script may set data-theme before React hydrates.
    <html lang={locale} suppressHydrationWarning>
      {/* biome-ignore lint/style/noHeadElement: this is an App Router root layout (each locale's layout.tsx renders it), where <head> is correct; next/head is Pages Router only */}
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, inlined theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {t.nav.skipToContent}
        </a>
        <SiteHeader {...headerProps(locale)} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}

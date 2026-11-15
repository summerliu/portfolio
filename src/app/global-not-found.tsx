import type { Metadata } from 'next';
import Link from 'next/link';
import { themeScript } from '../components/themeScript';
import { site } from '../content';
import { viewport as siteViewport } from '../i18n/metadata';
import { href } from '../routes';
import './globals.css';

/*
 * Unmatched URLs skip every layout (there's one root layout per locale), so this page is
 * self-contained. It can't know which language the visitor wanted, so it speaks both.
 */
export const metadata: Metadata = { title: `Page not found · 找不到頁面 — ${site.name}` };
export const viewport = siteViewport;

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, inlined theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <main className="wrap grid flex-1 content-center gap-10 py-section">
          <p className="eyebrow">404</p>
          <div className="grid gap-3">
            <h1 className="text-fluid-3xl">This page wandered off.</h1>
            <p className="text-muted">
              <Link href={href('en', 'home')} className="underline">
                Head back home
              </Link>
            </p>
          </div>
          <div lang="zh-TW" className="grid gap-3">
            <p className="font-serif text-fluid-2xl">找不到這個頁面。</p>
            <p className="text-muted">
              <Link href={href('zh-TW', 'home')} hrefLang="zh-TW" className="underline">
                返回首頁
              </Link>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}

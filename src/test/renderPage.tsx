import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { headerProps } from '../components/headerProps';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import type { Locale } from '../i18n';
import { navigation } from './navigation';

/**
 * Render a page inside the site chrome, as SiteShell does (minus <html>/<body>).
 * `segment` is the active route segment within the locale (null for its home page).
 */
export function renderPage(
  page: ReactNode,
  { locale = 'en', segment = null }: { locale?: Locale; segment?: string | null } = {},
) {
  navigation.segment = segment;
  return render(
    <>
      <SiteHeader {...headerProps(locale)} />
      <main>{page}</main>
      <SiteFooter locale={locale} />
    </>,
  );
}

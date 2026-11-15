import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { navigation } from './navigation';

/** Render a page inside the site chrome, as the root layout does. */
export function renderPage(page: ReactNode, pathname = '/') {
  navigation.pathname = pathname;
  return render(
    <>
      <SiteHeader />
      <main>{page}</main>
      <SiteFooter />
    </>,
  );
}

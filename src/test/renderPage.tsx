import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { navigation } from './navigation';

/**
 * Render a page inside the site chrome, as the root layout does.
 * `segment` is the active top-level route segment (null for the home page).
 */
export function renderPage(page: ReactNode, segment: string | null = null) {
  navigation.segment = segment;
  return render(
    <>
      <SiteHeader />
      <main>{page}</main>
      <SiteFooter />
    </>,
  );
}

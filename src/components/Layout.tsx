import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function Layout() {
  const { pathname } = useLocation();

  // Start each page at the top, like a regular navigation would.
  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <a href="#main" className="visually-hidden">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

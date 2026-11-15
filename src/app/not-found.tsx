import type { Metadata } from 'next';
import Link from 'next/link';
import { routes } from '../routes';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="wrap grid gap-5 py-section">
      <p className="eyebrow">404</p>
      <h1 className="text-fluid-3xl">This page wandered off.</h1>
      <p className="text-muted">
        <Link href={routes.home} className="underline">
          Head back home
        </Link>
        .
      </p>
    </section>
  );
}

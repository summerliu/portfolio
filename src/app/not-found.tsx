import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="wrap grid gap-5 py-section">
      <p className="eyebrow">404</p>
      <h1 className="text-fluid-3xl">This page wandered off.</h1>
      <p className="text-muted">
        <Link href="/" className="underline">
          Head back home
        </Link>
        .
      </p>
    </section>
  );
}

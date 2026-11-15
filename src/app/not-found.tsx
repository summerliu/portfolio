import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section
      className="container"
      style={{ paddingBlock: 'var(--section)', display: 'grid', gap: '1.25rem' }}
    >
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 'var(--step-4)' }}>This page wandered off.</h1>
      <p style={{ color: 'var(--ink-muted)' }}>
        <Link href="/">Head back home</Link>.
      </p>
    </section>
  );
}

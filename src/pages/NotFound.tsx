import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="container" style={{ paddingBlock: 'var(--section)', display: 'grid', gap: '1.25rem' }}>
      <title>Page not found — Summer Liu</title>
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 'var(--step-4)' }}>This page wandered off.</h1>
      <p style={{ color: 'var(--ink-muted)' }}>
        <Link to="/" viewTransition>
          Head back home
        </Link>
        .
      </p>
    </section>
  );
}

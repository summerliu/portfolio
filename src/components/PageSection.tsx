import type { ReactNode } from 'react';

interface PageSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  /** The page's main heading renders as <h1>; sections within a page as <h2>. */
  as?: 'h1' | 'h2';
  intro?: ReactNode;
  children: ReactNode;
}

export default function PageSection({
  id,
  eyebrow,
  title,
  as: Heading = 'h2',
  intro,
  children,
}: PageSectionProps) {
  return (
    <section id={id} className="wrap grid gap-10 pt-section" aria-labelledby={`${id}-heading`}>
      <header className="grid gap-3">
        <p className="eyebrow">{eyebrow}</p>
        <Heading id={`${id}-heading`} className={Heading === 'h1' ? 'text-fluid-3xl' : 'text-fluid-2xl'}>
          {title}
        </Heading>
        {intro && <div className="max-w-[60ch] text-muted">{intro}</div>}
      </header>
      {children}
    </section>
  );
}

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageSection from '../../components/PageSection';
import { earlierRoles, experience, site } from '../../content';
import { routes } from '../../routes';

export const metadata: Metadata = {
  title: 'Experience',
  description: `Where ${site.name} has worked: frontend roles at ViewSonic, Blocktown.co and CLC Tech.`,
};

const row = 'grid gap-3 border-t border-line py-8 min-[48rem]:grid-cols-[13rem_1fr] min-[48rem]:gap-10';

export default function Experience() {
  return (
    <PageSection
      id="experience"
      as="h1"
      eyebrow="Experience"
      title="Where I’ve worked"
      intro={<p>{site.summary}</p>}
    >
      <ol className="grid">
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`} className={`reveal ${row}`}>
            <div className="grid content-start gap-1">
              <p className="font-serif text-fluid-lg text-sage">{role.company}</p>
              <p className="text-fluid-sm text-muted">{role.period}</p>
            </div>
            <div className="grid content-start gap-3">
              <h2 className="text-fluid-xl">{role.title}</h2>
              {role.summary && <p className="text-muted">{role.summary}</p>}
              <ul className="grid gap-2 text-fluid-sm text-muted">
                {role.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-clay"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className={row}>
          <p className="font-serif text-fluid-lg text-sage">Before tech</p>
          <ul className="grid gap-2 text-fluid-sm text-muted">
            {earlierRoles.map((r) => (
              <li key={r.company}>
                <span className="font-medium text-ink">{r.title}</span>, {r.company} · {r.period}
              </li>
            ))}
          </ul>
        </li>
      </ol>
      <Link href={routes.about} className="link-accent text-ink">
        Skills, education & languages <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </PageSection>
  );
}

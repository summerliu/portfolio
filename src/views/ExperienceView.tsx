import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import PageSection from '../components/PageSection';
import { earlierRoles, roles } from '../content';
import { formatPeriod, getDictionary, type Locale } from '../i18n';
import { href } from '../routes';

const row = 'grid gap-3 border-t border-line py-8 min-[48rem]:grid-cols-[13rem_1fr] min-[48rem]:gap-10';

export default function ExperienceView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <PageSection
      id="experience"
      as="h1"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      intro={<p>{t.site.summary}</p>}
    >
      <ol className="grid">
        {roles.map((role) => {
          const text = t.experience.roles[role.id];
          return (
            <li key={role.id} className={`reveal ${row}`}>
              <div className="grid content-start gap-1">
                <p className="font-serif text-fluid-lg text-sage">{role.company}</p>
                <p className="text-fluid-sm text-muted">{formatPeriod(locale, role.period)}</p>
              </div>
              <div className="grid content-start gap-3">
                <h2 className="text-fluid-xl">{text.title}</h2>
                {text.summary && <p className="text-muted">{text.summary}</p>}
                <ul className="grid gap-2 text-fluid-sm text-muted">
                  {text.highlights.map((h) => (
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
          );
        })}
        <li className={row}>
          <p className="font-serif text-fluid-lg text-sage">{t.experience.beforeTech}</p>
          <ul className="grid gap-2 text-fluid-sm text-muted">
            {earlierRoles.map((r) => (
              <li key={r.id}>
                <span className="font-medium text-ink">{t.experience.earlierRoles[r.id]}</span>
                {t.meta.comma}
                {r.company} · {formatPeriod(locale, r.period)}
              </li>
            ))}
          </ul>
        </li>
      </ol>
      <Link href={href(locale, 'about')} className="link-accent text-ink">
        {t.experience.toAbout} <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </PageSection>
  );
}

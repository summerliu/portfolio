import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import portrait from '../assets/profile.jpg';
import PageSection from '../components/PageSection';
import { certifications, education, site, skills } from '../content';
import { formatPeriod, getDictionary, type Locale } from '../i18n';
import { href } from '../routes';

// A true semicircle on a 4:5 box: 50% of the width across, 40% of the height down.
// (rounded-t-full would make the browser scale every corner down, flattening the bottom.)
const roundTop = 'rounded-t-[50%_40%] rounded-b-card';

interface CredentialItem {
  id: string;
  title: string;
  detail: string;
  period: string;
}

function CredentialList({ heading, items }: { heading: string; items: readonly CredentialItem[] }) {
  return (
    <div className="grid content-start gap-4">
      <h3 className="text-fluid-lg">{heading}</h3>
      <ul className="grid gap-3">
        {items.map((c) => (
          <li key={c.id} className="rounded-card border border-line bg-surface p-6">
            <p className="font-medium text-ink">{c.title}</p>
            <p className="text-fluid-sm text-muted">
              {c.detail} · {c.period}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <section className="wrap grid items-center gap-[clamp(2rem,5vw,5rem)] py-[clamp(3rem,2rem+5vw,6rem)] min-[52rem]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* Arch-shaped portrait with an offset frame behind it */}
        <figure className="relative mx-auto w-[min(100%-var(--offset),30rem)] [--offset:clamp(0.75rem,2vw,1.25rem)]">
          <div
            aria-hidden="true"
            className={`absolute inset-0 -z-10 translate-x-(--offset) translate-y-(--offset) bg-sage-soft ${roundTop}`}
          />
          <Image
            src={portrait}
            alt={t.about.portraitAlt}
            sizes="(min-width: 52rem) 30rem, 100vw"
            priority
            className={`aspect-4/5 h-auto w-full object-cover object-[35%_30%] shadow-soft ${roundTop}`}
          />
        </figure>

        <div className="grid gap-4 text-muted">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1 className="text-fluid-3xl text-ink [font-variation-settings:'opsz'_144]">{site.name}</h1>
          <p className="font-serif text-fluid-lg leading-[1.45] text-ink">{t.profile[0]}</p>
          <p>{t.profile[1]}</p>
          <div className="mt-3 flex flex-wrap items-center gap-6">
            <a href={`mailto:${site.email}`} className="pill bg-ink text-paper">
              <FontAwesomeIcon icon={faEnvelope} /> {t.home.sayHello}
            </a>
            <Link href={href(locale, 'experience')} className="link-accent text-ink">
              {t.home.seeExperience} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      <PageSection id="skills" eyebrow={t.about.skillsEyebrow} title={t.about.skillsTitle}>
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-4">
          {skills.map((group) => (
            <div
              key={group.id}
              className="reveal grid content-start gap-4 rounded-card border border-line bg-surface p-7"
            >
              <dt className="font-serif text-fluid-lg">{t.about.skillGroups[group.id]}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    lang="en"
                    className="rounded-full bg-sage-soft px-3 py-1 text-fluid-sm font-medium text-ink"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection id="education" eyebrow={t.about.backgroundEyebrow} title={t.about.backgroundTitle}>
        <div className="grid gap-8 min-[48rem]:grid-cols-2">
          <CredentialList
            heading={t.about.educationHeading}
            items={education.map((e) => ({
              id: e.id,
              title: t.about.education[e.id].school,
              detail: t.about.education[e.id].detail,
              period: formatPeriod(locale, e.period),
            }))}
          />
          <CredentialList
            heading={t.about.languagesHeading}
            items={certifications.map((c) => ({
              id: c.id,
              title: t.about.certifications[c.id].title,
              detail: t.about.certifications[c.id].detail,
              period: c.year,
            }))}
          />
        </div>
      </PageSection>
    </>
  );
}

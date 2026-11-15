import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import portrait from '../../assets/profile.jpg';
import PageSection from '../../components/PageSection';
import { type Credential, certifications, education, profile, site, skills } from '../../content';
import { routes } from '../../routes';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name}, ${site.role} in ${site.location}: profile, technical skills, education and languages.`,
};

// A true semicircle on a 4:5 box: 50% of the width across, 40% of the height down.
// (rounded-t-full would make the browser scale every corner down, flattening the bottom.)
const roundTop = 'rounded-t-[50%_40%] rounded-b-card';

function CredentialList({ heading, items }: { heading: string; items: readonly Credential[] }) {
  return (
    <div className="grid content-start gap-4">
      <h3 className="text-fluid-lg">{heading}</h3>
      <ul className="grid gap-3">
        {items.map((c) => (
          <li key={c.title} className="rounded-card border border-line bg-surface p-6">
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

export default function About() {
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
            alt="Summer Liu smiling by a riverside walkway in autumn"
            sizes="(min-width: 52rem) 30rem, 100vw"
            priority
            className={`aspect-4/5 h-auto w-full object-cover object-[35%_30%] shadow-soft ${roundTop}`}
          />
        </figure>

        <div className="grid gap-4 text-muted">
          <p className="eyebrow">
            {site.role} · {site.location}
          </p>
          <h1 className="text-fluid-3xl text-ink [font-variation-settings:'opsz'_144]">{site.name}</h1>
          <p className="font-serif text-fluid-lg leading-[1.45] text-ink">{profile[0]}</p>
          <p>{profile[1]}</p>
          <div className="mt-3 flex flex-wrap items-center gap-6">
            <a href={`mailto:${site.email}`} className="pill bg-ink text-paper">
              <FontAwesomeIcon icon={faEnvelope} /> Say hello
            </a>
            <Link href={routes.experience} className="link-accent text-ink">
              See my experience <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      <PageSection id="skills" eyebrow="Toolkit" title="Technical skills">
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-4">
          {skills.map((group) => (
            <div
              key={group.label}
              className="reveal grid content-start gap-4 rounded-card border border-line bg-surface p-7"
            >
              <dt className="font-serif text-fluid-lg">{group.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
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

      <PageSection id="education" eyebrow="Background" title="Education & languages">
        <div className="grid gap-8 min-[48rem]:grid-cols-2">
          <CredentialList heading="Education" items={education} />
          <CredentialList heading="Languages" items={certifications} />
        </div>
      </PageSection>
    </>
  );
}

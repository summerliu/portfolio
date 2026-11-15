import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Rich from '../components/Rich';
import { roles, site, strengths } from '../content';
import { getDictionary, type Locale } from '../i18n';
import { href } from '../routes';

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [latest] = roles;

  return (
    <>
      <section className="relative isolate overflow-clip pt-[clamp(5rem,4rem+10vw,11rem)] pb-[clamp(4rem,3rem+6vw,8rem)]">
        <div
          aria-hidden="true"
          className="absolute -top-[20%] -right-[10%] -z-10 aspect-square w-[min(70vw,46rem)] rounded-full bg-[radial-gradient(circle_at_30%_35%,color-mix(in_oklch,var(--color-sage)_45%,transparent),transparent_60%),radial-gradient(circle_at_70%_70%,color-mix(in_oklch,var(--color-clay)_35%,transparent),transparent_55%)] opacity-70 blur-[60px] motion-safe:animate-drift"
        />
        <div className="wrap grid gap-5">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1 className="max-w-[11ch] text-fluid-3xl zh:max-w-none [font-variation-settings:'opsz'_144]">
            {t.site.role}
          </h1>
          <p className="max-w-[34ch] font-serif zh:max-w-[20em] text-fluid-xl text-muted [&_em]:text-ink">
            <Rich text={t.home.tagline} />
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={href(locale, 'experience')} className="pill bg-ink text-paper">
              {t.home.seeExperience} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a href={`mailto:${site.email}`} className="pill border border-line bg-surface">
              {t.home.sayHello}
            </a>
          </div>
        </div>
      </section>

      <section className="wrap" aria-labelledby="strengths-heading">
        <h2 id="strengths-heading" className="sr-only">
          {t.home.strengthsHeading}
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-4">
          {strengths.map((s) => (
            <li
              key={s.id}
              className="reveal grid content-start gap-2.5 rounded-card border border-line bg-surface p-7 transition duration-250 ease-soft hover:-translate-y-1 hover:border-sage/40 hover:shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-sage-soft text-xl text-sage">
                <FontAwesomeIcon icon={s.icon} />
              </span>
              <h3 className="mt-3 text-fluid-lg">{t.home.strengths[s.id].title}</h3>
              <p className="text-fluid-sm text-muted">{t.home.strengths[s.id].description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap reveal grid gap-8 pt-section min-[56rem]:grid-cols-[1.2fr_1fr] min-[56rem]:gap-20">
        <h2 className="text-fluid-2xl">
          {t.home.introHeading}
          {t.meta.space}
          <em className="text-sage">{t.home.introEmphasis}</em>
        </h2>
        <div className="grid content-start gap-4 text-muted">
          <p>{t.profile[1]}</p>
          <p>
            {t.home.latestRole(
              t.experience.roles[latest.id].title,
              <strong className="text-ink">{latest.company}</strong>,
            )}
          </p>
          <Link href={href(locale, 'about')} className="link-accent text-ink">
            {t.home.moreAboutMe} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </>
  );
}

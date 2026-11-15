import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faBroom, faHeart, faPencilRuler, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { site } from '../content';

interface Value {
  title: string;
  description: string;
  icon: IconDefinition;
}

const values: readonly Value[] = [
  {
    title: 'User friendly',
    description: 'Interfaces that feel obvious, accessible and fast.',
    icon: faUsers,
  },
  {
    title: 'Aesthetic design',
    description: 'Considered typography, spacing and motion.',
    icon: faPencilRuler,
  },
  { title: 'Clean code', description: 'Readable, typed and easy to maintain.', icon: faBroom },
  { title: 'Made with heart', description: 'Care for the details others skip.', icon: faHeart },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-clip pt-[clamp(5rem,4rem+10vw,11rem)] pb-[clamp(4rem,3rem+6vw,8rem)]">
        <div
          aria-hidden="true"
          className="absolute -top-[20%] -right-[10%] -z-10 aspect-square w-[min(70vw,46rem)] rounded-full bg-[radial-gradient(circle_at_30%_35%,color-mix(in_oklch,var(--color-sage)_45%,transparent),transparent_60%),radial-gradient(circle_at_70%_70%,color-mix(in_oklch,var(--color-clay)_35%,transparent),transparent_55%)] opacity-70 blur-[60px] motion-safe:animate-drift"
        />
        <div className="wrap grid gap-5">
          <p className="eyebrow">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-[11ch] text-fluid-3xl [font-variation-settings:'opsz'_144]">
            Web Frontend Developer
          </h1>
          <p className="font-serif text-fluid-xl text-muted [&_em]:text-ink">
            Turn your <em>ideas</em> into <em>reality</em>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/about" className="pill bg-ink text-paper">
              About me <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a
              href={site.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="pill border border-line bg-surface"
            >
              View CV
            </a>
          </div>
        </div>
      </section>

      <section className="wrap" aria-labelledby="values-heading">
        <h2 id="values-heading" className="sr-only">
          What I care about
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-4">
          {values.map((v) => (
            <li
              key={v.title}
              className="reveal grid content-start gap-2.5 rounded-card border border-line bg-surface p-7 transition duration-250 ease-soft hover:-translate-y-1 hover:border-sage/40 hover:shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-sage-soft text-xl text-sage">
                <FontAwesomeIcon icon={v.icon} />
              </span>
              <h3 className="mt-3 text-fluid-lg">{v.title}</h3>
              <p className="text-fluid-sm text-muted">{v.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap reveal grid gap-8 pt-section min-[56rem]:grid-cols-[1.2fr_1fr] min-[56rem]:gap-20">
        <h2 className="text-fluid-2xl">
          Hi. I’m Summer, a frontend developer from {site.location}.{' '}
          <em className="text-sage">Please take a look!</em>
        </h2>
        <div className="grid content-start gap-4 text-muted">
          <p>
            I am passionate about building excellent software that improves the lives of those around me. I
            specialize in creating websites for clients ranging from individuals to small businesses.
          </p>
          <p>What would you do if you had a software expert available at your fingertips?</p>
          <Link href="/about" className="link-accent text-ink">
            More about me <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </>
  );
}

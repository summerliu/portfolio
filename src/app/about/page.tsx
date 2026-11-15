import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';
import Image from 'next/image';
import profile from '../../assets/profile.jpg';
import { site } from '../../content';

export const metadata: Metadata = { title: 'About' };

interface Step {
  title: string;
  description: string;
}

const process: readonly Step[] = [
  {
    title: 'Ideas',
    description:
      'Understand the subject matter completely and build on the knowledge related to it, becoming intimately familiar with it. Determine methods to address the specific needs and requirements.',
  },
  {
    title: 'Design',
    description:
      'Often mistaken for the superficial appearance of a product, design encompasses a lot more: a cross-functional process spanning market research, technical research, concept design and prototype mock-ups.',
  },
  {
    title: 'Develop',
    description:
      'Findings from the ideas and design phases drive the production of the product itself — its materials, systems and methods — engineered from the research and designs that came before.',
  },
];

// A true semicircle on a 4:5 box: 50% of the width across, 40% of the height down.
// (rounded-t-full would make the browser scale every corner down, flattening the bottom.)
const roundTop = 'rounded-t-[50%_40%] rounded-b-card';

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
            src={profile}
            alt="Summer Liu smiling by a riverside walkway in autumn"
            sizes="(min-width: 52rem) 30rem, 100vw"
            priority
            className={`aspect-4/5 h-auto w-full object-cover object-[35%_30%] shadow-soft ${roundTop}`}
          />
        </figure>

        <div className="grid gap-4 text-muted">
          <p className="eyebrow">About me</p>
          <h1 className="text-fluid-3xl text-ink [font-variation-settings:'opsz'_144]">{site.name}</h1>
          <p className="font-serif text-fluid-lg leading-[1.45] text-ink">
            I am a self-taught, driven and motivated software developer who is passionate about the use of
            technology as a tool of design and empowerment.
          </p>
          <p>
            I have done work in front-end and back-end web, database and server management, product and UI/UX
            design, and video game development.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-6">
            <a href={site.cvUrl} target="_blank" rel="noreferrer" className="pill bg-ink text-paper">
              View my CV <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.85em]" />
            </a>
            <a href={`mailto:${site.email}`} className="link-accent text-ink">
              Say hello
            </a>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 pt-section" aria-labelledby="process-heading">
        <header className="grid gap-2">
          <p className="eyebrow">Process</p>
          <h2 id="process-heading" className="text-fluid-2xl">
            How I work
          </h2>
        </header>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-4 [counter-reset:step]">
          {process.map((step) => (
            <li
              key={step.title}
              className="reveal grid content-start gap-3 rounded-card border border-line bg-surface p-8 [counter-increment:step] before:font-serif before:text-fluid-2xl before:leading-none before:text-clay before:italic before:content-[counter(step,decimal-leading-zero)]"
            >
              <h3 className="text-fluid-xl">{step.title}</h3>
              <p className="text-fluid-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

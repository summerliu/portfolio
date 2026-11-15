import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';
import Image from 'next/image';
import profile from '../../assets/profile.jpg';
import { site } from '../../content';
import styles from './about.module.css';

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

export default function About() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <figure className={styles.portrait}>
          <Image
            src={profile}
            alt="Summer Liu smiling by a riverside walkway in autumn"
            sizes="(min-width: 52rem) 30rem, 100vw"
            priority
          />
        </figure>

        <div className={styles.text}>
          <p className="eyebrow">About me</p>
          <h1 className={styles.name}>{site.name}</h1>
          <p className={styles.lede}>
            I am a self-taught, driven and motivated software developer who is passionate about the use of
            technology as a tool of design and empowerment.
          </p>
          <p>
            I have done work in front-end and back-end web, database and server management, product and UI/UX
            design, and video game development.
          </p>
          <div className={styles.links}>
            <a href={site.cvUrl} target="_blank" rel="noreferrer" className={styles.button}>
              View my CV <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a href={`mailto:${site.email}`} className={styles.textLink}>
              Say hello
            </a>
          </div>
        </div>
      </section>

      <section className={`container ${styles.process}`} aria-labelledby="process-heading">
        <header className={styles.processHeader}>
          <p className="eyebrow">Process</p>
          <h2 id="process-heading">How I work</h2>
        </header>
        <ol className={styles.steps}>
          {process.map((step) => (
            <li key={step.title} className={`${styles.step} reveal`}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

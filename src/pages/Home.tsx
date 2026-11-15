import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faBroom, faHeart, faPencilRuler, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { site } from '../content';
import styles from './Home.module.css';

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
      <title>{`${site.name} — ${site.role}`}</title>

      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">
            {site.role} · {site.location}
          </p>
          <h1 className={styles.title}>Web Frontend Developer</h1>
          <p className={styles.subtitle}>
            Turn your <em>ideas</em> into <em>reality</em>.
          </p>
          <div className={styles.ctas}>
            <Link to="/about" className={styles.primary} viewTransition>
              About me <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a href={site.cvUrl} target="_blank" rel="noreferrer" className={styles.secondary}>
              View CV
            </a>
          </div>
        </div>
      </section>

      <section className="container" aria-labelledby="values-heading">
        <h2 id="values-heading" className="visually-hidden">
          What I care about
        </h2>
        <ul className={styles.values}>
          {values.map((v) => (
            <li key={v.title} className={`${styles.value} reveal`}>
              <span className={styles.valueIcon}>
                <FontAwesomeIcon icon={v.icon} />
              </span>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.intro} reveal`}>
        <h2 className={styles.introTitle}>
          Hi. I’m Summer, a frontend developer from {site.location}. <em>Please take a look!</em>
        </h2>
        <div className={styles.introBody}>
          <p>
            I am passionate about building excellent software that improves the lives of those around me. I
            specialize in creating websites for clients ranging from individuals to small businesses.
          </p>
          <p>What would you do if you had a software expert available at your fingertips?</p>
          <Link to="/about" className={styles.textLink} viewTransition>
            More about me <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </>
  );
}

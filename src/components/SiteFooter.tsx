import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { site, socialLinks } from '../content';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.cta}`}>
        <p className="eyebrow">Get in touch</p>
        <h2 className={styles.ctaTitle}>
          Have an idea? <em>Let’s build it.</em>
        </h2>
        <a className={styles.mail} href={`mailto:${site.email}`}>
          {site.email}
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>

      <div className={`container ${styles.bottom}`}>
        <small>
          © {new Date().getFullYear()} {site.name}
        </small>
        <ul className={styles.social}>
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

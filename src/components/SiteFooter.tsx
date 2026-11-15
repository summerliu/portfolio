import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { site, socialLinks } from '../content';
import { getDictionary, type Locale } from '../i18n';

export default function SiteFooter({ locale }: { locale: Locale }) {
  const { footer, meta } = getDictionary(locale);
  return (
    <footer className="mt-section border-t border-line bg-sunk">
      <div className="wrap grid gap-4 pt-section pb-[calc(var(--spacing-section)*0.75)]">
        <p className="eyebrow">{footer.eyebrow}</p>
        <h2 className="max-w-[18ch] text-fluid-2xl zh:max-w-none">
          {footer.heading}
          {meta.space}
          <em className="text-sage">{footer.emphasis}</em>
        </h2>
        <a href={`mailto:${site.email}`} className="link-accent mt-2 gap-3 pb-0.5 text-fluid-lg font-medium">
          {site.email}
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-muted">
        <small>
          © {new Date().getFullYear()} {site.name}
        </small>
        <ul className="flex gap-2">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid size-10 place-items-center rounded-full text-lg transition-colors duration-200 ease-soft hover:bg-surface hover:text-ink"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

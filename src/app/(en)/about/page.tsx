import { pageMetadata } from '../../../i18n/metadata';
import AboutView from '../../../views/AboutView';

export const metadata = pageMetadata('en', 'about');

export default function Page() {
  return <AboutView locale="en" />;
}

import { pageMetadata } from '../../../i18n/metadata';
import ExperienceView from '../../../views/ExperienceView';

export const metadata = pageMetadata('en', 'experience');

export default function Page() {
  return <ExperienceView locale="en" />;
}

import { pageMetadata } from '../../../i18n/metadata';
import AboutView from '../../../views/AboutView';

export const metadata = pageMetadata('zh-TW', 'about');

export default function Page() {
  return <AboutView locale="zh-TW" />;
}

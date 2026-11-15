import type { RichText } from '../i18n';

/** Renders dictionary rich text: plain strings, with { em } fragments as <em>. */
export default function Rich({ text }: { text: RichText }) {
  return text.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      // biome-ignore lint/suspicious/noArrayIndexKey: static, never reordered
      <em key={i}>{part.em}</em>
    ),
  );
}

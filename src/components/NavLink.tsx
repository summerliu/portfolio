'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { NavItem } from '../routes';

interface NavLinkProps {
  item: NavItem;
  className?: string;
  onClick?: () => void;
}

/** A nav link that marks itself aria-current="page" when its section is active. */
export default function NavLink({ item, className, onClick }: NavLinkProps) {
  // Segment-based matching: no pathname parsing, and trailingSlash doesn't matter.
  const active = useSelectedLayoutSegment() === item.segment;
  return (
    <Link href={item.href} aria-current={active ? 'page' : undefined} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

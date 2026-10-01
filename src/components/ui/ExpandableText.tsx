'use client';

import { useId, useState } from 'react';
import styles from './ExpandableText.module.scss';

type Props = {
  text: string;
  maxLength: number;
  className?: string;
};

// Cuts at the last word boundary before maxLength so words are never split.
function truncate(text: string, maxLength: number): string {
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

export function ExpandableText({ text, maxLength, className }: Props) {
  const [expanded, setExpanded] = useState(false);
  const textId = useId();

  if (text.length <= maxLength) {
    return <p className={className}>{text}</p>;
  }

  return (
    <>
      <p id={textId} className={className}>
        {expanded ? text : truncate(text, maxLength)}
      </p>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={expanded}
        aria-controls={textId}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? 'Hide' : 'Read more'}
      </button>
    </>
  );
}

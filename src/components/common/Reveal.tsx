import type { CSSProperties, ElementType, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
  className?: string;
}

/**
 * Wrapper that opts an element into the scroll-reveal animation
 * (see `useScrollReveal`). It simply tags the DOM node with `data-reveal`.
 */
export function Reveal({
  children,
  delay,
  as: Tag = 'div',
  style,
  id,
  className,
}: RevealProps) {
  return (
    <Tag
      data-reveal=""
      data-reveal-delay={delay}
      id={id}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}

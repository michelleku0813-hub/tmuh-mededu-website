import type { CSSProperties } from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  /** Accent colour of the label (defaults to the teal brand colour). */
  color?: string;
  style?: CSSProperties;
}

/**
 * Small uppercase label shown above section titles. Replaces the long
 * inline-style block that used to be copy-pasted before every heading.
 */
export function Eyebrow({ children, color, style }: EyebrowProps) {
  return (
    <div className="eyebrow" style={{ ...(color ? { color } : null), ...style }}>
      {children}
    </div>
  );
}

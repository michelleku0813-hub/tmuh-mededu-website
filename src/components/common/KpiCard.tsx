import { Reveal } from './Reveal';

interface KpiCardProps {
  num: number;
  suffix?: string;
  /** When provided, shown verbatim instead of the counting animation. */
  staticDisplay?: string;
  label: string;
  caption?: string;
  color: string;
  delay?: number;
}

/** A single metric card with a count-up number and a colored accent bar. */
export function KpiCard({
  num,
  suffix = '',
  staticDisplay,
  label,
  caption,
  color,
  delay,
}: KpiCardProps) {
  return (
    <Reveal
      delay={delay}
      style={{
        position: 'relative',
        padding: '24px 22px',
        borderRadius: 16,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 3,
          height: '100%',
          background: color,
        }}
      />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span
          {...(staticDisplay == null
            ? { 'data-count': num, 'data-suffix': suffix }
            : {})}
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 700,
            fontSize: 54,
            lineHeight: 1,
            color: 'var(--text)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {staticDisplay ?? 0}
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: 'var(--text)',
          marginTop: 12,
        }}
      >
        {label}
      </div>
      {caption && (
        <div
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: 11.5,
            letterSpacing: '.05em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginTop: 2,
          }}
        >
          {caption}
        </div>
      )}
    </Reveal>
  );
}

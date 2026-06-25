import { useState, type CSSProperties } from 'react';
import { resourceSrc } from '@/data/people';

interface HeroImageProps {
  slug: string;
  style?: CSSProperties;
  alt?: string;
}

/**
 * Hero/banner image. If the asset is missing it removes itself so the
 * underlying gradient remains visible (assets ship separately in /public).
 */
export function HeroImage({ slug, style, alt = '' }: HeroImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={resourceSrc(slug)}
      alt={alt}
      onError={() => setFailed(true)}
      style={style}
    />
  );
}

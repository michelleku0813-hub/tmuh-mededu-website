import { useEffect, type RefObject } from 'react';

/**
 * Reveal-on-scroll + count-up animation, ported from the original component.
 * Any descendant with `data-reveal` fades/slides in when it enters the viewport.
 * Numbers with `data-count` (+ optional `data-suffix`) count up once visible.
 *
 * Re-runs whenever any value in `deps` changes (e.g. switching view/language).
 */
export function useScrollReveal(
  rootRef: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const countUp = (el: HTMLElement) => {
      if (el.getAttribute('data-done')) return;
      el.setAttribute('data-done', '1');
      const target = parseFloat(el.getAttribute('data-count') || '0') || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const reveal = () => {
      const vh = window.innerHeight || 800;
      root
        .querySelectorAll<HTMLElement>('[data-reveal]:not([data-seen])')
        .forEach((el) => {
          const delay = el.getAttribute('data-reveal-delay') || '0';
          el.style.willChange = 'opacity,transform';
          el.style.transition = `opacity .7s cubic-bezier(.2,0,.2,1) ${delay}ms,transform .7s cubic-bezier(.2,0,.2,1) ${delay}ms`;
          if (el.getBoundingClientRect().top < vh * 0.92) {
            el.setAttribute('data-seen', '1');
            requestAnimationFrame(() => {
              el.style.opacity = '1';
              el.style.transform = 'none';
            });
            el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
          } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(26px)';
          }
        });
    };

    reveal();
    requestAnimationFrame(reveal);

    const onScroll = () => reveal();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

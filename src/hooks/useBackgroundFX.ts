import { useEffect, type RefObject } from 'react';
import type { Theme } from '@/context/SiteContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Animated particle-network canvas + cursor glow, ported from the original.
 * The glow element follows the pointer; particles link to nearby points and
 * to the cursor. Colors track the active theme.
 */
export function useBackgroundFX(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  glowRef: RefObject<HTMLDivElement | null>,
  theme: Theme,
): void {
  // Repaint particle color when theme changes (cheap, no re-init).
  useEffect(() => {
    // color is read live inside the animation loop via the data attribute below
    const canvas = canvasRef.current;
    if (canvas)
      canvas.dataset.color =
        theme === 'dark' ? '109,181,161' : '79,140,125';
  }, [theme, canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.dataset.color = theme === 'dark' ? '109,181,161' : '79,140,125';

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    const sizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = W() * ratio;
      canvas.height = H() * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    sizeCanvas();

    const count = Math.min(64, Math.round(W() / 26));
    const pts: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6,
    }));

    const mouse = { x: -999, y: -999 };
    let raf = 0;

    const loop = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      const col = canvas.dataset.color || '79,140,125';

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = `rgba(${col},.5)`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 118) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${col},${0.13 * (1 - d / 118)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
        const md = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
        if (md < 170) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${col},${0.22 * (1 - md / 170)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onMove = (e: MouseEvent) => {
      if (glowRef.current)
        glowRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => sizeCanvas();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
    };
    // Init once; theme handled by the separate effect above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

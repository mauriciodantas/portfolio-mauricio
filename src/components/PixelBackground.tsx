import { useEffect, useRef } from 'react';

interface Pixel {
  x: number;
  y: number;
  size: number;
  opacity: number;
  opacityTarget: number;
  opacitySpeed: number;
  color: string;
}

const COLORS = [
  'rgba(0, 255, 65,',   // accent-green
  'rgba(0, 240, 255,',  // accent-blue
  'rgba(188, 19, 254,', // accent-purple
];

export function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationId = 0;
    let pixels: Pixel[] = [];
    let width = 0;
    let height = 0;

    const spawn = (p?: Pixel): Pixel => {
      const pixel = p ?? ({} as Pixel);
      pixel.x = Math.floor(Math.random() * (width / 4)) * 4;
      pixel.y = Math.floor(Math.random() * (height / 4)) * 4;
      pixel.opacityTarget = Math.random() * 0.18 + 0.02;
      pixel.opacitySpeed = Math.random() * 0.003 + 0.001;
      if (p === undefined) {
        pixel.size = [2, 4, 4, 4, 6][Math.floor(Math.random() * 5)];
        pixel.opacity = Math.random() * 0.15;
        pixel.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      } else {
        pixel.opacity = 0;
      }
      return pixel;
    };

    // The canvas is `position: fixed`, so it only ever needs to cover the
    // viewport — sizing it to the document height made every content-height
    // change resize (and therefore clear) the canvas.
    const resize = () => {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      if (nextWidth === width && nextHeight === height) return;

      width = nextWidth;
      height = nextHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((width * height) / 18000);
      const previous = pixels;
      pixels = Array.from({ length: count }, (_, i) => {
        // Keep the pixels that already exist so a resize doesn't restart the
        // whole field; only clamp them back inside the new bounds.
        const existing = previous[i];
        if (existing) {
          existing.x = Math.min(existing.x, Math.max(0, width - existing.size));
          existing.y = Math.min(existing.y, Math.max(0, height - existing.size));
          return existing;
        }
        return spawn();
      });
    };

    const paint = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of pixels) {
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    };

    const draw = () => {
      for (const p of pixels) {
        // Drift opacity toward target (blink effect)
        if (p.opacity < p.opacityTarget) {
          p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
        } else {
          p.opacity -= p.opacitySpeed;
          if (p.opacity <= 0) {
            // Reset to a new position once fully invisible
            spawn(p);
          }
        }
      }
      paint();
      animationId = requestAnimationFrame(draw);
    };

    resize();

    if (reduceMotion) {
      paint();
    } else {
      draw();
    }

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

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

    let animationId: number;
    let pixels: Pixel[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      initPixels();
    };

    const initPixels = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      pixels = Array.from({ length: count }, () => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
          x: Math.floor(Math.random() * (canvas.width / 4)) * 4,
          y: Math.floor(Math.random() * (canvas.height / 4)) * 4,
          size: [2, 4, 4, 4, 6][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.15,
          opacityTarget: Math.random() * 0.18 + 0.02,
          opacitySpeed: Math.random() * 0.003 + 0.001,
          color,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pixels) {
        // Drift opacity toward target (blink effect)
        if (p.opacity < p.opacityTarget) {
          p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
        } else {
          p.opacity -= p.opacitySpeed;
          if (p.opacity <= 0) {
            // Reset to new position when fully invisible
            p.x = Math.floor(Math.random() * (canvas.width / 4)) * 4;
            p.y = Math.floor(Math.random() * (canvas.height / 4)) * 4;
            p.opacityTarget = Math.random() * 0.18 + 0.02;
            p.opacitySpeed = Math.random() * 0.003 + 0.001;
            p.opacity = 0;
          }
        }

        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.body);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}

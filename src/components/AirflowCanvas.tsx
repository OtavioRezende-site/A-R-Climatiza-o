import { useEffect, useRef } from 'react';

interface AirflowCanvasProps {
  className?: string;
  density?: 'low' | 'normal' | 'high';
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  length: number;
  width: number;
  alpha: number;
  angle: number;
  waviness: number;
  phase: number;
}

export default function AirflowCanvas({
  className = '',
  density = 'normal',
  interactive = true,
}: AirflowCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive particle count
    const isMobile = width < 768;
    const baseCount = isMobile ? 24 : density === 'high' ? 65 : density === 'low' ? 20 : 42;

    const particles: Particle[] = [];

    for (let i = 0; i < baseCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: (Math.random() * 0.9 + 0.4) * (isMobile ? 0.7 : 1),
        length: Math.random() * 80 + 35,
        width: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.28 + 0.08,
        angle: Math.sin(i) * 0.15,
        waviness: Math.random() * 18 + 8,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseInfluence = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseInfluence = 1;
    };

    const handleMouseLeave = () => {
      mouseInfluence = 0;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Render flowing laminar air streams
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move horizontally with wave motion
        p.x += p.speed;
        p.phase += 0.018;

        // Wrap around horizontally
        if (p.x - p.length > width) {
          p.x = -p.length;
          p.y = Math.random() * height;
        }

        // Slight drift toward mouse if near
        if (interactive && mouseInfluence > 0) {
          const dy = mouseY - p.y;
          const dx = mouseX - p.x;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            p.y += (dy / dist) * 0.4;
          }
        }

        const yOffset = Math.sin(p.phase) * p.waviness;
        const currentY = p.y + yOffset;

        // Draw aerodynamic gradient stream
        const gradient = ctx.createLinearGradient(p.x - p.length, currentY, p.x, currentY);
        gradient.addColorStop(0, 'rgba(57, 189, 242, 0)');
        gradient.addColorStop(0.6, `rgba(57, 189, 242, ${p.alpha * 0.7})`);
        gradient.addColorStop(1, `rgba(234, 247, 252, ${p.alpha})`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.width;
        ctx.lineCap = 'round';

        // Draw curved bezier line for natural laminar flow
        const startX = p.x - p.length;
        const cpX = p.x - p.length / 2;
        const cpY = currentY + Math.sin(p.phase + 1) * 6;

        ctx.moveTo(startX, currentY - Math.sin(p.phase - 0.5) * 4);
        ctx.quadraticCurveTo(cpX, cpY, p.x, currentY);
        ctx.stroke();

        // Lead particle tip (cool micro droplet / air highlight)
        if (i % 3 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, currentY, p.width * 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.85})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}

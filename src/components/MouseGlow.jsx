import { useEffect, useRef } from 'react';

/**
 * MouseGlow — a soft radial gradient orb that follows the cursor.
 * Shifts between blue → cyan → purple depending on scroll position.
 * Pure CSS/JS, zero layout impact.
 */
export default function MouseGlow() {
  const orbRef = useRef(null);
  const posRef = useRef({ x: -400, y: -400 });
  const currentRef = useRef({ x: -400, y: -400 });
  const rafRef = useRef(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    // Track raw mouse position
    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    // Track scroll for color shift
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Smooth lerp loop
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.06);
      currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.06);

      // Color shift based on scroll depth
      const scrollFraction = Math.min(scrollRef.current / 2000, 1);
      // 0 = blue, 0.33 = cyan, 0.66 = purple, 1 = blue again (loop)
      const hue = 210 + scrollFraction * 80; // 210 (blue) → 290 (purple)
      const sat = 80;
      const alpha = 0.12;

      orb.style.transform = `translate(${currentRef.current.x - 300}px, ${currentRef.current.y - 300}px)`;
      orb.style.background = `radial-gradient(circle, hsla(${hue}, ${sat}%, 65%, ${alpha}) 0%, transparent 70%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 600,
        height: 600,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform',
        mixBlendMode: 'screen',
        // initial off-screen
        transform: 'translate(-400px, -400px)',
      }}
    />
  );
}
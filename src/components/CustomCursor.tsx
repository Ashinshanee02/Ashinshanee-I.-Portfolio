import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for outer ring
  const ringSpring = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, ringSpring);
  const cursorYSpring = useSpring(cursorY, ringSpring);

  // Trailing particles
  const trailConfigs = [
    { damping: 20, stiffness: 400, mass: 0.5, opacity: 0.6, size: 1.5 },
    { damping: 20, stiffness: 250, mass: 0.5, opacity: 0.4, size: 1 },
    { damping: 20, stiffness: 150, mass: 0.5, opacity: 0.2, size: 0.5 },
  ];
  const trails = trailConfigs.map(cfg => ({
    x: useSpring(cursorX, { damping: cfg.damping, stiffness: cfg.stiffness, mass: cfg.mass }),
    y: useSpring(cursorY, { damping: cfg.damping, stiffness: cfg.stiffness, mass: cfg.mass }),
    ...cfg,
  }));

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(Boolean(target.closest('a, button, input, textarea, select, [role="button"]')));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot - Instant Follow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full pointer-events-none z-10000"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Dots */}
      {trails.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full pointer-events-none z-9998"
          style={{
            x: trail.x,
            y: trail.y,
            width: trail.size + 'px',
            height: trail.size + 'px',
            translateX: '-50%',
            translateY: '-50%',
            backgroundColor: `rgba(99,102,241,${trail.opacity})`,
          }}
        />
      ))}

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9999 border border-transparent backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          background: isHovering
            ? 'radial-gradient(circle, rgba(99,102,241,0.15), rgba(99,102,241,0.05))'
            : 'rgba(99,102,241,0)',
          borderColor: isHovering
            ? 'rgba(99,102,241,0.5)'
            : 'rgba(99,102,241,0.3)',
          rotate: isHovering ? 15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
    </>
  );
}
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for progress
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-zinc-900 dark:text-white overflow-hidden group transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
        >
          {/* Circular Gradient Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-zinc-200 dark:text-white/10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#scrollGradient)"
              strokeWidth="4"
              style={{ pathLength }}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Animated Arrow */}
          <div className="relative z-10 w-6 h-6 flex items-center justify-center animate-bounce-slow">
            <ArrowUp
              size={20}
              className="absolute group-hover:-translate-y-8 transition-transform duration-500 ease-in-out"
            />
            <ArrowUp
              size={20}
              className="absolute translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-indigo-500"
            />
          </div>

          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  // {
  //   id: 2,
  //   quote: "Ashinshanee is an exceptional project manager who seamlessly bridges the gap between technical and business teams. Her ability to coordinate complex deliverables is outstanding.",
  //   name: "Mohammed Fawaz",
  //   title: "Founder",
  //   company: "CurveUp",
  //   image: "/images/fawaz.png"
  // },
  {
    id: 1,
    quote: "Working with Ashinshanee on Spark Voyage was a game-changer. Her strategic vision and technical depth ensured we not only built a great product but shipped it on time.",
    name: "Nimna Ekanayake",
    title: "Co-founder",
    company: "Spark Voyage",
    image: "/images/Nimna2.jpg"
  },
  // {
  //   id: 3,
  //   quote: "A natural leader with a keen eye for detail. Ashinshanee's proactive approach to risk management and stakeholder communication made our project a massive success.",
  //   name: "Amra Iuoop",
  //   title: "Founder /Co-Founder (CurveUp)",
  //   company: "BootUp",
  //   image: "/images/AmraIuoop.png"
  // }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const timeoutRef = useRef(null);

  // Auto-scroll every 7 seconds
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 7000);
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  // Swipe/Drag support
  const startX = useRef(0);
  const endX = useRef(0);
  const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    if (startX.current - endX.current > 50) nextSlide();
    if (endX.current - startX.current > 50) prevSlide();
  };

  return (
    <section id="testimonials" className="py-32 relative bg-zinc-50 dark:bg-zinc-950 overflow-hidden transition-colors duration-300">
      
      {/* Futuristic Ambient Orbs */}
      <div className="absolute top-0 left-1/2 w-100 h-100 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 animate-pulse-slow z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            A few words from colleagues and clients I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col h-full p-8 md:p-12 rounded-[3rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden max-w-3xl mx-auto"
            >
              {/* Floating Quote */}
              <Quote className="text-indigo-500/10 dark:text-indigo-500/20 absolute top-8 right-8 animate-float" size={64} />
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-10 relative z-10 grow text-lg md:text-xl leading-relaxed">
                "{testimonials[current].quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-200 dark:border-white/10">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h4 className="text-zinc-950 dark:text-white font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonials[current].title}, {testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/30 dark:bg-zinc-800/30 hover:bg-white/50 dark:hover:bg-zinc-800/50 rounded-full p-3 shadow-lg backdrop-blur-md transition-all">
            <ChevronLeft size={24} className="text-indigo-500 dark:text-indigo-400"/>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/30 dark:bg-zinc-800/30 hover:bg-white/50 dark:hover:bg-zinc-800/50 rounded-full p-3 shadow-lg backdrop-blur-md transition-all">
            <ChevronRight size={24} className="text-indigo-500 dark:text-indigo-400"/>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-indigo-500 dark:bg-indigo-400' : 'bg-zinc-300 dark:bg-zinc-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
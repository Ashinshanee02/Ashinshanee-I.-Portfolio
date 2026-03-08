import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Hero() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >

      {/* Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 80%)`
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-zinc-50 dark:bg-zinc-950 z-0 transition-colors duration-300">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-225 opacity-30 bg-indigo-500 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="absolute top-1/4 left-1/4 w-112.5 h-112.5 opacity-20 bg-emerald-500 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 px-2 py-1 pr-4 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 backdrop-blur-md mb-8"
        >
          <img
            src="images/1%.jpeg"
            alt="Ashinshanee"
            className="w-8 h-8 rounded-full object-cover border border-zinc-300 dark:border-white/20"
          />

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Open to Technical PM / Product Manager opportunities
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.05] mb-6 text-zinc-950 dark:text-white"
        >

          Turning <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-emerald-500">
          Strategy</span>

          <br className="hidden md:block" />

          &nbsp;Into <span className="text-zinc-500 dark:text-zinc-400">
          Scalable Products
          </span>

        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10"
        >
          I'm Ashinshanee — a Computer Science undergraduate focused on
          Technical Project Management. I bridge engineering, product
          strategy, and user experience to build digital products that
          create real impact.
        </motion.p>

        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >

          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >

            <span className="absolute inset-0 bg-linear-to-r from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity" />

            <span className="relative flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </span>

          </a>

          {/* Social Icons */}

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Ashinshanee02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-300 dark:hover:bg-white/10 hover:scale-110 transition-all"
            >
              <Github size={20}/>
            </a>

            <a
              href="https://www.linkedin.com/in/ashiathukorala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-300 dark:hover:bg-white/10 hover:scale-110 transition-all"
            >
              <Linkedin size={20}/>
            </a>

            <a
              href="mailto:ashinshaneeindrachapa02@gmail.com"
              className="p-4 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-300 dark:hover:bg-white/10 hover:scale-110 transition-all"
            >
              <Mail size={20}/>
            </a>

          </div>
        </motion.div>

      </div>

      {/* Floating Skills */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mt-20 flex justify-center px-6 pointer-events-none"
      >

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">

          {[
            { label: "Product Strategy", icon: Sparkles },
            { label: "Technical Leadership", icon: Sparkles },
            { label: "Ownership", icon: Sparkles },
          ].map((item, i) => (

            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 backdrop-blur-md"
            >

              <item.icon size={14} className="text-indigo-500 dark:text-indigo-400"/>

              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {item.label}
              </span>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

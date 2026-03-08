import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative py-16 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      
      {/* Glass Background */}
      <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-blur-3xl z-0 transition-colors duration-300" />

      {/* Ambient Orbs */}
      <div className="absolute top-0 left-1/2 w-75 h-75 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 animate-pulse-slow z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-zinc-950 dark:text-white flex items-center gap-2">
            AI<span className="text-indigo-500">.</span>
            <Sparkles className="text-indigo-500 animate-pulse-slow" size={20} />
          </a>
          <p className="text-sm text-zinc-600 dark:text-zinc-500">
            © {new Date().getFullYear()} Ashinshanee Indrachapa. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[{
            href: "https://github.com/Ashinshanee02",
            icon: <Github size={20} />
          },{
            href: "https://www.linkedin.com/in/ashiathukorala",
            icon: <Linkedin size={20} />
          },{
            href: "mailto:ashinshaneeindrachapa02@gmail.com",
            icon: <Mail size={20} />
          }].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-3 rounded-full text-zinc-600 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5 transition-all shadow-lg backdrop-blur-md"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
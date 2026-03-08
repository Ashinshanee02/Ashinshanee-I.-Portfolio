import { motion } from "motion/react";
import {
  Target,
  Users,
  Rocket,
  LineChart,
  Zap,
  Layers,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-blur-3xl z-0" />

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">
              Product Builder
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white">
            About Me
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg md:text-xl">
            Bridging the gap between engineering, product strategy, and user
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main Bio Card */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
                <Lightbulb size={16} />
                The PM Mindset
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-950 dark:text-white mb-8 leading-tight">
                Building products that solve real problems.
              </h3>

              <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                <p>
                  I'm a Computer Science undergraduate fascinated by one
                  question:
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {" "}
                    why do some digital products succeed while others fail?
                  </span>
                </p>

                <p>
                  My work sits at the intersection of engineering, product
                  strategy, and execution. Through hands-on experience in
                  startup environments, I've led and coordinated software
                  initiatives where ownership, speed, and adaptability matter.
                </p>

                <p>
                  I combine technical understanding with product thinking —
                  translating ideas into roadmaps, aligning teams, and shipping
                  solutions that deliver real user impact and measurable
                  business value.
                </p>
              </div>

              {/* Focus Tags */}

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Technical Project Management",
                  "AI-Driven Products",
                  "Startup Execution",
                  "User-Centered Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Identity Card */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 lg:col-span-2 p-2 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group min-h-70"
          >
            <img
              src="images/ashi.jpg"
              alt="Workspace"
              className="absolute inset-0 w-full h-full object-cover rounded-[2.3rem] opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-white font-display font-bold text-3xl mb-2">
                Ashinshanee
              </p>

              <p className="text-white/80 text-sm mb-3">
                Turning ideas into scalable digital products.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                <Layers size={16} />
                Technical Project & Product Manager
              </div>
            </div>
          </motion.div>

          {/* Data Driven */}

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-indigo-500/50 hover:scale-[1.02] transition-all duration-500"
          >
            <LineChart className="text-indigo-500 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
              Data-Driven
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Using analytics and user insights to prioritize roadmaps and
              validate product decisions.
            </p>
          </motion.div>

          {/* Cross Functional */}

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-500"
          >
            <Users className="text-emerald-500 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
              Cross-Functional
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Aligning engineering, design, and stakeholders toward a unified
              product vision.
            </p>
          </motion.div>

          {/* Execution */}

          <motion.div
            className="md:col-span-3 lg:col-span-4 p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-amber-500/50 hover:scale-[1.02] transition-all duration-500 flex justify-between items-center"
          >
            <div>
              <Zap className="text-amber-500 mb-6" size={32} />
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Agile Delivery & Execution
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
                From sprint planning to product launches, I thrive in fast
                moving environments where experimentation, iteration, and
                disciplined execution turn ideas into real products.
              </p>
            </div>

            <div className="flex gap-4">
              <Rocket size={30} />
              <Target size={30} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Wrench, Users, Sparkles, Cpu, Globe, Database, Layout } from 'lucide-react';

const technicalSkills = [
  { name: 'Java', icon: <Cpu size={16} />, level: 90 },
  { name: 'Python', icon: <Cpu size={16} />, level: 90 },
  { name: 'JavaScript', icon: <Globe size={16} />, level: 95 },
  { name: 'TypeScript', icon: <Globe size={16} />, level: 90 },
  { name: 'React', icon: <Layout size={16} />, level: 95 },
  { name: 'Node.js', icon: <Database size={16} />, level: 80 },
  { name: 'Flask', icon: <Database size={16} />, level: 75 },
  { name: 'Firebase', icon: <Database size={16} />, level: 85 },
  { name: 'Data Modeling', icon: <Database size={16} />, level: 80 },
  { name: 'System Architecture', icon: <Cpu size={16} />, level: 70 }
];

const tools = ['JIRA', 'ClickUp', 'Notion', 'Slack', 'Git', 'GitHub', 'Postman', 'Figma', 'Docker', 'AWS', 'Azure'];
const softSkills = ['Agile & Scrum', 'SDLC', 'Sprint Tracking', 'Status Reporting', 'Risk Management', 'Stakeholder Management', 'QA/UAT', 'API Testing', 'UX/UI', 'Interpersonal Communication', 'Team Leadership', 'Problem Solving', 'Critical Thinking', 'Adaptability', 'Time Management', 'Conflict Resolution'];

const allTech = [...technicalSkills.map(t => t.name), ...tools];

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Glassy Background Orbs */}
      <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-blur-3xl z-0 transition-colors duration-300" />
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white">
            My Toolkit
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg md:text-xl">
            A comprehensive arsenal of technologies, frameworks, and methodologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-12 lg:col-span-8 p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <Code2 size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-zinc-950 dark:text-white">
                  Technical Skills
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-auto">
                {technicalSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                    className="flex flex-col gap-3 group/skill"
                  >
                    <div className="flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-500/70 group-hover/skill:text-indigo-500 transition-colors">{skill.icon}</span>
                        <span className="group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-6 lg:col-span-4 p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Wrench size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-zinc-950 dark:text-white mb-6">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 text-xs font-medium bg-white/80 dark:bg-zinc-950/50 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-6 lg:col-span-12 p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Users size={32} />
              </div>
            </div>
            <div className="relative z-10 grow">
              <h3 className="text-2xl font-display font-bold text-zinc-950 dark:text-white mb-4">
                Management & Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map(skill => (
                  <span key={skill} className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-zinc-950/50 text-zinc-700 dark:text-zinc-300 rounded-xl border border-white/10 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="mt-24 relative flex overflow-x-hidden border-y border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md py-6">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <motion.div className="flex whitespace-nowrap gap-8 px-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...allTech, ...allTech].map((tech, i) => (
            <div key={`${tech}-${i}`} className="flex items-center gap-8">
              <span className="text-xl font-display font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">{tech}</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
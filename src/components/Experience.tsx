import { motion } from 'motion/react';
import { Briefcase, Calendar, ArrowRight, Sparkles, Building2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Tech Development & Management Intern',
    company: 'CurveUp',
    period: '09/2025 - 04/2026',
    description: [
      'Owned cross-functional coordination across two external engineering vendors (Apptimus & Upview), aligning development priorities, resolving blockers, and maintaining delivery timelines in a startup environment.',
      'Led Agile execution and delivery tracking, managing dependencies, risks, and scope changes while directly interfacing with founders for decision-making.',
      'Facilitated stakeholder communication through structured weekly syncs, action tracking, and follow-ups, ensuring execution continuity despite external team dependencies.',
      'Executed 200+ UAT test cases across mobile and web platforms, identifying critical issues in authentication, payments, UX flows, and content delivery systems.',
      'Designed and implemented internal project tracking and documentation systems using Jira and Confluence, improving visibility and cross-team alignment.',
      'Led coordination for AWS and Google Cloud startup program applications, aligning technical and business requirements with DevOps and leadership teams.',
      'Took initiative during project stagnation by independently developing a functional website prototype and structuring a full documentation handover system to ensure continuity.',
      'Managed end-to-end knowledge transfer by consolidating all project assets, technical documents, and operational workflows into a centralized system for future team use.',
    ],
    tags: ['Agile', 'Project Management', 'JIRA', 'Confluence', 'UAT', 'Stakeholder Management', 'Ownership', 'Team Management'],
    color: 'indigo'
  },
  {
    id: 2,
    role: 'Co-founder & Project Lead',
    company: 'Spark Voyage',
    period: '10/2024 - 11/2025',
    description: [
      'Led end-to-end product development of an AI-powered educational platform, coordinating across Unity, Flask, Firebase, and React-based systems.',
      'Managed cross-functional team execution, aligning engineering, design, and psychological advisory inputs into a unified product roadmap.',
      'Designed backend data pipelines and APIs for real-time performance tracking and dashboard visualization.',
      'Drove product decisions based on user needs and psychological research, ensuring ethical data handling and user-centric design.',
      'Oversaw sprint planning, execution tracking, and delivery alignment across multiple technical components.',
    ],
    tags: ['Product Leadership', 'Agile', 'React', 'Firebase', 'Unity', 'Flask', 'ClickUp', 'Slack', 'Notion'],
    color: 'purple'
  },
  {
    id: 3,
    role: 'UNDP Volunteer',
    company: 'United Nations Development Programme (UNDP)',
    period: '2026 - Present',
    description: [
      'Contributing to UNDP initiatives focused on sustainable development, community engagement, and digital innovation while collaborating with diverse teams to support impactful projects.',
    ],
    tags: ["Sustainable Development", "Community Engagement", "Digital Innovation"],
    color: 'pink'
  },
  {
    id: 4,
    role: 'IEEE Volunteer',
    company: 'IEEE',
    period: '2024 - Present',
    description: [
      'Active participation in networking and leadership activities, enhancing industry connections.',
    ],
    tags: ['Networking', 'Leadership', 'Technical Community'],
    color: 'sky'
  },
  {
    id: 5,
    role: 'BD & Finance Team Coordinator',
    company: 'AIESEC (IIT)',
    period: '2023 - 2024',
    description: [
      'Led business development initiatives and financial planning, supporting organizational growth and partnership development.',
      'Coordinated stakeholder outreach and managed execution of product-side initiatives aligned with strategic goals.',
    ],
    tags: ['Business Growth', 'Strategy', 'Team Leadership'],
    color: 'emerald'
  },
  {
    id: 6,
    role: 'Logistics Team Member',
    company: 'StageCraft 2024 (IIT)',
    period: '2024',
    description: [
      'Managed logistics operations for a large-scale university event, ensuring coordination across teams and smooth execution.',
    ],
    tags: ['Operations', 'Event Management', 'Coordination'],
    color: 'amber'
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string, text: string, border: string, glow: string }> = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]' },
    pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(245,158,11,0.2)]' },
    sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(14,165,233,0.2)]' },
  };
  return colors[color] || colors.indigo;
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-64 w-160 h-160 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 -right-64 w-160 h-160 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slower z-0" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Career</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white">
            Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg md:text-xl">
            My professional journey and leadership roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/50 via-purple-500/50 to-transparent animate-flow-y" />
          
          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group pl-12 md:pl-24 perspective-1000"
                >
                  {/* Timeline Dot with Neon Pulse */}
                  <div className="absolute left-2.75 md:left-6.75 top-8 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-transform duration-500 z-10">
                    <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-40" />
                    <div className="absolute inset-0 rounded-full bg-indigo-500 animate-pulse opacity-20" />
                  </div>

                  {/* Particle Streak Line */}
                  <div className="absolute left-3.5 md:left-7.5 top-9 w-10 md:w-24 h-px bg-linear-to-r from-indigo-500 via-purple-500 to-transparent animate-flow-x" />

                  {/* Experience Card with 3D Tilt */}
                  <motion.div
                    whileHover={{ rotateY: 3, rotateX: -2, scale: 1.03 }}
                    className={`p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1 ${colors.glow}`}
                  >
                    {/* Neon Background Glow */}
                    <div className={`absolute inset-0 bg-linear-to-br ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`} />

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                              <Briefcase className={colors.text} size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {exp.role}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium text-lg ml-1">
                            <Building2 size={18} className={colors.text} />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-mono bg-white/80 dark:bg-zinc-950/50 px-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm shrink-0 h-fit">
                          <Calendar size={14} className={colors.text} />
                          <span className="text-zinc-700 dark:text-zinc-300">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg group/item">
                            <ArrowRight size={18} className={`${colors.text} shrink-0 mt-1 opacity-50 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className={`px-4 py-2 text-sm font-medium bg-white/50 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-xl border border-zinc-200 dark:border-white/10 hover:${colors.border} hover:${colors.bg} hover:${colors.text} hover:shadow-md transition-all cursor-default`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

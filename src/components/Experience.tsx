import { motion } from 'motion/react';
import { Briefcase, Calendar, ArrowRight, Sparkles, Building2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Tech Development & Management Intern',
    company: 'CurveUp',
    period: '09/2025 - Present',
    description: [
      'Coordinated 6+ engineers across two external tech vendors (Upview & Apptimus), aligning scope, priorities, and delivery timelines.',
      'Planned and tracked work items using Agile practices; monitored progress and escalated risks, dependencies, and blockers to founders.',
      'Organized and led weekly syncs, documented meeting minutes, tracked action items, and followed up to closure.',
      'Executed 210+ UAT test cases across iOS and Android; identified critical issues in authentication, payments, drag-and-drop modules, and accessibility.',
      'Produced 10+ structured project and product documents, including onboarding proposals, content enhancement plans, app improvement roadmap, level-tagging framework, and competitive analysis.',
    ],
    tags: ['Agile', 'JIRA', 'UAT', 'Stakeholder Management', 'Ownership', 'Team Management'],
    color: 'indigo'
  },
  {
    id: 2,
    role: 'Co-founder & Project Lead',
    company: 'Spark Voyage',
    period: '10/2024 - 11/2025',
    description: [
      'Led end-to-end project planning, coordination, and execution across Unity gameplay, Flask backend, Firebase pipelines, and React dashboards.',
      'Managed development team, tracked sprint progress, and aligned dependencies across technical streams.',
      'Facilitated communication between developers, designers, and psychological advisors.',
      'Aligned product with psychological advisors and implemented ethical data handling standards.',
    ],
    tags: ['Project Lead', 'React', 'Firebase', 'Unity', 'Flask', 'ClickUp', 'Slack', 'Notion'],
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
    tags: ['Sustainable Development', 'Community Engagement', 'Project Support'],
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
    tags: ['Networking', 'Leadership', 'Volunteering'],
    color: 'sky'
  },
  {
    id: 5,
    role: 'BD & Finance Team Coordinator',
    company: 'AIESEC (IIT)',
    period: '2023 - 2024',
    description: [
      'Lead product strategy development and financial planning, showcasing business acumen and project execution.',
      'Drove partnerships, led product-side BD, and enabled strategic outreach across stakeholders.',
    ],
    tags: ['Business Growth', 'BD Ops', 'Team Leadership'],
    color: 'emerald'
  },
  {
    id: 6,
    role: 'Logistics Team Member',
    company: 'StageCraft 2024 (IIT)',
    period: '2024',
    description: [
      'Managed logistics for a large-scale university event, demonstrating leadership and coordination skills.',
    ],
    tags: ['Logistics', 'Event Management', 'Coordination'],
    color: 'amber'
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    indigo: {
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-400',
      border: 'border-indigo-500/20',
      glow: 'group-hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]'
    },
    purple: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/20',
      glow: 'group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]'
    },
    pink: {
      bg: 'bg-pink-500/10',
      text: 'text-pink-400',
      border: 'border-pink-500/20',
      glow: 'group-hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]'
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20',
      glow: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]'
    },
    amber: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/20',
      glow: 'group-hover:shadow-[0_0_50px_rgba(245,158,11,0.2)]'
    },
    sky: {
      bg: 'bg-sky-500/10',
      text: 'text-sky-400',
      border: 'border-sky-500/20',
      glow: 'group-hover:shadow-[0_0_50px_rgba(14,165,233,0.2)]'
    },
  };

  return colors[color] || colors.indigo;
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
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
                  {/* Timeline Dot */}
                  <div className="absolute left-2.75 md:left-6.75 top-8 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-transform duration-500 z-10">
                    <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-40" />
                    <div className="absolute inset-0 rounded-full bg-indigo-500 animate-pulse opacity-20" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ rotateY: 3, rotateX: -2, scale: 1.03 }}
                    className={`p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1 ${colors.glow}`}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold">{exp.role}</h3>
                      <p>{exp.company}</p>
                      <p>{exp.period}</p>

                      <ul>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
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

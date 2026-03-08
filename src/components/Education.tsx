import { motion } from 'motion/react';
import { GraduationCap, Award, Sparkles, BookOpen, Trophy, CheckCircle2, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'BSc (Hons) Computer Science',
    institution: 'Informatics Institute of Technology affiliated with University of Westminster, UK',
    period: '2024 - 2027',
  },
  {
    id: 2,
    degree: 'Foundation Certificate in Higher Education - IT (Distinction)',
    institution: 'Informatics Institute of Technology',
    period: '2023 - 2023',
  },
  {
    id: 3,
    degree: 'Diploma in Information Technology, and Diploma in Software Engineering',
    institution: 'ESOFT Metro Campus',
    period: '2019 - 2020',
  },
];

const certifications = [
  'Google Project Management Professional Certificate',
  'Atlassian Agile PM',
  'Microsoft Career Essentials in Project Management',
  'Cert Prep: Scrum Master',
  'Lean Fundamentals',
  'Postman API Fundamentals Student Expert',
  'GenAI 101 with Pieces',
  'Canva for Work',
];

const achievements = [
  {
    title: 'IIT Excellence Award: Undergraduate Merit Award for Performance at Competitions',
    org: 'Informatics Institute of Technology (IIT)',
    date: '11/2025',
  },
  {
    title: 'INNOVA - National-Level Ideathon - TechX Sri Lanka 2025 (1st Runner-up)',
    org: 'IEEE Computer Society Student Branch Chapter of Wayamba University',
    date: '07/2025',
  },
  {
    title: "IX-24 Sri Lanka's Largest Inter-University Designathon (Finalists)",
    org: 'Informatics Institute of Technology (IIT)',
    date: '09/2024',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Deep Glassmorphism Background */}
      <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-blur-3xl z-0 transition-colors duration-300" />
      
      {/* Futuristic Ambient Orbs */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Background</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white">
            Education & Awards
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg md:text-xl">
            My academic journey, continuous learning, and recognition in the tech community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
                Academic Path
              </h2>
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-10 bottom-10 w-px bg-linear-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 group overflow-hidden md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-18 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] hidden md:block border-4 border-zinc-50 dark:border-zinc-950" />
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <h3 className="text-2xl font-display font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-start gap-3">
                        <BookOpen className="shrink-0 mt-1 text-indigo-500/50 group-hover:text-indigo-500 transition-colors" size={24} />
                        <span>{edu.degree}</span>
                      </h3>
                      <span className="flex items-center gap-2 text-sm font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap bg-white/80 dark:bg-zinc-950/50 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg ml-0 md:ml-9">
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-500 md:ml-16"
            >
              <h3 className="text-2xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white flex items-center gap-3">
                <CheckCircle2 className="text-indigo-500" size={24} />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                    className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-zinc-950/50 text-zinc-700 dark:text-zinc-300 rounded-xl border border-zinc-200 dark:border-white/10 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Award size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
                Achievements
              </h2>
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-10 bottom-10 w-px bg-linear-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden md:block" />

              {achievements.map((achieve, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 group overflow-hidden md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-18 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] hidden md:block border-4 border-zinc-50 dark:border-zinc-950" />

                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <h3 className="text-xl font-display font-bold text-zinc-950 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-start gap-3">
                        <Trophy className="shrink-0 mt-1 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" size={20} />
                        <span>{achieve.title}</span>
                      </h3>
                      <span className="flex items-center gap-2 text-sm font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap bg-white/80 dark:bg-zinc-950/50 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm">
                        <Calendar size={14} />
                        {achieve.date}
                      </span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg ml-0 md:ml-8">
                      {achieve.org}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

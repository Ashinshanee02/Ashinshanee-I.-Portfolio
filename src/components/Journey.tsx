import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Rocket, Mic, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const journey = [
  { title: "1st Runner-Up", event: "INNOVA - National-Level Ideathon - TechX Sri Lanka 2025", icon: Trophy, image: "/images/INNOVA.jpeg", description: "Spark Voyage secured 1st Runner-Up among competing innovation teams in Sri Lanka." },
  { title: "Semi Finalist", event: "CodeSprintX - Inter-University Start-Up Competition 2025", icon: Rocket, image: "/images/codesprint.jpeg", description: "Advanced to the semi-final stage among many competing projects." },
  { title: "University Representation", event: "IIT Discovery Day 2025", icon: Building2, image: "/images/IITDD1.jpeg", description: "Invited to showcase Spark Voyage at IIT discovery day to all the visitors." },
  { title: "Spark Voyage Co-Founder", event: "Cutting Edge Flagship Tech Exhibition 2025", icon: Mic, image: "/images/cuttingedge.jpeg", description: "Invited to pitch Spark Voyage to judges, industry professionals, undergraduates, visitors from University of Westminster and startup founders." },
  { title: "Mentor", event: "VisioNex Inter-School Hackathon Competition 2025", icon: Mic, image: "/images/visionex1.jpeg", description: "Selected as a mentor for VisioNex Inter-School Hackthon Competition organized by IIT." },
  { title: "moveMate Representation", event: "TechXpo Exhibition 2025", icon: Mic, image: "/images/techexpo.jpeg", description: "Represented award winning project moveMate along with Spark Voyage and med-tech projects." },
];

export default function Journey() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);

  const scrollAmount = 320;
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12 z-10 relative">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Competitions & Recognition
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            Milestones achieved while building and presenting Spark Voyage across national competitions, exhibitions, and university events.
          </p>
        </motion.div>

        {/* Particle Glow Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-indigo-400/20 dark:bg-indigo-500/20 rounded-full"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: ["0%", "10%", "0%"], x: ["0%", "5%", "0%"], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 8 + Math.random() * 4, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Timeline with Arrows */}
        <div className="relative z-10">
          <button onClick={scrollLeft} className="absolute top-1/2 -left-2 md:-left-6 transform -translate-y-1/2 z-20 p-3 rounded-full bg-indigo-500/80 hover:bg-indigo-600 text-white shadow-2xl transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollRight} className="absolute top-1/2 -right-2 md:-right-6 transform -translate-y-1/2 z-20 p-3 rounded-full bg-indigo-500/80 hover:bg-indigo-600 text-white shadow-2xl transition-all">
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div ref={scrollRef} className="flex space-x-8 pb-8 snap-x snap-mandatory overflow-x-auto scrollbar-hide overflow-visible">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="inline-block w-80 flex-shrink-0 relative pt-0 rounded-2xl overflow-visible shadow-2xl bg-white dark:bg-zinc-900 border border-transparent hover:border-indigo-400 hover:scale-105 transition-all duration-500 snap-center"
                >
                  {/* Floating Icon */}
                  <motion.div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-indigo-500 rounded-full p-4 shadow-2xl z-10" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-sm opacity-0 hover:opacity-60 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 text-center">{item.title}</h3>
                      <p className="text-indigo-400 italic font-medium text-center mt-1">{item.event}</p>
                      <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mt-2 text-center">{item.description}</p>
                    </div>
                    <motion.div className="mt-3 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full w-16 mx-auto" whileHover={{ scaleX: 1.8 }} transition={{ duration: 0.3 }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="relative h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-4 mt-4 z-10">
          <motion.div className="h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full origin-left" style={{ scaleX }} transition={{ type: "spring", stiffness: 100 }} />
        </div>
      </div>

      {/* Tailwind Custom CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
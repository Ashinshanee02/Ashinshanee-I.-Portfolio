import React, { useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Github,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spark Voyage",
    description:
      "AI-powered gamified learning ecosystem designed for ADHD children with real-time dashboards and wearable integration.",
    image: "/images/icon.png",
    tags: ["React", "Next.js", "Firebase", "Unity"],
    links: {
      live: "https://drive.google.com/file/d/1UnUDwf8fD5vaE4UW_4tAlV-i6SXZpI9D/view",
    },
  },
  {
    id: 2,
    title: "BootUp Website (Demo Version)",
    description:
      "Designed and developed a brand new professional company website for BootUp during my internship at CurveUp, contributing from early-stage concept to production. Focused on responsive UI, scalable frontend architecture, and product-driven implementation.",
    image: "/images/BootUpLogo.png",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    links: {
      live: "https://bootup-website.netlify.app/",
    },
  },
  {
    id: 3,
    title: "Mind Galaxy Mini-App",
    description:
      "Visualize your personality as a dynamic cosmic galaxy.",
    image: "/images/MindG.png",
    tags: ["TypeScript", "CSS", "JavaScript", "Next.js"],
    links: {
      github:
        "https://github.com/Ashinshanee02/mindgalaxy-IWD-Edition.git",
      live: "https://mindgalaxy-iwd.netlify.app/",
    },
  },
  {
    id: 4,
    title: "ZyncUp - AI Event Dashboard",
    description:
      "AI-powered event management dashboard providing real-time analytics and attendee insights.",
    image: "/images/zyncUp.png",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    links: {
      github:
        "https://github.com/Ashinshanee02/AI-Powered-Event-Management-Dashboard.git",
      live: "https://www.figma.com/design/55cd0loNFvnVserEyjUWHw/Event-Management-Dashboard-by-Ashinshanee-Indrachapa",
    },
  },
  {
    id: 5,
    title: "Cancer Mortality Prediction",
    description:
      "Machine learning models predicting cancer mortality and survival time using real-world healthcare data.",
    image: "/images/CancerM.png",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    links: {
      github: "https://github.com/Ashinshanee02/Cancer-Mortality-Prediction-ML.git",
    },
  },
  {
    id: 6,
    title: "Bookstore REST API",
    description:
      "RESTful API for managing books, authors, carts, and orders with full CRUD functionality.",
    image: "/images/bookstoreAPI.png",
    tags: ["Java", "JAX-RS", "Tomcat", "REST"],
    links: {
      github: "https://github.com/Ashinshanee02/BookstoreAPI.git",
    },
  },
  {
    id: 7,
    title: "Java Max Flow Solver",
    description:
      "Java implementation of the Edmonds–Karp algorithm to calculate maximum flow in a network graph.",
    image: "/images/maxFlow.png",
    tags: ["Java", "Algorithms", "BFS", "Graphs"],
    links: {
      github:
        "https://github.com/Ashinshanee02/NetworkFlow-MaxFlowSolver.git",
    },
  },
  {
    id: 8,
    title: "Movie Explorer",
    description:
      "React web app to discover trending movies, search films, and manage a favorites list.",
    image: "/images/movieExplorer.png",
    tags: ["React", "TMDB API", "JavaScript"],
    links: {
      github: "https://github.com/Ashinshanee02/movie-explore-app.git",
      live: "https://movie-explore-app-nu.vercel.app/",
    },
  },
  {
    id: 9,
    title: "ExploXR - VR Museum",
    description:
      "Virtual reality museum prototype created during a 24-hour inter-university designathon.",
    image: "/images/cultraXR.jpg",
    tags: ["Figma", "UI/UX", "VR"],
    links: {
      live: "https://www.figma.com/proto/qu2oPyatb4jnXDyflRRukL/TriNova",
    },
  },
  {
    id: 10,
    title: "GreenAlchemy",
    description:
      "Mobile app concept for a sustainable product marketplace promoting eco-friendly products.",
    image: "/images/GreenAlchemy.jpg",
    tags: ["Figma", "UI/UX", "Mobile Design"],
    links: {
      live: "https://www.figma.com/proto/qu2oPyatb4jnXDyflRRukL/TriNova",
    },
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount =
      direction === "left"
        ? -scrollRef.current.offsetWidth * 0.8
        : scrollRef.current.offsetWidth * 0.8;

    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translate(0px,0px)";
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-blur-3xl" />

      <div className="absolute top-0 -left-64 w-160 h-160 bg-indigo-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-64 w-160 h-160 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-10"
          >

            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6">
                <Sparkles size={16} />
                <span className="text-sm uppercase">Portfolio</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Featured Work
              </h2>

              <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
                A curated selection of projects demonstrating my skills in
                building modern applications, machine learning systems,
                and interactive digital experiences.
              </p>

            </div>

            {/* Navigation */}
            <div className="hidden md:flex gap-4">

              <button
                onClick={() => scroll("left")}
                onMouseMove={handleMagnet}
                onMouseLeave={resetMagnet}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/10 hover:bg-indigo-500 hover:text-white transition shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => scroll("right")}
                onMouseMove={handleMagnet}
                onMouseLeave={resetMagnet}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/10 hover:bg-indigo-500 hover:text-white transition shadow-lg"
              >
                <ChevronRight size={24} />
              </button>

            </div>

          </motion.div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-20 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >

          {projects.map((project, index) => (

            <Tilt
              key={project.id}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.02}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              className="shrink-0 w-[85vw] md:w-96 snap-center"
            >

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-[2rem] p-[1px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:shadow-[0_0_60px_rgba(99,102,241,0.25)] transition-all"
              >

                <div className="rounded-[2rem] bg-white dark:bg-zinc-900 flex flex-col overflow-hidden h-full">

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition">

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          className="p-2 rounded-full bg-white dark:bg-zinc-800 shadow"
                        >
                          <Github size={16} />
                        </a>
                      )}

                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          className="p-2 rounded-full bg-white dark:bg-zinc-800 shadow"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col grow">

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition">
                      {project.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 min-h-[72px] mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">

                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>
    </section>
  );
}

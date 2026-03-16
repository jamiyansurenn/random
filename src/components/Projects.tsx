"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Obsidian Tower",
    category: "Luxury Residences",
    location: "Downtown Financial District",
    units: "48 Exclusive Units",
    status: "Now Selling",
    image: "/project_two.png",
    featured: true,
  },
  {
    id: 2,
    title: "Novara Heights",
    category: "Penthouse Collection",
    location: "Bayfront Promenade",
    units: "12 Penthouses",
    status: "Launching Soon",
    image: "/project_one.png",
    featured: false,
  },
  {
    id: 3,
    title: "The Riviera",
    category: "Villa Estate",
    location: "Hillside Reserve",
    units: "24 Private Villas",
    status: "Sold Out",
    image: "/project_three.png",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-pad bg-dark relative overflow-hidden">
      {/* Background deco */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="tag-label">Signature Developments</span>
            <div className="divider-gold" />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-cream leading-tight">
              Featured <span className="italic text-gold">Projects</span>
            </h2>
          </div>
          <p className="text-luxury-cream/50 max-w-sm text-sm leading-relaxed font-light">
            Each development is a masterpiece — conceived with precision, built
            with integrity, and delivered to exceed every expectation.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured large card */}
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="group relative overflow-hidden cursor-pointer lg:row-span-1"
            >
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

                {/* Status badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 ${
                      project.status === "Now Selling"
                        ? "bg-gold text-dark"
                        : project.status === "Launching Soon"
                        ? "bg-dark-3 text-gold border border-gold/40"
                        : "bg-dark-3 text-luxury-cream/60 border border-luxury-cream/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-gold/0 group-hover:bg-gold flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-dark" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs text-gold tracking-widest uppercase mb-2">{project.category}</div>
                  <h3 className="font-serif text-3xl font-light text-luxury-cream mb-3">{project.title}</h3>
                  <div className="flex items-center gap-4 text-luxury-cream/50 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-gold" /> {project.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gold/40" />
                    <span>{project.units}</span>
                  </div>
                  {/* Bottom gold line */}
                  <div className="mt-4 w-0 group-hover:w-full h-px bg-gold/60 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Right column stacked */}
          <div className="flex flex-col gap-6">
            {projects.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
                className="group relative overflow-hidden cursor-pointer flex-1"
              >
                <div className="relative h-[248px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 ${
                        project.status === "Now Selling"
                          ? "bg-gold text-dark"
                          : project.status === "Launching Soon"
                          ? "bg-dark-3 text-gold border border-gold/40"
                          : "bg-dark-3 text-luxury-cream/50 border border-luxury-cream/10"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 w-9 h-9 bg-gold/0 group-hover:bg-gold flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} className="text-dark" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] text-gold tracking-widest uppercase mb-1">{project.category}</div>
                    <h3 className="font-serif text-xl font-light text-luxury-cream mb-2">{project.title}</h3>
                    <div className="flex items-center gap-3 text-luxury-cream/50 text-[11px]">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-gold" /> {project.location}
                      </span>
                    </div>
                    <div className="mt-3 w-0 group-hover:w-full h-px bg-gold/60 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

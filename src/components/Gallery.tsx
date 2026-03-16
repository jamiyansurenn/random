"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "/project_one.png", caption: "Penthouse Living Room", category: "Interior" },
  { src: "/project_two.png", caption: "The Obsidian Tower", category: "Exterior" },
  { src: "/project_three.png", caption: "The Riviera Villa", category: "Exterior" },
  { src: "/gallery_one.png", caption: "Rooftop Garden Terrace", category: "Amenities" },
  { src: "/gallery_two.png", caption: "Master Bathroom Suite", category: "Interior" },
  { src: "/gallery_three.png", caption: "Designer Kitchen", category: "Interior" },
];

const categories = ["All", "Interior", "Exterior", "Amenities"];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | { src: string; caption: string }>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-pad bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="tag-label">Visual Journey</span>
            <div className="divider-gold" />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-cream">
              Our <span className="italic text-gold">Gallery</span>
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-semibold tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-dark"
                    : "border border-gold/20 text-luxury-cream/60 hover:border-gold/50 hover:text-luxury-cream/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src + img.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative group cursor-pointer overflow-hidden ${
                i === 0 ? "md:col-span-2 row-span-1" : ""
              }`}
              onClick={() => setLightbox({ src: img.src, caption: img.caption })}
            >
              <div className="relative h-60 md:h-72">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={85}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 border border-white/60 flex items-center justify-center">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-gradient-to-t from-dark/90 to-transparent">
                  <div className="text-[10px] text-gold tracking-widest uppercase mb-1">{img.category}</div>
                  <div className="text-sm text-luxury-cream font-light">{img.caption}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 border border-gold/30 flex items-center justify-center text-luxury-cream/70 hover:text-gold hover:border-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh]">
              <Image
                src={lightbox.src}
                alt={lightbox.caption}
                fill
                className="object-contain"
                quality={95}
              />
            </div>
            <div className="text-center mt-4 font-serif text-lg text-luxury-cream/70 italic">
              {lightbox.caption}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

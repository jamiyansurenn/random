"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Luxury Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Cities & Counting" },
];

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        videoRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Parallax background */}
      <div ref={videoRef} className="absolute inset-0 scale-110">
        <Image
          src="/hero_bg.png"
          alt="Luxury real estate"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
      </div>

      {/* Animated grain overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vertical gold line dec */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "120px" }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-[15%] right-[8%] w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent hidden xl:block"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="tag-label">Premier Property Development</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-6xl md:text-7xl xl:text-[90px] font-light leading-[1.05] tracking-tight mb-6"
          >
            Where{" "}
            <span className="italic text-gold-gradient">Luxury</span>
            <br />
            Meets Vision.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-luxury-cream/60 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl"
          >
            Crafting iconic residences and landmark developments that redefine
            the art of sophisticated living — for those who accept nothing less
            than extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary group"
            >
              Explore Properties
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline"
            >
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gold/20 bg-dark/60 backdrop-blur-md">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`py-6 px-8 flex flex-col gap-1 ${
                  i !== 0 ? "border-l border-gold/10" : ""
                } hover:bg-gold/5 transition-colors duration-300`}
              >
                <span className="font-serif text-3xl font-light text-gold">
                  {s.value}
                </span>
                <span className="text-xs text-luxury-cream/50 tracking-widest uppercase font-sans">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-36 right-8 hidden md:flex flex-col items-center gap-2 text-luxury-cream/40 hover:text-gold transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mb-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}

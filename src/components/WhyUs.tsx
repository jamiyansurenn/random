"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Zap, HeartHandshake, Gem, Clock } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Uncompromising Quality",
    desc: "Every material, every finish, every detail is selected for its excellence. We refuse to compromise on craft.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    desc: "Our portfolio has earned international recognition for innovation, aesthetics, and livability.",
  },
  {
    icon: Shield,
    title: "Trusted & Transparent",
    desc: "We operate with radical transparency — from pricing to timelines, no surprises, ever.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "15 years, 200+ projects, and a track record of delivering on time — always.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Service",
    desc: "Dedicated relationship managers ensure your journey is seamless from first viewing to handover.",
  },
  {
    icon: Zap,
    title: "Smart Living Technology",
    desc: "Every Novara residence is equipped with integrated smart-home systems for effortless modern living.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-pad bg-dark-3 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[200px] font-bold text-white/[0.02] leading-none tracking-tighter">
          NOVARA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag-label">The Novara Difference</span>
          <div className="divider-gold mx-auto" />
          <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-cream">
            Why Choose <span className="italic text-gold">Novara?</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-dark-3 p-10 group hover:bg-dark-4 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 group-hover:w-16 group-hover:h-16 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 -translate-x-8 -translate-y-8 rotate-45" />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                <r.icon size={20} className="text-gold" />
              </div>

              <h3 className="font-sans text-base font-semibold text-luxury-cream mb-3 tracking-wide">
                {r.title}
              </h3>
              <p className="text-luxury-cream/50 text-sm leading-relaxed font-light">{r.desc}</p>

              {/* Bottom accent line */}
              <div className="mt-6 w-8 h-px bg-gold/30 group-hover:w-full group-hover:bg-gold/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

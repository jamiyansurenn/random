"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Bed, Bath, Square, ArrowRight } from "lucide-react";

const apartments = [
  {
    type: "Studio Deluxe",
    price: "$285,000",
    priceLabel: "Starting from",
    beds: 0,
    baths: 1,
    size: "48",
    floor: "5–12",
    features: ["Floor-to-ceiling windows", "Designer kitchen", "Smart home system", "Concierge service"],
    highlight: false,
  },
  {
    type: "1-Bedroom Suite",
    price: "$420,000",
    priceLabel: "Starting from",
    beds: 1,
    baths: 1,
    size: "72",
    floor: "10–25",
    features: ["Private balcony", "Marble bathrooms", "Walk-in wardrobe", "City skyline views", "Smart home system"],
    highlight: true,
  },
  {
    type: "2-Bedroom Residence",
    price: "$680,000",
    priceLabel: "Starting from",
    beds: 2,
    baths: 2,
    size: "110",
    floor: "18–35",
    features: ["Dual balconies", "En-suite master", "Open dining terrace", "Private storage", "Priority parking"],
    highlight: false,
  },
  {
    type: "Penthouse",
    price: "$1,200,000",
    priceLabel: "From",
    beds: 3,
    baths: 3,
    size: "220",
    floor: "38–40",
    features: ["Rooftop terrace", "Private pool access", "Butler service", "Double-height ceilings", "Bespoke finishes"],
    highlight: false,
  },
];

export default function Apartments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(1);

  return (
    <section id="apartments" className="section-pad bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag-label">Residences for Sale</span>
          <div className="divider-gold mx-auto" />
          <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-cream">
            Available <span className="italic text-gold">Apartments</span>
          </h2>
          <p className="mt-4 text-luxury-cream/50 max-w-lg mx-auto text-sm font-light leading-relaxed">
            From intimate studios to sky-high penthouses — find the residence
            that matches your vision of the perfect life.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {apartments.map((apt, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-xs font-medium tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-300 ${
                active === i
                  ? "bg-gold text-dark"
                  : "bg-dark-3 text-luxury-cream/50 hover:text-luxury-cream border border-gold/10 hover:border-gold/30"
              }`}
            >
              {apt.type}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apartments.map((apt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setActive(i)}
              className={`relative cursor-pointer p-8 border transition-all duration-400 group ${
                active === i
                  ? "border-gold bg-gold/5"
                  : "border-gold/10 bg-dark-3 hover:border-gold/30"
              }`}
            >
              {/* Recommended badge */}
              {apt.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-dark text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Type */}
              <div className="text-[10px] text-gold tracking-widest uppercase mb-2">{apt.type}</div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-[11px] text-luxury-cream/40 mb-1">{apt.priceLabel}</div>
                <div className="font-serif text-3xl font-light text-luxury-cream">{apt.price}</div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gold/10">
                {apt.beds > 0 && (
                  <span className="flex items-center gap-1.5 text-xs text-luxury-cream/60">
                    <Bed size={13} className="text-gold" /> {apt.beds}
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-xs text-luxury-cream/60">
                  <Bath size={13} className="text-gold" /> {apt.baths}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-luxury-cream/60">
                  <Square size={13} className="text-gold" /> {apt.size}m²
                </span>
              </div>

              {/* Floor */}
              <div className="text-[11px] text-luxury-cream/40 mb-4">
                Floors {apt.floor} available
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {apt.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[12px] text-luxury-cream/60">
                    <Check size={12} className="text-gold mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full flex items-center justify-between text-[11px] font-semibold tracking-[0.12em] uppercase py-3 px-5 transition-all duration-300 group ${
                  active === i
                    ? "bg-gold text-dark"
                    : "border border-gold/30 text-gold hover:bg-gold hover:text-dark"
                }`}
              >
                Request Info
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

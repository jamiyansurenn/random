"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Award, label: "Award-winning Design", desc: "Recognized globally for architectural excellence" },
  { icon: Building2, label: "Iconic Developments", desc: "Landmark towers that define city skylines" },
  { icon: Users, label: "Trusted Partnerships", desc: "Decades of trust with investors and families" },
  { icon: TrendingUp, label: "Strong ROI", desc: "Properties that appreciate year over year" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-pad bg-dark-2 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image block */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/project_two.png"
                alt="Novara Estate Development"
                fill
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 max-w-[220px]"
            >
              <div className="font-serif text-4xl font-light text-gold mb-1">15+</div>
              <div className="text-xs text-luxury-cream/50 tracking-widest uppercase">
                Years of Architectural Excellence
              </div>
            </motion.div>
            {/* Gold corner dec */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 -translate-x-[0px] translate-y-0" style={{ bottom: -32, right: -32 }} />
          </motion.div>

          {/* Text block */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <span className="tag-label">Our Story</span>
              <div className="divider-gold" />
              <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight text-luxury-cream">
                Built on <span className="italic text-gold">Vision</span>,<br />
                Driven by Craft.
              </h2>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-luxury-cream/60 leading-relaxed font-light text-base"
            >
              Novara Estate was founded on a singular belief — that exceptional
              architecture has the power to transform lives. Over fifteen years,
              we have crafted residences, commercial landmarks, and integrated
              communities that stand as enduring symbols of quality and ambition.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-luxury-cream/60 leading-relaxed font-light text-base"
            >
              Every project is a testament to our obsessive attention to detail,
              our collaboration with world-class architects, and our commitment
              to delivering spaces that inspire — not just impress.
            </motion.p>

            {/* Highlights */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {highlights.map((h) => (
                <div key={h.label} className="flex gap-3 items-start group">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <h.icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-luxury-cream/90 mb-0.5">{h.label}</div>
                    <div className="text-[12px] text-luxury-cream/40">{h.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

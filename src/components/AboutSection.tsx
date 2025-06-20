import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building, Rocket, Zap } from "lucide-react";

const aboutItems = [
  {
    icon: <Building size={28} />,
    title: "Enterprise Experience",
    description: "2+ years at Infosys serving 10,000+ users in production.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Startup Builder",
    description: "Built a complete SaaS platform from scratch in 2 months.",
  },
  {
    icon: <Zap size={28} />,
    title: "AI Integration",
    description: "Expertise in incorporating AI features into SaaS products.",
  },
];

const AboutSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Animate the title to fade out as cards animate in
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);

  return (
    <section id="about" ref={targetRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My Approach
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I combine enterprise-grade discipline with startup agility.
          </p>
        </motion.div>

        <div className="container grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => {
            // Each card animates in during a specific scroll segment and STAYS visible.
            const start = 0.2 + index * 0.2; // Staggered start times
            const end = start + 0.2;
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);

            return (
              <motion.div
                key={index}
                style={{ opacity, scale }}
                className="card p-8 text-center bg-white/50 backdrop-blur-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

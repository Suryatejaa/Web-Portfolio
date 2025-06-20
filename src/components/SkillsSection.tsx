import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const skillsByCategory = {
  Frontend: [
    { name: "React", angle: 0 },
    { name: "TypeScript", angle: 60 },
    { name: "TailwindCSS", angle: 120 },
  ],
  Backend: [
    { name: "Node.js", angle: 180 },
    { name: "Express", angle: 240 },
    { name: "Docker", angle: 300 },
  ],
  "Database & AI": [
    { name: "MongoDB", angle: 30 },
    { name: "SQL", angle: 90 },
    { name: "AI APIs", angle: 150 },
    { name: "Microservices", angle: 210 },
  ],
};

type SkillCategoryProps = {
  category: keyof typeof skillsByCategory;
  scrollYProgress: any; // You can use MotionValue<number> if you want stricter typing
  range: number[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, scrollYProgress, range }) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, range, [0.5, 1, 1, 0.5]);
  const skills = skillsByCategory[category];
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const radius = isDesktop ? 180 : 120; // smaller radius for mobile

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-100 absolute">
        {category}
      </h3>
      {skills.map((skill, i) => {
        const x = radius * Math.cos((skill.angle * Math.PI) / 180);
        const y = radius * Math.sin((skill.angle * Math.PI) / 180);
        return (
          <motion.div
            key={skill.name}
            className="absolute flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            style={{
              transform: `translateX(${x}px) translateY(${y}px)`,
            }}
          >
            <span className="text-white font-medium">{skill.name}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const SkillsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="skills"
      ref={targetRef}
      className="relative h-[300vh] bg-slate-900"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">My Tech Universe</h2>
          <p className="text-slate-400 mt-2">
            A look at the technologies I command.
          </p>
        </motion.div>

        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {/* Central glowing orb */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-500/30 rounded-full blur-2xl" />

          <SkillCategory
            category="Frontend"
            scrollYProgress={scrollYProgress}
            range={[0, 0.1, 0.3, 0.4]}
          />
          <SkillCategory
            category="Backend"
            scrollYProgress={scrollYProgress}
            range={[0.3, 0.4, 0.6, 0.7]}
          />
          <SkillCategory
            category="Database & AI"
            scrollYProgress={scrollYProgress}
            range={[0.6, 0.7, 0.9, 1.0]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

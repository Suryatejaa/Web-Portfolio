import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Systems Associate",
    company: "Infosys Limited",
    duration: "Jan 2023 - Present",
    highlights: [
      "Maintained enterprise apps for 10,000+ users.",
      "Implemented automated testing, reducing issues by 30%.",
    ],
  },
  {
    title: "Independent SaaS Developer",
    company: "Side Project",
    duration: "2 Months | 2024",
    highlights: [
      "Built a PG Management SaaS platform from concept to launch.",
      "Architected a microservices infrastructure using Docker.",
    ],
  },
];

const ExperienceSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section
      id="experience"
      ref={targetRef}
      className="relative h-[200vh] bg-slate-100 py-20"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center">
        <motion.div className="text-center my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Career Journey
          </h2>
        </motion.div>

        <div className="container flex">
          {/* Timeline */}
          <div className="w-10 flex-shrink-0 flex justify-center">
            <svg width="2" height="100%" className="h-full">
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="#2563eb"
                strokeWidth="2"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Experience Cards */}
          <div className="flex-grow space-y-24 md:space-y-32">
            {experiences.map((exp, index) => {
              const start = 0.2 + index * 0.3;
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1],
                [0, 1]
              );
              const x = useTransform(
                scrollYProgress,
                [start, start + 0.1],
                ["20px", "0px"]
              );

              return (
                <motion.div
                  key={index}
                  style={{ opacity, x }}
                  className="relative"
                >
                  <div className="absolute -left-[35px] md:-left-20 top-0 w-8 h-8 bg-primary-500 rounded-full border-4 border-slate-100" />
                  <div className="card p-4 mr-4 md:ml-0">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {exp.title}
                      </h3>
                      <p className="text-slate-500 text-sm">{exp.duration}</p>
                    </div>
                    <p className="text-primary-600 font-medium mb-4">
                      {exp.company}
                    </p>
                    <ul className="space-y-2 text-slate-600 list-disc list-inside">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

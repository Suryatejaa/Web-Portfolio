import React, { Suspense } from "react";
import { motion } from "framer-motion";
import SkillsSolarSystem from "./SkillsSolarSystem"; // Updated import

const SkillsSection = () => {
  return (
    <section id="skills" className="relative h-screen bg-slate-900">
      <div className="h-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-8 md:mb-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold">My Tech Universe</h2>
          <p className="text-slate-400 mt-2">
            Drag to explore the solar system of my skills.
          </p>
        </motion.div>

        <div className="w-full h-[500px] md:h-[600px]">
          <Suspense
            fallback={
              <div className="text-white flex items-center justify-center h-full">
                Summoning the solar system...
              </div>
            }
          >
            <SkillsSolarSystem />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

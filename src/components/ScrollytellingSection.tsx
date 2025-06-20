import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Database, Zap, Cloud } from "lucide-react";

const ScrollytellingSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const x = useTransform(scrollYProgress, [0, 0.1], ["50%", "0%"]);

  const feature1Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.4],
    [0, 1, 0]
  );
  const feature2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65],
    [0, 1, 0]
  );
  const feature3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.9],
    [0, 1, 0]
  );

  return (
    <section
      ref={targetRef}
      id="process"
      className="relative h-[300vh] bg-slate-900 text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden p-4">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl font-bold">A Look Inside My Process</h2>
          <p className="text-slate-400">Scroll to see how I build products.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-6xl">
          <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left">
            <motion.div style={{ opacity: feature1Opacity }}>
              <h3 className="text-2xl font-bold text-primary-500 mb-2">
                Microservices Architecture
              </h3>
              <p className="text-slate-300">
                I build robust backends with independent, scalable microservices
                using Docker.
              </p>
            </motion.div>
            <motion.div style={{ opacity: feature2Opacity }}>
              <h3 className="text-2xl font-bold text-primary-500 mb-2">
                AI-Powered Features
              </h3>
              <p className="text-slate-300">
                Integrating AI to create intelligent, automated workflows that
                provide real value.
              </p>
            </motion.div>
            <motion.div style={{ opacity: feature3Opacity }}>
              <h3 className="text-2xl font-bold text-primary-500 mb-2">
                Cloud Deployment
              </h3>
              <p className="text-slate-300">
                Deploying applications on cloud platforms, ensuring high
                availability and performance.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ scale, x }}
            className="w-56 h-[420px] md:w-64 md:h-[480px] bg-black rounded-3xl border-8 border-slate-700 p-4 flex flex-col items-center justify-center"
          >
            <div className="w-full h-full bg-slate-800 rounded-xl relative overflow-hidden">
              <motion.div
                style={{ opacity: feature1Opacity }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
              >
                <Database className="w-16 h-16 text-primary-500 mb-4" />
                <p>Independent Services</p>
              </motion.div>
              <motion.div
                style={{ opacity: feature2Opacity }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
              >
                <Zap className="w-16 h-16 text-primary-500 mb-4" />
                <p>Smart Automation</p>
              </motion.div>
              <motion.div
                style={{ opacity: feature3Opacity }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
              >
                <Cloud className="w-16 h-16 text-primary-500 mb-4" />
                <p>Vercel & AWS</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PurplePG",
    description: "A complete PG Management SaaS platform.",
    technologies: ["MERN", "Docker", "Microservices"],
    link: "http://www.purple-pgs.space/",
  },
  {
    title: "CALCIE",
    description: "A secret message platform with secure passcodes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://www.calcie.site/",
  },
  {
    title: "EchoLift",
    description: "A robust backend with MongoDB and JWT auth.",
    technologies: ["Express.js", "MongoDB", "JWT"],
    link: "",
  },
];

const ProjectsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[300vh] bg-slate-100"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My Work
          </h2>
        </motion.div>

        <motion.div style={{ x }} className="flex gap-4 md:gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                className="card w-[85vw] md:w-[450px] flex-shrink-0 p-8 bg-white/80 backdrop-blur-lg border"
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    Visit Site <ExternalLink size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

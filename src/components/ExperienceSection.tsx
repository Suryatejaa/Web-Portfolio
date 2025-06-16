import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Systems Associate",
      company: "Infosys Limited",
      duration: "January 2023 - Present",
      highlights: [
        "Maintained and enhanced enterprise applications serving 10,000+ users in production support environment",
        "Implemented automated testing procedures reducing deployment issues by 30%",
        "Gained expertise in large-scale system architecture and enterprise practices through SAP support team"
      ],
      technologies: ['Java', 'SQL', 'Unix', 'SAP', 'Enterprise Applications'],
      animationDirection: 'left'
    },
    {
      title: "Independent SaaS Developer",
      company: "Side Project",
      duration: "2 Months | 2024",
      highlights: [
        "Built complete PG Management SaaS platform from concept to deployment in 2 months",
        "Architected microservices infrastructure using Docker containerization and API gateways",
        "Achievement: Delivered production-ready MVP while maintaining 9-5 job commitment"
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Microservices', 'AI Integration'],
      animationDirection: 'right'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: exp.animationDirection === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                  <p className="text-primary-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-slate-600">{exp.duration}</div>
              </div>

              <div className="space-y-3 text-slate-700">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p dangerouslySetInnerHTML={{ __html: highlight }} />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

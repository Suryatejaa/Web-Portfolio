import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, Database, Cloud, Code, Globe, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "PurplePG",
      description: "Complete PG Management SaaS platform with microservices architecture, AI assistance, and automated workflows.",
      features: [
        { icon: <Zap className="w-4 h-4 text-primary-500" />, text: "60% reduction in PG management overhead" },
        { icon: <Database className="w-4 h-4 text-primary-500" />, text: "8+ independent microservices" },
        { icon: <Cloud className="w-4 h-4 text-primary-500" />, text: "Docker containerization" }
      ],
      technologies: ['MERN', 'Docker', 'Microservices', 'AI'],
      delay: 0
    },
    {
      title: "EchoLift",
      description: "Backend platform with MongoDB integration, JWT authentication, and comprehensive API design.",
      features: [
        { icon: <Code className="w-4 h-4 text-primary-500" />, text: "RESTful API endpoints" },
        { icon: <Database className="w-4 h-4 text-primary-500" />, text: "MongoDB optimization" }
      ],
      technologies: ['Express.js', 'MongoDB', 'JWT'],
      delay: 0.1
    },
    {
      title: "CALCIE",
      description: "Secret message platform with secure passcode system and automatic message expiration.",
      features: [
        { icon: <Globe className="w-4 h-4 text-primary-500" />, text: "Live at www.calcie.site" },
        { icon: <Smartphone className="w-4 h-4 text-primary-500" />, text: "Responsive design" }
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      delay: 0.2
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Projects</h2>
          <p className="text-xl text-slate-600">Building solutions that make a difference</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true }}
              className="card p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-primary-600 transition-colors" />
              </div>

              <p className="text-slate-600 mb-4">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    {feature.icon}
                    {feature.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs">
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

export default ProjectsSection;

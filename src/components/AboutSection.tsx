import React from 'react';
import { motion } from 'framer-motion';
import { Building, Rocket, Zap } from 'lucide-react';

const AboutSection = () => {
  const aboutItems = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Enterprise Experience",
      description: "2+ years at Infosys serving 10,000+ users in production environments"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Startup Builder",
      description: "Built complete PG Management SaaS platform in 2 months while maintaining full-time job"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Integration",
      description: "Expertise in incorporating AI features and automation into SaaS products"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about building scalable solutions and turning ideas into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

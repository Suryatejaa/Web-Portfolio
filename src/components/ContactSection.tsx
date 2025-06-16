import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to contribute to scaling challenges and prepare for future entrepreneurial ventures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a
                    href="mailto:illasuryanani2001@gmail.com?subject=Portfolio Contact - Startup Opportunity&body=Hi Surya,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards"
                    className="text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    illasuryanani2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <a
                    href="tel:+919346358559"
                    className="text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    +91-9346358559
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-600">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/surya-teja-illa-706108232/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Suryatejaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl p-8 text-black"
          >
            <h3 className="text-2xl font-bold mb-6">🎯 Career Objective</h3>
            <p className="text-black leading-relaxed mb-6">
              Seeking a challenging Full-Stack Developer role in a high-growth startup where I can leverage my
              product development experience, technical skills, and entrepreneurial mindset to contribute to
              scaling challenges while gaining the experience needed to launch my own startup venture.
            </p>
            <p className="text-black text-sm">
              Particularly interested in FinTech, SaaS, and AI-driven platforms with focus on backend systems
              and microservices architecture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

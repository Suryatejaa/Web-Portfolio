import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, Download, ChevronDown, Github, Linkedin, MapPin, Phone } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="section-padding pt-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Rocket className="w-4 h-4" />
                Available for Startup Opportunities
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Full-Stack <span className="gradient-text">Developer</span> &
                <span className="gradient-text"> Startup</span> Enthusiast
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Entrepreneurial developer with 2+ years of experience building complete SaaS products from scratch.
                Specialized in microservices architecture, AI integration, and rapid prototyping.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.href = 'mailto:illasuryanani2001@gmail.com?subject=Let\'s Connect - Startup Opportunity&body=Hi Surya,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards'}
                  className="btn-primary"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="mailto:illasuryanani2001@gmail.com?subject=Portfolio Contact&body=Hi Surya,%0D%0A%0D%0AI found your portfolio and would like to connect.%0D%0A%0D%0ABest regards"
                  className="text-slate-600 hover:text-primary-600 transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/surya-teja-illa-706108232/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Suryatejaa" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl p-8 text-black">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+91-9346358559</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm opacity-90">Users Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Rocket,
  Mail,
  ChevronDown,
  Github,
  Linkedin,
  Phone,
  MessageCircle,
} from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  // IMPORTANT: Replace with your actual phone number
  const phoneNumber = "+919346358559"; // Use international format without '+' or spaces for WhatsApp
  const telNumber = "+91-934-635-8559"; // Use a readable format for the tel link

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={targetRef} id="hero" className="relative h-[150vh]">
      <motion.div
        style={{ opacity, scale }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            <Rocket className="w-4 h-4" />
            Available for Startup Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight mt-6"
          >
            Full-Stack <span className="gradient-text">Developer</span> &
            <span className="gradient-text"> Startup</span> Enthusiast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6"
          >
            I build scalable, user-centric SaaS products from scratch, turning
            bold ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-center items-center gap-4 mt-8"
          >
            <button
              onClick={() =>
                (window.location.href = "mailto:illasuryanani2001@gmail.com")
              }
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </button>
            <div className="flex items-center space-x-4">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href={`tel:${telNumber}`}
                className="text-slate-500 hover:text-primary-600 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/surya-teja-illa-706108232/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Suryatejaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-slate-500 hover:text-primary-600 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

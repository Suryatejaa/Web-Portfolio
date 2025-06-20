import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  // IMPORTANT: Replace with your actual phone number
  const phoneNumber = "+919346358559"; // Use international format without '+' or spaces for WhatsApp
  const telNumber = "+91-934-635-8559"; // Use a readable format for the tel link

  return (
    <section
      id="contact"
      className="relative h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-full flex flex-col items-center justify-center text-center text-white p-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Let's Build Together
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          I'm ready to tackle new challenges and contribute to a high-growth
          startup.
        </p>
        <a
          href="mailto:illasuryanani2001@gmail.com"
          className="btn-primary text-lg"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
        <div className="flex space-x-6 mt-8">
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle />
          </a>
          <a
            href={`tel:${telNumber}`}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Call"
          >
            <Phone />
          </a>
          <a
            href="https://www.linkedin.com/in/surya-teja-illa-706108232/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Suryatejaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

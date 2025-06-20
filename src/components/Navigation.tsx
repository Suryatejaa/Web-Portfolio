import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, Linkedin, Github } from "lucide-react";

type NavigationProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  scrollToSection: (section: string) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  scrollToSection,
  setIsMobileMenuOpen,
}) => {
  const navItems = [
    "About",
    "Experience",
    "Process",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Surya Teja Illa
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary-600"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl"
          >
            <div className="p-4 space-y-2 pt-20">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navigation;

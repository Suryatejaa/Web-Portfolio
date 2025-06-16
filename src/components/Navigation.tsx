// filepath: d:\project\TechProfile\src\components\Navigation.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react';

type NavigationProps = {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    scrollToSection: (section: string) => void;
    setIsMobileMenuOpen: (open: boolean) => void;
};

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen, toggleMobileMenu, scrollToSection, setIsMobileMenuOpen }) => {
    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-bold gradient-text"
                        >
                            Surya Teja Illa
                        </motion.div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
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

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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

            {/* Mobile Navigation - Completely Separate Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-50">
                    {/* Background Overlay */}
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    
                    {/* Menu Panel */}
                    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                        <div className="flex items-center justify-between p-4 border-b border-slate-200">
                            <h2 className="text-lg font-semibold text-slate-900">Menu</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-md text-slate-500 hover:text-slate-700"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="p-4 space-y-2">
                            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        scrollToSection(item.toLowerCase());
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                            
                            <div className="pt-4 mt-4 border-t border-slate-200">
                                <button 
                                    onClick={() => {
                                        window.location.href = 'mailto:illasuryanani2001@gmail.com?subject=Let\'s Connect - Startup Opportunity&body=Hi Surya,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards';
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full btn-primary text-sm mb-4"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Get In Touch
                                </button>
                                
                                <div className="flex justify-center space-x-4">
                                    <a 
                                        href="https://www.linkedin.com/in/surya-teja-illa-706108232/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-slate-600 hover:text-primary-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a 
                                        href="https://github.com/Suryatejaa" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-slate-600 hover:text-primary-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a 
                                        href="mailto:illasuryanani2001@gmail.com" 
                                        className="text-slate-600 hover:text-primary-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
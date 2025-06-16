import React, { useState } from 'react';
import {
    Navigation,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    Footer
} from './components';

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        console.log('Scrolling to section:', sectionId);
        const element = document.getElementById(sectionId);
        console.log('Element found:', element);

        if (element) {
            // Close mobile menu first if it's open
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                // Add delay for mobile menu close animation
                setTimeout(() => {
                    performScroll(element);
                }, 300);
            } else {
                performScroll(element);
            }
        }
    };

    const performScroll = (element) => {
        // Add offset for fixed navbar
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                scrollToSection={scrollToSection}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <HeroSection scrollToSection={scrollToSection} />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;
import React, { useState } from 'react';
import {
    Navigation,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ScrollytellingSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    Footer
} from './components';

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const performScroll = (element: HTMLElement) => {
        const navbarHeight = 64; // Navbar is 4rem/64px tall
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                setTimeout(() => performScroll(element), 300); // Wait for menu to close
            } else {
                performScroll(element);
            }
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-slate-100">
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                scrollToSection={scrollToSection}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main>
                <HeroSection scrollToSection={scrollToSection} />
                <AboutSection />
                <ExperienceSection />
                <ScrollytellingSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
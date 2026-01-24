import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { ASSETS } from '../../lib/constants';

const NavButton = ({ label, active, onClick, isTransparent }) => {
    let baseClasses = "font-medium transition relative group px-2 py-1 ";
    if (isTransparent) {
        baseClasses += active ? "text-white" : "text-slate-100 hover:text-white";
    } else {
        baseClasses += active ? "text-brand-dark" : "text-slate-500 hover:text-brand-dark";
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
        >
            {label}
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${isTransparent ? 'bg-white' : 'bg-brand-primary'} ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </button>
    );
};

const MobileNavButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition ${active ? 'bg-blue-50 text-brand-dark border-l-4 border-brand-dark' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-dark'}`}
    >
        {label}
    </button>
);

const Navbar = ({ activePage, navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparentPage = ['home', 'about', 'contact'].includes(activePage);

    // Auto-close menu when navigating
    const handleNavigation = (page) => {
        navigateTo(page);
        setIsMenuOpen(false);
    };

    return (
        <nav style={{ zIndex: 9999 }} className={`fixed top-0 left-0 w-full transition-all duration-300 ${isTransparentPage && !scrolled ? 'bg-transparent py-6' : 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
{/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
                        <img src={ASSETS.logo} alt="CA Mold Solutions" className="h-16 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavButton label="Home" active={activePage === 'home'} onClick={() => handleNavigation('home')} isTransparent={isTransparentPage && !scrolled} />
                        <NavButton label="About" active={activePage === 'about'} onClick={() => handleNavigation('about')} isTransparent={isTransparentPage && !scrolled} />
                        <NavButton label="Certifications" active={activePage === 'certifications'} onClick={() => handleNavigation('certifications')} isTransparent={isTransparentPage && !scrolled} />
                        <NavButton label="Contact" active={activePage === 'contact'} onClick={() => handleNavigation('contact')} isTransparent={isTransparentPage && !scrolled} />

                        <a
                            href="tel:7073505074"
                            className="bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            (707) 350-5074
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`
                                focus:outline-none p-2 rounded-full transition-colors 
                                ${isTransparentPage && !scrolled && !isMenuOpen
                                    ? 'text-white bg-black/20 backdrop-blur-sm hover:bg-black/30'
                                    : 'text-brand-dark bg-gray-100 hover:bg-gray-200'
                                }
                            `}
                        >
                            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div style={{ zIndex: 9998 }} className="md:hidden bg-white border-t border-gray-100 absolute left-0 w-full shadow-xl animate-in slide-in-from-top-5">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <MobileNavButton label="Home" onClick={() => handleNavigation('home')} active={activePage === 'home'} />
                        <MobileNavButton label="About Us" onClick={() => handleNavigation('about')} active={activePage === 'about'} />
                        <MobileNavButton label="Certifications" onClick={() => handleNavigation('certifications')} active={activePage === 'certifications'} />
                        <MobileNavButton label="Contact" onClick={() => handleNavigation('contact')} active={activePage === 'contact'} />
                        <a href="tel:7073505074" className="block w-full text-center mt-4 bg-brand-primary text-white px-3 py-3 rounded-md font-bold text-lg shadow-md">
                            Call Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

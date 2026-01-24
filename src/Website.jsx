import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ThreeCanvas from './components/ThreeCanvas';
import Spores from './components/effects/Spores';
import Flashlight from './components/effects/Flashlight';
import { BackgroundBeams } from "./components/ui/BackgroundBeams";
import { InfiniteMovingCards } from "./components/ui/InfiniteMovingCards";
import {
    Phone,
    Mail,
    Menu,
    X,
    ShieldCheck,
    Clock,
    Award,
    Droplets,
    Hammer,
    Search,
    CheckCircle,
    MapPin,
    ArrowRight,
    ChevronRight,
    Star,
    Check
} from 'lucide-react';

// --- Assets from Original Site ---
const ASSETS = {
    logo: "https://images.squarespace-cdn.com/content/v1/695e124922ee964abeffdd7f/5c904cbf-4c93-4b78-bda1-605810c585d2/mold.png?format=1500w",
    heroBg: "https://images.squarespace-cdn.com/content/v1/695e124922ee964abeffdd7f/3afe0f26-ea59-467c-8422-779a5c0b9cb0/MOD+4.PNG",
    vanImage: "https://images.squarespace-cdn.com/content/v1/695e124922ee964abeffdd7f/482b5316-12f4-415a-9d94-dc5f845d4c73/IMG_3311.jpg",
    moldImage: "https://images.squarespace-cdn.com/content/v1/695e124922ee964abeffdd7f/2315047b-7242-47c8-ab08-4a8620cbe4f9/mold.png"
};

const Website = () => {
    const [activePage, setActivePage] = useState('home');
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

    const navigateTo = (page) => {
        setActivePage(page);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const isTransparentPage = ['home', 'about', 'contact'].includes(activePage);

    return (
        <div className="font-sans text-gray-800 antialiased bg-gray-50 min-h-screen flex flex-col fog-bg">

            {/* Navigation */}
            <nav style={{ zIndex: 9999 }} className={`fixed top-0 left-0 w-full transition-all duration-300 ${isTransparentPage && !scrolled ? 'bg-transparent py-6' : 'bg-white shadow-lg py-2'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
                            <img src={ASSETS.logo} alt="CA Mold Solutions" className="h-20 w-auto object-contain" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <NavButton label="Home" active={activePage === 'home'} onClick={() => navigateTo('home')} isTransparent={isTransparentPage && !scrolled} />
                            <NavButton label="About" active={activePage === 'about'} onClick={() => navigateTo('about')} isTransparent={isTransparentPage && !scrolled} />
                            <NavButton label="Certifications" active={activePage === 'certifications'} onClick={() => navigateTo('certifications')} isTransparent={isTransparentPage && !scrolled} />
                            <NavButton label="Contact" active={activePage === 'contact'} onClick={() => navigateTo('contact')} isTransparent={isTransparentPage && !scrolled} />

                            <a
                                href="tel:7073505074"
                                className="bg-blue-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-800 transition flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                                        : 'text-blue-900 bg-gray-100 hover:bg-gray-200'
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
                            <MobileNavButton label="Home" onClick={() => navigateTo('home')} active={activePage === 'home'} />
                            <MobileNavButton label="About Us" onClick={() => navigateTo('about')} active={activePage === 'about'} />
                            <MobileNavButton label="Certifications" onClick={() => navigateTo('certifications')} active={activePage === 'certifications'} />
                            <MobileNavButton label="Contact" onClick={() => navigateTo('contact')} active={activePage === 'contact'} />
                            <a href="tel:7073505074" className="block w-full text-center mt-4 bg-green-600 text-white px-3 py-3 rounded-md font-bold text-lg shadow-md">
                                Call Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content Area - Swaps based on state */}
            <main className={`flex-grow ${isTransparentPage ? 'pt-0' : 'pt-24 md:pt-28'}`}>
                {activePage === 'home' && <HomePage navigateTo={navigateTo} />}
                {activePage === 'about' && <AboutPage navigateTo={navigateTo} />}
                {activePage === 'certifications' && <CertificationsPage navigateTo={navigateTo} />}
                {activePage === 'contact' && <ContactPage />}
            </main>

            {/* Footer */}
            <footer className="bg-blue-950 text-slate-300 py-12 border-t border-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-4 bg-white w-fit p-2 rounded-lg">
                                <img src={ASSETS.logo} alt="CA Mold Solutions" className="h-10 w-auto" />
                            </div>
                            <p className="text-sm max-w-sm mb-4 leading-relaxed text-slate-400">
                                Create a healthier indoor environment today. We provide expert inspection, containment, and remediation for homes and businesses throughout California.
                            </p>
                            <div className="flex space-x-4">
                                <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:contact@camoldsolutions.com" />
                                <SocialIcon icon={<Phone className="w-5 h-5" />} href="tel:7073505074" />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => navigateTo('home')} className="hover:text-green-400 transition">Home</button></li>
                                <li><button onClick={() => navigateTo('about')} className="hover:text-green-400 transition">About Us</button></li>
                                <li><button onClick={() => navigateTo('certifications')} className="hover:text-green-400 transition">Certifications</button></li>
                                <li><button onClick={() => navigateTo('contact')} className="hover:text-green-400 transition">Contact</button></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start">
                                    <Phone className="w-4 h-4 mr-2 mt-1 text-green-500" />
                                    <span>(707) 350-5074<br /><span className="text-xs text-slate-500">24/7 Emergency Response</span></span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-green-500" />
                                    <a href="mailto:contact@camoldsolutions.com" className="hover:text-white transition">contact@camoldsolutions.com</a>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-4 h-4 mr-2 mt-1 text-green-500" />
                                    <span>Serving All of California</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                        <p>&copy; {new Date().getFullYear()} CA Mold Solutions. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">Licensed & Insured.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

/* --- PAGE COMPONENTS --- */

const HomePage = ({ navigateTo }) => (
    <div className="animate-in fade-in duration-500">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={ASSETS.heroBg}
                    alt="Mold Inspection"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/40"></div>

                <ThreeCanvas>
                    <Spores count={400} color="#4ade80" />
                    <Flashlight color="#ffffff" intensity={3} />
                    <ambientLight intensity={0.5} />
                </ThreeCanvas>

                {/* Modern UI: Background Beams */}
                <BackgroundBeams className="opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center bg-green-500/20 backdrop-blur-md text-green-300 border border-green-500/30 rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Serving All of California
                    </div>
                    <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
                        Certified Mold Inspection & <span className="text-green-400">Remediation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
                        Create a healthier indoor environment today. We combine advanced techniques with eco-friendly practices to safely remove mold from residential and commercial properties.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => navigateTo('contact')}
                            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-lg font-bold transition shadow-lg hover:shadow-green-500/20 flex items-center justify-center group"
                        >
                            Get a Free Quote <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="tel:7073505074"
                            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-bold transition shadow-lg flex items-center justify-center"
                        >
                            Call (707) 350-5074
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Quick Stats / Trust Bar - Replaced with Infinite Cards */}
        <div className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-0 md:mx-auto max-w-full rounded-none md:rounded-xl shadow-xl py-8 overflow-hidden">
            <InfiniteMovingCards
                items={[
                    {
                        title: "24/7 Emergency",
                        desc: "Always here when you need us.",
                        icon: <Clock className="w-8 h-8 text-green-600" />
                    },
                    {
                        title: "IICRC Certified",
                        desc: "Institute Verified Technicians",
                        icon: <Award className="w-8 h-8 text-green-600" />
                    },
                    {
                        title: "EPA Approved",
                        desc: "Safe, Eco-Friendly Procedures",
                        icon: <CheckCircle className="w-8 h-8 text-green-600" />
                    },
                    {
                        title: "Licensed & Insured",
                        desc: "Professional & Protected Service",
                        icon: <ShieldCheck className="w-8 h-8 text-green-600" />
                    },
                    {
                        title: "Advanced Tech",
                        desc: "Moisture Meters & Thermal Imaging",
                        icon: <Search className="w-8 h-8 text-green-600" />
                    },
                ]}
                direction="left"
                speed="normal"
            />
        </div>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
                    <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Mold can have serious health implications and damage property if not properly addressed. We offer comprehensive solutions to restore your space.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<Search className="w-8 h-8 text-white" />}
                        title="Inspection & Assessment"
                        description="Thorough detection using advanced moisture meters to find hidden mold."
                    />
                    <ServiceCard
                        icon={<ShieldCheck className="w-8 h-8 text-white" />}
                        title="Containment"
                        description="Isolating contaminated areas to prevent the spread of mold spores."
                    />
                    <ServiceCard
                        icon={<Hammer className="w-8 h-8 text-white" />}
                        title="Mold Removal"
                        description="Safe and effective removal of mold colonies and affected materials."
                    />
                    <ServiceCard
                        icon={<Droplets className="w-8 h-8 text-white" />}
                        title="Cleaning & Disinfection"
                        description="Deep cleaning of surfaces and air filtration to ensure a safe environment."
                    />
                    <ServiceCard
                        icon={<CheckCircle className="w-8 h-8 text-white" />}
                        title="Moisture Control"
                        description="Identifying and fixing the source of moisture to prevent future growth."
                    />
                    <div className="bg-blue-900 rounded-xl p-8 flex flex-col justify-center items-center text-center text-white shadow-lg transform hover:-translate-y-1 transition duration-300">
                        <h3 className="text-2xl font-bold mb-4">Need Help Now?</h3>
                        <p className="mb-6 text-blue-100">Our experts are ready to assist you immediately.</p>
                        <button onClick={() => navigateTo('contact')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold w-full transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us Split Section */}
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full opacity-50 z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0"></div>
                        <img
                            src={ASSETS.vanImage}
                            alt="CA Mold Solutions Van"
                            className="relative z-10 w-full rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">What sets us apart?</h2>
                        <div className="space-y-4">
                            <FeaturePoint text="24/7 Emergency Response" />
                            <FeaturePoint text="Certified Expertise" />
                            <FeaturePoint text="Customer-Focused Approach" />
                            <FeaturePoint text="Advanced Techniques" />
                            <FeaturePoint text="Certified & Trusted" />
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="italic text-gray-500 mb-4">
                                "Our mission is to create healthier indoor environments by providing expert mold remediation solutions."
                            </p>
                            <button onClick={() => navigateTo('about')} className="text-blue-700 font-bold hover:text-blue-900 flex items-center">
                                Learn more about us <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const AboutPage = ({ navigateTo }) => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-blue-900 pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                <p className="text-xl text-blue-200 max-w-2xl">Creating healthier indoor environments through expert remediation.</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            At CA Mold Solutions, our mission is to create healthier indoor environments by providing expert mold remediation solutions. With years of experience in both residential and commercial projects, we combine advanced techniques with eco-friendly practices to safely and efficiently remove mold.
                        </p>
                        <p className="mb-6">
                            Our commitment to customer satisfaction and quality workmanship means you can trust us to restore your space and safeguard your health.
                        </p>
                        <p className="font-bold text-blue-900 text-xl">
                            Serving Residential & Commercial Properties Throughout California.
                        </p>
                    </div>

                    <div className="mt-10">
                        <button onClick={() => navigateTo('contact')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg">
                            Get in Touch
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-900 transform translate-x-4 translate-y-4 rounded-xl"></div>
                    <img
                        src={ASSETS.moldImage}
                        alt="Mold Inspection Process"
                        className="relative z-10 w-full rounded-xl shadow-lg border-4 border-white"
                    />
                </div>
            </div>
        </div>
    </div>
);

const CertificationsPage = ({ navigateTo }) => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 text-center">Certifications & Standards</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">We adhere to the highest industry standards to ensure your safety.</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600 transform hover:-translate-y-1 transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">IICRC Certified</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Our technicians are certified by the Institute of Inspection, Cleaning and Restoration Certification (IICRC). This demonstrates our commitment to professional excellence and ensures we follow the globally recognized standards for mold remediation.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-500"><Check className="w-4 h-4 text-green-500 mr-2" /> Standard S520 Compliant</li>
                        <li className="flex items-center text-sm text-gray-500"><Check className="w-4 h-4 text-green-500 mr-2" /> Verified Technical Training</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600 transform hover:-translate-y-1 transition duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">EPA Approved Procedures</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        We strictly follow Environmental Protection Agency (EPA) guidelines to protect your health and the environment during and after remediation. Our eco-friendly approach ensures that your property is safe for children and pets.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-500"><Check className="w-4 h-4 text-green-500 mr-2" /> Safe Containment Protocols</li>
                        <li className="flex items-center text-sm text-gray-500"><Check className="w-4 h-4 text-green-500 mr-2" /> Eco-Friendly Disinfectants</li>
                    </ul>
                </div>

            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Ready to work with certified professionals?</h3>
                <button onClick={() => navigateTo('contact')} className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg">
                    Request Certified Inspection
                </button>
            </div>
        </div>
    </div>
);

const ContactPage = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        setErrorMessage('');

        // Service ID: service_q7ndb7q
        // Template ID: template_826gypb
        // Public Key: 0P4TyC9hTzEJ9nLvv

        emailjs.sendForm('service_q7ndb7q', 'template_826gypb', form.current, '0P4TyC9hTzEJ9nLvv')
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
                setErrorMessage(error.text || 'Something went wrong. Please try again.');
            });
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gray-50 min-h-[80vh]">
            <div className="bg-blue-900 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">Have concerns about mold? We're here to help.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-16 pb-12 md:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Contact Info Card */}
                    <div className="md:col-span-2 bg-blue-800 text-white rounded-2xl shadow-2xl p-6 md:p-12 h-full">
                        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            <ContactInfoItem
                                icon={<Phone className="w-6 h-6 text-green-400" />}
                                label="Phone"
                                value="(707) 350-5074"
                                subval="24/7 Emergency Response"
                                href="tel:7073505074"
                            />
                            <ContactInfoItem
                                icon={<Mail className="w-6 h-6 text-green-400" />}
                                label="Email"
                                value="contact@camoldsolutions.com"
                                href="mailto:contact@camoldsolutions.com"
                            />
                            <ContactInfoItem
                                icon={<MapPin className="w-6 h-6 text-green-400" />}
                                label="Service Area"
                                value="California"
                                subval="Serving Residential & Commercial"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3 bg-white rounded-2xl shadow-2xl p-6 md:p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

                        {status === 'success' && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Your message has been sent successfully. We'll be in touch soon.</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Error</p>
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                    <input type="text" name="user_firstname" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" name="user_lastname" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                                    <input type="tel" name="user_phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="(555) 555-5555" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" name="user_email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" disabled={loading} className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                {loading ? 'Sending...' : 'Submit Request'}
                            </button>
                            <p className="text-sm text-gray-400 text-center">
                                We respect your privacy. Your information is never shared.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- HELPER COMPONENTS --- */

const NavButton = ({ label, active, onClick, isTransparent }) => {
    // Determine text color based on state
    // If transparent background: White text (unless active, then kept distinct or maybe green/white)
    // If white background: Gray text, Blue on hover/active

    let baseClasses = "font-medium transition relative group px-2 py-1 ";
    if (isTransparent) {
        baseClasses += active ? "text-white" : "text-blue-50 hover:text-white";
    } else {
        baseClasses += active ? "text-blue-900" : "text-gray-600 hover:text-blue-900";
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
        >
            {label}
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${isTransparent ? 'bg-white' : 'bg-green-500'} ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </button>
    );
};

const MobileNavButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition ${active ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-900'}`}
    >
        {label}
    </button>
);

const TrustItem = ({ icon, title, desc }) => (
    <div className="flex items-start p-2">
        <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
        </div>
    </div>
);

const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-xl p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:bg-green-600 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

const FeaturePoint = ({ text }) => (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
        <div className="bg-green-100 rounded-full p-1 mr-3">
            <Check className="w-4 h-4 text-green-600" />
        </div>
        <span className="font-semibold text-gray-800">{text}</span>
    </div>
);

const ContactInfoItem = ({ icon, label, value, subval, href }) => (
    <div className="flex items-start">
        <div className="bg-blue-900/50 p-3 rounded-lg mr-4 border border-blue-700">
            {icon}
        </div>
        <div>
            <p className="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">{label}</p>
            {href ? (
                <a href={href} className="text-lg md:text-xl font-bold hover:text-green-400 transition block break-words">{value}</a>
            ) : (
                <span className="text-lg md:text-xl font-bold block break-words">{value}</span>
            )}
            {subval && <span className="text-sm text-blue-200 block mt-1">{subval}</span>}
        </div>
    </div>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 bg-blue-900 flex items-center justify-center rounded-full text-white hover:bg-green-600 transition duration-300"
    >
        {icon}
    </a>
);

export default Website;

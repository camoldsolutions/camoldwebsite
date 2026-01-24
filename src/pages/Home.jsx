import React from 'react';
import {
    ShieldCheck,
    ArrowRight,
    Clock,
    Award,
    CheckCircle,
    Search,
    Hammer,
    Droplets,
    ChevronRight,
    Check,
    Phone
} from 'lucide-react';
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";
import { ASSETS } from '../lib/constants';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ThreeCanvas from '../components/ThreeCanvas';
import Spores from '../components/effects/Spores';
import Flashlight from '../components/effects/Flashlight';

const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-green-200 h-full flex flex-col">
        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 transition-colors duration-300">
            {React.cloneElement(icon, { className: "w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" })}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
            {description}
        </p>
    </div>
);

const FeaturePoint = ({ text }) => (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-300 transition duration-300">
        <div className="bg-green-100 rounded-full p-1.5 mr-4">
            <Check className="w-4 h-4 text-green-600" />
        </div>
        <span className="font-semibold text-gray-900">{text}</span>
    </div>
);

const Home = ({ navigateTo }) => {
    return (
        <div className="animate-in fade-in duration-700">
{/* Hero Section */}
            <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
                {/* Hero Image Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={ASSETS.heroImage}
                        alt="Professional Mold Inspection"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>

                {/* Subtle 3D Effects */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <ThreeCanvas>
                        <Flashlight color="#4ade80" intensity={2} />
                        <Spores count={80} color="#059669" />
                    </ThreeCanvas>
                </div>

<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-green-600/90 backdrop-blur-sm text-white border border-green-500/30 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider mb-8 animate-slide-up shadow-lg">
                            <ShieldCheck className="w-4 h-4 mr-2" /> Licensed & IICRC Certified
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl font-display tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Professional Mold <br />Inspection & <span className="text-green-400">Remediation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                            Protecting your health and property with expert mold detection, testing, and removal services throughout California.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
<button
                                onClick={() => navigateTo('contact')}
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Get a Free Quote <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

{/* Quick Stats / Trust Bar */}
            <div className="relative z-20 -mt-12 md:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-white/95 backdrop-blur-xl border border-green-100 rounded-2xl shadow-2xl overflow-hidden py-6 md:py-8">
                    <InfiniteMovingCards
                        items={[
                            {
                                title: "24/7 Emergency Response",
                                desc: "Available when you need us most",
                                icon: <Clock className="w-8 h-8 text-green-600" />
                            },
                            {
                                title: "IICRC Certified",
                                desc: "Industry-certified technicians",
                                icon: <Award className="w-8 h-8 text-green-600" />
                            },
                            {
                                title: "Mold Testing & Lab Analysis",
                                desc: "Professional laboratory results",
                                icon: <Search className="w-8 h-8 text-green-600" />
                            },
                            {
                                title: "Thermal Imaging",
                                desc: "Advanced moisture detection",
                                icon: <CheckCircle className="w-8 h-8 text-green-600" />
                            },
                            {
                                title: "Licensed & Insured",
                                desc: "Fully protected service",
                                icon: <ShieldCheck className="w-8 h-8 text-green-600" />
                            },
                        ]}
                        direction="left"
                        speed="normal"
                        className="bg-transparent"
                    />
                </div>
            </div>

            {/* Services Section */}
            <Section variant="light">
<div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Professional Mold Services</h2>
                    <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Certified mold inspection, testing, and remediation services to protect your health and property with proven, science-based methods.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
<ServiceCard
                        icon={<Search />}
                        title="Mold Inspection & Testing"
                        description="Comprehensive visual inspection with air sampling, surface testing, and laboratory analysis to identify mold types and concentrations."
                    />
                    <ServiceCard
                        icon={<ShieldCheck />}
                        title="Moisture Detection"
                        description="Advanced thermal imaging and moisture meter technology to locate hidden water sources and mold growth behind walls."
                    />
                    <ServiceCard
                        icon={<Hammer />}
                        title="Mold Remediation"
                        description="Safe and complete removal following IICRC standards with containment, HEPA filtration, and proper disposal."
                    />
                    <ServiceCard
                        icon={<Droplets />}
                        title="Structural Drying"
                        description="Professional drying equipment and techniques to eliminate moisture and prevent future mold growth."
                    />
                    <ServiceCard
                        icon={<CheckCircle />}
                        title="Post-Remediation Testing"
                        description="Verification testing to ensure mold levels are safe and your property is fully restored to healthy conditions."
                    />

{/* CTA Card */}
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition duration-300">
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition duration-300"></div>
                        <div className="relative z-10">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-4 inline-block">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display">Emergency Mold Service?</h3>
                            <p className="mb-8 text-white/90">Call now for immediate assistance with mold issues. Available 24/7.</p>
                            <button 
                                onClick={() => window.location.href = 'tel:7073505074'} 
                                className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 w-full"
                            >
                                Call (707) 350-5074
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section variant="white">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full opacity-50 blur-3xl group-hover:opacity-70 transition duration-500"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl group-hover:opacity-70 transition duration-500"></div>
                        <img
                            src={ASSETS.vanImage}
                            alt="CA Mold Solutions Van"
                            className="relative z-10 w-full rounded-2xl shadow-2xl transform transition duration-700 hover:scale-[1.02]"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Why Choose CA Mold Solutions?</h2>
                        <div className="space-y-4 mb-10">
                            <FeaturePoint text="24/7 Emergency Response" />
                            <FeaturePoint text="IICRC Certified Expertise" />
                            <FeaturePoint text="Customer-Focused Approach" />
                            <FeaturePoint text="Advanced Thermal Imaging" />
                            <FeaturePoint text="Licensed & Insured" />
                        </div>
                        <div className="pt-8 border-t border-slate-100">
                            <blockquote className="italic text-slate-500 mb-6 text-lg">
                                "Our mission is to create healthier indoor environments by providing expert mold remediation solutions."
                            </blockquote>
                            <Button onClick={() => navigateTo('about')} variant="ghost" className="pl-0 text-brand-primary hover:bg-transparent hover:text-emerald-700">
                                Learn more about us <ChevronRight className="w-5 h-5 ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;

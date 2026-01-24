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
    Check
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
    <Card hover className="h-full border-t-4 border-t-brand-primary">
        <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary transition-colors duration-300">
            {React.cloneElement(icon, { className: "w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" })}
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-3 font-display">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
            {description}
        </p>
    </Card>
);

const FeaturePoint = ({ text }) => (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition duration-300">
        <div className="bg-emerald-100 rounded-full p-1.5 mr-4">
            <Check className="w-4 h-4 text-brand-primary" />
        </div>
        <span className="font-semibold text-brand-dark">{text}</span>
    </div>
);

const Home = ({ navigateTo }) => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <div className="relative h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark">
                {/* 3D Background */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <ThreeCanvas>
                        <Flashlight color="#4ade80" intensity={3} />
                        <Spores count={150} color="#059669" />
                    </ThreeCanvas>
                </div>

                {/* Fallback Image / Overlay */}
                <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
                    <img
                        src={ASSETS.heroBg}
                        alt="Background Pattern"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-light z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-[-80px]">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-brand-primary/10 backdrop-blur-md text-brand-primary border border-brand-primary/20 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider mb-8 animate-slide-up">
                            <ShieldCheck className="w-4 h-4 mr-2" /> Serving All of California
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-2xl font-display tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Certified Mold Inspection <br />& <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-300">Remediation</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            We create safer, healthier environments using advanced forensic techniques and eco-friendly remediation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <Button
                                onClick={() => navigateTo('contact')}
                                variant="primary"
                                size="lg"
                                className="shadow-emerald-900/20"
                            >
                                Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                href="tel:7073505074"
                                as="a" // Button component handles onClick, here we use 'a' tag behavior if Button supports, or wrap it. 
                                // Actually Button is 'button', so I'll wrap it or just use Button logic. 
                                // Re-reading Button.jsx: it renders <button>, props passed. 
                                // I'll stick to a clean button or 'a' tag styled like button if I can, but Button.jsx is button.
                                // I'll use a normal button for call or wrap it.
                                onClick={() => window.location.href = 'tel:7073505074'}
                                variant="secondary"
                                size="lg"
                            >
                                Call (707) 350-5074
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats / Trust Bar */}
            <div className="relative z-20 -mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl overflow-hidden py-8">
                    <InfiniteMovingCards
                        items={[
                            {
                                title: "24/7 Emergency",
                                desc: "Always here when you need us.",
                                icon: <Clock className="w-8 h-8 text-brand-primary" />
                            },
                            {
                                title: "IICRC Certified",
                                desc: "Institute Verified Technicians",
                                icon: <Award className="w-8 h-8 text-brand-primary" />
                            },
                            {
                                title: "EPA Approved",
                                desc: "Safe, Eco-Friendly Procedures",
                                icon: <CheckCircle className="w-8 h-8 text-brand-primary" />
                            },
                            {
                                title: "Licensed & Insured",
                                desc: "Professional & Protected",
                                icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />
                            },
                            {
                                title: "Advanced Tech",
                                desc: "Moisture Meters & Thermal Imaging",
                                icon: <Search className="w-8 h-8 text-brand-primary" />
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
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Our Services</h2>
                    <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Mold can have serious health implications and damage property. We offer comprehensive, science-backed solutions to restore your space.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<Search />}
                        title="Inspection & Assessment"
                        description="Thorough detection using advanced moisture meters and thermal imaging to find hidden mold."
                    />
                    <ServiceCard
                        icon={<ShieldCheck />}
                        title="Containment"
                        description="Isolating contaminated areas with industrial-grade barriers to prevent the spread of mold spores."
                    />
                    <ServiceCard
                        icon={<Hammer />}
                        title="Mold Removal"
                        description="Safe, complete removal of mold colonies and affected materials following strict IICRC protocols."
                    />
                    <ServiceCard
                        icon={<Droplets />}
                        title="Cleaning & Disinfection"
                        description="Deep cleaning of surfaces and HEPA air filtration to ensure a safe, spore-free environment."
                    />
                    <ServiceCard
                        icon={<CheckCircle />}
                        title="Moisture Control"
                        description="Identifying and rectifying the source of moisture to prevent future growth and recurrence."
                    />

                    {/* CTA Card */}
                    <div className="bg-brand-dark rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition duration-300">
                        <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/20 transition duration-300"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 font-display">Need Help Now?</h3>
                            <p className="mb-8 text-slate-300">Our experts are ready to assist you immediately. Don't wait.</p>
                            <Button onClick={() => navigateTo('contact')} variant="primary" className="w-full">
                                Contact Us
                            </Button>
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
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-8">What sets us apart?</h2>
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

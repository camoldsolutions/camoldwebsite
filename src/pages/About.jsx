import React from 'react';
import SEO from '../components/SEO';
import { ASSETS } from '../lib/constants';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const About = ({ navigateTo }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SEO
                title="About Us"
                description="Learn about CA Mold Solutions' mission to create healthier indoor environments through forensic-level mold inspection and eco-friendly remediation."
            />
            {/* Hero */}
            <div className="bg-brand-dark pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-900 to-emerald-900/30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">About Us</h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                        Creating healthier indoor environments through expert remediation.
                    </p>
                </div>
            </div>

            <Section variant="white">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 font-display">Our Mission</h2>
                        <div className="prose prose-lg text-slate-600 leading-relaxed font-sans">
                            <p className="mb-6">
                                At CA Mold Solutions, our mission is to safeguard your health and property. With years of experience in both residential and commercial projects, we combine forensic-level inspection with eco-friendly remediation techniques.
                            </p>
                            <p className="mb-8">
                                We believe that everyone deserves a safe environment. That's why we adhere to the strictest industry standards and use advanced technology to detect what the naked eye cannot see.
                            </p>
                            <div className="border-l-4 border-brand-primary pl-6 py-2 mb-10 bg-emerald-50/50 rounded-r-lg">
                                <p className="font-bold text-brand-dark text-xl">
                                    Serving Residential & Commercial Properties Throughout California.
                                </p>
                            </div>
                        </div>

                        <Button onClick={() => navigateTo('contact')} variant="primary" size="lg">
                            Get in Touch
                        </Button>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-primary rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img
                            src={ASSETS.moldImage}
                            alt="Mold Inspection Process"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white object-cover h-[500px]"
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;

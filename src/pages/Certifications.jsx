import React from 'react';
import { Award, ShieldCheck, Check, FlaskConical, Gavel, Scale } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const StandardFeature = ({ icon, title, desc }) => (
    <div className="flex flex-col items-center text-center p-6">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
);

const Certifications = ({ navigateTo }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50">
            {/* Header */}
            <div className="bg-white py-20 md:py-32 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 uppercase">
                        Our Commitment to Quality
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 font-display tracking-tight">
                        Certifications & <span className="text-brand-primary">Standards</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        We don't just clear mold; we follow rigorous scientific protocols and industry-leading standards to ensure your property adheres to strict health guidelines.
                    </p>
                </div>
            </div>

            <Section variant="light" className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto -mt-20 md:-mt-32 relative z-20">
                    {/* IICRC Card */}
                    <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-blue-100">
                            <Award className="w-12 h-12 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">IICRC Certified</h2>
                        <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                            Our team is certified by the Institute of Inspection, Cleaning and Restoration Certification. We follow the gold standard <strong>S520 Standard</strong> for professional mold remediation.
                        </p>
                        <div className="w-full bg-blue-50/50 rounded-xl p-6 mb-8 text-left">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">Strict adherence to S520 Procedural Standards</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">Certified Applied Microbial Remediation Technicians</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">Verified 3rd-party containment protocols</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* EPA Card */}
                    <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-emerald-100">
                            <ShieldCheck className="w-12 h-12 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">EPA Protocols</h2>
                        <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                            We strictly adhere to Environmental Protection Agency guidelines for schools and commercial buildings, prioritizing occupant health and safety above all else.
                        </p>
                        <div className="w-full bg-emerald-50/50 rounded-xl p-6 mb-8 text-left">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">Advanced Containment & Negative Air Pressure</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">EPA-Registered Eco-Friendly Botanicals</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">HEPA Filtration (99.97% efficiency)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Why it matters */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Standards Matter</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Mold remediation is an unregulated industry in some aspects. Choosing a certified professional protects you from liability and health risks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <StandardFeature
                            icon={<Gavel className="w-8 h-8" />}
                            title="Legal Compliance"
                            desc="Documentation that stands up in court for real estate transactions and landlord-tenant disputes."
                        />
                        <StandardFeature
                            icon={<FlaskConical className="w-8 h-8" />}
                            title="Science-Based"
                            desc="Our methods are based on building science, not guesswork. We identify the root cause."
                        />
                        <StandardFeature
                            icon={<Scale className="w-8 h-8" />}
                            title="Insurance Approved"
                            desc="We work directly with insurance carriers using standard industry pricing (Xactimate)."
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 max-w-5xl mx-auto px-4 pb-20">
                    <div className="bg-[#0B1F3F] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full filter blur-[120px] opacity-20 group-hover:opacity-30 transition duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px] opacity-20 group-hover:opacity-30 transition duration-700"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Don't risk your health with uncertified contractors.</h3>
                            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                                Get peace of mind knowing your home is being treated by IICRC certified professionals who put safety first.
                            </p>
                            <div className="flex justify-center">
                                <Button onClick={() => navigateTo('contact')} variant="primary" size="lg" className="w-full md:w-auto min-w-[250px] shadow-lg shadow-green-900/20">
                                    Request Certified Inspection
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Certifications;

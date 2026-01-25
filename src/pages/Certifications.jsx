import React from 'react';
import { Award, ShieldCheck, Check } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Certifications = ({ navigateTo }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="bg-brand-light py-16 md:py-24 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 font-display">Certifications & Standards</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We don't just clear mold; we follow rigorous scientific protocols to ensure it stays gone.
                    </p>
                </div>
            </div>

            <Section variant="white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    <Card className="border-t-4 border-t-blue-600 p-10" hover>
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
                            <Award className="w-10 h-10 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-4 font-display">IICRC Certified</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Our technicians hold certifications from the Institute of Inspection, Cleaning and Restoration Certification (IICRC). This is the gold standard in the industry, ensuring we follow the S520 Standard for Professional Mold Remediation.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-700 font-medium">
                                <div className="bg-green-100 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-green-600" /></div>
                                Standard S520 Compliant
                            </li>
                            <li className="flex items-center text-slate-700 font-medium">
                                <div className="bg-green-100 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-green-600" /></div>
                                Applied Microbial Remediation Technician (AMRT)
                            </li>
                        </ul>
                    </Card>

                    <Card className="border-t-4 border-t-emerald-600 p-10" hover>
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
                            <ShieldCheck className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-4 font-display">EPA Protocols</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            We strictly adhere to Environmental Protection Agency (EPA) guidelines for remediation in schools and commercial buildings. We prioritize occupant health and safety above all else.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-700 font-medium">
                                <div className="bg-green-100 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-green-600" /></div>
                                Safe Containment & Air Filtration
                            </li>
                            <li className="flex items-center text-slate-700 font-medium">
                                <div className="bg-green-100 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-green-600" /></div>
                                Eco-Friendly Disinfectants
                            </li>
                        </ul>
                    </Card>

                </div>

                <div className="mt-20 text-center bg-brand-dark rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full filter blur-[100px] opacity-20"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-6 font-display">Ready to work with certified professionals?</h3>
                        <Button onClick={() => navigateTo('contact')} variant="primary" size="lg">
                            Request Certified Inspection
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Certifications;

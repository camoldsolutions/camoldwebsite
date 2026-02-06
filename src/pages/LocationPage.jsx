import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { MapPin, Phone, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { TARGET_CITIES } from '../data/cities';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ASSETS } from '../lib/constants';

const LocationPage = () => {
    const { city } = useParams();
    const navigate = useNavigate();
    const locationData = TARGET_CITIES.find(c => c.slug === city);

    if (!locationData) {
        return <Navigate to="/" replace />;
    }

    const title = `Mold Inspection & Remediation in ${locationData.name}, CA`;
    const description = locationData.description;
    const keywords = `mold inspection ${locationData.name}, mold remediation ${locationData.name}, mold removal ${locationData.name}, air quality testing ${locationData.name}, water damage ${locationData.name}`;

    return (
        <div className="animate-in fade-in duration-500 font-sans">
            <SEO
                title={title}
                description={description}
                keywords={keywords}
            />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
                    <img src={ASSETS.heroImage} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-primary/20 z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <MapPin className="w-4 h-4 text-brand-primary mr-2" aria-hidden="true" />
                        <span className="text-white font-medium">Serving {locationData.name}, {locationData.state}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                        Expert Mold Removal in <span className="text-brand-primary">{locationData.name}</span>
                    </h1>
                    <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {locationData.description} We provide 24/7 emergency response and certified inspections for all {locationData.name} zip codes: {locationData.zipCodes.join(', ')}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => navigate('/contact')} variant="primary" size="lg" className="shadow-lg shadow-brand-primary/20">
                            Get a Free Quote
                        </Button>
                        <Button onClick={() => window.location.href = 'tel:7073505074'} variant="outline" className="text-white border-white hover:bg-white/10">
                            <Phone className="w-4 h-4 mr-2" aria-hidden="true" /> (707) 350-5074
                        </Button>
                    </div>
                </div>
            </div>

            {/* Localized Content */}
            <Section variant="white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why {locationData.name} Residents Choose Us</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Living in {locationData.name} comes with unique climate challenges that can contribute to mold growth. Whether you're near the coast dealing with marine layer moisture or inland facing different humidity levels, our team understands the local environment.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We have been serving the {locationData.name} community for years, providing reliable, science-based mold solutions for both historic homes and modern commercial buildings.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Local Rapid Response</h4>
                                    <p className="text-sm text-gray-500">We can be at your {locationData.name} property in under 60 minutes for emergencies.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Zip Code Specific Knowledge</h4>
                                    <p className="text-sm text-gray-500">Familiar with common building issues in {locationData.zipCodes[0]} area.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-primary rounded-2xl transform rotate-3 opacity-10"></div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services in {locationData.name}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mr-3" aria-hidden="true" />
                                    <span className="font-medium text-gray-700">Residential Mold Inspection</span>
                                </li>
                                <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mr-3" aria-hidden="true" />
                                    <span className="font-medium text-gray-700">Commercial Remediation</span>
                                </li>
                                <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mr-3" aria-hidden="true" />
                                    <span className="font-medium text-gray-700">Black Mold Removal</span>
                                </li>
                                <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mr-3" aria-hidden="true" />
                                    <span className="font-medium text-gray-700">Attic & Crawlspace Cleaning</span>
                                </li>
                                <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                                    <ShieldCheck className="w-5 h-5 text-brand-primary mr-3" aria-hidden="true" />
                                    <span className="font-medium text-gray-700">Moisture Detection & Drying</span>
                                </li>
                            </ul>
                            <div className="mt-8 text-center">
                                <Button onClick={() => navigate('/certifications')} variant="ghost" className="text-brand-primary hover:bg-brand-primary/5 w-full">
                                    View Our Certifications <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section variant="brand" className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Need a Mold Inspector in {locationData.name}?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    Don't let mold compromise your health. Our certified experts in {locationData.name} are ready to help you reclaim a healthy home.
                </p>
                <Button onClick={() => window.location.href = 'tel:7073505074'} variant="white" size="lg" className="mr-0 shadow-xl">
                    Call (707) 350-5074 Now
                </Button>
            </Section>
        </div>
    );
};

export default LocationPage;

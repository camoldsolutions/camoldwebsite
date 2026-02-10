import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TARGET_CITIES } from '../data/cities';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { ShieldCheck, Search, Hammer, Droplets, Phone, MapPin, CheckCircle } from 'lucide-react';
import { ASSETS } from '../lib/constants';

const CityDetail = () => {
    const { citySlug } = useParams();
    const city = TARGET_CITIES.find(c => c.slug === citySlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [citySlug]);

    if (!city) {
        return <Navigate to="/" replace />;
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `CA Mold Solutions - ${city.name}`,
        "image": "https://images.squarespace-cdn.com/content/v1/695e124922ee964abeffdd7f/3afe0f26-ea59-467c-8422-779a5c0b9cb0/MOD+4.PNG",
        "@id": `https://camoldsolutions.com/locations/${city.slug}`,
        "url": `https://camoldsolutions.com/locations/${city.slug}`,
        "telephone": "707-350-5074",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": "CA",
            "postalCode": city.zipCodes[0],
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": city.description
    };

    return (
        <main className="animate-in fade-in duration-700">
            <SEO
                title={`Certified Mold Inspection & Remediation in ${city.name}, CA`}
                description={city.description}
                keywords={`mold inspection ${city.name}, mold remediation ${city.name}, mold testing ${city.name}, air quality testing ${city.name}, ${city.name} mold removal`}
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <div className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-[#0B1F3F] overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={ASSETS.heroImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3F]/60 to-[#0B1F3F] z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6 uppercase tracking-wider">
                            <MapPin className="w-4 h-4 mr-2" /> Serving {city.name}, CA
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Professional Mold <br />Services in <span className="text-emerald-400">{city.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                            {city.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.location.href = 'tel:7073505074'}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-3 uppercase tracking-wide"
                            >
                                <Phone className="w-5 h-5" /> (707) 350-5074
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Localized Content Section */}
            <Section variant="white">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Expert Mold Remediation <br />for {city.name} Residents
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            If you suspect mold growth in your {city.name} home or business, prompt action is essential. Our IICRC-certified team uses advanced moisture detection and air quality sampling to identify hidden issues and provide science-based remediation.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                `Comprehensive Inspections in ${city.name}`,
                                "Certified Air Quality Testing",
                                "Safe & Effective Remediation",
                                "Moisture Detection & Drying",
                                "Post-Remediation Verification"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={ASSETS.vanImage}
                            alt={`CA Mold Solutions serving ${city.name}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Service Grid Section */}
            <Section variant="light">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Our Specialized Services</h2>
                    <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <Search className="w-12 h-12 text-emerald-600 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Inspection & Testing</h3>
                        <p className="text-slate-600">Visual inspections and laboratory sampling to identify exactly what you're dealing with in {city.name}.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <Hammer className="w-12 h-12 text-emerald-600 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Remediation</h3>
                        <p className="text-slate-600">IICRC-standard removal using professional containment and HEPA filtration.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <Droplets className="w-12 h-12 text-emerald-600 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Moisture Detection</h3>
                        <p className="text-slate-600">Locating hidden leaks and moisture sources using thermal imaging technology.</p>
                    </div>
                </div>
            </Section>

            {/* Area Served */}
            <Section variant="white" className="bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Service Area for {city.name}</h2>
                    <p className="text-slate-600 mb-12">
                        We provide mold services throughout {city.name}, including properties within these zip codes:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {city.zipCodes.map(zip => (
                            <span key={zip} className="px-6 py-2 bg-white rounded-full shadow-sm border border-slate-200 font-bold text-slate-700">
                                {zip}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section variant="light" className="bg-emerald-600 text-white">
                <div className="max-w-4xl mx-auto text-center py-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to clear the air in {city.name}?</h2>
                    <p className="text-xl text-emerald-50 mb-12">
                        Contact us today for a free phone consultation or to schedule an on-site inspection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => window.location.href = 'tel:7073505074'}
                            className="bg-white text-emerald-700 hover:bg-slate-100 font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 text-lg uppercase tracking-wide"
                        >
                            Call (707) 350-5074
                        </button>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default CityDetail;

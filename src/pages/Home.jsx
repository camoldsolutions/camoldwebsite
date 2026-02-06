import React from 'react';
import SEO from '../components/SEO';
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
import { ASSETS } from '../lib/constants';
import Section from '../components/ui/Section';
import ThreeCanvas from '../components/ThreeCanvas';
import Spores from '../components/effects/Spores';
import Flashlight from '../components/effects/Flashlight';
import Button from '../components/ui/Button';

const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-green-200 h-full flex flex-col">
        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 transition-colors duration-300" aria-hidden="true">
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
        <div className="bg-green-100 rounded-full p-1.5 mr-4" aria-hidden="true">
            <Check className="w-4 h-4 text-green-600" />
        </div>
        <span className="font-semibold text-gray-900">{text}</span>
    </div>
);

const TrustCard = ({ icon, title, desc }) => (
    <div className="bg-white rounded-xl p-6 shadow-xl border-b-4 border-green-500 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 text-green-600" aria-hidden="true">
            {icon}
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

const Home = ({ navigateTo }) => {
    return (
        <div className="animate-in fade-in duration-700 font-sans">
            <SEO
                title="Professional Mold Inspection & Remediation"
                description="CA Mold Solutions offers certified mold inspection, testing, and remediation services throughout California. IICRC certified experts protecting your health."
                keywords="mold inspection, mold remediation, mold testing, air quality testing, water damage restoration, California mold removal"
            />
            {/* Hero Section */}
            <div className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Hero Image Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={ASSETS.heroImage}
                        alt="Professional Mold Inspection"
                        className="w-full h-full object-cover object-top"
                        fetchpriority="high"
                    />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Subtle 3D Effects */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <ThreeCanvas>
                        <Flashlight color="#4ade80" intensity={2} />
                        <Spores count={80} color="#059669" />
                    </ThreeCanvas>
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight">
                            Professional Mold <br />Inspection & <span className="text-green-400">Remediation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                            Protecting your health and property with expert mold detection, testing, and removal services throughout California.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <button
                                onClick={() => navigateTo('contact')}
                                className="bg-[#4C9F10] hover:bg-[#3e850c] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg uppercase tracking-wide"
                            >
                                Consultations
                            </button>
                            <button
                                onClick={() => window.location.href = 'tel:7073505074'}
                                className="bg-[#0B1F3F] hover:bg-[#1a3a6e] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center gap-3"
                            >
                                <Phone className="w-5 h-5 text-white" aria-hidden="true" /> (707) 350-5074
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static Trust Bar (Grid) */}
            <div className="relative z-30 -mt-6 md:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <TrustCard
                        icon={<Clock className="w-6 h-6" />}
                        title="24/7 Emergency Response"
                        desc="Available when you need us most"
                    />
                    <TrustCard
                        icon={<Award className="w-6 h-6" />}
                        title="IICRC Certified"
                        desc="Industry-certified technicians"
                    />
                    <TrustCard
                        icon={<Search className="w-6 h-6" />}
                        title="Mold Testing & Lab Analysis"
                        desc="Professional laboratory results"
                    />
                    <TrustCard
                        icon={<CheckCircle className="w-6 h-6" />}
                        title="Thermal Imaging"
                        desc="Advanced moisture detection"
                    />
                </div>
            </div>

            {/* Services Section */}
            <Section variant="light">
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                    {/*
### Check Meta Tags
1. Install a browser extension like "SEO META in 1 CLICK" or just right-click -> "Inspect".
2. Look at the `<head>` section.
3. Verify the `<title>` matches the page content.

## Measuring SEO Success

Since SEO results are not instant, you should track performance over the next 2-4 weeks using these tools:

### 1. Google Search Console (Crucial)
This is the most accurate way to see if your "Top of results" goal is being met.
- **Register your site**: If you haven't, go to [Google Search Console](https://search.console.google.com/).
- **Submit Sitemap**: Provide your new sitemap URL: `https://camoldsolutions.com/sitemap.xml`.
- **Track Keywords**: Monitor your "Ranking Position" for keywords like "mold inspection Torrance".

### 2. Chrome Lighthouse (Technical Score)
To test your "SEO Score":
1. Open your website in Chrome.
2. Right-click and select **Inspect**.
3. Go to the **Lighthouse** tab at the top.
4. Select "SEO" (and "Performance" if you like) and click **Analyze page load**.
5. You should aim for a score of **90-100**.

### 3. Local Search Testing
Because Google shows results based on *your* location, test your site's ranking by:
- Using "Incognito Mode".
- Searching for: `mold services Torrance CA` or `mold remediation Long Beach`.
- Checking if your new location pages (e.g., `/locations/torrance`) appear in the results.
*/}
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
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-4 inline-block" aria-hidden="true">
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
                            loading="lazy"
                            decoding="async"
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

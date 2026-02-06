import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ASSETS } from '../../lib/constants';
import { TARGET_CITIES } from '../../data/cities';

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full text-white hover:bg-brand-primary transition duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ to, label }) => (
    <li>
        <Link to={to} className="hover:text-brand-primary transition-colors duration-300 text-slate-400 hover:pl-1 block">
            {label}
        </Link>
    </li>
);

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-slate-300 py-16 border-t border-slate-800 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6 bg-white w-fit p-3 rounded-xl">
                            <img src={ASSETS.logo} alt="CA Mold Solutions" className="h-12 w-auto" />
                        </div>
                        <p className="text-sm mb-6 leading-relaxed text-slate-400">
                            Create a healthier indoor environment today. We provide expert inspection, containment, and remediation for homes and businesses throughout California.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social icons could go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/about" label="About Us" />
                            <FooterLink to="/certifications" label="Certifications" />
                            <FooterLink to="/contact" label="Contact" />
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Service Areas</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            {TARGET_CITIES.slice(0, 6).map(city => (
                                <li key={city.slug}>
                                    <Link to={`/locations/${city.slug}`} className="hover:text-brand-primary transition-colors">
                                        Mold Removal {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <div className="bg-slate-800 p-2 rounded-lg mr-3" aria-hidden="true">
                                    <Phone className="w-5 h-5 text-brand-primary" />
                                </div>
                                <div className="mt-1">
                                    <a href="tel:7073505074" className="block text-white font-bold hover:text-brand-primary transition mb-1">(707) 350-5074</a>
                                    <span className="text-xs text-brand-primary uppercase tracking-wider font-bold">24/7 Emergency Response</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-slate-800 p-2 rounded-lg mr-3" aria-hidden="true">
                                    <Mail className="w-5 h-5 text-brand-primary" />
                                </div>
                                <div className="mt-1">
                                    <a href="mailto:contact@camoldsolutions.com" className="hover:text-white transition break-all">contact@camoldsolutions.com</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-slate-800 p-2 rounded-lg mr-3" aria-hidden="true">
                                    <MapPin className="w-5 h-5 text-brand-primary" />
                                </div>
                                <div className="mt-1">
                                    <span>Serving All of California</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 mb-6">
                        <p>&copy; {new Date().getFullYear()} CA Mold Solutions. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">Licensed & Insured Professional Remediation.</p>
                    </div>

                    {/* All Cities Links for SEO */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-[10px] text-slate-600 border-t border-slate-800/50 pt-6">
                        {TARGET_CITIES.map(city => (
                            <Link key={city.slug} to={`/locations/${city.slug}`} className="hover:text-brand-primary transition-colors">
                                Mold Inspection {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ASSETS } from '../../lib/constants';

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full text-white hover:bg-brand-primary transition duration-300"
    >
        {icon}
    </a>
);

const Footer = ({ navigateTo }) => {
    return (
        <footer className="bg-brand-dark text-slate-300 py-16 border-t border-slate-800">
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
                            <li><button onClick={() => navigateTo('home')} className="hover:text-brand-primary transition">Home</button></li>
                            <li><button onClick={() => navigateTo('about')} className="hover:text-brand-primary transition">About Us</button></li>
                            <li><button onClick={() => navigateTo('certifications')} className="hover:text-brand-primary transition">Certifications</button></li>
                            <li><button onClick={() => navigateTo('contact')} className="hover:text-brand-primary transition">Contact</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <Phone className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                                <span>(707) 350-5074<br /><span className="text-xs text-slate-500">24/7 Emergency Response</span></span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-brand-primary" />
                                <a href="mailto:contact@camoldsolutions.com" className="hover:text-white transition">contact@camoldsolutions.com</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 mr-2 mt-1 text-brand-primary" />
                                <span>Serving All of California</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} CA Mold Solutions. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Licensed & Insured.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

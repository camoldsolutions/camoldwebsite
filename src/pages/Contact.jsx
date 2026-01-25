import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ASSETS } from '../lib/constants';

const ContactInfoItem = ({ icon, label, value, subval, href }) => (
    <div className="flex items-start group p-4 rounded-xl hover:bg-white/5 transition duration-300">
        <div className="bg-emerald-500/10 p-4 rounded-full mr-4 flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition duration-300">
            {React.cloneElement(icon, { className: "w-6 h-6 text-emerald-400" })}
        </div>
        <div className="min-w-0">
            <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-1 opacity-80">{label}</p>
            {href ? (
                <a href={href} className="text-base md:text-xl font-bold text-white hover:text-emerald-400 transition block break-all">{value}</a>
            ) : (
                <span className="text-base md:text-xl font-bold text-white block break-words">{value}</span>
            )}
            {subval && <span className="text-sm text-slate-400 block mt-1 font-medium">{subval}</span>}
        </div>
    </div>
);

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        setErrorMessage('');

        emailjs.sendForm('service_q7ndb7q', 'template_826gypb', form.current, '0P4TyC9hTzEJ9nLvv')
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
                setErrorMessage(error.text || 'Something went wrong. Please try again.');
            });
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50 min-h-screen font-sans">
            {/* Header */}
            <div className="relative pt-32 pb-28 md:pt-48 md:pb-56 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={ASSETS.heroImage} alt="Contact CA Mold Solutions" className="w-full h-full object-cover object-top filter brightness-50" />
                </div>
                <div className="absolute inset-0 bg-[#0B1F3F]/80 z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">Contact Us</h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                        Mold issues? Don't wait. We're here to help 24/7.
                    </p>
                </div>
            </div>

            <Section variant="light" className="-mt-4 md:-mt-8 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Contact Info Card (Left) */}
                    <div className="lg:col-span-5 bg-[#0B1F3F] text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between rounded-3xl shadow-xl h-full">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-10 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-2 text-white">Get in Touch</h2>
                            <p className="text-slate-200 mb-12 text-lg">We'd love to hear from you. Our friendly team is always here to chat.</p>

                            <div className="space-y-8">
                                <ContactInfoItem
                                    icon={<Phone />}
                                    label="Phone"
                                    value="(707) 350-5074"
                                    subval="24/7 Emergency Response"
                                    href="tel:7073505074"
                                />
                                <ContactInfoItem
                                    icon={<Mail />}
                                    label="Email"
                                    value="contact@camoldsolutions.com"
                                    href="mailto:contact@camoldsolutions.com"
                                />
                                <ContactInfoItem
                                    icon={<MapPin />}
                                    label="Service Area"
                                    value="California"
                                    subval="Serving Residential & Commercial"
                                />
                            </div>
                        </div>

                        <div className="mt-12 relative z-10">
                            <div className="flex space-x-4">
                                {/* Social icons could go here */}
                            </div>
                        </div>
                    </div>

                    {/* Form (Right) */}
                    <div className="lg:col-span-7 bg-white p-10 md:p-14 rounded-3xl shadow-xl h-full">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
                        <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you within 24 hours.</p>

                        {status === 'success' && (
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 p-4 mb-8 rounded-md flex items-center shadow-sm" role="alert">
                                <span className="font-bold mr-2">Success!</span>
                                <span>Your message has been sent successfully. We'll be in touch soon.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-md flex items-center shadow-sm" role="alert">
                                <span className="font-bold mr-2">Error:</span>
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" name="user_firstname" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" name="user_lastname" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                    <input type="tel" name="user_phone" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="(555) 555-5555" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" name="user_email" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea name="message" rows="4" required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900 resize-none"
                                    placeholder="How can we help you?"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#4C9F10] hover:bg-[#3e850c] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center justify-center uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                            <p className="text-sm text-gray-400 text-center mt-6">
                                Your privacy is important. We never share your details.
                            </p>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';
import SEO from '../components/SEO';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import { ASSETS } from '../lib/constants';

const CONTACT_EMAIL = 'contact@camoldsolutions.com';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6q1tlxf';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_826gypb';
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || 'template_0h9ftdq';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '0P4TyC9hTzEJ9nLvv';
const SUCCESS_MESSAGE = "Thank you. Your message was sent successfully. We'll get back to you within 24 hours.";
const ERROR_MESSAGE = 'Sorry, your message could not be sent. Please email us directly at contact@camoldsolutions.com.';

const ContactInfoItem = ({ icon, label, value, subval, href }) => (
    <div className="flex items-start group p-3 rounded-xl hover:bg-white/5 transition duration-300">
        <div className="bg-emerald-500/10 p-3 rounded-full mr-3 flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition duration-300" aria-hidden="true">
            {React.cloneElement(icon, { className: "w-5 h-5 text-emerald-400" })}
        </div>
        <div className="min-w-0 flex-grow pt-0.5">
            <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold mb-0.5 opacity-80">{label}</p>
            {href ? (
                <a href={href} className="text-sm md:text-lg font-bold text-white hover:text-emerald-400 transition block truncate">{value}</a>
            ) : (
                <span className="text-sm md:text-lg font-bold text-white block truncate">{value}</span>
            )}
            {subval && <span className="text-xs text-slate-400 block mt-0.5 font-medium">{subval}</span>}
        </div>
    </div>
);

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const visitorEmail = formData.get('email');
        const submittedAt = new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZoneName: 'short',
        });

        const templateParams = {
            user_firstname: formData.get('first_name'),
            user_lastname: formData.get('last_name'),
            user_phone: formData.get('phone'),
            user_email: visitorEmail,
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            phone: formData.get('phone'),
            email: visitorEmail,
            reply_to: visitorEmail,
            to_email: CONTACT_EMAIL,
            subject: 'New website contact form message',
            message: formData.get('message'),
            submission_time: submittedAt,
            page_url: window.location.href,
            'First Name': formData.get('first_name'),
            'Last Name': formData.get('last_name'),
            Phone: formData.get('phone'),
            Email: visitorEmail,
            Message: formData.get('message'),
            'Submission time': submittedAt,
            'Page URL': window.location.href,
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
                .catch((autoReplyError) => console.error('Auto-reply failed:', autoReplyError));
            setStatus('success');
            e.currentTarget.reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50 min-h-screen font-sans">
            <SEO
                title="Contact Us"
                description="Get in touch with CA Mold Solutions for a free phone consultation. 24/7 emergency response for mold inspection and remediation."
            />
            {/* Header */}
            <div className="relative pt-32 pb-28 md:pt-48 md:pb-56 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={ASSETS.heroImage} alt="" className="w-full h-full object-cover object-top filter brightness-50" fetchpriority="high" />
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
                                    value={CONTACT_EMAIL}
                                    href={`mailto:${CONTACT_EMAIL}`}
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
                                <span>{SUCCESS_MESSAGE}</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-md flex items-center shadow-sm" role="alert">
                                <span className="font-bold mr-2">Error:</span>
                                <span>{ERROR_MESSAGE}</span>
                            </div>
                        )}

                        <form onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" name="first_name" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" name="last_name" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                    <input type="tel" name="phone" required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white outline-none transition duration-200 placeholder-gray-400 text-gray-900"
                                        placeholder="(555) 555-5555" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" name="email" required
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
                            <p className="text-sm text-gray-500 text-center">
                                If the form does not work, email us directly at <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-emerald-700 hover:text-emerald-800 transition">{CONTACT_EMAIL}</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default Contact;

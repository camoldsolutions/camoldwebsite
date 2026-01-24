import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ContactInfoItem = ({ icon, label, value, subval, href }) => (
    <div className="flex items-start group">
        <div className="bg-brand-dark/50 p-3 rounded-lg mr-4 border border-brand-primary/20 group-hover:border-brand-primary/50 transition duration-300">
            {React.cloneElement(icon, { className: "w-6 h-6 text-brand-primary group-hover:text-emerald-400 transition duration-300" })}
        </div>
        <div>
            <p className="text-xs text-brand-primary uppercase tracking-widest font-bold mb-1">{label}</p>
            {href ? (
                <a href={href} className="text-lg md:text-xl font-bold text-white hover:text-brand-primary transition block break-words">{value}</a>
            ) : (
                <span className="text-lg md:text-xl font-bold text-white block break-words">{value}</span>
            )}
            {subval && <span className="text-sm text-slate-400 block mt-1">{subval}</span>}
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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-brand-light min-h-[80vh]">
            {/* Header */}
            <div className="bg-brand-dark pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/10"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Contact Us</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Mold issues? Don't wait. We're here to help 24/7.
                    </p>
                </div>
            </div>

            <Section variant="light" className="-mt-20 pt-0 md:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Contact Info Card */}
                    <Card className="md:col-span-2 bg-brand-dark border-brand-primary/10 h-full text-white p-8 md:p-12 relative overflow-hidden" hover={false}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full filter blur-[80px] opacity-10"></div>
                        <h2 className="text-3xl font-bold mb-10 font-display relative z-10">Get in Touch</h2>

                        <div className="space-y-10 relative z-10">
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
                    </Card>

                    {/* Form */}
                    <Card className="md:col-span-3 p-8 md:p-12" hover={false}>
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 font-display">Send us a message</h2>

                        {status === 'success' && (
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 p-4 mb-8 rounded-r" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Your message has been sent successfully. We'll be in touch soon.</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-r" role="alert">
                                <p className="font-bold">Error</p>
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                                    <input type="text" name="user_firstname" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition duration-200" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                                    <input type="text" name="user_lastname" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition duration-200" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone</label>
                                    <input type="tel" name="user_phone" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition duration-200" placeholder="(555) 555-5555" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email</label>
                                    <input type="email" name="user_email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition duration-200" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition duration-200" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button type="submit" disabled={loading} variant="primary" size="lg" className="w-full">
                                {loading ? 'Sending...' : 'Submit Request'}
                            </Button>
                            <p className="text-sm text-slate-400 text-center mt-4">
                                We respect your privacy. Your information is never shared.
                            </p>
                        </form>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Contact;

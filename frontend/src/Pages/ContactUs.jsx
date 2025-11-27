import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { useInquiryModal } from '../context/InquiryModalContext';

const ContactUs = () => {
    const { openModal } = useInquiryModal();

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            details: [
                "900 Ramble Creek Drive",
                "Pflugerville, Texas 78660",
                "United States"
            ],
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: <FaPhone />,
            title: "Call Us",
            details: [
                "Phone: (512) 877-3908",
                "Toll-Free: 1-800-SERENITY",
                "Available 24/7"
            ],
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            icon: <FaEnvelope />,
            title: "Email Us",
            details: [
                "info@slserenity.com",
                "care@slserenity.com",
                "tours@slserenity.com"
            ],
            color: "from-cyan-500 to-cyan-600",
            bgColor: "bg-cyan-50",
            iconColor: "text-cyan-600"
        },
        {
            icon: <FaClock />,
            title: "Office Hours",
            details: [
                "Monday - Friday: 8:00 AM - 6:00 PM",
                "Saturday: 9:00 AM - 4:00 PM",
                "Sunday: By Appointment"
            ],
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600"
        }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, name: "Facebook", color: "hover:bg-blue-600", href: "#" },
        { icon: <FaInstagram />, name: "Instagram", color: "hover:bg-pink-600", href: "#" },
        { icon: <FaTwitter />, name: "Twitter", color: "hover:bg-sky-500", href: "#" },
        { icon: <FaTiktok />, name: "TikTok", color: "hover:bg-gray-900", href: "#" }
    ];

    return (
        <>
            <Navbar />
            <main className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
                {/* Hero Section */}
                <motion.section 
                    className="relative overflow-hidden py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div 
                            className="text-center max-w-3xl mx-auto"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.p 
                                className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                GET IN TOUCH
                            </motion.p>
                            <motion.h1 
                                className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 mb-6"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                We're Here to Help
                            </motion.h1>
                            <motion.p 
                                className="text-xl text-gray-600 leading-relaxed mb-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Whether you're exploring senior living options, scheduling a tour, or have questions about our services, our team is ready to assist you. Reach out today!
                            </motion.p>
                            <motion.button
                                onClick={openModal}
                                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Us a Message
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Contact Cards */}
                <motion.section 
                    className="py-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className={`${info.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-${info.color.split('-')[1]}-300`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                >
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} text-white flex items-center justify-center text-2xl mb-4 mx-auto`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{info.title}</h3>
                                    <ul className="space-y-2">
                                        {info.details.map((detail, i) => (
                                            <li key={i} className="text-gray-700 text-center text-sm">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Map and Form Section */}
                <motion.section 
                    className="py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Map */}
                            <motion.div 
                                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <iframe
                                    title="San Antonio Compassinate care Location"
                                    src="https://www.google.com/maps?q=texas&output=embed"
                                    className="w-full h-full min-h-[400px]"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </motion.div>

                            {/* Quick Contact Form */}
                            <motion.div 
                                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-2xl border-2 border-blue-100"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.h2 
                                    className="text-3xl font-serif font-bold text-gray-900 mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Quick Contact
                                </motion.h2>
                                <motion.p 
                                    className="text-gray-600 mb-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </motion.p>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all outline-none bg-white"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all outline-none bg-white"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all outline-none bg-white"
                                            placeholder="(512) 555-1234"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all outline-none resize-none bg-white"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button
                                        onClick={openModal}
                                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Social Media Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Connect With Us</h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Follow us on social media for updates, events, resident stories, and insights into life at Serenity.
                            </p>
                            <div className="flex justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm ${social.color} text-white flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:bg-white/30 shadow-lg`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Contact */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white flex items-center justify-center text-2xl flex-shrink-0">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Contact</h3>
                                    <p className="text-gray-700 mb-4">
                                        For urgent matters or emergencies, please call our 24/7 emergency line:
                                    </p>
                                    <a
                                        href="tel:+15128773908"
                                        className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                                    >
                                        (512) 877-3908
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;


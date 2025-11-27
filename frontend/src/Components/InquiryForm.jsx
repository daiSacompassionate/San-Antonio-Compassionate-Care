import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPhone, FaComment } from "react-icons/fa";

export default function InquiryForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const API_URL = import.meta.env.VITE_BACKEND_URL;

        try {
            const response = await fetch(`${API_URL}/api/inquiries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Inquiry submitted:", data);

            // More flexible success checking
            if (response.ok || data.success || data._id || data.id) {
                alert("Inquiry submitted successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
                // Close modal after successful submission
                onClose();
            } else {
                // Show more detailed error message
                const errorMessage = data.message || data.error || "Failed to submit inquiry";
                alert(errorMessage);
            }
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            alert("Network error: Unable to connect to server");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center p-4 z-50 transition-opacity duration-300 overflow-hidden"
            onClick={onClose}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
            {/* Beautiful Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-cyan-400/20 backdrop-blur-sm">
                {/* Animated Floating Shapes */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-300/30 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-xl animate-float-medium"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full blur-xl animate-float-fast"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Sparkle Effects */}
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"></div>
            </div>

            {/* Main Modal Container */}
            <motion.div
                className="relative bg-gradient-to-br from-white/95 via-blue-50/95 to-purple-50/95 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 max-h-[90vh] overflow-hidden border border-white/50 backdrop-blur-xl custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                style={{
                    animation: 'slideUp 0.3s ease-out',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                }}
            >
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-t-3xl z-20"></div>

                {/* Header - Sticky */}
                <div className="relative p-6 border-b border-blue-200/30 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-t-3xl backdrop-blur-sm sticky top-0 z-10">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                                <FaEnvelope className="text-white" size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Contact Us
                                </h2>
                                <p className="text-sm text-blue-600/70 font-medium">
                                    We're here to help
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar-content">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        {/* Name Field */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <div className="p-1.5 bg-blue-100 rounded-lg">
                                    <FaUser className="text-blue-600" size={14} />
                                </div>
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-blue-200/50 bg-white/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-200 outline-none backdrop-blur-sm shadow-sm hover:shadow-md"
                            />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <div className="p-1.5 bg-purple-100 rounded-lg">
                                    <FaEnvelope className="text-purple-600" size={14} />
                                </div>
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-blue-200/50 bg-white/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-200 outline-none backdrop-blur-sm shadow-sm hover:shadow-md"
                            />
                        </motion.div>

                        {/* Phone Field */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <div className="p-1.5 bg-cyan-100 rounded-lg">
                                    <FaPhone className="text-cyan-600" size={14} />
                                </div>
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-blue-200/50 bg-white/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-200 outline-none backdrop-blur-sm shadow-sm hover:shadow-md"
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25 }}
                        >
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <div className="p-1.5 bg-green-100 rounded-lg">
                                    <FaComment className="text-green-600" size={14} />
                                </div>
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                placeholder="Tell us how we can help you..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-blue-200/50 bg-white/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-200 outline-none resize-none backdrop-blur-sm shadow-sm hover:shadow-md"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {/* Animated background shine */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>

                            {isSubmitting ? (
                                <div className="flex items-center justify-center relative z-10">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2 relative z-10">
                                    <FaEnvelope />
                                    Send Message
                                </div>
                            )}
                        </motion.button>
                    </form>
                </div>

                {/* Footer - Sticky */}
                <div className="px-6 py-4 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-cyan-50/80 rounded-b-3xl border-t border-blue-200/30 sticky bottom-0">
                    <p className="text-sm text-blue-700/80 font-medium text-center flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        We'll get back to you within 24 hours
                    </p>
                </div>
            </motion.div>

            {/* Add custom animations and scrollbar styles to your global CSS */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-medium {
                    0%, 100% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(10px) translateY(-15px); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }
                .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }

                /* Beautiful Custom Scrollbar */
                .custom-scrollbar-content::-webkit-scrollbar {
                    width: 8px;
                }

                .custom-scrollbar-content::-webkit-scrollbar-track {
                    background: rgba(59, 130, 246, 0.1);
                    border-radius: 10px;
                    margin: 4px;
                }

                .custom-scrollbar-content::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
                    border-radius: 10px;
                    border: 2px solid rgba(255, 255, 255, 0.8);
                }

                .custom-scrollbar-content::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(135deg, #2563eb, #7c3aed, #0891b2);
                }

                .custom-scrollbar-content {
                    scrollbar-width: thin;
                    scrollbar-color: #3b82f6 rgba(59, 130, 246, 0.1);
                }

                /* For Firefox */
                .custom-scrollbar-content {
                    scrollbar-width: thin;
                    scrollbar-color: #3b82f6 rgba(59, 130, 246, 0.1);
                }

                /* Smooth scrolling */
                .custom-scrollbar-content {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
}
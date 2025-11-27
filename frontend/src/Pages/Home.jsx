import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaHandHoldingUsd, FaHeadset } from 'react-icons/fa';
import homeImage from '../Images/Homepage.png'; // Adjust path as needed
import Description from '../Components/Description';
import MoreInfo from '../Components/MoreInfo';
import Tiles from '../Components/Tiles';
import FeaturesShowcase from '../Components/FeaturesShowcase';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useScheduleTourModal } from '../context/InquiryModalContext';

const Home = () => {
    const { openModal: openTourModal } = useScheduleTourModal();
    
    return (
        <>
            <Navbar />
            <div>
                <motion.div 
                    className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center min-h-screen"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${homeImage})`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Content Container */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-2xl">
                            {/* Main Title */}
                            <motion.h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Assisted Living in<br />
                                <span className="text-blue-100">San Antonio, Texas</span>
                            </motion.h1>

                            {/* Description Text */}
                            <motion.p 
                                className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-8 max-w-xl"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                At San Antonio Compassinate care, we believe life should be lived with comfort, dignity, and joy—no matter the age. Our community in Pflugerville offers the perfect blend of support, independence, and warmth that truly feels like home.
                            </motion.p>

                            {/* Interactive Elements / CTAs */}
                            <motion.div 
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {/* Primary CTA Button */}
                                <motion.button 
                                    onClick={openTourModal}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaCalendarAlt className="text-white" size={20} />
                                    Request for tour
                                </motion.button>

                                {/* Secondary Info Features */}
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    {/* Feature 1 - Flexible Payment */}
                                    <motion.div 
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                    >
                                        <FaHandHoldingUsd className="text-blue-200" size={20} />
                                        <span className="text-white font-medium text-sm sm:text-base">
                                            Flexible private pay options available
                                        </span>
                                    </motion.div>

                                    {/* Feature 2 - 24/7 Support */}
                                    <motion.div 
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                    >
                                        <FaHeadset className="text-blue-200" size={20} />
                                        <span className="text-white font-medium text-sm sm:text-base">
                                            Available to chat with you 24/7
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Additional Features */}
                            <motion.div 
                                className="mt-12 flex flex-wrap gap-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <motion.div 
                                    className="flex items-center gap-2 text-blue-100"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm font-medium">24/7 Professional Care</span>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center gap-2 text-blue-100"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm font-medium">Medication Management</span>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center gap-2 text-blue-100"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm font-medium">Nutritious Meals</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Subtle Blue Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-transparent z-0"></div>
                </motion.div>
                <Description />
                <MoreInfo />
                <Tiles />
                <FeaturesShowcase />
                <Footer />
            </div>

        </>
    );
};

export default Home;
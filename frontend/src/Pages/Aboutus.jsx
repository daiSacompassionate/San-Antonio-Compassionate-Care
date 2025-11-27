import OurPromise from '../Components/Aboutus/OurPromise';
import OurMission from '../Components/Aboutus/OurMission';
import Navbar from '../Components/Navbar';
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { FaHeart, FaHandsHelping, FaAward, FaUsers, FaHome, FaLeaf, FaClock, FaStar } from 'react-icons/fa';
import { useInquiryModal, useScheduleTourModal } from '../context/InquiryModalContext';

const AboutUs = () => {
    const { openModal } = useInquiryModal();
    const { openModal: openTourModal } = useScheduleTourModal();

    const values = [
        {
            icon: <FaHeart />,
            title: "Compassion First",
            description: "Every interaction is guided by genuine care and empathy for our residents and their families."
        },
        {
            icon: <FaHandsHelping />,
            title: "Personalized Care",
            description: "We create individualized care plans that honor each resident's unique needs, preferences, and life story."
        },
        {
            icon: <FaAward />,
            title: "Excellence in Service",
            description: "Our team undergoes continuous training to provide the highest standards of care and hospitality."
        },
        {
            icon: <FaUsers />,
            title: "Community Connection",
            description: "We foster meaningful relationships and create a vibrant, engaging community where everyone belongs."
        }
    ];

    const stats = [
        { number: "15+", label: "Years of Excellence", icon: <FaClock /> },
        { number: "500+", label: "Families Served", icon: <FaUsers /> },
        { number: "98%", label: "Satisfaction Rate", icon: <FaStar /> },
        { number: "24/7", label: "Care Available", icon: <FaHeart /> }
    ];

    const testimonials = [
        {
            name: "Margaret Thompson",
            role: "Family Member",
            quote: "San Antonio Compassinate care has been a blessing for our family. The care team treats my mother with such dignity and respect. We finally have peace of mind.",
            rating: 5
        },
        {
            name: "Robert Chen",
            role: "Resident",
            quote: "I've found a true home here. The activities, the food, the friendships—everything exceeds my expectations. I'm grateful every day.",
            rating: 5
        },
        {
            name: "Linda Martinez",
            role: "Family Member",
            quote: "The personalized attention and warm community atmosphere make all the difference. My father is thriving here, and that means everything to us.",
            rating: 5
        }
    ];

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <motion.div 
                className="relative w-full items-center min-h-screen pt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="min-h-screen flex flex-col lg:flex-row w-full">
                    {/* Image Column */}
                    <motion.div 
                        className="w-full lg:w-3/5 h-[50vh] lg:h-screen"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                            alt="Caring professional assisting elderly woman with paperwork in comfortable setting"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div 
                        className="w-full lg:w-2/5 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 text-white p-8 lg:p-12 flex items-center justify-center min-h-[50vh] lg:min-h-screen"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="max-w-md w-full text-center lg:text-left">
                            <motion.div 
                                className="mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <p className="text-sm uppercase tracking-widest text-blue-200 font-serif font-semibold">
                                    ABOUT US
                                </p>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug mb-6 font-serif"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Finding Serenity: Exceptional Care, Peace of Mind.
                            </motion.h1>

                            <motion.p 
                                className="text-base lg:text-lg leading-relaxed text-blue-100 font-serif mb-8 text-center lg:text-left"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                At San Antonio Compassinate care, our name is our promise. We are dedicated to providing a lifestyle of comfort, dignity, and vibrant community for our residents, while offering families the ultimate peace of mind. Welcome to a place where every day is filled with support, connection, and serenity.
                            </motion.p>

                            <motion.div 
                                className="mt-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <motion.button 
                                    onClick={openTourModal}
                                    className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg font-serif font-semibold text-base hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full lg:w-auto transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Schedule a Visit
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <motion.section 
                className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 py-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index} 
                                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Our Values Section */}
            <motion.section 
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-4">OUR CORE VALUES</p>
                        <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">What Drives Us Every Day</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These fundamental principles guide every decision we make and every interaction we have.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div 
                                key={index} 
                                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <motion.div 
                                    className="text-4xl text-blue-600 mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {value.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <OurPromise />
            <OurMission />

            {/* Testimonials Section */}
            <motion.section 
                className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-4">TESTIMONIALS</p>
                        <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">Stories from Our Community</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Hear from residents and families who have experienced the Serenity difference.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index} 
                                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                        >
                                            <FaStar className="text-yellow-400" />
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.h2 
                        className="text-3xl lg:text-4xl font-serif mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to Experience Serenity?
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Schedule a personalized tour and discover how we can support your family's journey.
                    </motion.p>
                    <motion.button 
                        onClick={openTourModal}
                        className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Schedule Your Visit Today
                    </motion.button>
                </div>
            </motion.section>

            <Footer />
        </>
    );
};

export default AboutUs;
import React, { useState, useEffect } from 'react';
import { useScheduleTourModal } from '../context/InquiryModalContext';

const FeaturesShowcase = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { openModal: openTourModal } = useScheduleTourModal();

    const features = [
        "Spacious private and semi-private rooms",
        "Bright, cozy common areas for socializing",
        "Nutritious meals daily",
        "24/7 professional caregiving and support",
        "Beautiful outdoor spaces for relaxation",
        "A calendar full of engaging activities and events"
    ];

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Beautiful senior living common area"
        },
        {
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Comfortable lounge area"
        },
        {
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Modern dining area"
        },
        {
            image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Peaceful garden area"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full bg-linear-to-br from-gray-50 to-white py-12 xs:py-14 sm:py-16 md:py-20 px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 xs:gap-12 sm:gap-16 lg:gap-20 items-center">

                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-[48%]">
                        <div className="space-y-6 xs:space-y-8">
                            {/* Pre-heading */}
                            <div>
                                <span className="text-amber-700 font-semibold text-xs xs:text-sm uppercase tracking-wider bg-amber-50 px-3 xs:px-4 py-2 rounded-full inline-block">
                                    OUR HOMELY FACILITIES
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                                A Community Designed with <span className="text-amber-600">You</span> in Mind
                            </h2>

                            {/* Features List */}
                            <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3 xs:space-x-4 group">
                                        {/* Animated Checkmark */}
                                        <div className="flex-shrink-0 w-6 xs:w-7 h-6 xs:h-7 bg-amber-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-amber-200 transition-colors duration-300">
                                            <svg className="w-3 xs:w-4 h-3 xs:h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {/* Feature Text */}
                                        <p className="text-gray-700 font-sans text-base xs:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Call-to-Action Button */}
                            <button
                                onClick={openTourModal}
                                className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 xs:py-4 px-8 xs:px-10 rounded-lg xs:rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform w-full xs:w-auto"
                            >
                                Request for tour
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image Slideshow */}
                    <div className="w-full lg:w-[52%]">
                        <div className="relative rounded-2xl xs:rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 xs:border-8 border-white">
                            {/* Slideshow Container */}
                            <div className="relative h-64 xs:h-80 sm:h-96 lg:h-[550px]">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ${index === currentSlide
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-105'
                                            }`}
                                    >
                                        <img
                                            src={slide.image}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
                                    </div>
                                ))}

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-2 xs:left-4 top-1/2 transform -translate-y-1/2 w-10 xs:w-12 h-10 xs:h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-110"
                                >
                                    <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 xs:right-4 top-1/2 transform -translate-y-1/2 w-10 xs:w-12 h-10 xs:h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-110"
                                >
                                    <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Indicator Dots */}
                                <div className="absolute bottom-4 xs:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 xs:space-x-3">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 xs:w-3 h-2 xs:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50 hover:bg-white/70'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesShowcase;
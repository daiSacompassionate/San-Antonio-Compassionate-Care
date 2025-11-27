import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from "../Images/doctor-patient.png";
import secondaryImage from "../Images/nurse-tablet.avif";

const MoreInfo = () => {
    return (
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* Left Column - Image Section */}
                    <div className="w-full lg:w-3/5 relative">
                        <div className="relative">
                            <img
                                src={mainImage}
                                alt="Elderly man in wheelchair with doctor"
                                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                            />

                            {/* Secondary Overlay Image */}
                            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-48 h-48 lg:w-56 lg:h-56">
                                <img
                                    src={secondaryImage}
                                    alt="Nurse and elderly resident using tablet"
                                    className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full lg:w-2/5">
                        <div className="space-y-6 lg:space-y-8">
                            <div>
                                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                                    MORE THAN A CARE HOME
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                                A serene atmosphere of love, peace, dignity & security
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We know that making the transition to assisted living can feel overwhelming, which is why we've created an environment filled with care and ease. From thoughtful amenities to personalized support, we're here to make everyday life brighter and more meaningful.
                            </p>

                            <Link
                                to="/aboutus"
                                className="inline-flex bg-amber-50 hover:bg-amber-100 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-amber-200"
                            >
                                More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
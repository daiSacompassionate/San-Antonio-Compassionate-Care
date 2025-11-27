import React from 'react';

const OurPromise = () => {
    return (
        <section className="min-h-screen bg-white flex items-center py-12">
            <div className="container mx-auto px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    {/* Text Content Column - Left */}
                    <div className="lg:w-2/5 w-full lg:pr-12 mb-12 lg:mb-0">
                        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                            {/* Main Title - Using Transitional Serif font */}
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight mb-8 font-serif">
                                Our Promise: <br />A Culture of Compassion and Connection
                            </h1>

                            {/* Body Paragraph - Using Transitional Serif font */}
                            <p className="text-base lg:text-lg text-gray-600 font-serif leading-relaxed mb-8 text-center lg:text-left">
                                San Antonio Compassinate care was founded on a simple but powerful belief: everyone deserves to age in an environment filled with respect, joy, and personalized attention. Our team is carefully selected for their compassion and expertise, creating a culture that feels like an extension of family. We go beyond simply providing care; we build relationships and cultivate a warm, engaging community where each resident's story is honored and their well-being is our highest priority.
                            </p>

                            {/* Optional decorative element */}
                            <div className="w-20 h-1 bg-blue-400 rounded-full mx-auto lg:mx-0 mb-2"></div>
                        </div>
                    </div>

                    {/* Image Column - Right */}
                    <div className="lg:w-3/5 w-full">
                        <div className="relative h-96 lg:h-[80vh] max-h-[600px] rounded-lg overflow-hidden shadow-2xl mx-auto lg:mx-0">
                            {/* Real image from Unsplash - Volunteer helping elderly person */}
                            <img
                                src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Volunteer assisting elderly person in wheelchair in beautiful garden setting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPromise;
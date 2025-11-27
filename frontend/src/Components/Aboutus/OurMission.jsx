import React from 'react';

const OurMission = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row w-full">
            {/* Image Column - Left Side */}
            <div className="lg:w-[55%] w-full lg:min-h-screen flex items-center justify-center p-4 lg:p-8">
                <div className="w-full h-96 lg:h-full max-w-6xl">
                    <img
                        src="https://images.unsplash.com/photo-1576765974257-b414b9ea0051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Caregiver assisting elderly person in wheelchair with compassion and care"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Text Content Column - Right Side */}
            <div className="lg:w-[45%] w-full flex items-center justify-center bg-white lg:min-h-screen py-8 lg:py-12 px-6 lg:px-8">
                <div className="max-w-md lg:max-w-lg w-full">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif text-[#546E7A] leading-tight mb-8">
                        Our Mission: A Culture of Compassion and Connection
                    </h1>

                    <p className="text-gray-800 font-sans text-base lg:text-lg leading-relaxed">
                        San Antonio Compassinate care was founded on a simple but powerful belief: everyone deserves
                        to age in an environment filled with respect, joy, and personalized attention. Our team
                        is carefully selected for their compassion and expertise, creating a culture that feels
                        like an extension of family. We go beyond simply providing care; we build relationships
                        and cultivate a warm, engaging community where each resident's story is honored and
                        their well-being is our highest priority.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
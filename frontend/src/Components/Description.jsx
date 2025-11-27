import React from 'react';
import { FaHome, FaHandsHelping, FaBrain } from 'react-icons/fa';
import selfliving from "../Images/selfliving.jpg"
import nurseImage from "../Images/nurse-tablet.avif";

const Description = () => {
    const services = [
        {
            id: 1,
            title: "Independent Living",
            bgColor: "from-amber-50 via-white to-amber-100",
            image: selfliving,
            description: "Maintain your independence with supportive community living",
            accent: "from-amber-400 to-orange-500",
            icon: FaHome
        },
        {
            id: 2,
            title: "Assisted Living",
            bgColor: "from-blue-50 via-white to-blue-100",
            image: nurseImage,
            description: "Personalized care with dignity and respect",
            accent: "from-sky-500 to-indigo-500",
            icon: FaHandsHelping
        },
        {
            id: 3,
            title: "Memory Care",
            bgColor: "from-purple-50 via-white to-pink-50",
            image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Specialized support for memory-related conditions",
            accent: "from-fuchsia-500 to-purple-600",
            icon: FaBrain
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/30 w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-7xl mx-auto w-full">

                {/* Full Screen Card with Gradient Border */}
                <div className='min-h-screen relative rounded-3xl mb-16 p-8 sm:p-12 lg:p-16'>
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-1">
                        <div className="w-full h-full rounded-3xl bg-white/95 backdrop-blur-sm"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        {/* Pre-heading */}
                        <div className="mb-8">
                            <span className="text-blue-600 font-semibold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                WHERE CARE MEETS COMFORT
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 leading-tight">
                                San Antonio Compassinate care isn't just a place to stay, it's a place to belong. We've built our community around compassion, respect, and genuine connection.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Message + Map Section */}
                <div className="grid gap-8 lg:grid-cols-[2fr,1fr] items-stretch mb-16">
                    <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/60 border border-blue-100/70 p-10 space-y-6">
                        <p className="text-sm uppercase tracking-[0.4em] text-blue-500">
                            VISIT US IN TEXAS
                        </p>
                        <h3 className="text-3xl font-serif text-gray-900">
                            Rooted in San Antonio, serving families across the Lone Star State.
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Schedule a tour, drop in for a community activity, or connect with our care advisors—we are
                            here to guide you every step of the way. Our campus blends the warmth of Texas hospitality with
                            elevated assisted living, memory care, and independent living experiences.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-left">
                                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Address</p>
                                <p className="text-gray-800 font-semibold mt-1">
                                    12030 Bandera Rd. Ste 110
                                    <br />Helotes texas 78023
                                </p>
                            </div>
                            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-left">
                                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Contact</p>
                                <p className="text-gray-800 font-semibold mt-1 space-y-1">
                                    <span className="block">Call Senior Nurse: Cara Faux • (210) 322-6621</span>
                                    <span className="block">Call Manager: Dai Nguyen • (210) 606-1146</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-4 flex items-center justify-center">
                        <iframe
                            title="San Antonio Compassionate Care"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.456789012345!2d-98.493965!3d29.424722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f1234567890%3A0xabcdef123456789!2sSan+Antonio%2C+TX!5e0!3m2!1sen!2sus!4v1234567890123"
                            className="w-full h-64 lg:h-full rounded-2xl border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className="relative group">
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.accent} opacity-30 blur-2xl transition duration-500 group-hover:opacity-60 group-hover:blur-xl`} />
                                <div className={`relative rounded-3xl p-[1px] bg-gradient-to-br ${service.accent} shadow-xl shadow-blue-100/50`}>
                                    <div className={`relative rounded-3xl bg-gradient-to-b ${service.bgColor} p-8 flex flex-col items-center justify-between min-h-[420px] text-center transition duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl`}>
                                        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                                            {Icon && <Icon className="text-2xl text-slate-700" />}
                                        </div>
                                        <div className="flex justify-center mb-6">
                                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-semibold text-gray-800">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-500">
                                            <span className="inline-flex w-8 h-[2px] bg-slate-400" />
                                            curated care path
                                            <span className="inline-flex w-8 h-[2px] bg-slate-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Description */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        At San Antonio Compassinate care, we understand that choosing the right care is one of the most important decisions you'll make.
                        That's why we offer personalized solutions tailored to meet the unique needs of each resident while fostering a vibrant,
                        engaging community where lasting friendships are formed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Description;
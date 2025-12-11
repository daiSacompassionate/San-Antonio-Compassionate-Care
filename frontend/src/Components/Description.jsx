import React from 'react';
import { FaHome, FaHandsHelping, FaPills } from 'react-icons/fa';
import selfliving from "../Images/selfliving.jpg"
import nurseImage from "../Images/nurse-tablet.avif";
import doctorPatient from "../Images/doctor-patient.png";

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
            title: "Medication Management",
            bgColor: "from-emerald-50 via-white to-emerald-100",
            image: doctorPatient,
            description: "Pharmacy partnerships and vigilant monitoring electronic MAR, pharmacist reviews, and clinical collaboration.",
            accent: "from-emerald-400 to-emerald-600",
            icon: FaPills
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50/30 w-full py-12 xs:py-14 sm:py-16 md:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-7xl mx-auto w-full">

                {/* Full Screen Card with Gradient Border */}
                <div className='min-h-auto xs:min-h-auto sm:min-h-auto md:min-h-screen relative rounded-2xl xs:rounded-2xl sm:rounded-3xl mb-12 xs:mb-16 p-6 xs:p-8 sm:p-12 lg:p-16'>
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl xs:rounded-2xl sm:rounded-3xl bg-linear-to-r from-blue-400 via-purple-500 to-cyan-400 p-1">
                        <div className="w-full h-full rounded-2xl xs:rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[400px] xs:min-h-[500px] sm:min-h-[600px] md:min-h-screen">
                        {/* Pre-heading */}
                        <div className="mb-6 xs:mb-8">
                            <span className="font-semibold text-lg xs:text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                WHERE CARE MEETS COMFORT
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                                San Antonio Compassinate care isn't just a place to stay, it's a place to belong. We've built our community around compassion, respect, and genuine connection.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Message + Map Section */}
                <div className="grid gap-6 xs:gap-8 lg:grid-cols-[2fr,1fr] items-stretch mb-12 xs:mb-16">
                    <div className="bg-white rounded-2xl xs:rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-100/60 border border-blue-100/70 p-6 xs:p-8 sm:p-10 space-y-4 xs:space-y-6">
                        <p className="text-xs uppercase tracking-[0.4em] text-blue-500">
                            VISIT US IN TEXAS
                        </p>
                        <h3 className="text-2xl xs:text-2xl sm:text-3xl font-serif text-gray-900">
                            Rooted in San Antonio, serving families across the Lone Star State.
                        </h3>
                        <p className="text-base xs:text-lg text-gray-600 leading-relaxed">
                            Schedule a tour, drop in for a community activity, or connect with our care advisors—we are
                            here to guide you every step of the way. Our campus blends the warmth of Texas hospitality with
                            elevated assisted living, memory care, and independent living experiences.
                        </p>
                        <div className="grid gap-3 xs:gap-4 sm:grid-cols-2">
                            <div className="rounded-xl xs:rounded-xl sm:rounded-2xl border border-blue-100 bg-blue-50/60 p-3 xs:p-4 text-left">
                                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Address</p>
                                <p className="text-gray-800 font-semibold mt-1 text-sm xs:text-base">
                                    12030 Bandera Rd. Ste 110
                                    <br />Helotes texas 78023
                                </p>
                            </div>
                            <div className="rounded-xl xs:rounded-xl sm:rounded-2xl border border-blue-100 bg-blue-50/60 p-3 xs:p-4 text-left">
                                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Contact</p>
                                <p className="text-gray-800 font-semibold mt-1 text-sm xs:text-base space-y-1">
                                    <span className="block">Call Senior Nurse: Cara Faux • (210) 322-6621</span>
                                    <span className="block">Call Manager: Dai Nguyen • (210) 606-1146</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl xs:rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100 p-3 xs:p-4 flex items-center justify-center">
                        <iframe
                            title="San Antonio Compassionate Care"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.456789012345!2d-98.493965!3d29.424722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f1234567890%3A0xabcdef123456789!2sSan+Antonio%2C+TX!5e0!3m2!1sen!2sus!4v1234567890123"
                            className="w-full h-64 xs:h-80 sm:h-96 lg:h-full rounded-xl xs:rounded-xl sm:rounded-2xl border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 lg:gap-12 mb-12 xs:mb-16">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className="relative group">
                                <div className={`absolute inset-0 rounded-2xl xs:rounded-2xl sm:rounded-3xl bg-linear-to-br ${service.accent} opacity-30 blur-2xl transition duration-500 group-hover:opacity-60 group-hover:blur-xl`} />
                                <div className={`relative rounded-2xl xs:rounded-2xl sm:rounded-3xl p-px bg-linear-to-br ${service.accent} shadow-xl shadow-blue-100/50`}>
                                    <div className={`relative rounded-2xl xs:rounded-2xl sm:rounded-3xl bg-linear-to-b ${service.bgColor} p-6 xs:p-8 flex flex-col items-center justify-between min-h-[420px] text-center transition duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl`}>
                                        <div className="w-14 xs:w-16 h-14 xs:h-16 rounded-xl xs:rounded-xl sm:rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 xs:mb-6">
                                            {Icon && <Icon className="text-xl xs:text-2xl text-slate-700" />}
                                        </div>
                                        <div className="flex justify-center mb-4 xs:mb-6">
                                            <div className="w-32 xs:w-40 h-32 xs:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 xs:space-y-3">
                                            <h3 className="text-xl xs:text-2xl font-semibold text-gray-800">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm xs:text-base leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="mt-4 xs:mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-500">
                                            <span className="inline-flex w-8 h-0.5 bg-slate-400" />
                                            curated care path
                                            <span className="inline-flex w-8 h-0.5 bg-slate-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Description */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-base xs:text-lg sm:text-xl text-gray-600 leading-relaxed px-2">
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
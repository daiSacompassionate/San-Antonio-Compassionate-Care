import React from "react";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "../Components/ui/scroll-based-velocity";

import Home1 from "../Images/Home1.jpeg";
import Home2 from "../Images/Home2.jpeg";
import Home3 from "../Images/Home3.jpeg";
import Home4 from "../Images/Home4.jpeg";
import Home5 from "../Images/Home5.jpeg";
import Home6 from "../Images/Home6.jpeg";
import Home7 from "../Images/Home7.jpeg";
import Home8 from "../Images/Home8.jpeg";
import Home9 from "../Images/Home9.jpeg";
import doctorPatient from "../Images/doctor-patient.png";
import nurseTablet from "../Images/nurse-tablet.avif";
import selfLiving from "../Images/selfliving.jpg";

const Tiles = () => {
    const services = [
        {
            image: Home1,
            title: "Assisted Living Suites",
            caption: "Warm, boutique residences with thoughtful finishes.",
            tag: "Residences",
        },
        {
            image: doctorPatient,
            title: "Medication Management",
            caption: "Pharmacy partnerships and vigilant monitoring — electronic MAR, pharmacist reviews, and 24/7 clinical collaboration.",
            tag: "Medication",
        },
        {
            image: doctorPatient,
            title: "Personalized Care Plans",
            caption: "Daily support that adapts as needs evolve.",
            tag: "Care Team",
        },
        {
            image: Home3,
            title: "Specialized Memory Care",
            caption: "Curated care path with focused therapies and integrated Medication Management.",
            tag: "Memory Care"
        },
        {
            image: nurseTablet,
            title: "Health & Wellness Studio",
            caption: "Daily movement, therapy partners, and telehealth suites.",
            tag: "Wellness"
        },
        {
            image: Home4,
            title: "Family Concierge",
            caption: "Transparent updates and concierge support for families.",
            tag: "Family Support"
        },
        {
            image: Home5,
            title: "Weekenders & Events",
            caption: "Concerts, culinary labs, and resident-led clubs.",
            tag: "Lifestyle"
        },
        {
            image: Home6,
            title: "Garden Courtyards",
            caption: "Blooming courtyards with sensory pathways and patios.",
            tag: "Outdoors"
        },
        {
            image: Home7,
            title: "Transportation Concierge",
            caption: "Door-to-door rides for appointments and outings.",
            tag: "Convenience"
        },
        {
            image: Home8,
            title: "Technology Lounge",
            caption: "Stay connected with virtual visits and VR travel.",
            tag: "Technology"
        },
        {
            image: Home9,
            title: "Spa & Salon",
            caption: "On-site pampering for hair, nails, and relaxation.",
            tag: "Amenities"
        },
        {
            image: selfLiving,
            title: "Respite & Trial Stays",
            caption: "Fully furnished suites for short stays and transitions.",
            tag: "Respite"
        },
    ];

    const TileCard = ({ service }) => (
        <div
            className="mx-2 xs:mx-3 sm:mx-4 inline-flex items-end justify-center w-60 xs:w-[270px] sm:w-[300px] md:w-80 lg:w-96 h-40 xs:h-44 sm:h-52 md:h-56 lg:h-60 rounded-2xl xs:rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 overflow-hidden relative bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(160deg, rgba(15,23,42,0.7), rgba(15,23,42,0.25)), url(${service.image})`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="relative z-10 w-full px-4 xs:px-5 py-4 xs:py-6 text-left text-white space-y-1 xs:space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">{service.tag}</p>
                <h3 className="text-lg xs:text-xl font-serif font-semibold leading-tight">{service.title}</h3>
                {service.caption && (
                    <p className="text-xs xs:text-sm text-white/80 leading-relaxed line-clamp-2">
                        {service.caption}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-linear-to-br from-blue-50 to-gray-50 flex flex-col justify-center py-12 xs:py-14 sm:py-16 md:py-20">

            {/* Main Heading */}
            <div className="text-center px-3 xs:px-4 sm:px-6 mb-8 xs:mb-10 sm:mb-12">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-3 xs:mb-4">
                    What We Offer
                </h1>
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
                    Everyone's needs are different, which is why we focus on tailoring care to each individual. From assistance with daily routines to engaging social activities, San Antonio Compassinate care provides the right balance of independence and support.
                </p>
            </div>

            {/* MAGIC UI SCROLLING SECTION */}
            <ScrollVelocityContainer className="relative w-full overflow-hidden py-5">

                {/* Row 1 → scrolls Right */}
                <ScrollVelocityRow baseVelocity={5} direction={1} className="py-4">
                    {services.map((service, idx) => (
                        <TileCard key={service.title + idx} service={service} />
                    ))}
                </ScrollVelocityRow>

                {/* Row 2 → scrolls Left */}
                <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-4">
                    {services.map((service, idx) => (
                        <TileCard key={`bottom-${service.title}-${idx}`} service={service} />
                    ))}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>

            {/* Indicator */}
            <div className="text-center mt-6 xs:mt-8 md:mt-8">
                <div className="inline-flex items-center space-x-2 xs:space-x-3 text-gray-600 bg-white/80 backdrop-blur-sm px-4 xs:px-6 py-2 xs:py-3 rounded-full border border-gray-200">
                    <div className="w-2 xs:w-3 h-2 xs:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs xs:text-sm font-medium">
                        Exploring our comprehensive services
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Tiles;
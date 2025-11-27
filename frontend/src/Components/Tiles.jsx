import React from "react";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "../Components/ui/scroll-based-velocity";

const Tiles = () => {
    const services = [
        {
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
            title: "Assisted Living Suites",
            caption: "Warm, boutique residences with thoughtful finishes.",
            tag: "Residences"
        },
        {
            image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=80",
            title: "Chef-Crafted Dining",
            caption: "Seasonal menus crafted for wellness and delight.",
            tag: "Dining"
        },
        {
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
            title: "Personalized Care Plans",
            caption: "Daily support that adapts as needs evolve.",
            tag: "Care Team"
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
            title: "Memory Care Neighborhoods",
            caption: "Secure spaces designed around recognition and joy.",
            tag: "Memory Care"
        },
        {
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80",
            title: "Health & Wellness Studio",
            caption: "Daily movement, therapy partners, and telehealth suites.",
            tag: "Wellness"
        },
        {
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
            title: "Family Concierge",
            caption: "Transparent updates and concierge support for families.",
            tag: "Family Support"
        },
        {
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
            title: "Weekenders & Events",
            caption: "Concerts, culinary labs, and resident-led clubs.",
            tag: "Lifestyle"
        },
        {
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
            title: "Garden Courtyards",
            caption: "Blooming courtyards with sensory pathways and patios.",
            tag: "Outdoors"
        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
            title: "Transportation Concierge",
            caption: "Door-to-door rides for appointments and outings.",
            tag: "Convenience"
        },
        {
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
            title: "Technology Lounge",
            caption: "Stay connected with virtual visits and VR travel.",
            tag: "Technology"
        },
        {
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
            title: "Spa & Salon",
            caption: "On-site pampering for hair, nails, and relaxation.",
            tag: "Amenities"
        },
        {
            image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
            title: "Respite & Trial Stays",
            caption: "Fully furnished suites for short stays and transitions.",
            tag: "Respite"
        },
    ];

    const TileCard = ({ service }) => (
        <div
            className="mx-4 inline-flex items-end justify-center w-[280px] h-[200px] sm:w-[320px] sm:h-[220px] lg:w-[360px] lg:h-[240px] rounded-3xl shadow-2xl border border-white/30 overflow-hidden relative bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(160deg, rgba(15,23,42,0.7), rgba(15,23,42,0.25)), url(${service.image})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="relative z-10 w-full px-5 py-6 text-left text-white space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">{service.tag}</p>
                <h3 className="text-xl font-serif font-semibold leading-tight">{service.title}</h3>
                {service.caption && (
                    <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
                        {service.caption}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col justify-center py-16">

            {/* Main Heading */}
            <div className="text-center px-4 mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
                    What We Offer
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
            <div className="text-center mt-8">
                <div className="inline-flex items-center space-x-3 text-gray-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                        Exploring our comprehensive services
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Tiles;
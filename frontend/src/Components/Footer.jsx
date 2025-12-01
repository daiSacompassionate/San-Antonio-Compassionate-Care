import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../Images/logo.png';

const Footer = () => {
    // Navigation data structure
    const footerLinks = {
        pages: [
            { name: "About Us", href: "/aboutus" },
            { name: "Contacts", href: "/contact" }
        ],
        services: [
            { name: "Medication-management", href: "/services/medication-management" },
            { name: "Senior Living", href: "/services/independent-living" },
            { name: "Assisted Living", href: "/services/assisted-living" },
            { name: "All Services", href: "/services" }
        ]
    };

    return (
        <footer className="bg-linear-to-br from-blue-900 to-teal-900 text-white w-full">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 lg:gap-6">

                    {/* Column 1: Brand + Contact */}
                    <div className="lg:col-span-2 space-y-4 xs:space-y-6">
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="San Antonio Compassionate Care logo" className="w-20 h-auto object-contain" />
                            <div className="space-y-1">
                                <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl italic text-white font-light tracking-wide">
                                    San Antonio
                                </h2>
                                <p className="text-sm uppercase tracking-widest text-amber-200 font-semibold">
                                    Compassionate Care
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 font-sans text-sm xs:text-base">
                            <div className="space-y-1">
                                <p className="text-gray-200 text-xs xs:text-sm leading-relaxed">
                                    12030 Bandera Rd. Ste 110<br />
                                    Helotes, Texas 78023
                                </p>
                                <a
                                    href="https://maps.google.com/?q=12030+Bandera+Rd+Ste+110+Helotes+TX+78023"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-amber-200 hover:text-amber-100 text-xs xs:text-sm font-medium transition-colors duration-200 inline-block border-b border-amber-200/30 pb-0.5"
                                >
                                    View Directions
                                </a>
                            </div>

                            <div className="space-y-2">
                                <p className="text-gray-300 text-xs">Direct Contacts</p>
                                <a href="tel:+12103226621" className="block text-white hover:text-amber-200 text-xs xs:text-sm font-semibold">
                                    Cara Faux • (210) 322-6621
                                </a>
                            </div>

                            <div className="space-y-1">
                                <p className="text-gray-300 text-xs">Email Address</p>
                                <a href="mailto:info@sacompassionatecare.com" className="text-white hover:text-amber-200 text-xs xs:text-sm font-medium block break-all">
                                    info@sacompassionatecare.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Pages */}
                    <div className="space-y-3 xs:space-y-4">
                        <h3 className="font-bold text-base xs:text-lg text-white mb-3 xs:mb-4 border-l-4 border-amber-200 pl-2 xs:pl-3">
                            Pages
                        </h3>
                        <ul className="space-y-2 xs:space-y-3">
                            {footerLinks.pages.map((page, index) => (
                                <li key={index}>
                                    <a
                                        href={page.href}
                                        className="text-gray-200 hover:text-amber-200 text-xs xs:text-sm font-medium block py-1"
                                    >
                                        {page.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-3 xs:space-y-4">
                        <h3 className="font-bold text-base xs:text-lg text-white mb-3 xs:mb-4 border-l-4 border-amber-200 pl-2 xs:pl-3">
                            Our Services
                        </h3>
                        <ul className="space-y-2 xs:space-y-3">
                            {footerLinks.services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-200 hover:text-amber-200 text-xs xs:text-sm font-medium block py-1"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div className="md:col-span-2 lg:col-span-1 space-y-4 xs:space-y-6">
                        <h3 className="font-bold text-base xs:text-lg text-white mb-3 xs:mb-4 border-l-4 border-amber-200 pl-2 xs:pl-3">
                            Connect With Us
                        </h3>

                        <div className="flex space-x-3 xs:space-x-4">
                            <a
                                href="#"
                                className="w-10 xs:w-12 h-10 xs:h-12 bg-amber-200/90 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-4 xs:w-5 h-4 xs:h-5 text-blue-900" />
                            </a>

                            <a
                                href="#"
                                className="w-10 xs:w-12 h-10 xs:h-12 bg-amber-200/90 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-4 xs:w-5 h-4 xs:h-5 text-blue-900" />
                            </a>
                        </div>

                        <p className="text-gray-300 text-xs xs:text-sm">
                            Follow us on social media for updates and events.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-blue-700/50 mt-8 xs:mt-10 sm:mt-12 pt-4 xs:pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 xs:gap-6">

                        {/* Copyright */}
                        <p className="text-gray-400 text-xs xs:text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} San Antonio Compassionate Care. All rights reserved.
                        </p>

                        {/* LOGIN BUTTON */}
                        <a
                            href="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 xs:px-4 py-2 text-xs xs:text-sm font-semibold bg-amber-200 text-blue-900 rounded-full shadow-md hover:bg-amber-300 transition-all duration-200 whitespace-nowrap"
                        >
                            Admin Login
                        </a>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

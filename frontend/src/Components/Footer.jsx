import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    // Navigation data structure
    const footerLinks = {
        pages: [
            { name: "About Us", href: "/aboutus" },
            { name: "Contacts", href: "/contact" }
        ],
        services: [
            { name: "Medication-management", href: "/services/medication-management" },
            { name: "Respite Care", href: "/services/respite-care" },
            { name: "Senior Living", href: "/services/independent-living" },
            { name: "Memory-care", href: "/services/memory-care" },
            { name: "Assisted Living", href: "/services/assisted-living" }
        ]
    };

    return (
        <footer className="bg-gradient-to-br from-blue-900 to-teal-900 text-white w-full">
            <div className="container mx-auto px-4 py-12">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">

                    {/* Column 1: Brand + Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-2">
                            <h2 className="font-serif text-3xl lg:text-4xl italic text-white font-light tracking-wide">
                                San Antonio
                            </h2>
                            <div className="w-12 h-0.5 bg-amber-200/80 my-2"></div>
                            <p className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                                SENIOR LIVING
                            </p>
                        </div>

                        <div className="space-y-4 font-sans">
                            <div className="space-y-1">
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    12030 Bandera Rd. Ste 110<br />
                                    Helotes, Texas 78023
                                </p>
                                <a
                                    href="https://maps.google.com/?q=12030+Bandera+Rd+Ste+110+Helotes+TX+78023"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-amber-200 hover:text-amber-100 text-sm font-medium transition-colors duration-200 inline-block border-b border-amber-200/30 pb-0.5"
                                >
                                    View Directions
                                </a>
                            </div>

                            <div className="space-y-2">
                                <p className="text-gray-300 text-sm">Direct Contacts</p>
                                <a href="tel:+12103226621" className="block text-white hover:text-amber-200 text-sm font-semibold">
                                    Cara Faux • (210) 322-6621
                                </a>
                                <a href="tel:+12106061146" className="block text-white hover:text-amber-200 text-sm font-semibold">
                                    Dai Nguyen • (210) 606-1146
                                </a>
                            </div>

                            <div className="space-y-1">
                                <p className="text-gray-300 text-sm">Email Address</p>
                                <a href="mailto:CaraFaux@sacompassionatecare.com" className="text-white hover:text-amber-200 text-sm font-medium">
                                    CaraFaux@sacompassionatecare.com
                                </a>
                                <a href="mailto:DaiNguyen@sacompassionatecare.com" className="block text-white hover:text-amber-200 text-sm font-medium">
                                    DaiNguyen@sacompassionatecare.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Pages */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white mb-4 border-l-4 border-amber-200 pl-3">
                            Pages
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.pages.map((page, index) => (
                                <li key={index}>
                                    <a
                                        href={page.href}
                                        className="text-gray-200 hover:text-amber-200 text-sm font-medium block py-1"
                                    >
                                        {page.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white mb-4 border-l-4 border-amber-200 pl-3">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-200 hover:text-amber-200 text-sm font-medium block py-1"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-white mb-4 border-l-4 border-amber-200 pl-3">
                            Connect With Us
                        </h3>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-12 h-12 bg-amber-200/90 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-5 h-5 text-blue-900" />
                            </a>

                            <a
                                href="#"
                                className="w-12 h-12 bg-amber-200/90 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-5 h-5 text-blue-900" />
                            </a>
                        </div>

                        <p className="text-gray-300 text-sm">
                            Follow us on social media for updates and events.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-blue-700/50 mt-12 pt-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center">

                        {/* Copyright */}
                        <p className="text-gray-400 text-sm text-center lg:text-left">
                            © {new Date().getFullYear()} San Antonio Senior Living. All rights reserved.
                        </p>

                        {/* LOGIN BUTTON */}
                        <a
                            href="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 lg:mt-0 px-4 py-2 text-sm font-semibold bg-amber-200 text-blue-900 rounded-full shadow-md hover:bg-amber-300 transition-all duration-200"
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

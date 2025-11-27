import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaPhone,
    FaSearch,
    FaBars,
    FaChevronDown,
    FaTimes,
    FaHome,
    FaUserFriends,
    FaHandsHelping,
    FaCalendarWeek,
    FaBlog,
    FaAddressBook,
    FaEnvelope
} from 'react-icons/fa';
import { useInquiryModal } from '../context/InquiryModalContext';
import logo from '../Images/logo.png';

const Navbar = () => {
    const { openModal } = useInquiryModal();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Scroll effect for navbar visibility
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Searching for: ${searchQuery}`);
            setSearchQuery('');
            setIsSearchOpen(false);
        }
    };

    const servicesMenu = [
        { name: "Assisted Living", icon: FaHandsHelping, path: "/services/assisted-living" },
        { name: "Memory Care", icon: FaUserFriends, path: "/services/memory-care" },
        { name: "Independent Living", icon: FaHome, path: "/services/independent-living" },
        { name: "Respite Care", icon: FaCalendarWeek, path: "/services/respite-care" },
        { name: "Medication Management", icon: FaAddressBook, path: "/services/medication-management" }
    ];

    const navigationItems = [
        { name: "Home", icon: FaHome, path: "/" },
        { name: "About Us", icon: FaUserFriends, path: "/aboutus" },
        { name: "Services", icon: FaHandsHelping, dropdown: true, path: "/services" },
        { name: "Community Activities", icon: FaCalendarWeek, path: "/activities" },
        { name: "Contacts", icon: FaAddressBook, path: "/contact" }
    ];

    // Check if current path matches or is a subpath
    const isActivePath = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className="w-full font-sans">
            {/* Main Navigation Bar - Ultra Compact */}
            <div className={`bg-white/35 backdrop-blur-lg shadow-lg border-b border-white/20 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo - Replaced text with image */}
                        <div className="flex items-center">
                            <Link to="/" className="transition-all duration-300 hover:scale-105 transform">
                                <img
                                    src={logo}
                                    alt="San Antonio Senior Living"
                                    className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'}`}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links - Ultra Compact */}
                        <div className="hidden lg:flex items-center space-x-0 bg-white/80 backdrop-blur-lg rounded-lg px-2 py-1 border border-gray-200/50 shadow-sm">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="relative">
                                    {item.dropdown ? (
                                        <button
                                            onClick={toggleServicesDropdown}
                                            className={`flex flex-col items-center justify-center p-1 rounded-md transition-all duration-200 group min-w-[60px] ${isActivePath(item.path)
                                                ? 'bg-blue-100/70 text-blue-600'
                                                : 'hover:bg-blue-50/50 text-gray-700 hover:text-blue-600'
                                                }`}
                                        >
                                            <item.icon
                                                className={`mb-0.5 transition-colors duration-200 ${isActivePath(item.path) ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                                                    }`}
                                                size={14}
                                            />
                                            <span className="text-[10px] font-medium transition-colors duration-200">Services</span>
                                            <FaChevronDown
                                                size={7}
                                                className={`mt-0.5 transition-transform duration-300 ${isActivePath(item.path) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                                                    } ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    ) : item.isModal ? (
                                        <button
                                            onClick={openModal}
                                            className={`flex flex-col items-center justify-center p-1 rounded-md transition-all duration-200 group min-w-[60px] hover:bg-blue-50/50 text-gray-700 hover:text-blue-600`}
                                        >
                                            <item.icon
                                                className="mb-0.5 transition-colors duration-200 text-gray-600 group-hover:text-blue-600"
                                                size={14}
                                            />
                                            <span className="text-[10px] font-medium transition-colors duration-200">{item.name}</span>
                                        </button>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`flex flex-col items-center justify-center p-1 rounded-md transition-all duration-200 group min-w-[60px] ${isActivePath(item.path)
                                                ? 'bg-blue-100/70 text-blue-600'
                                                : 'hover:bg-blue-50/50 text-gray-700 hover:text-blue-600'
                                                }`}
                                        >
                                            <item.icon
                                                className={`mb-0.5 transition-colors duration-200 ${isActivePath(item.path) ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                                                    }`}
                                                size={14}
                                            />
                                            <span className="text-[10px] font-medium transition-colors duration-200">{item.name}</span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Services Dropdown Menu */}
                        {isServicesDropdownOpen && (
                            <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 z-50 py-2">
                                {servicesMenu.map((service, index) => (
                                    <Link
                                        key={index}
                                        to={service.path}
                                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50/50 hover:text-blue-600 font-medium transition-all duration-200 group text-sm"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                    >
                                        <service.icon className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" size={14} />
                                        <span>{service.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Desktop Search and CTA - Ultra Compact */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {/* Search Icon */}
                            <button
                                onClick={toggleSearch}
                                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/50 hover:bg-blue-100/50 text-gray-600 hover:text-blue-600 transition-all duration-300 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                            >
                                <FaSearch size={14} />
                            </button>

                            {/* CTA Button */}
                            <button
                                onClick={openModal}
                                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:via-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-md text-base inline-flex items-center gap-2 min-h-[56px]"
                            >
                                <FaEnvelope className="text-white" size={18} />
                                <span>Inquiry</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button - Ultra Compact */}
                        <div className="lg:hidden flex items-center space-x-1">
                            <button
                                onClick={toggleSearch}
                                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/50 hover:bg-blue-100/50 text-gray-600 hover:text-blue-600 transition-all duration-300 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                            >
                                <FaSearch size={14} />
                            </button>
                            <button
                                onClick={toggleMobileMenu}
                                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/50 hover:bg-blue-100/50 text-gray-600 hover:text-blue-600 transition-all duration-300 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                            >
                                <FaBars size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    {isSearchOpen && (
                        <div className="border-t border-gray-200/50 py-2 mt-1 bg-white/95 backdrop-blur-xl rounded-lg shadow-md">
                            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 px-3">
                                <div className="flex-1 relative">
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={12} />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search services, activities..."
                                        className="w-full pl-9 pr-3 py-1.5 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent bg-white/80 backdrop-blur-sm text-xs"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-3 rounded-lg transition-colors duration-300 backdrop-blur-sm text-xs"
                                >
                                    Search
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleSearch}
                                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/50 hover:bg-red-100/50 text-gray-600 hover:text-red-600 transition-all duration-300"
                                >
                                    <FaTimes size={12} />
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Mobile Menu - Ultra Compact */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-xl shadow-md mt-1">
                            <div className="py-3">
                                <div className="grid grid-cols-3 gap-1 px-2">
                                    {navigationItems.map((item) => (
                                        item.isModal ? (
                                            <button
                                                key={item.name}
                                                onClick={() => {
                                                    openModal();
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 group border border-gray-200/50 hover:bg-blue-50/50 text-gray-700 hover:text-blue-600"
                                            >
                                                <item.icon
                                                    className="mb-1 transition-colors duration-200 text-gray-600 group-hover:text-blue-600"
                                                    size={16}
                                                />
                                                <span className="text-[10px] font-medium transition-colors duration-200 text-center">{item.name}</span>
                                            </button>
                                        ) : (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 group border border-gray-200/50 ${isActivePath(item.path)
                                                    ? 'bg-blue-100/70 text-blue-600'
                                                    : 'hover:bg-blue-50/50 text-gray-700 hover:text-blue-600'
                                                    }`}
                                                onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                            >
                                                <item.icon
                                                    className={`mb-1 transition-colors duration-200 ${isActivePath(item.path) ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                                                        }`}
                                                    size={16}
                                                />
                                                <span className="text-[10px] font-medium transition-colors duration-200 text-center">{item.name}</span>
                                            </Link>
                                        )
                                    ))}
                                </div>

                                {/* Mobile Services Dropdown */}
                                {isServicesDropdownOpen && (
                                    <div className="mt-2 px-2">
                                        <div className="bg-gray-50/50 rounded-lg p-2 border border-gray-200/50">
                                            <h4 className="text-xs font-semibold text-gray-700 mb-1 px-1">Our Services</h4>
                                            <div className="space-y-1">
                                                {servicesMenu.map((service, index) => (
                                                    <Link
                                                        key={index}
                                                        to={service.path}
                                                        className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-white transition-all duration-200 group text-xs"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <service.icon className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200" size={12} />
                                                        <span className="text-gray-700 group-hover:text-blue-600">{service.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Services Dropdown Toggle for Mobile */}
                                <div className="px-2 mt-2">
                                    <button
                                        onClick={toggleServicesDropdown}
                                        className={`w-full flex items-center justify-center p-2 rounded-lg transition-all duration-200 border border-gray-200/50 ${isServicesDropdownOpen
                                            ? 'bg-blue-100/70 text-blue-600'
                                            : 'bg-gray-50/50 text-gray-700 hover:bg-blue-50/50 hover:text-blue-600'
                                            }`}
                                    >
                                        <span className="text-xs font-medium">View All Services</span>
                                        <FaChevronDown
                                            size={10}
                                            className={`ml-1 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </div>

                                {/* Mobile CTA Button */}
                                <div className="px-2 pt-3">
                                    <button
                                        onClick={() => {
                                            openModal();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:via-blue-600 text-white font-bold py-3 px-4 rounded-2xl shadow-lg transition-all duration-300 backdrop-blur-md flex items-center justify-center space-x-2 text-base"
                                    >
                                        <FaEnvelope size={16} />
                                        <span>Inquiry</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
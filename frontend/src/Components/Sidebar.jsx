import React from 'react';
import { FaEnvelope, FaChartLine, FaSignOutAlt, FaMapMarkedAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen = true, setOpen, activeView, setActiveView, admin, logout }) => {
    return (
        <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 flex flex-col h-screen sticky top-0">

            {/* Logo Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div>
                        <h1 className="text-xl font-bold">San Antonio</h1>
                        <p className="text-gray-400 text-xs">Compassinate Care</p>
                    </div>
                </div>
            </div>

            {/* Admin Profile */}
            <div className="flex items-center gap-3 mb-8 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-lg">
                    {admin.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white truncate">{admin.username}</div>
                    <div className="text-gray-400 text-sm">Administrator</div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 flex-1">
                {/* Dashboard */}
                <button
                    onClick={() => setActiveView('dashboard')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeView === 'dashboard'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    <FaChartLine className="w-5 h-5" />
                    <span className="font-medium">Dashboard</span>
                </button>

                {/* Inquiries */}
                <button
                    onClick={() => setActiveView('inquiries')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeView === 'inquiries'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    <FaEnvelope className="w-5 h-5" />
                    <span className="font-medium">Inquiries</span>
                </button>

                {/* 🚀 NEW — Tours */}
                <button
                    onClick={() => setActiveView('tourlist')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeView === 'tourlist'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    <FaMapMarkedAlt className="w-5 h-5" />
                    <span className="font-medium">Tours</span>
                </button>

                {/* Replied Inquiries */}
                <button
                    onClick={() => setActiveView('repliedInquiries')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeView === 'repliedInquiries'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    <FaEnvelope className="w-5 h-5" />
                    <span className="font-medium">Replied Inquiries</span>
                </button>

                {/* Replied Tours */}
                <button
                    onClick={() => setActiveView('repliedTours')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeView === 'repliedTours'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    <FaMapMarkedAlt className="w-5 h-5" />
                    <span className="font-medium">Replied Tours</span>
                </button>
            </nav>

            {/* Logout */}
            <div className="pt-4 border-t border-gray-700">
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200"
                >
                    <FaSignOutAlt className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;


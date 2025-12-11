import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import ProtectedRoute from '../Components/ProtectedRoute';
import Sidebar from '../Components/Sidebar';
import InquiriesList from '../Components/InquiriesList';
import TourList from '../Components/TourList';
import RepliedInquiriesList from '../Components/RepliedInquiriesList';
import RepliedToursList from '../Components/RepliedToursList';

const DashboardContent = () => {
    const { admin, logout } = useAdmin();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeView, setActiveView] = useState('dashboard');

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar
                isOpen={sidebarOpen}
                setOpen={setSidebarOpen}
                activeView={activeView}
                setActiveView={setActiveView}
                admin={admin}
                logout={logout}
            />

            <div className="flex-1 p-4 sm:p-6 ml-0 sm:ml-64 transition-all duration-300">
                {/* Mobile top bar to toggle sidebar */}
                <div className="flex items-center justify-between mb-4 sm:hidden">
                    <button
                        className="p-2 rounded-lg bg-white shadow-sm"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                    <div className="text-lg font-semibold">Admin Dashboard</div>
                    <div style={{ width: 32 }} />
                </div>

                {/* -------------------- DASHBOARD VIEW -------------------- */}
                {activeView === 'dashboard' && (
                    <div className="max-w-7xl mx-auto animate-fade-in">
                        {/* Welcome Section */}
                        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-6 sm:p-10 text-white shadow-2xl mb-6 sm:mb-8 overflow-hidden">
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium mb-3">
                                        👋 Welcome Back
                                    </div>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                                        {admin.username}
                                    </h1>
                                    <p className="text-blue-50 text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-4 sm:mb-6">
                                        Manage inquiries and tours efficiently. Everything you need is available here.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Logo Section */}
                        <div className="relative bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-100 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-blue-200 mb-6 sm:mb-8 overflow-hidden">
                            {/* Cloud-like gradients */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                                <div className="absolute top-10 left-10 w-64 h-32 bg-white/40 rounded-full blur-3xl"></div>
                                <div className="absolute top-20 right-20 w-80 h-40 bg-white/30 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-10 left-1/3 w-72 h-36 bg-white/35 rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

                                {/* Company Name */}
                                <div className="text-center md:text-left">
                                    <div className="text-4xl md:text-5xl font-bold text-[#1e3a8a] uppercase tracking-tight mb-2"
                                        style={{
                                            textShadow: '2px 2px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white',
                                            fontFamily: 'sans-serif'
                                        }}>
                                        SAN ANTONIO
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-[#1e3a8a] uppercase tracking-tight mb-2"
                                        style={{
                                            textShadow: '2px 2px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white',
                                            fontFamily: 'sans-serif'
                                        }}>
                                        COMPASSIONATE CARE
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-[#1e3a8a] uppercase tracking-wider"
                                        style={{
                                            textShadow: '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white',
                                            fontFamily: 'sans-serif'
                                        }}>
                                        LLC
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* San Antonio Compassionate Care Description */}
                        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl border border-amber-100 mb-6 sm:mb-8 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        San Antonio Compassionate Care
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        At San Antonio Compassionate Care, we believe life should be lived with comfort, dignity, and joy—no matter the age. Our community in Pflugerville offers the perfect blend of support, independence, and warmth that truly feels like home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-gray-900">Quick Actions</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                <button
                                    onClick={() => setActiveView('inquiries')}
                                    className="group relative bg-linear-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    <span className="text-2xl relative z-10">📩</span>
                                    <span className="relative z-10">View Inquiries</span>
                                </button>

                                <button
                                    onClick={() => setActiveView('tourlist')}
                                    className="group relative bg-linear-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    <span className="text-2xl relative z-10">🧭</span>
                                    <span className="relative z-10">View Tours</span>
                                </button>

                                <button
                                    onClick={() => setActiveView('repliedInquiries')}
                                    className="group relative bg-linear-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    <span className="text-2xl relative z-10">✓</span>
                                    <span className="relative z-10">Replied Inquiries</span>
                                </button>

                                <button
                                    onClick={() => setActiveView('repliedTours')}
                                    className="group relative bg-linear-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    <span className="text-2xl relative z-10">✓</span>
                                    <span className="relative z-10">Replied Tours</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* -------------------- INQUIRIES VIEW -------------------- */}
                {activeView === 'inquiries' && <InquiriesList />}

                {/* -------------------- TOURS VIEW -------------------- */}
                {activeView === 'tourlist' && <TourList />}

                {/* -------------------- REPLIED INQUIRIES VIEW -------------------- */}
                {activeView === 'repliedInquiries' && <RepliedInquiriesList />}

                {/* -------------------- REPLIED TOURS VIEW -------------------- */}
                {activeView === 'repliedTours' && <RepliedToursList />}
            </div>
        </div>
    );
};

const Dashboard = () => (
    <ProtectedRoute>
        <DashboardContent />
    </ProtectedRoute>
);

export default Dashboard;

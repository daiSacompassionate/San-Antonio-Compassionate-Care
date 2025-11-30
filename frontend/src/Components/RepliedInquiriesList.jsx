import React, { useEffect, useState } from 'react';
import { API_BASE } from '../lib/api';

const API = `${API_BASE}/api/replied/inquiries`;

const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleString();
};

const RepliedInquiriesList = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deleting, setDeleting] = useState(null);

    const fetchInquiries = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch(API);
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Failed to fetch');
                setLoading(false);
                return;
            }
            setInquiries(data.data || []);
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    const deleteInquiry = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this replied inquiry?");
        if (!confirmDelete) return;

        setDeleting(id);
        try {
            const res = await fetch(`${API}/${id}`, {
                method: 'DELETE'
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Failed to delete replied inquiry");
                return;
            }

            setInquiries(prev => prev.filter(i => i.id !== id));
        } catch (err) {
            alert("Network error while deleting");
        } finally {
            setDeleting(null);
        }
    };

    const handleReply = (email, name) => {
        const subject = encodeURIComponent("Response to your inquiry");

        const body = encodeURIComponent(
            `Hi ${name || "there"},\n\nThank you again for reaching out to us. If you need further assistance, feel free to reply.\n\nBest regards,\nYour Company`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    return (
        <div className="max-w-7xl mx-auto animate-fade-in px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="relative bg-linear-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-3xl shadow-xl border border-indigo-100 p-8 mb-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <div className="inline-block bg-indigo-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-indigo-700 mb-3">
                            ✅ Replied Inquiries
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Replied Inquiries</h1>
                        <p className="text-gray-600 text-lg">
                            View all inquiries that have been marked as replied
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/80 backdrop-blur-sm text-indigo-700 px-5 py-2.5 rounded-xl text-base font-semibold shadow-md border border-indigo-200">
                            Total: <span className="text-2xl">{inquiries.length}</span>
                        </div>
                        <button
                            onClick={fetchInquiries}
                            className="group bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <span className="group-hover:rotate-180 transition-transform duration-500">🔄</span>
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex flex-col justify-center items-center py-20 min-h-[400px]">
                    <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600"></div>
                        <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-indigo-400 opacity-20"></div>
                    </div>
                    <p className="mt-6 text-gray-600 font-medium">Loading replied inquiries...</p>
                </div>
            )}

            {/* Error State */}
            {error && !loading && (
                <div className="max-w-2xl mx-auto bg-linear-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="text-5xl mb-4">⚠️</div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">Error Loading Replied Inquiries</h3>
                    <p className="text-red-700">{error}</p>
                </div>
            )}

            {/* Replied Inquiries List */}
            {!loading && !error && inquiries.length === 0 && (
                <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-16 text-center">
                    <div className="inline-block bg-indigo-100 rounded-full p-6 mb-6">
                        <div className="text-7xl">✅</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No replied inquiries yet</h3>
                    <p className="text-gray-600 text-lg">Inquiries marked as replied will appear here.</p>
                </div>
            )}

                    {!loading && !error && inquiries.length > 0 && (
                <div className="grid gap-6">
                    {inquiries.map((i, index) => (
                        <div
                            key={i.id}
                                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-indigo-500 to-blue-500"></div>
                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-2">
                                                <span className="w-10 h-10 bg-linear-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                                                    {i.name ? i.name.charAt(0).toUpperCase() : 'A'}
                                                </span>
                                                <span>{i.name || 'Anonymous'}</span>

                                                {i.name && (
                                                    <span className="bg-linear-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md">
                                                        Customer
                                                    </span>
                                                )}

                                                <span className="bg-linear-to-r from-indigo-500 to-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md flex items-center gap-1">
                                                    <span>✓</span> Replied
                                                </span>
                                            </h3>

                                            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600">
                                                {i.email && (
                                                    <span className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg font-medium">
                                                        <span className="text-blue-600">📧</span> {i.email}
                                                    </span>
                                                )}
                                                {i.phone && (
                                                    <span className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg font-medium">
                                                        <span className="text-green-600">📞</span> {i.phone}
                                                    </span>
                                                )}
                                                {i.service && (
                                                    <span className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg font-medium">
                                                        <span className="text-orange-600">🏥</span> {i.service}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-xs text-gray-500 bg-linear-to-br from-gray-50 to-gray-100 px-4 py-2 rounded-xl font-medium border border-gray-200">
                                                {formatDate(i.created_at)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-br from-gray-50 to-indigo-50 rounded-xl p-5 mt-4 border border-gray-200">
                                        <p className="text-gray-700 leading-relaxed text-base">{i.message}</p>
                                    </div>
                                </div>

                                <div className="flex lg:flex-col gap-3 lg:items-end">
                                    {i.email && (
                                        <button
                                            onClick={() => handleReply(i.email, i.name)}
                                            className="group bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                        >
                                            <span className="text-lg">✉️</span>
                                            Reply Again
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteInquiry(i.id)}
                                        disabled={deleting === i.id}
                                        className="group bg-linear-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-red-300 disabled:to-rose-400 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:cursor-not-allowed"
                                    >
                                        {deleting === i.id ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                                Deleting...
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-lg">🗑️</span>
                                                Delete
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RepliedInquiriesList;

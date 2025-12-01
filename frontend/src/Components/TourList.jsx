import React, { useEffect, useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { API_BASE } from '../lib/api';

const API = `${API_BASE}/api/tours/gettour`;
const DELETE_API = `${API_BASE}/api/tours`;
const REPLIED_API = `${API_BASE}/api/replied/tours`;

const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleString();
};

const sendReply = (email, name) => {
    const subject = encodeURIComponent("Regarding Your Tour Booking");
    const body = encodeURIComponent(
        `Hi ${name},\n\nThank you for your tour booking. We will get back to you shortly.\n\nBest regards,\nYour Company`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
};


const TourList = () => {
    const { markTourAsReplied, isTourReplied } = useAdmin();
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deleting, setDeleting] = useState(null);

    const fetchTours = async () => {
        setLoading(true);
        setError('');

        try {
            const res = await fetch(API);
            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Failed to fetch tours');
                setLoading(false);
                return;
            }

            // Filter out replied tours
            const allTours = data.data || [];
            const unrepliedTours = allTours.filter(t => !isTourReplied(t.id));
            setTours(unrepliedTours);
        } catch (err) {
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    const deleteTour = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this tour?");
        if (!confirmDelete) return;

        setDeleting(id);

        try {
            const res = await fetch(`${DELETE_API}/${id}`, {
                method: "DELETE"
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Failed to delete");
                return;
            }

            setTours(prev => prev.filter(t => t.id !== id));
        } catch (err) {
            alert("Network error while deleting");
        } finally {
            setDeleting(null);
        }
    };

    const handleMarkAsReplied = async (tour) => {
        try {
            // normalize field names (accept snake_case from DB or camelCase from other sources)
            const payload = {
                name: tour.name,
                email: tour.email,
                phone: tour.phone,
                preferred_date: tour.preferred_date || tour.preferredDate || null,
                preferred_time: tour.preferred_time || tour.preferredTime || null,
                number_of_guests: tour.number_of_guests || tour.numberOfGuests || null,
                tour_type: tour.tour_type || tour.tourtype || tour.tourType || null,
                special_requests: tour.special_requests || tour.specialRequests || null,
                message: tour.message || null,
                service: tour.service || null
            };

            const res = await fetch(REPLIED_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || 'Failed to save replied tour');
                return;
            }

            markTourAsReplied(tour);
            setTours(prev => prev.filter(t => t.id !== tour.id));
        } catch (err) {
            alert('Network error while saving replied tour');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) return (
        <div className="flex flex-col justify-center items-center py-20 min-h-[400px]">
            <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600"></div>
                <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-green-400 opacity-20"></div>
            </div>
            <p className="mt-6 text-gray-600 font-medium">Loading tours...</p>
        </div>
    );

    if (error) return (
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Error Loading Tours</h3>
            <p className="text-red-700">{error}</p>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto animate-fade-in px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl shadow-xl border border-green-100 p-4 sm:p-8 mb-6 sm:mb-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <div className="inline-block bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-green-700 mb-3">
                            🧭 Booked Tours
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Booked Tours</h1>
                        <p className="text-gray-600 text-lg">Manage customer tour bookings</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/80 backdrop-blur-sm text-green-700 px-5 py-2.5 rounded-xl text-base font-semibold shadow-md border border-green-200">
                            Total: <span className="text-2xl">{tours.length}</span>
                        </div>
                        <button
                            onClick={fetchTours}
                            className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <span className="group-hover:rotate-180 transition-transform duration-500">🔄</span>
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

            {tours.length === 0 ? (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-16 text-center">
                    <div className="inline-block bg-green-100 rounded-full p-6 mb-6">
                        <div className="text-7xl">🚫</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No tours found</h3>
                    <p className="text-gray-600 text-lg">Tour bookings will appear here once customers make reservations.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {tours.map((t, index) => (
                        <div
                            key={t.id}
                            className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-2">
                                                <span className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                                                    {t.name ? t.name.charAt(0).toUpperCase() : 'T'}
                                                </span>
                                                <span>{t.name}</span>
                                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md">
                                                    {t.tourtype}
                                                </span>
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                                    <span>📧</span> {t.email}
                                                </span>
                                                <span className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                                    <span>📞</span> {t.phone}
                                                </span>
                                                <span className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                                    <span>🗓</span> {t.preferred_date}
                                                </span>
                                                <span className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                                    <span>⏰</span> {t.preferred_time}
                                                </span>
                                                <span className="bg-pink-50 text-pink-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                                    <span>👥</span> {t.number_of_guests} guests
                                                </span>
                                                <span className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                                    <span>📌</span> {t.service}
                                                </span>
                                            </div>

                                            {/* Special Requests Section */}
                                            {t.special_requests && (
                                                <div className="mt-4 bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-lg p-4">
                                                    <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                                                        <span>💬</span> Special Requests
                                                    </h4>
                                                    <p className="text-sm text-amber-800 leading-relaxed break-words">
                                                        {t.special_requests}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-500 bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-2 rounded-xl font-medium border border-gray-200">
                                                {formatDate(t.created_at)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap lg:flex-col gap-3 lg:items-end">
                                    {/* Reply Button */}
                                    <button
                                        onClick={() => sendReply(t.email, t.name)}
                                        className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        <span className="text-lg">✉️</span>
                                        Reply
                                    </button>

                                    {/* Replied Button */}
                                    <button
                                        onClick={() => handleMarkAsReplied(t)}
                                        className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        <span className="text-lg">✓</span>
                                        Replied
                                    </button>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => deleteTour(t.id)}
                                        disabled={deleting === t.id}
                                        className="group bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-red-300 disabled:to-rose-400 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:cursor-not-allowed"
                                    >
                                        {deleting === t.id ? (
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

export default TourList;

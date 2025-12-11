import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const TIME_OPTIONS = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
];

export default function ScheduleTourForm({ isOpen, onClose }) {
    const today = new Date().toISOString().split("T")[0];
    const maxDateObj = new Date();
    maxDateObj.setMonth(maxDateObj.getMonth() + 3);
    const maxDate = maxDateObj.toISOString().split("T")[0];

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        numberOfGuests: "1",
        tourType: "general",
        specialRequests: "",
    });
    const [bookedSlots, setBookedSlots] = useState([]);
    const [fullyBookedDates, setFullyBookedDates] = useState([]);
    const [availabilityMessage, setAvailabilityMessage] = useState("");
    const [availabilityLoading, setAvailabilityLoading] = useState(false);

    const API_URL =
        import.meta.env.VITE_BACKEND_URL?.trim() ||
        "http://localhost:5000";

    /** ESC to close */
    useEffect(() => {
        const close = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", close);
        return () => document.removeEventListener("keydown", close);
    }, [onClose]);

    /** Disable scroll when open */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const fetchFullyBookedDates = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/api/tours/fully-booked?startDate=${today}&endDate=${maxDate}`);
            const data = await res.json();

            if (res.ok) {
                setFullyBookedDates(data?.dates || []);
            } else {
                console.error("Unable to fetch fully booked dates", data?.error);
            }
        } catch (error) {
            console.error("Fully booked dates error:", error);
        }
    }, [API_URL, maxDate, today]);

    useEffect(() => {
        if (!isOpen) return;
        fetchFullyBookedDates();
    }, [fetchFullyBookedDates, isOpen]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = async (event) => {
        const value = event.target.value;
        setAvailabilityMessage("");
        setBookedSlots([]);

        if (!value) {
            setFormData((prev) => ({ ...prev, preferredDate: "", preferredTime: "" }));
            return;
        }

        if (fullyBookedDates.includes(value)) {
            setAvailabilityMessage("All time slots for this date are booked. Please choose another date.");
            setFormData((prev) => ({ ...prev, preferredDate: "", preferredTime: "" }));
            return;
        }

        setFormData((prev) => ({ ...prev, preferredDate: value, preferredTime: "" }));
        await fetchAvailability(value);
    };

    const fetchAvailability = async (date) => {
        setAvailabilityLoading(true);
        setAvailabilityMessage("");

        try {
            const res = await fetch(`${API_URL}/api/tours/availability?date=${date}`);
            const data = await res.json();

            if (!res.ok) {
                setAvailabilityMessage(data?.error || "Unable to check availability.");
                return;
            }

            const slots = data?.bookedSlots || [];
            setBookedSlots(slots);

            if (data?.isFullyBooked) {
                setAvailabilityMessage("All time slots for this date are booked. Please choose another date.");
                setFullyBookedDates((prev) =>
                    prev.includes(date) ? prev : [...prev, date]
                );
                setFormData((prev) => ({ ...prev, preferredDate: "", preferredTime: "" }));
                setBookedSlots(TIME_OPTIONS);
            } else if (slots.length) {
                setAvailabilityMessage("Booked time slots are disabled below.");
            }
        } catch (error) {
            console.error("Availability check error:", error);
            setAvailabilityMessage("Unable to check availability right now.");
        } finally {
            setAvailabilityLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            ...formData,
            message: formData.specialRequests || "",
            service: `Tour - ${formData.tourType}`,
        };

        try {
            const res = await fetch(`${API_URL}/api/tours`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data?.error || data?.message || "Unable to schedule tour.");
                if (res.status === 409 && formData.preferredDate) {
                    await fetchAvailability(formData.preferredDate);
                }
                return;
            }

            alert("Tour requested successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                preferredDate: "",
                preferredTime: "",
                numberOfGuests: "1",
                tourType: "general",
                specialRequests: "",
            });
            setBookedSlots([]);
            setAvailabilityMessage("");
            await fetchFullyBookedDates();

            onClose();
        } catch (err) {
            console.error("Tour scheduling error:", err);
            alert("Network error — cannot reach server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-white/90 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-white/50"
            >
                {/* HEADER */}
                <div className="p-6 border-b bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-md">
                                <FaCalendarAlt className="text-white" size={22} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Request for tour
                                </h2>
                                <p className="text-sm text-gray-600">Visit our wonderful community</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-xl">✕</button>
                    </div>
                </div>

                {/* BODY */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-130px)]">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* PERSONAL INFO */}
                        <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2">
                            <FaUsers className="text-blue-600" />
                            Your Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Full Name" name="name" required value={formData.name} onChange={handleChange} />
                            <Input label="Email" type="email" name="email" required value={formData.email} onChange={handleChange} />
                        </div>

                        <Input label="Phone Number" name="phone" required value={formData.phone} onChange={handleChange} />

                        {/* TOUR DETAILS */}
                        <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2 mt-6">
                            <FaMapMarkerAlt className="text-purple-600" />
                            Tour Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                type="date"
                                label="Preferred Date"
                                name="preferredDate"
                                min={today}
                                max={maxDate}
                                required
                                value={formData.preferredDate}
                                onChange={handleDateChange}
                            />

                            <Select
                                label="Preferred Time"
                                name="preferredTime"
                                required
                                value={formData.preferredTime}
                                onChange={handleChange}
                                options={TIME_OPTIONS}
                                disabledOptions={bookedSlots}
                            />
                        </div>

                        {(availabilityLoading || availabilityMessage) && (
                            <p className="text-sm text-red-600">
                                {availabilityLoading ? "Checking slot availability..." : availabilityMessage}
                            </p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Select
                                label="Number of Guests"
                                name="numberOfGuests"
                                value={formData.numberOfGuests}
                                onChange={handleChange}
                                options={["1", "2", "3", "4", "5+"]}
                            />

                            <Select
                                label="Tour Type"
                                name="tourType"
                                value={formData.tourType}
                                onChange={handleChange}
                                options={[
                                    "general",
                                    "assisted-living",
                                    "independent-living",
                                    "medication-management"
                                ]}
                            />
                        </div>

                        <Textarea
                            label="Special Requests"
                            name="specialRequests"
                            placeholder="Any special requests?"
                            value={formData.specialRequests}
                            onChange={handleChange}
                        />

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold shadow-md hover:opacity-90 disabled:opacity-50"
                        >
                            {isSubmitting ? "Scheduling..." : "Schedule My Tour"}
                        </button>
                    </form>
                </div>

                {/* FOOTER */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 text-center text-sm text-gray-700 border-t">
                    We will confirm your tour within 24 hours.
                </div>
            </motion.div>
        </div>
    );
}



/* ------------------------------
   Reusable Input Components
--------------------------------*/
function Input({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">{label}</label>
            <input
                {...props}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
        </div>
    );
}

function Select({ label, options = [], disabledOptions = [], ...props }) {
    const normalizedOptions = options.map((option) =>
        typeof option === "string"
            ? { value: option, label: option }
            : option
    );

    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">{label}</label>
            <select
                {...props}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            >
                <option value="">Select...</option>
                {normalizedOptions.map((o) => (
                    <option
                        key={o.value}
                        value={o.value}
                        disabled={o.disabled || disabledOptions.includes(o.value)}
                    >
                        {o.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

function Textarea({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">{label}</label>
            <textarea
                {...props}
                rows="3"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
        </div>
    );
}

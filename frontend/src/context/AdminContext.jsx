import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext(undefined);

export const useAdmin = () => {
    const ctx = useContext(AdminContext);
    if (ctx === undefined) {
        throw new Error('useAdmin must be used inside AdminProvider');
    }
    return ctx;
};

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [repliedInquiries, setRepliedInquiries] = useState([]);
    const [repliedTours, setRepliedTours] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('admin');
        if (saved) setAdmin(JSON.parse(saved));
        
        // Load replied items from localStorage
        const savedRepliedInquiries = localStorage.getItem('repliedInquiries');
        if (savedRepliedInquiries) {
            setRepliedInquiries(JSON.parse(savedRepliedInquiries));
        }
        
        const savedRepliedTours = localStorage.getItem('repliedTours');
        if (savedRepliedTours) {
            setRepliedTours(JSON.parse(savedRepliedTours));
        }
        
        setLoading(false);
    }, []);

    const login = (user) => {
        setAdmin(user);
        localStorage.setItem('admin', JSON.stringify(user));
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem('admin');
    };

    const markInquiryAsReplied = (inquiry) => {
        // Check if already replied to prevent duplicates
        if (repliedInquiries.some(i => i.id === inquiry.id)) {
            return;
        }
        const updated = [...repliedInquiries, inquiry];
        setRepliedInquiries(updated);
        localStorage.setItem('repliedInquiries', JSON.stringify(updated));
    };

    const markTourAsReplied = (tour) => {
        // Check if already replied to prevent duplicates
        if (repliedTours.some(t => t.id === tour.id)) {
            return;
        }
        const updated = [...repliedTours, tour];
        setRepliedTours(updated);
        localStorage.setItem('repliedTours', JSON.stringify(updated));
    };

    const isInquiryReplied = (inquiryId) => {
        return repliedInquiries.some(i => i.id === inquiryId);
    };

    const isTourReplied = (tourId) => {
        return repliedTours.some(t => t.id === tourId);
    };

    return (
        <AdminContext.Provider value={{ 
            admin, 
            login, 
            logout, 
            loading,
            repliedInquiries,
            repliedTours,
            markInquiryAsReplied,
            markTourAsReplied,
            isInquiryReplied,
            isTourReplied
        }}>
            {children}
        </AdminContext.Provider>
    );
};

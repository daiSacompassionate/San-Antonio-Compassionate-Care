import React, { createContext, useContext, useState } from 'react';

const InquiryModalContext = createContext();
const ScheduleTourModalContext = createContext();

export const useInquiryModal = () => {
    const context = useContext(InquiryModalContext);
    if (!context) {
        throw new Error('useInquiryModal must be used within InquiryModalProvider');
    }
    return context;
};

export const useScheduleTourModal = () => {
    const context = useContext(ScheduleTourModalContext);
    if (!context) {
        throw new Error('useScheduleTourModal must be used within InquiryModalProvider');
    }
    return context;
};

export const InquiryModalProvider = ({ children }) => {
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const [isTourOpen, setIsTourOpen] = useState(false);

    const openInquiryModal = () => setIsInquiryOpen(true);
    const closeInquiryModal = () => setIsInquiryOpen(false);
    
    const openTourModal = () => setIsTourOpen(true);
    const closeTourModal = () => setIsTourOpen(false);

    return (
        <InquiryModalContext.Provider value={{ isOpen: isInquiryOpen, openModal: openInquiryModal, closeModal: closeInquiryModal }}>
            <ScheduleTourModalContext.Provider value={{ isOpen: isTourOpen, openModal: openTourModal, closeModal: closeTourModal }}>
                {children}
            </ScheduleTourModalContext.Provider>
        </InquiryModalContext.Provider>
    );
};


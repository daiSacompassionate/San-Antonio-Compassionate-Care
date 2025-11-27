import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// --- Admin Context / Pages ---
import { AdminProvider } from "./context/AdminContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

// --- Public Website Pages ---
import InquiryForm from "./Components/InquiryForm";
import ScheduleTourForm from "./Components/ScheduleTourForm";
import AboutUs from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import CommunityActivities from "./Pages/CommunityActivities";
import ServicesOverview from "./Pages/Services/ServicesOverview";
import AssistedLiving from "./Pages/Services/AssistedLiving";
import MemoryCare from "./Pages/Services/MemoryCare";
import IndependentLiving from "./Pages/Services/IndependentLiving";
import RespiteCare from "./Pages/Services/RespiteCare";
import MedicationManagement from "./Pages/Services/MedicationManagement";
import Home from "./Pages/Home";

// --- Context for Inquiry + Tour modals ---
import {
  InquiryModalProvider,
  useInquiryModal,
  useScheduleTourModal,
} from "./context/InquiryModalContext";

// --- Error Boundary ---
import ErrorBoundary from "./Components/Errorboundary";
import "./App.css";


// --------------------
//    Public Routes
// --------------------
function PublicRoutes() {
  const { isOpen, closeModal } = useInquiryModal();
  const {
    isOpen: isTourOpen,
    closeModal: closeTourModal,
  } = useScheduleTourModal();

  return (
    <>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/activities" element={<CommunityActivities />} />

        {/* Service Routes */}
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/assisted-living" element={<AssistedLiving />} />
        <Route path="/services/memory-care" element={<MemoryCare />} />
        <Route path="/services/independent-living" element={<IndependentLiving />} />
        <Route path="/services/respite-care" element={<RespiteCare />} />
        <Route path="/services/medication-management" element={<MedicationManagement />} />

        {/* Redirect legacy root to public home */}
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Inquiry / Tour Modals */}
      <InquiryForm isOpen={isOpen} onClose={closeModal} />
      <ScheduleTourForm isOpen={isTourOpen} onClose={closeTourModal} />
    </>
  );
}


// --------------------
//    Main App
// --------------------
export default function App() {
  return (
    <AdminProvider>
      <InquiryModalProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              {/* Admin Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Admin Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Public Website (all other routes) */}
              <Route path="/*" element={<PublicRoutes />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </InquiryModalProvider>
    </AdminProvider>
  );
}

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const ProtectedRoute = ({ children }) => {
    const { admin, loading } = useAdmin();

    if (loading) return <div style={{ padding: 40 }}>Loading...</div>;
    if (!admin) return <Navigate to="/login" replace />;
    return children;
};

export default ProtectedRoute;


import React from 'react';
import { Link } from 'react-router-dom';

const MemoryCare = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Specialized Memory Care</h2>
        <p className="text-gray-600 mb-6">We provide a curated care path for residents with memory-related conditions, combining focused therapies, therapeutic engagement, and integrated Medication Management tailored to each individual.</p>
        <Link to="/services" className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">View Services</Link>
      </div>
    </div>
  );
};

export default MemoryCare;





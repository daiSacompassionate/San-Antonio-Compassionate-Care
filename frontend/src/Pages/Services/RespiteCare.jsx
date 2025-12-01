import React from 'react';
import { Link } from 'react-router-dom';

const RespiteCare = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Respite & Trial Stays</h2>
        <p className="text-gray-600 mb-6">We have consolidated Respite Care information into our main Services page to make it easier to explore options and compare services in one place.</p>
        <Link to="/services" className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">View Services</Link>
      </div>
    </div>
  );
};

export default RespiteCare;





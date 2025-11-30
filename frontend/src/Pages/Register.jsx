import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_BASE } from '../lib/api';

const API = `${API_BASE}/api/admin`;

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [ok, setOk] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setOk('');
        setLoading(true);
        try {
            const res = await fetch(`${API}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Registration failed');
                setLoading(false);
                return;
            }
            setOk('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 1500);
        } catch (err) {
            setError('Network error');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-6">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Side - Form */}
                <div className="p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="flex items-center gap-3 mb-8 lg:hidden">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <span className="text-white text-lg font-bold">🚀</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">AdminPanel</h1>
                                <p className="text-gray-500 text-sm">Business Solutions</p>
                            </div>
                        </div>

                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Create Admin Account
                            </h2>
                            <p className="text-gray-600">
                                Register a new administrator for the dashboard
                            </p>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-red-600">⚠️</div>
                                    <div>
                                        <h4 className="font-semibold text-red-900 text-sm">Registration Failed</h4>
                                        <p className="text-red-700 text-sm">{error}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {ok && (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-green-600">✅</div>
                                    <div>
                                        <h4 className="font-semibold text-green-900 text-sm">Success!</h4>
                                        <p className="text-green-700 text-sm">{ok}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                                    placeholder="Choose a username"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                                    placeholder="Create a strong password"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:opacity-50 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <span>👤</span>
                                        Register Admin Account
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Branding */}
                <div className="bg-gradient-to-br from-green-600 to-blue-700 p-8 lg:p-12 text-white hidden lg:flex flex-col justify-center order-1 lg:order-2">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="text-2xl">🌟</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">AdminPanel</h1>
                                <p className="text-green-100 text-sm">Business Solutions</p>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold mb-6">
                            Join Our Team
                        </h2>
                        <p className="text-green-100 text-lg mb-8">
                            Create your admin account to start managing customer relationships and accessing powerful business insights.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-sm">🛡️</span>
                                </div>
                                <span className="text-green-100">Secure admin authentication</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-sm">📈</span>
                                </div>
                                <span className="text-green-100">Real-time analytics access</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-sm">👥</span>
                                </div>
                                <span className="text-green-100">Multi-admin support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
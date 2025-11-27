import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const API = 'http://localhost:5000/api/admin';

const Login = () => {
    const { login } = useAdmin();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch(`${API}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Login failed');
                setLoading(false);
                return;
            }
            login(data.user);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Side - Branding */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white hidden lg:flex flex-col justify-center">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">AdminPanel</h1>
                                <p className="text-blue-100 text-sm">Business Solutions</p>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold mb-6">
                            Welcome Back
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Sign in to manage your customer inquiries and access the powerful admin dashboard with advanced analytics and tools.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-sm">✅</span>
                                </div>
                                <span className="text-blue-100">Manage customer inquiries</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-sm">📊</span>
                                </div>
                                <span className="text-blue-100">Advanced analytics dashboard</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-sm">🔒</span>
                                </div>
                                <span className="text-blue-100">Secure admin access</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="flex items-center gap-3 mb-8 lg:hidden">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white text-lg font-bold">🚀</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">AdminPanel</h1>
                                <p className="text-gray-500 text-sm">Business Solutions</p>
                            </div>
                        </div>

                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Admin Login
                            </h2>
                            <p className="text-gray-600">
                                Enter your credentials to access the admin dashboard
                            </p>
                        </div>

                        {/* Demo Accounts Info */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="text-blue-600 mt-0.5">💡</div>
                                <div>
                                    <h4 className="font-semibold text-blue-900 text-sm mb-1">Demo Accounts</h4>
                                    <p className="text-blue-700 text-sm">
                                        Use: <strong>Dai / Dai@SanAntonio</strong> or <strong>Cara / Cara@SanAntonio</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-red-600">⚠️</div>
                                    <div>
                                        <h4 className="font-semibold text-red-900 text-sm">Login Failed</h4>
                                        <p className="text-red-700 text-sm">{error}</p>
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                    placeholder="Enter your username"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <span>🔐</span>
                                        Sign in to Dashboard
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Need an account?{' '}
                                <Link
                                    to="/register"
                                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                                >
                                    Register new admin
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
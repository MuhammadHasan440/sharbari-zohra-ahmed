'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Lock, Mail, Eye, EyeOff, Shield, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAF4] via-white to-[#D9E6A3] p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#B7C83E]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2E2F1F]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#B7C83E]/5 to-[#6F7F1E]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#E3E7C8] overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-[#2E2F1F] to-[#3A3B28] px-8 pt-8 pb-6 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
            
            {/* Logo/Icon */}
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ring-4 ring-[#B7C83E]/20">
                <Shield size={40} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles size={16} className="text-[#B7C83E] animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-[#B7C83E] text-sm mt-2">Sign in to manage your blog content</p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6148] group-focus-within:text-[#B7C83E] transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#E3E7C8] rounded-xl focus:outline-none focus:border-[#B7C83E] focus:ring-2 focus:ring-[#B7C83E]/20 transition-all text-[#2E2F1F] placeholder:text-[#5F6148] bg-white/50"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  Password
                </label>
                <div className="relative group">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6148] group-focus-within:text-[#B7C83E] transition-colors" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-12 py-3 border-2 border-[#E3E7C8] rounded-xl focus:outline-none focus:border-[#B7C83E] focus:ring-2 focus:ring-[#B7C83E]/20 transition-all text-[#2E2F1F] placeholder:text-[#5F6148] bg-white/50"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5F6148] hover:text-[#B7C83E] transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3 animate-shake">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-600 font-medium text-sm">Authentication Failed</p>
                    <p className="text-red-500 text-xs mt-0.5">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#2E2F1F] border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <Shield size={18} />
                      Sign In
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F7F1E] to-[#B7C83E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Footer Note */}
              <div className="text-center pt-4">
                <p className="text-xs text-[#5F6148]">
                  Secure admin access only
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-1 h-1 bg-[#B7C83E] rounded-full"></div>
                  <p className="text-[10px] text-[#5F6148]">Protected by Firebase Authentication</p>
                  <div className="w-1 h-1 bg-[#B7C83E] rounded-full"></div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-xs text-[#5F6148]/60">
            Content Management System
          </p>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
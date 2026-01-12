'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { verifyAdmin, authenticateAdmin } from '@/utils/auth';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (verifyAdmin(password)) {
      authenticateAdmin();
      router.push('/admin/dashboard');
      router.refresh();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C2F6C] via-[#4D229D] to-[#8B4BEC] p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-300">Access your analytics dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4BEC] focus:border-transparent"
              placeholder="Enter admin password"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4D229D] to-[#2C2F6C] text-white py-3 rounded-lg font-medium hover:from-[#5D2FA3] hover:to-[#3C3F7C] transition-all duration-300 shadow-lg shadow-[#4D229D]/30"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
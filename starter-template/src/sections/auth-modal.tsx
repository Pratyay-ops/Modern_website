// src/sections/auth-modal.tsx
"use client";

import React, { useState } from 'react';

type ModalType = 'login' | 'signup' | 'forgot-password';

interface AuthModalProps {
  isOpen: boolean;
  initialView?: ModalType;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  initialView = 'login',
  onClose 
}) => {
  const [activeView, setActiveView] = useState<ModalType>(initialView);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  });

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
    });
  };

  const handleViewChange = (view: ModalType) => {
    setActiveView(view);
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeView === 'login') {
      console.log('Login submitted:', formData);
    } else if (activeView === 'signup') {
      console.log('Signup submitted:', formData);
    } else if (activeView === 'forgot-password') {
      console.log('Forgot password submitted for:', formData.email);
    }
  };

  const handleGoogleAuth = () => {
    console.log(`Google ${activeView === 'login' ? 'login' : 'signup'} clicked`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black opacity-60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="bg-black/80 backdrop-blur-md rounded-lg px-6 py-6 sm:px-8 sm:py-8 shadow-xl w-[90%] max-w-sm relative z-10 border border-white/10 max-h-[90vh] overflow-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Login View */}
        {activeView === 'login' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Welcome Back
            </h2>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleAuth}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 mb-6 flex items-center justify-center gap-3 hover:bg-lime-500 hover:border-lime-500 transition-colors text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Login with Google
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/80 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-lime-500 border-white/20 rounded bg-white/10"
                  />
                  <label 
                    htmlFor="remember-me" 
                    className="ml-2 block text-sm text-gray-200"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm font-medium text-gray-200 hover:text-lime-500"
                  onClick={() => handleViewChange('forgot-password')}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 font-medium hover:bg-lime-500 transition-colors border border-white/20 hover:border-lime-500"
              >
                Sign in
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <button
                className="font-medium text-gray-200 hover:text-lime-500"
                onClick={() => handleViewChange('signup')}
              >
                Sign up
              </button>
            </p>
          </>
        )}

        {/* Signup View */}
        {activeView === 'signup' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Create Account
            </h2>

            {/* Google Signup Button */}
            <button
              onClick={handleGoogleAuth}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 mb-6 flex items-center justify-center gap-3 hover:bg-lime-500 hover:border-lime-500 transition-colors text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/80 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="username" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Choose a username"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="signup-email" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="signup-password" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="confirm-password" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 font-medium hover:bg-lime-500 transition-colors border border-white/20 hover:border-lime-500"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <button
                className="font-medium text-gray-200 hover:text-lime-500"
                onClick={() => handleViewChange('login')}
              >
                Sign in
              </button>
            </p>
          </>
        )}

        {/* Forgot Password View */}
        {activeView === 'forgot-password' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Reset Password
            </h2>
            
            <p className="text-gray-300 mb-6 text-center">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="reset-email" 
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 font-medium hover:bg-lime-500 transition-colors border border-white/20 hover:border-lime-500"
              >
                Send Reset Link
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-400">
              Remember your password?{' '}
              <button
                className="font-medium text-gray-200 hover:text-lime-500"
                onClick={() => handleViewChange('login')}
              >
                Back to login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
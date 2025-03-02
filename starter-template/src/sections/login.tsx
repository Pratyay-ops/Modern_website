// src/app/page.tsx or any component where you want to use the auth modal
"use client";

import { useState } from 'react';
import AuthModal from './auth-modal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialView, setInitialView] = useState<'login' | 'signup' | 'forgot-password'>('login');

  const openModal = (view: 'login' | 'signup' | 'forgot-password') => {
    setInitialView(view);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex gap-4">
        <button
          onClick={() => openModal('login')}
          className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-lime-500 transition-colors"
        >
          Login
        </button>
        
        <button
          onClick={() => openModal('signup')}
          className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-lime-500 transition-colors"
        >
          Sign Up
        </button>
        
        <button
          onClick={() => openModal('forgot-password')}
          className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-lime-500 transition-colors"
        >
          Forgot Password
        </button>
      </div>
      
      <AuthModal
        isOpen={modalOpen}
        initialView={initialView}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
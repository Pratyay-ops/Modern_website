"use client";

import Image from "next/image";
import logoimage from "@/assets/images/logo.svg";
import Button from "@/components/button";
import AuthModal from "./auth-modal";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "CATALOGUE", href: "#Catalogue" },
  { label: "EVENTS", href: "#events" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "ABOUT US", href: "#aboutus" },
  { label: "CONTACT", href: "#contact" },
  { label: "FAQ", href: "#faqs" },
];

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialView, setInitialView] = useState<'login' | 'signup' | 'forgot-password'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = (view: 'login' | 'signup') => {
    setInitialView(view);
    setModalOpen(true);
  };

  return (
    <>
      <section className="bg-transparent py-3 lg:py-6 w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 lg:px-8">
          {/* Wrapping div to ensure the scroll progress bar stays inside */}
          <div className="relative w-full flex items-center justify-between border border-white/10 rounded-full p-2 px-6 bg-black/80 backdrop-blur-md">
            
            <div className="flex items-center gap-3">
              <Image
                src={logoimage}
                alt="anime logo"
                className="h-12 md:h-14 w-auto"
                priority
              />
              <span className="hidden md:inline-block text-lg text-white font-courier">
                Kulturr
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="lg:flex justify-center items-center gap-6 hidden">
              <nav className="flex-grow flex justify-center gap-6 font-medium">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label} className="hover:text-blue-300">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button
                className="mr-2 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>

              <Button
                variant="secondary"
                className="inline-flex items-center"
                onClick={() => openModal("login")}
              >
                Log In
              </Button>
              <Button
                variant="primary"
                className="hidden md:inline-flex items-center"
                onClick={() => openModal("signup")}
              >
                Sign Up
              </Button>
            </div>

            {/* Scroll Progress Bar inside the navbar */}
            <div className="absolute bottom-0 -left-0.5 px-6 w-full h-[3px] overflow-hidden rounded-b-full">
              <ScrollProgress className="w-full h-1" />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-5 flex flex-col items-center space-y-4 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-lg font-medium hover:text-blue-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={modalOpen}
        initialView={initialView}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

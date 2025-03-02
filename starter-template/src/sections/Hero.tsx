"use client";

import Button from "@/components/button";
import AuthModal from "./auth-modal";
import { useState } from "react";
import Image from "next/image";
import poster1 from "@/assets/images/poster1.jpeg";
import poster2 from "@/assets/images/poster2.jpeg";
import Draggable from "react-draggable";

export default function Hero() {
    const [modalOpen, setModalOpen] = useState(false);
    const [initialView, setInitialView] = useState<'login' | 'signup' | 'forgot-password'>('login');

    const openModal = (view: 'login' | 'signup') => {
        setInitialView(view);
        setModalOpen(true);
    };

    return (
        <>
        <section className="relative w-full h-screen overflow-x-clip">
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-55"
            >
                <source src="/videos/video.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray/50 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <Draggable>
                    <div className="absolute -left-60 top-10 hidden md:block lg:block">
                        <Image src={poster1} width={400} height={500} alt="poster1"/>
                    </div>
                </Draggable>
                <Draggable>
                    <div className="absolute -right-60 top-50 hidden md:block lg:block">
                        <Image src={poster2} width={400} height={500} alt="poster2"/>
                    </div>
                </Draggable>
                <h1 className="sm:text-5xl md:text-6xl lg:text-9xl font-bold text-lime-500">KULTURR</h1>
                <p className="text-2xl mt-4 opacity-80 text-lime-500">One Stop Destination 4 Anime, News, Events & More.. ❤️</p>
                <form className="flex border border-white/10 rounded-full mt-14 max-w-md mx-auto p-2 bg-white/5">
                    <input type="email" placeholder="Enter your email" className="bg-transparent flex-grow px-4 outline-none"/>
                    <Button type="button" variant="primary" size="sm" className="whitespace-nowrap" onClick={() => openModal("signup")}>Sign Up</Button>
                </form>
            </div>
        </section>

        {/* Auth Modal */}
        <AuthModal isOpen={modalOpen} initialView={initialView} onClose={() => setModalOpen(false)} />
        </>
    );
}

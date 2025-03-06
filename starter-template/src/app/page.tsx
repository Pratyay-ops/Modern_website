import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction"
import Features from "@/sections/Features";
import Salebanner from "@/sections/salebanner";
import { Marquee3D } from "@/sections/Integrations";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Salebanner />
            <Introduction />
            <Features />
            <Marquee3D />
        </>
    );
}

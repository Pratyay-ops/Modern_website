import Image from "next/image";
import attackontitan from "@/assets/images/Attack_on_Titan.svg";
import bleach from "@/assets/images/bleach.svg";
import chainsawman from "@/assets/images/chainsaw_man.svg";
import dandadan from "@/assets/images/dandadan.svg";
import demonslayer from "@/assets/images/demonslayer.svg";
import dragonball from "@/assets/images/Dragon_Ball_Z_logo.svg";
import naruto from "@/assets/images/Naruto_logo.svg";
import onepiece from "@/assets/images/one_piece.svg";
import spyxfamily from "@/assets/images/spyfamily.svg";
import jujutsukaisen from "@/assets/images/Jujutsu_Kaisen.svg";
import evangelion from "@/assets/images/Neon_Genesis.svg"
import fullmetal from "@/assets/images/Fullmetal.svg";

const logos = [
    { name: "Attack on Titan", src: attackontitan },
    { name: "Bleach", src: bleach },
    { name: "Chainsawman", src: chainsawman },
    { name: "Neon Genesis Evangelion", src: evangelion },
    { name: "Dragon Ball", src: dragonball },
    { name: "Naruto", src: naruto },
    { name: "One Piece", src: onepiece },
    { name: "Fullmetal Alchemist", src: fullmetal },
    { name: "Spy x Family", src: spyxfamily },
    { name: "Jujutsu Kaisen", src: jujutsukaisen },
    { name: "Dandadan", src: dandadan },
    { name: "Demon Slayer", src: demonslayer },
];

// Duplicate the logos to create an infinite scroll effect
//const loopingLogos = [...logos, ...logos];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-hidden relative">
            <h3 className="text-center text-white/50 text-2xl font-semibold">
                Choose Your Favourite Anime
            </h3>
            <div className="flex">
                <div className="logo-slider mt-12">
                    <div className="logo-track">
                        {/* Duplicate logos for smooth infinite scrolling */}
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="logo-item">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={150} // Increased size
                                    height={75}
                                    className="logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

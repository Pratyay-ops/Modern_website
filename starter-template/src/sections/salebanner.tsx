import Image from "next/image";
import flicker from "@/assets/images/flicker.png";

export default function Salebanner() {
    return (
        <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center bg-black text-white">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image src={flicker} alt="Sale Image" className="max-w-full h-auto object-cover"/>
            </div>

            {/* Right Side - Sale Text */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center sm:py-6 px-6">
                <h2 className="text-3xl md:text-5xl font-bold uppercase">Don't Miss Out</h2>
                <hr className="w-1/2 border-white my-3"/>
                <p className="text-4xl md:text-6xl font-courier font-bold text-red-500">50% Off Sitewide</p>
                <hr className="w-1/2 border-white my-3"/>
                <p className="text-lg md:text-xl opacity-80">Discount Applied at Checkout</p>
                <a href="#catalogue" className="mt-4 px-6 py-3 border border-red-600 bg-neutral-700 hover:bg-red-700 text-white text-lg rounded-full transition">
                    Shop the Sale
                </a>
            </div>
        </section>
    );
}

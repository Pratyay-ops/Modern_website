import Image from "next/image";
import Tag from "@/components/tag";
import poster from "@/assets/images/Posters.png";
import figurines from "@/assets/images/Figurines.png";
import stickers from "@/assets/images/stickers.png"
import cosplay from "@/assets/images/cosplays.png";


const cards = [
    { name: "Anime Stickers", img: stickers },
    { name: "Anime Posters", img: poster },
    { name: "Anime Cosplay Comming soon", img: cosplay },
    { name: "Anime Figurines", img: figurines },
];

export default function Introduction() {
    return (
        <section className="py-10">
            <div className="container">
                {/* Tag Section */}
                <div className="flex justify-center">
                    <Tag>Keep Up with Kultur</Tag>
                </div>
                <div className="text-4xl text-center font-medium mt-10">
                    <span>Your Creative Process </span>
                    <span className="text-lime-500">Deserves</span>
                    <span> Better</span>
                </div>

                {/* Cards Section */}
                <div className="mt-12 relative">
                    {/* Mobile scrollable container with hidden scrollbar */}
                    <div className="md:hidden overflow-x-auto no-scrollbar pb-6">
                        <div className="flex gap-6 px-6 w-max">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-64 flex-shrink-0 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={card.img}
                                            alt={card.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 transform transition-all duration-300 group-hover:bg-gray-700">
                                        <h3 className="text-center text-white text-lg font-semibold">
                                            {card.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">
                                            Explore our collection of premium {card.name.toLowerCase()} for anime fans.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid md:grid-cols-4 gap-6 px-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 hover:z-10 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={card.img}
                                        alt={card.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 transform transition-all duration-300 group-hover:bg-gray-700">
                                    <h3 className="text-center text-white text-lg font-semibold">
                                        {card.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">
                                        Explore our collection of premium {card.name.toLowerCase()} for anime fans.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add subtle indicators for mobile scrolling */}
                    <div className="md:hidden flex justify-center mt-4 gap-1">
                        {cards.map((_, index) => (
                            <div 
                                key={index} 
                                className="w-2 h-2 rounded-full bg-gray-400"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Add this to your global CSS file to hide scrollbars
// .no-scrollbar::-webkit-scrollbar {
//     display: none;
// }
// .no-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
// }
import Tag from "@/components/tag";
import Image from "next/image";
import kafka from "@/assets/images/kafka.png";
import kanad from "@/assets/images/kanad.png";
import bodhi from "@/assets/images/bodhi.png";
import FeatureCard from "@/components/FeatureCard";
import { img } from "framer-motion/client";

const logos = [
    { name: "Kafka", img: kafka },
    { name: "Kanad", img: kanad },
    { name: "Bodhi", img: bodhi },
];

const features = [
    "Amazing Quality",
    "Pocket Friendly Prices",
    "Collab with Leading Guilds",
    "Active Response Team",
    "Custom Designs",
    "Amazing Collection",
];
const text1 = "This club was born out of our struggle of getting great quality anime merch at a student friendly price ❤️";
const text2 = "For me, the Anime Society is a place where passion meets friendship, where I belong, and where anime brings us together.";
const text3 = "We are a group of students who are passionate about anime and we want to share our passion with you!";
const text4 = "We are giving you oppurtunity to get your own custom designs and choices of posters and stickers!";
const text5 = "We will soon start T-shirt printing, stay tuned for more updates!";

export default function Features() {
    return <section className="py-10">
        <div className="container">
            <div className="flex justify-center">
                <Tag>Our Passion</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6">Keep Up with <span className="text-orange-500">Kulturr</span></h2>
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <FeatureCard title="Our Passion" description={text1}></FeatureCard>
                <FeatureCard title="Our Offerings" description={text4}></FeatureCard>
                <FeatureCard title="Our Aspiration" description={text5}></FeatureCard>
            </div>
            <div>
                {features.map((feature) => (
                    <div key={feature}>
                        <span></span> 
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>;
    </section>
    
}

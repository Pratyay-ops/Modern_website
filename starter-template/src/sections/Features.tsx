"use client";
import React, { useState } from 'react';
import Tag from "@/components/tag";
import Image from "next/image";
import kafka from "@/assets/images/kafka.png";
import kanad from "@/assets/images/kanad.png";
import bodhi from "@/assets/images/bodhi.png";
import FeatureCard from "@/components/FeatureCard";
import Avatar from "@/components/Avatar";
import custom_poster from "@/assets/images/custom_poster.png";
import custom_tshirt from "@/assets/images/custom_tshirt.png";

const teamMembers = [
    { 
        name: "Kafka", 
        img: kafka, 
        position: "President", 
        text: "This club was born out of our struggle of getting great quality anime merch at a student friendly price ❤️" 
    },
    { 
        name: "Kanad", 
        img: kanad, 
        position: "Vice-President", 
        text: "For me, the Anime Society is a place where passion meets friendship, where I belong, and where anime brings us together." 
    },
    { 
        name: "Bodhi", 
        img: bodhi, 
        position: "Secretary", 
        text: "We are a group of students who are passionate about anime and we want to share our passion with you!" 
    }
];

const features = [
    "Amazing Quality",
    "Pocket Friendly Prices",
    "Collab with Leading Guilds",
    "Active Response Team",
    "Custom Designs",
    "Amazing Collection",
];

export default function Features() {
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

    const handleAvatarClick = (name: string) => {
        setSelectedAvatar(selectedAvatar === name ? null : name);
    };

    return (
        <section className="py-10">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Our Passion</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">Keep Up with <span className="text-orange-500">Kulturr</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 lg:grid-cols-3">
                    <FeatureCard 
                        title="Hear from Us" 
                        description="Some Members of our team are here to share their thoughts with you!"
                        className='col-span-2 lg:col-span-1'
                    >
                        <div className="relative aspect-video flex items-center justify-center">
                            <div className="flex">
                                {teamMembers.map((member) => (
                                    <Avatar 
                                        key={member.name}
                                        name={member.name}
                                        className={`
                                            ${member.name === 'Kafka' ? 'border-[#D16BA5] z-40' : 
                                              member.name === 'Kanad' ? 'border-[#46659F] z-30 -ml-6' : 
                                              'border-[#5FFBF1] z-20 -ml-6'}
                                            cursor-pointer
                                            ${selectedAvatar === member.name ? 'ring-4 ring-orange-500' : ''}
                                        `}
                                        onClick={() => handleAvatarClick(member.name)}
                                    >
                                        <Image 
                                            src={member.img} 
                                            alt={`${member.name}, ${member.position}`} 
                                            className="rounded-full h-full w-full object-cover"
                                        />
                                    </Avatar>
                                ))}
                            </div>
                        </div>
                        {selectedAvatar && (
                            <div className="mt-4 text-center">
                                {teamMembers.map((member) => (
                                    selectedAvatar === member.name && (
                                        <div key={member.name} className="mb-4">
                                            <p className="text-lg font-semibold text-white mb-2">{member.name} - {member.position}</p>
                                            <p className="text-sm text-white/50">{member.text}</p>
                                        </div>
                                    )
                                ))}
                            </div>
                        )}
                    </FeatureCard>
                    <FeatureCard 
                    title="Our Offerings" 
                    description="We are giving you opportunity to get your own custom designs and choices of posters and stickers!"
                    className='col-span-2 lg:col-span-1'>
                        <div className='relative w-52 h-52 border-2 border-blue-950 rounded-lg overflow-hidden mx-auto'>
                            <Image src={custom_poster} alt="custom_poster"/>
                        </div>
                    </FeatureCard>
                    <FeatureCard 
                        title="Our Aspiration" 
                        description="We will soon start T-shirt printing, stay tuned for more updates!"
                        className='col-span-2 col-start-2 lg:col-span-1 lg:col-start-auto'
                    >
                        <div className='relative w-52 h-52 border-2 border-blue-950 rounded-lg overflow-hidden mx-auto'>
                            <Image 
                                src={custom_tshirt} 
                                alt="custom_tshirt"
                                className="object-cover w-full h-full"
                                layout="fill"
                            />
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8  flex flex-wrap justify-center gap-4">
                    {features.map((feature) => (
                        <div key={feature} className="inline-flex px-2 py-1.5 border border-orange-500 rounded-full items-center bg-white/5">
                            <span className="mr-2 text-orange-500">•</span>
                            <span className='font-medium'>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
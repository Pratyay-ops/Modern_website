import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

// Load fonts
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

const courierPrime = Courier_Prime({
    variable: "--font-courier-prime",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

const libreFranklin = Libre_Franklin({
    subsets: ["latin"],
    weight: ["400", "700"], // Regular and Bold
    variable: "--font-libre-franklin",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Kulturr: Anime Merchandise Store",
    description: "Created by JU Anime Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${courierPrime.variable} ${libreFranklin.variable} font-sans antialiased bg-black text-white`}
            >
                {children}
            </body>
        </html>
    );
}

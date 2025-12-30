import type {Metadata} from "next";
import {Martian_Mono, Schibsted_Grotesk} from "next/font/google";
import "./globals.css"
import LightRays from "@/components/LightRays";
import NavBar from "@/components/NavBar";
import React from "react";

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-grotesk",
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevEvent",
    description: "The hub for every dev event you must not miss",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
        >
        <NavBar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
            <LightRays
                raysOrigin="top-center-offset"
                raysColor="#5dfeca"
                raysSpeed={.8}
                lightSpread={2}
                rayLength={1.5}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.01}
                distortion={0.01}
                className="custom-rays"
            />
        </div>

        <main>
            {children}
        </main>

        </body>
        </html>
    );
}

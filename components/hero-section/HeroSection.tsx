"use client";
import { HeroCarusel } from "./hero-carusel";
import { HeroSidebar } from "./hero-sidebar";

const HeroSection = () => {
    return (
        <div className="grid  grid-cols-12 container">
            <div className="grid col-span-8">
                <HeroCarusel />
            </div>
            <div className="grid col-span-4 mx-auto" >
                <HeroSidebar />
            </div>
        </div>
    );
};

export default HeroSection;
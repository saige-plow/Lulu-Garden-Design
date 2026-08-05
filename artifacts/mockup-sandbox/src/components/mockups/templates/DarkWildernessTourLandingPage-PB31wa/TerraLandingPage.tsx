import './fonts.css';
import asset0 from "./assets/lp-49-hero.png";

import React from "react";
import { ArrowRight, MapPin, Compass, Mountain, ChevronRight } from "lucide-react";

export default function TerraLandingPage() {
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="relative overflow-hidden bg-[#1A2F25] text-[#E5E2DA] flex flex-col font-sans"
    >
      {/* SVG Noise Overlay */}
      <svg
        className="pointer-events-none absolute inset-0 z-50 h-full w-full opacity-[0.15] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Header */}
      <header className="relative z-40 flex items-center justify-between px-12 py-8 uppercase tracking-[0.2em] text-sm font-bold border-b border-white/10">
        <div className="flex items-center gap-3">
          <Mountain className="h-6 w-6 text-[#C05C3D]" />
          <span className="text-xl tracking-[0.25em] text-white">TERRA</span>
        </div>
        <nav className="flex items-center gap-10">
          <a href="#" className="hover:text-[#C05C3D] transition-colors">Expeditions</a>
          <a href="#" className="hover:text-[#C05C3D] transition-colors">Gear</a>
          <a href="#" className="hover:text-[#C05C3D] transition-colors">Journal</a>
          <a href="#" className="hover:text-[#C05C3D] transition-colors">About</a>
        </nav>
        <button className="bg-[#C05C3D] text-white px-8 py-3 hover:bg-[#a04930] transition-colors flex items-center gap-2">
          <span>BOOK NOW</span>
        </button>
      </header>

      {/* Main Hero Area */}
      <main className="relative flex-1 flex">
        {/* Left Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-12 pr-24 pt-12 pb-20">
          <div className="flex items-center gap-3 mb-8 uppercase tracking-[0.2em] text-xs font-bold text-[#C05C3D]">
            <Compass className="h-4 w-4" />
            <span>Wilderness Guided Tours</span>
            <div className="h-px w-12 bg-[#C05C3D] ml-2"></div>
          </div>
          
          <h1 className="text-8xl leading-[0.85] font-black uppercase tracking-tighter mb-8 text-white font-['Oswald']">
            BEYOND <br />
            THE PINES
          </h1>
          
          <p className="text-lg leading-relaxed text-[#aeb6b8] mb-12 max-w-md">
            Forge your own path through untamed wilderness. Expert-led expeditions into the heart of the backcountry for those who seek true isolation.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-[#E5E2DA] text-[#1A2F25] px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors flex items-center gap-3 group">
              <span>Explore Trails</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-3">
              <span>View Film</span>
            </button>
          </div>

          {/* Stats / Details */}
          <div className="mt-auto flex items-center gap-12 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-black font-['Oswald'] tracking-tight text-white mb-1">12+</div>
              <div className="uppercase tracking-widest text-[10px] text-[#aeb6b8]">Active Routes</div>
            </div>
            <div>
              <div className="text-3xl font-black font-['Oswald'] tracking-tight text-white mb-1">4.9</div>
              <div className="uppercase tracking-widest text-[10px] text-[#aeb6b8]">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-black font-['Oswald'] tracking-tight text-white mb-1">500k</div>
              <div className="uppercase tracking-widest text-[10px] text-[#aeb6b8]">Acres Explored</div>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="relative w-[55%] h-full">
          <div className="absolute inset-0 bg-[#1A2F25]/20 z-10 mix-blend-multiply"></div>
          <img 
            src={asset0} 
            alt="Rugged mountain landscape" 
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
          
          {/* Overlay Card */}
          <div className="absolute bottom-12 right-12 z-20 bg-[#3E4A51]/90 backdrop-blur-sm p-6 border-l-4 border-[#C05C3D] w-80">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-[#C05C3D]">
                <MapPin className="h-3 w-3" />
                <span>Featured Route</span>
              </div>
              <span className="text-white font-['Oswald'] text-xl">$1,250</span>
            </div>
            <h3 className="text-2xl font-black uppercase font-['Oswald'] tracking-tight text-white mb-2">
              OBSIDIAN RIDGE
            </h3>
            <p className="text-sm text-[#aeb6b8] mb-4">
              7-day intensive trek across volcanic terrain and alpine lakes. Highly demanding.
            </p>
            <button className="text-xs uppercase tracking-widest font-bold text-white hover:text-[#C05C3D] transition-colors flex items-center gap-1 group">
              <span>View Itinerary</span>
              <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

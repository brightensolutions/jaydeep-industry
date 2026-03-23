"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, Trophy } from "lucide-react";

export default function RadiantJubileeHighlight() {
  return (
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed left-0 bottom-16 z-[100] group cursor-default"
    >
      <div className="relative">
        
        {/* 1. PULSING RADIANCE - Draws the eye from across the screen */}
        <div className="absolute inset-0 bg-yellow-400/30 blur-[40px] rounded-full animate-pulse group-hover:bg-yellow-400/50 transition-all duration-1000" />

        {/* 2. OUTER METALLIC FRAME */}
        <div className="relative p-[1.5px] rounded-r-3xl bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
          
          {/* 3. MAIN BODY - Deep Maroon/Black Gradient for high-end feel */}
          <div className="relative overflow-hidden flex items-center bg-gradient-to-br from-[#1a0202] to-[#050505] rounded-r-[22px] px-8 py-5">
            
            {/* THE SWEEPING LIGHT BEAM - This is the "Highlighter" */}
            <motion.div
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-24 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[35deg] pointer-events-none"
            />

            {/* LARGE NUMBER SECTION */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative">
                {/* Background Shadow Text for Depth */}
                <span className="absolute inset-0 text-yellow-900/40 blur-[2px] translate-y-1 translate-x-1 text-6xl md:text-7xl font-serif font-black italic">
                  50
                </span>
                {/* Main Gradient Text */}
                <span className="relative text-6xl md:text-7xl font-serif font-black italic bg-gradient-to-b from-[#FFF5C2] via-[#EAB308] to-[#714B00] bg-clip-text text-transparent drop-shadow-md">
                  50
                </span>
              </div>
              <span className="text-[10px] text-yellow-200/60 font-black tracking-[0.5em] uppercase -mt-2">
                Years
              </span>
            </div>

            {/* DIVIDER LINE */}
            <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent mx-8" />

            {/* TEXT CONTENT */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center gap-2">
                <Trophy size={14} className="text-yellow-400" strokeWidth={3} />
                <span className="text-yellow-500 text-[11px] font-black tracking-[0.3em] uppercase">
                  Golden Jubilee
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                Celebrating <br />
                <span className="text-yellow-100/90 italic">Legacy.</span>
              </h2>

              <div className="flex items-center gap-2 pt-2">
                <span className="h-[2px] w-4 bg-yellow-600" />
                <span className="text-white/40 text-[9px] font-bold tracking-widest uppercase">
                  1976 — 2026
                </span>
              </div>
            </div>

            {/* FLOATING FLOATING EMBLEM */}
            <div className="ml-6 relative">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-b from-yellow-200 to-yellow-600 p-3 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
              >
                <Award size={28} className="text-black" strokeWidth={2.5} />
              </motion.div>
              {/* Extra Sparkle Icon */}
              <Sparkles size={16} className="absolute -top-2 -right-2 text-yellow-200 animate-bounce" />
            </div>

          </div>
        </div>
        
        {/* SIDE BAR GLOW */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-2/3 w-3 bg-yellow-400 rounded-full blur-[4px] opacity-70" />
      </div>
    </motion.div>
  );
}
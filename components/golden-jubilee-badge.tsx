"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, Trophy } from "lucide-react";

export default function RadiantJubileeHighlight() {
  return (
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      // Responsive positioning: bottom-2 on mobile, bottom-16 on desktop. 
      // max-w ensures it doesn't overflow small screens.
      className="fixed left-0 bottom-2 md:bottom-16 z-[100] group cursor-default max-w-[95vw] md:max-w-none"
    >
      <div className="relative">
        
        {/* 1. PULSING RADIANCE */}
        <div className="absolute inset-0 bg-yellow-400/30 blur-[20px] md:blur-[40px] rounded-full animate-pulse group-hover:bg-yellow-400/50 transition-all duration-1000" />

        {/* 2. OUTER METALLIC FRAME */}
        <div className="relative p-[1.5px] rounded-r-2xl md:rounded-r-3xl bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] md:shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
          
          {/* 3. MAIN BODY - Scaled padding for mobile (px-4 py-3) and desktop (px-8 py-5) */}
          <div className="relative overflow-hidden flex items-center bg-gradient-to-br from-[#1a0202] to-[#050505] rounded-r-[20px] md:rounded-r-[22px] px-4 py-3 md:px-8 md:py-5">
            
            {/* THE SWEEPING LIGHT BEAM */}
            <motion.div
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-16 md:w-24 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[35deg] pointer-events-none"
            />

            {/* LARGE NUMBER SECTION */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative">
                {/* Background Shadow Text */}
                <span className="absolute inset-0 text-yellow-900/40 blur-[2px] translate-y-1 translate-x-1 text-4xl md:text-7xl font-serif font-black italic">
                  50
                </span>
                {/* Main Gradient Text */}
                <span className="relative text-4xl md:text-7xl font-serif font-black italic bg-gradient-to-b from-[#FFF5C2] via-[#EAB308] to-[#714B00] bg-clip-text text-transparent drop-shadow-md">
                  50
                </span>
              </div>
              <span className="text-[7px] md:text-[10px] text-yellow-200/60 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase md:-mt-2">
                Years
              </span>
            </div>

            {/* DIVIDER LINE - Scaled height and margins */}
            <div className="h-10 md:h-16 w-[1px] bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent mx-3 md:mx-8" />

            {/* TEXT CONTENT */}
            <div className="flex flex-col space-y-0.5 md:space-y-1">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400" strokeWidth={3} />
                <span className="text-yellow-500 text-[8px] md:text-[11px] font-black tracking-[0.1em] md:tracking-[0.3em] uppercase whitespace-nowrap">
                  Golden Jubilee
                </span>
              </div>
              
              <h2 className="text-base md:text-3xl font-serif font-bold text-white leading-tight">
                Celebrating <br className="hidden md:block" />
                <span className="text-yellow-100/90 italic">Legacy.</span>
              </h2>

              <div className="flex items-center gap-1.5 md:gap-2 pt-0.5 md:pt-2">
                <span className="h-[1px] md:h-[2px] w-3 md:w-4 bg-yellow-600" />
                <span className="text-white/40 text-[7px] md:text-[9px] font-bold tracking-widest uppercase">
                  1976 — 2026
                </span>
              </div>
            </div>

            {/* FLOATING EMBLEM - Hidden on very small screens, scales up on md+ */}
            <div className="ml-3 md:ml-6 relative hidden sm:block">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-b from-yellow-200 to-yellow-600 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_5px_10px_rgba(0,0,0,0.4)] md:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
              >
                <Award className="w-5 h-5 md:w-7 md:h-7 text-black" strokeWidth={2.5} />
              </motion.div>
              {/* Extra Sparkle Icon */}
              <Sparkles className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 text-yellow-200 animate-bounce" />
            </div>

          </div>
        </div>
        
        {/* SIDE BAR GLOW */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-2/3 w-2 md:w-3 bg-yellow-400 rounded-full blur-[2px] md:blur-[4px] opacity-70" />
      </div>
    </motion.div>
  );
}
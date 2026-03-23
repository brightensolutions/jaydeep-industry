"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductFeatureSection() {
  // Each feature now has a unique icon mapped to its specific benefit
  const features = [
    { 
      label: "Corrosion Resistant", 
      icon: ShieldCheck, 
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    { 
      label: "Low Friction", 
      icon: Droplets, 
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    { 
      label: "High Tensile", 
      icon: Zap, 
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
  ];

  return (
    <div className="max-w-4xl p-8 bg-white">
      {/* Product Tagline */}
      <span className="text-[#da222a] text-[10px] font-bold tracking-[0.2em] uppercase border-l-2 border-[#da222a] pl-3">
        Nickel-Plated Precision
      </span>
      
      <h2 className="text-5xl font-black text-[#0f172a] mt-4 mb-6 tracking-tighter uppercase leading-[0.9]">
        Twin Inserted <br /> Twisted Wire Healds
      </h2>

      {/* Description Block */}
      <div className="mb-10">
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
          Engineered for high-speed weaving, featuring uniform nickel deposit (SWG 18–34) 
          for maximum corrosion resistance and low-friction performance.
        </p>
      </div>

      {/* UNIQUE ICON POINTS - Now visually distinct */}
      <div className="flex flex-wrap gap-4 mb-12">
        {features.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 px-5 py-3 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
          >
            {/* Unique Icon Container with subtle background unique to each icon */}
            <div className={`p-2 rounded-lg ${item.bgColor}`}>
              <item.icon size={18} className={`${item.iconColor} stroke-[2.5px]`} />
            </div>
            
            <span className="text-[12px] font-black text-[#0f172a] uppercase tracking-wider">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Action Button - Professional Industrial Style */}
      <Button className="bg-[#0f172a] hover:bg-[#da222a] text-white px-10 py-8 rounded-none transition-all duration-500 group overflow-hidden relative">
        <span className="relative z-10 font-bold tracking-[0.2em] uppercase text-xs">Technical Specifications</span>
        <ArrowRight size={18} className="relative z-10 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
      </Button>
    </div>
  );
}
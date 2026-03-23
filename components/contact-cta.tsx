"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, Mail, ChevronRight } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] text-white overflow-hidden relative">
      {/* Subtle Background Detail for Professionalism */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 1. Small Professional Tagline */}
          <span className="inline-block text-[#da222a] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 border-l border-red-600 pl-3">
            Global Textile Solutions
          </span>

          {/* 2. Headline - Swapped to a slightly more elegant spacing */}
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[1.1]">
            Contact for any <br />
            <span className="text-white/40">weaving queries</span>
          </h2>

          {/* 3. Refined Body Text */}
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Our engineering team provides specialized technical support for high-speed looms and custom weaving requirements.
          </p>

          {/* 4. Action Buttons - Professional "Solid & Ghost" Pairing */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              asChild
              className="group !bg-[#da222a] hover:!bg-white hover:!text-black text-white font-black rounded-none px-10 py-8 uppercase tracking-[0.2em] text-xs transition-all duration-500 w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center">
                <Mail className="mr-3 h-4 w-4 transition-transform group-hover:-rotate-12" />
                Technical Inquiry
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group !border-white/20 !text-white !bg-transparent hover:!bg-white hover:!text-black font-black rounded-none px-10 py-8 uppercase tracking-[0.2em] text-xs transition-all duration-500 w-full sm:w-auto"
            >
              <Link href="tel:+919825311311" className="flex items-center">
                <PhoneCall className="mr-3 h-4 w-4 transition-transform group-hover:scale-110" />
                Consult an Expert
              </Link>
            </Button>
          </div>

          {/* 5. Minimalist Availability Note */}
          <div className="mt-12 flex items-center justify-center gap-2 opacity-30">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Support Active: Mon — Sat</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
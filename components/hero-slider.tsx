"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderImages = [
  {
    src: "/w-main-image.jpeg",
    alt: "Slide 1",
    type: "default",
  },
  {
    src: "/slider2.jpeg",
    alt: "Slide 2",
    type: "anniversary",
  },
];

export default function HeroSection() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden font-sans flex flex-col">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={sliderImages[currentImageIndex].src}
              alt={sliderImages[currentImageIndex].alt}
              fill
              priority
              className="object-cover opacity-60 grayscale-[10%] contrast-110"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex gap-2">
        <button
          onClick={prevImage}
          className="bg-black/40 hover:bg-[#da222a] text-white p-2 md:p-3 rounded-full border border-white/20 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={nextImage}
          className="bg-black/40 hover:bg-[#da222a] text-white p-2 md:p-3 rounded-full border border-white/20 transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 flex gap-1.5 md:gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 md:h-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-6 md:w-8 bg-[#da222a]"
                : "w-3 md:w-4 bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 flex-grow w-full flex flex-col px-4 sm:px-6 md:px-12 py-4 md:py-10">

        {/* RELIABILITY BADGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative md:absolute md:top-40 mt-16 sm:mt-24 md:mt-0 self-start flex items-center gap-2 md:gap-4 bg-black/40 px-3 py-2 md:px-5 md:py-2.5 border-l-2 md:border-l-4 border-[#da222a]"
        >
          <span className="text-white text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em]">
            Reliability • Quality • After-Sales Service
          </span>
        </motion.div>

        {/* CONTENT */}
        <div className="flex-grow flex items-end md:items-center justify-start pb-20 md:pb-0 py-4">

          {sliderImages[currentImageIndex].type === "default" ? (

            <div className="w-full max-w-[95%] md:max-w-4xl">
              <motion.h1
                key="default"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  font-black text-white uppercase leading-tight break-words
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl
                "
              >
                Precision{" "}
                <span className="text-[#da222a]">Twin Healds</span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                  for Superior Weaving
                </span>
              </motion.h1>
            </div>

          ) : (

            <div className="w-full max-w-6xl mx-auto px-2 md:px-4 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-[#e6c27a] text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl">
                  50 YEARS
                </h1>

                <div className="flex items-center justify-center gap-2 md:gap-4 my-2 md:my-4">
                  <div className="h-[1px] w-8 sm:w-12 md:w-20 bg-[#e6c27a]" />
                  <span className="text-white text-sm sm:text-lg md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em]">
                    OF PRECISION
                  </span>
                  <div className="h-[1px] w-8 sm:w-12 md:w-20 bg-[#e6c27a]" />
                </div>

                <p className="text-white/70 text-sm sm:text-base md:text-lg mt-4 md:mt-8 max-w-[90%] md:max-w-lg mx-auto leading-relaxed">
                  A legacy built on excellence. Join us as we reflect on five
                  decades of industrial mastery.
                </p>

                <button
                  onClick={() => router.push("/about")}
                  className="mt-6 md:mt-10 group relative inline-flex items-center gap-2 md:gap-3 text-white transition-all"
                >
                  <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold">
                    THE PHASES OF JAYDEEP
                  </span>
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-[#e6c27a] flex items-center justify-center group-hover:bg-[#e6c27a] transition-all">
                    <span className="text-[#e6c27a] text-sm md:text-base group-hover:text-black">
                      →
                    </span>
                  </div>
                </button>
              </motion.div>
            </div>

          )}

        </div>
      </div>
    </section>
  );
}
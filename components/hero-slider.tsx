"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/jaydeep-slider1.jpg", // replace with actual image path
    title: "Precision Twin Healds for Superior Weaving",
    subtitle:
      "High-quality twin healds designed for efficiency and durability in modern looms.",
    ctaText: "Explore Twin Healds",
    ctaLink: "/products",
  },
  // {
  //   id: 2,
  //   image: "/placeholder.svg?height=1080&width=1920",
  //   title: "Precision Engineering, Unmatched Quality",
  //   subtitle: "Delivering excellence in every product we create.",
  //   ctaText: "View Products",
  //   ctaLink: "/products",
  // },
  // {
  //   id: 3,
  //   image: "/placeholder.svg?height=1080&width=1920",
  //   title: "Global Reach, Local Expertise",
  //   subtitle: "Connecting industries worldwide with reliable solutions.",
  //   ctaText: "Contact Us",
  //   ctaLink: "/contact",
  // },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Removed slides.length from dependencies as it's a constant
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []); // Dependency array is now empty

  // Removed slides.length from dependencies as it's a constant
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []); // Dependency array is now empty

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={slides[currentSlide].id}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority={true}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="inline-block bg-[#da222a] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-lg"
              >
                {slides[currentSlide].subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="!bg-[#0066a4] !hover:bg-[#0066a4]/90 !text-white !font-bold !text-lg !rounded-full !px-8 !py-3 !shadow-xl !hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/products" className="inline-block text-center">
                    Explore All Products
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-[#da222a]" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface PageHeroTitleProps {
  title: string;
  description: string;
  themeColor?: "black" | "red";
}

export default function PageHeroTitle({
  title,
  description,
  themeColor = "black",
}: PageHeroTitleProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Text colors
  const titleTextColor = "text-gray-900";
  const descriptionTextColor = "text-gray-700";

  return (
    <section className="relative h-[280px] md:h-[350px] flex items-center justify-center text-center overflow-hidden">
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold uppercase ${titleTextColor} mb-4`}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-lg md:text-xl ${descriptionTextColor} max-w-2xl`}
        >
          {description}
        </motion.p>

      </div>
    </section>
  );
}
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
}

export const Timeline = ({
  children,
  className,
  direction = "horizontal",
}: TimelineProps) => {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center",
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", // Timeline manages its own container width and padding
        direction === "horizontal" ? "flex-row py-10" : "flex-col",
        className
      )}
    >
      {/* Horizontal Line for horizontal timeline */}
      {direction === "horizontal" && (
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden sm:block"></div>
      )}
      <div
        className={cn(
          "flex flex-nowrap justify-between", // Prevent wrapping, distribute space evenly
          direction === "horizontal" ? "" : "flex-col space-y-16",
          "items-stretch" // Ensure all direct children stretch to the tallest item's height
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  direction?: "horizontal" | "vertical";
  year: string;
}

export const TimelineItem = ({
  children,
  className,
  index,
  direction = "horizontal",
  year,
}: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex-shrink-0",
        // Force each item to take 1/4 width for horizontal, full width for vertical
        // Added h-full to ensure the item itself stretches
        direction === "horizontal"
          ? "flex flex-col w-1/4 px-2 h-full"
          : "flex flex-row items-start w-full",
        className
      )}
    >
      {/* Wrapper for dot and line to maintain centering while card stretches */}
      <div className="flex flex-col items-center">
        {/* Timeline Dot */}
        <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center z-10 relative">
          <span className="sr-only">{year}</span>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>

        {/* Connecting Line to Card */}
        {direction === "horizontal" ? (
          <div className="absolute w-0.5 bg-red-600 z-0 top-7 h-16"></div>
        ) : (
          <div className="absolute h-0.5 bg-red-600 w-6 -left-6 top-1/2 transform -translate-y-1/2"></div>
        )}
      </div>

      {/* Content Card (always below the dot for horizontal) */}
      <Card
        className={cn(
          "w-full p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
          // Added h-full and flex-grow to ensure the card fills the available height
          direction === "horizontal"
            ? "mt-8 h-full flex flex-col flex-grow"
            : "ml-8"
        )}
      >
        <CardContent className="p-0 flex-grow">
          {" "}
          {/* Added flex-grow here too */}
          <h4 className="text-xl font-bold text-gray-900 mb-2">{year}</h4>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

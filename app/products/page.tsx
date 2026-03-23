"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ IMPORT THIS
import ProductsSection from "@/components/products-section";

export default function ProductFeatureSection() {
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
    <>
     

      {/* ===== ADD PRODUCTS SECTION HERE ===== */}
      <div className="mt-16">
        <ProductsSection />
      </div>
    </>
  );
}
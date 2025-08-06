"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Industrial Bearings",
    description:
      "High-precision bearings for heavy machinery and critical applications.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/bearings",
  },
  {
    name: "Custom Metal Components",
    description: "Tailored metal parts manufactured to exact specifications.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/metal-components",
  },
  {
    name: "Advanced Filtration Systems",
    description:
      "Efficient solutions for air and liquid purification in industrial settings.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/filtration-systems",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative Shadow Element (Red themed) */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-red-shadow shadow-2xl blur-2xl rounded-full z-0 -translate-x-1/2"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-[#da222a] mb-4">
            Our Featured Products
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our range of high-quality industrial products, engineered
            for performance and durability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button
                  asChild
                  className="bg-[#da222a] hover:bg-[#da222a]/90 text-white font-semibold rounded-lg"
                >
                  <Link href={product.link}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#0066a4] hover:bg-[#0066a4]/90 text-white font-bold rounded-xl px-8 py-3 shadow-lg"
          >
            <Link href="/products">Explore All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

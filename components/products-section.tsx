"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Twin Inserted Twisted Wire Healds",
    description:
      "Manufactured in multiple wire gauges (SWG 18–34) and lengths (100–1000 mm), these healds are precision-engineered for weaving efficiency. The nickel plating provides a lustrous finish, uniform deposit, and superior corrosion resistance.",
    image: "/twin-wire-healds.jpg",
    link: "/products/inserted-wire-healds",
  },

  {
    name: "Metal Reeds",
    description:
      "A complete range of metal reeds for modern looms, including Sulzer, Dornier, Rapier, Ruti, Water Jet, and Warping Reeds. Available in counts from 4 to 280, with precise dimensions, they ensure excellent fabric quality and long operational life.",
    image: "/metal-reeds.jpg",
    link: "/products/metal-reeds",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Shadow Element (Red themed) */}
      {/* <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-red-shadow shadow-2xl blur-2xl rounded-full z-0 -translate-x-1/2"></div> */}

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
                  variant="default"
                  className="!bg-[#da222a] hover:!bg-[#da222a]/90 !text-white font-semibold rounded-lg"
                >
                  <Link href={product.link} className="flex items-center">
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
            className="!bg-[#000000] !hover:bg-[#000000]/90 !text-white !font-bold !rounded-xl !px-8 !py-3 !shadow-lg"
          >
            <Link href="/products">Explore All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

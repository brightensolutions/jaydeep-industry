"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHeroTitle from "@/components/page-hero-title"; // New import

const allProducts = [
  {
    name: "Twin Wire Healds",
    description:
      "Manufactured in multiple wire gauges (SWG 18–34) and lengths (100–1000 mm), these healds are precision-engineered for weaving efficiency. The nickel plating provides a lustrous finish, uniform deposit, and superior corrosion resistance.",
    image: "/twin-wire-healds.jpg",
    link: "/products/twin-wire-healds",
  },
  // {
  //   name: "Mail Eyes – Hardened and Tinned, for Twin Wire Healds",
  //   description:
  //     "Durable mail eyes specially hardened and tinned to withstand the stress of weaving. Available in round, oval, and oblong types, they ensure smooth passage of warp threads and long-lasting performance in twin wire healds.",
  //   image: "/mail-eyes.jpg",
  //   link: "/products/mail-eyes",
  // },
  {
    name: "Metal Reeds",
    description:
      "A complete range of metal reeds for modern looms, including Sulzer, Dornier, Rapier, Ruti, Water Jet, and Warping Reeds. Available in counts from 4 to 280, with precise dimensions, they ensure excellent fabric quality and long operational life.",
    image: "/metal-reeds.jpg",
    link: "/products/metal-reeds",
  },
  // {
  //   name: "Inserted Wire Healds with Groz-Beckert Mail Eyes",
  //   description:
  //     "Designed with various loop types (Round, Open End, Crimp, Oblong, Arrow), these healds offer flexibility for different loom requirements. Fitted with O & H Series Groz-Beckert mail eyes, they provide accurate warp thread control and high weaving reliability.",
  //   image: "/groz-beck.jpg",
  //   link: "/products/inserted-wire-healds",
  // },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeroTitle
        title="Our Products"
        description="Explore the full range of products offered by Jaydeep Industries."
        themeColor="red"
      />
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative Shadow Element (Red themed) - Increased size and blur */}
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-red-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-[#da222a] mb-4">
              Our Comprehensive Product Range
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our diverse portfolio of industrial products, engineered
              to meet the highest standards of quality and performance across
              various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
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
                  {/* <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span> */}
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
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
        </div>
      </section>
    </>
  );
}

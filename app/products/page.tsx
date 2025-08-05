"use client"

import Breadcrumb from "@/components/breadcrumb" // Renamed import
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const allProducts = [
  {
    name: "Industrial Bearings",
    description:
      "High-precision bearings for heavy machinery and critical applications, ensuring smooth operation and longevity.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mechanical Components",
    link: "/products/industrial-bearings",
  },
  {
    name: "Custom Metal Components",
    description:
      "Tailored metal parts manufactured to exact specifications using advanced CNC machining and fabrication techniques.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Fabricated Parts",
    link: "/products/custom-metal-components",
  },
  {
    name: "Advanced Filtration Systems",
    description:
      "Efficient solutions for air and liquid purification in industrial settings, improving operational efficiency and safety.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Environmental Solutions",
    link: "/products/filtration-systems",
  },
  {
    name: "Hydraulic Cylinders",
    description:
      "Robust hydraulic cylinders designed for heavy-duty applications, offering reliable power transmission.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hydraulics",
    link: "/products/hydraulic-cylinders",
  },
  {
    name: "Conveyor Belts",
    description:
      "Durable conveyor belts for material handling across various industries, optimized for efficiency and wear resistance.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Material Handling",
    link: "/products/conveyor-belts",
  },
  {
    name: "Industrial Pumps",
    description:
      "High-performance pumps for fluid transfer in demanding industrial environments, available in various types.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Fluid Dynamics",
    link: "/products/industrial-pumps",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb />
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
          <p className="text-lg text-gray-700">Explore the full range of products offered by Jaydeep Industries.</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-[#da222a] mb-4">Our Comprehensive Product Range</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our diverse portfolio of industrial products, engineered to meet the highest standards of quality
              and performance across various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
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
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <Button asChild className="bg-[#da222a] hover:bg-[#da222a]/90 text-white font-semibold rounded-lg">
                    <Link href={product.link}>
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
  )
}

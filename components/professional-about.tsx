"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Globe, Cog, Users, Target, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ProfessionalAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "ISO 9001:2015 certified manufacturing processes ensuring superior quality standards.",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Premium raw materials sourced from Malaysia and Switzerland for optimal performance.",
    },
    {
      icon: Cog,
      title: "Advanced Technology",
      description: "Modern nickel plating techniques for enhanced durability and performance.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with decades of textile industry expertise.",
    },
    {
      icon: Target,
      title: "Precision Manufacturing",
      description: "Accurate dimensions and precise tolerance meeting exact customer requirements.",
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "SWASTIK brand - a household name in Indian textile industries since 1976.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-red-600 border-red-600">
            About Jaydeep Industries
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Excellence in Textile Manufacturing Since 1976
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading manufacturer of precision weaving accessories, committed to delivering superior quality
            products that meet the evolving needs of the global textile industry.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Legacy</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Established in 1976 as a specialized manufacturer, Jaydeep Industries has evolved into a trusted leader
                in weaving accessories. Our <strong className="text-red-600">SWASTIK</strong> brand Wire Heads have
                become synonymous with quality and reliability in the Indian textile industry.
              </p>
              <p>
                Through strategic partnerships with <strong className="text-blue-600">Shree Sainath Industries</strong>,
                we offer comprehensive solutions including SSI brand Metal Reeds, ensuring our customers have access to
                complete weaving accessory solutions.
              </p>
              <p>
                Our commitment to innovation led us to introduce{" "}
                <strong className="text-gray-900">Nickel Plated Wire Heads</strong> using advanced techniques, enabling
                faster weaving machines and meeting the demanding requirements of modern textile manufacturing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="/placeholder.svg?height=400&width=600&text=Manufacturing+Facility"
              alt="Manufacturing Facility"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">47+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-red-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Certifications & Standards</h3>
            <p className="text-gray-600">
              Our commitment to quality is validated by international certifications and industry standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">ISO 9001:2015</h4>
              <p className="text-sm text-gray-600">Quality Management System Certified</p>
            </div>
            <div>
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-sm text-gray-600">Rigorous quality control processes</p>
            </div>
            <div>
              <Globe className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-sm text-gray-600">International quality benchmarks</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

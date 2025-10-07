"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Users, Globe, Star } from "lucide-react"; // Added Star icon

const features = [
  {
    name: "State-of-the-Art Facilities",
    description:
      "Equipped with modern technology to manufacture high-quality weaving accessories.",
    icon: Factory,
  },
  {
    name: "Experienced Team",
    description:
      "A dedicated workforce committed to precision, innovation, and quality.",
    icon: Users,
  },
  {
    name: "Global Presence",
    description:
      "Serving clients across India and international markets with trusted solutions.",
    icon: Globe,
  },
  {
    name: "Export House Recognition",
    description:
      "Recognized by the Government of India for excellence in exports.",
    icon: Star,
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0066a4]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/jaydeep-building2.jpg"
              alt="About Jaydeep Industries"
              fill
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6 justify-between">
              <div>
                <h3 className="text-white text-2xl font-bold">
                  Driving Industrial Excellence Since 1976
                </h3>
              </div>
              <div className="w-40 h-40 relative">
                <Image
                  src="/swastik-logo.png"
                  alt="Swastik Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-4xl font-extrabold text-[#0066a4] mb-4">
                About Jaydeep Industries
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 1976, Jaydeep Industries is built on{" "}
                <strong className="text-gray-900">Reliability, Quality,</strong>{" "}
                and{" "}
                <strong className="text-gray-900">After-Sales Service</strong>.
                Our <strong className="text-primary-red">SWASTIK</strong> brand
                Twin Wire Healds and Metal Reeds are trusted in India and abroad
                for their precision, durability, and superior performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We continuously innovate with products like{" "}
                <strong className="text-gray-900">
                  Nickel Plated Wire Healds
                </strong>
                , <strong className="text-gray-900">Flat Steel Healds</strong>,
                and <strong className="text-gray-900">Drop Wires</strong> to
                meet modern weaving needs across Sulzer, Rapier, Dornier, Water
                Jet, Carpet, Jute, Felt, and Terry-Towel looms.
              </p>
            </motion.div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.4 + index * 0.1,
                  }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-[#da222a]/10 text-[#da222a]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a1a1a]">
                      {feature.name}
                    </h4>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Globe } from "lucide-react";

const countries = [
  { name: "Belgium", code: "BE", x: 50.8, y: 34 },
  { name: "Canada", code: "CA", x: 20, y: 30 },
  { name: "China", code: "CN", x: 75, y: 40 },
  { name: "Egypt", code: "EG", x: 54, y: 52 },
  { name: "Germany", code: "DE", x: 51.5, y: 34.5 },
  { name: "Indonesia", code: "ID", x: 77, y: 68 },
  { name: "Italy", code: "IT", x: 52, y: 44 },
  { name: "Japan", code: "JP", x: 85, y: 40 },
  { name: "South Korea", code: "KR", x: 81, y: 41 },
  { name: "Mexico", code: "MX", x: 17, y: 52 },
  { name: "Tunisia", code: "TN", x: 51, y: 48 },
  { name: "Turkey", code: "TR", x: 55, y: 43 },
  { name: "UAE", code: "AE", x: 60, y: 52 },
  { name: "United Kingdom", code: "UK", x: 49, y: 33 },
  { name: "United States", code: "US", x: 22, y: 42 },
];

export default function GlobalMapSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-blue-shadow shadow-2xl blur-2xl rounded-full z-0 -translate-x-1/2"></div>
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-gradient-blue-shadow shadow-2xl blur-2xl rounded-full z-0 translate-x-1/2"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Exporting Globally
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Our products reach across continents, delivering excellence to
            partners worldwide
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative w-full aspect-[2/1] max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Use <img> from public folder */}
          <img
            src="/world.svg"
            alt="World Map"
            className="w-full h-full rounded-3xl border-2 border-primary-blue/20 shadow-xl object-contain"
          />

          {/* Country Markers */}
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              className="absolute z-10"
              style={{
                left: `${country.x}%`,
                top: `${country.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredCountry(country.code)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              {hoveredCountry === country.code && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-red"
                  style={{
                    width: "24px",
                    height: "24px",
                    left: "-8px",
                    top: "-8px",
                  }}
                  animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              )}

              <div
                className={`relative w-6 h-6 rounded-full bg-gradient-to-br from-primary-blue to-primary-red border-2 border-white shadow-lg transition-all duration-300 ${
                  hoveredCountry === country.code
                    ? "scale-125 shadow-primary-blue/50"
                    : ""
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-white opacity-40 blur-sm" />
              </div>

              <motion.div
                className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: hoveredCountry === country.code ? 1 : 0,
                  y: hoveredCountry === country.code ? 0 : -5,
                }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: "none" }}
              >
                <div className="px-4 py-2 rounded-lg bg-primary-blue border border-primary-blue/50 backdrop-blur-sm shadow-xl">
                  <p className="text-sm font-semibold text-white">
                    {country.name}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Country list */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-primary-blue hover:bg-primary-blue/5 transition-all duration-300 cursor-pointer shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onMouseEnter={() => setHoveredCountry(country.code)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  hoveredCountry === country.code
                    ? "text-primary-blue"
                    : "text-gray-700"
                }`}
              >
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

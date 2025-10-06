"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function ProfessionalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timelineEvents = [
    {
      year: "1976",
      title: "Founding & Specialization",
      description:
        "Jaydeep Industries was established as a small-scale manufacturing unit with the singular focus of producing premium weaving accessories for India’s then-emerging textile industry. Led by deep technical knowledge, the company built a strong reputation as one of the finest producers.",
    },
    {
      year: "1980s - 1990s",
      title: "Product Line Expansion & Innovation",
      description:
        "Throughout these decades, Jaydeep expanded its product lines with the commencement of Metal Reeds production while introducing the technology of nickel plating to Wire-Healds, making our hero product more durable and efficient.",
    },
    {
      year: "2002",
      title: "Entry into Export Market",
      description:
        "Marked a milestone as we entered the export market - a journey that has been marked by various recognitions. Since then, Jaydeep has been conferred 4 ‘Export Excellence Awards’ and 2 ‘National Awards for Export Excellence’ by the Chamber of Commerce and the Engineering Export Promotion Council of India (EEPC), respectively.",
    },
    {
      year: "2026",
      title: "50 Years of Excellence",
      description:
        "We will complete 50 years of industrial experience as well as 50 years of trust, quality, and reliability.",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Decorative Shadow Element (Blue themed) - Main fixed shadow (left) */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-blue-shadow shadow-2xl blur-2xl rounded-full z-0 -translate-x-1/2"></div>
      {/* NEW: Decorative Shadow Element (Blue themed) - Near Vision and Mission (right) */}
      <div className="absolute top-[1600px] right-0 w-[700px] h-[700px] bg-gradient-blue-shadow shadow-2xl blur-2xl rounded-full z-0 translate-x-1/2"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Legacy
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Established in 1976 as a specialized manufacturer, Jaydeep
                Industries has evolved into a trusted leader in weaving
                accessories. Our{" "}
                <strong className="text-primary-red">SWASTIK</strong> brand Wire
                Heads have become synonymous with quality and reliability in the
                Indian textile industry.
              </p>
              <p>
                Through strategic partnerships with{" "}
                <strong className="text-primary-blue">
                  Shree Sainath Industries
                </strong>{" "}
                , we offer comprehensive solutions including SSI brand{" "}
                <strong className="text-gray-900">Metal Reeds</strong> ,
                ensuring our customers have access to complete weaving accessory
                solutions.
              </p>
              <p>
                Our commitment to innovation led us to introduce{" "}
                <strong className="text-gray-900">
                  Nickel Plated Wire Heads
                </strong>{" "}
                using advanced techniques, enabling faster weaving machines and
                meeting the demanding requirements of modern textile
                manufacturing.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/jaydeep-building2.jpg"
              alt="Manufacturing Facility"
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />

            {/* Swastik Logo Overlay */}
            <div className="absolute top-4 right-4 w-20 h-20">
              <Image
                src="/swastik-logo.png"
                alt="Swastik Logo"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Years of Excellence Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red">47+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Company Story - Timeline Section (Full Width with Container Padding) */}
      <div className="py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          {/* This div ensures container padding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Explore the key milestones that shaped Jaydeep Industries into a
              leader in textile manufacturing.
            </p>
          </motion.div>
          <Timeline direction="vertical">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} index={index} year={event.year}>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {event.description}
                </p>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      {/* Vision and Mission Sections (No Background) */}
      <div className="py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border-t-4 border-primary-blue hover:border-primary-blue/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our vision is to be a globally trusted manufacturer of
                    weaving accessories who have upholds the values of
                    precision, quality, and enduring relationships while
                    creating a legacy of innovation, development, and
                    future-ready manufacturing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border-t-4 border-primary-red hover:border-primary-red/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We aim to manufacture superior-quality weaving aids that
                    meet the evolving global standard by blending traditional
                    expertise with modern systems to deliver consistent,
                    first-rate quality and build long-term valued relationships
                    through honesty, service and credibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Certifications Section (Full Width Blue Background with Dotted Animation) */}
      <div className="relative pt-20 bg-primary-blue overflow-hidden">
        {/* Dotted Overlay with Animation */}
        <div className="absolute inset-0 bg-dotted-pattern bg-[size:40px_40px] animate-move-dots z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quality Certifications & Standards
            </h3>
            <p className="text-lg text-gray-100">
              Our commitment to quality is validated by international
              certifications and industry standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="bg-white/10 border border-white/20 text-white p-6 shadow-lg flex flex-col items-center justify-center h-full">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <Award className="h-24 w-24 mx-auto mb-4 text-white" />
                <h4 className="font-semibold text-xl mb-2">
                  50+ Years Experience
                </h4>
                <p className="text-base text-gray-200">
                  Trusted expertise in manufacturing premium weaving reeds
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border border-white/20 text-white p-6 shadow-lg flex flex-col items-center justify-center h-full">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <Shield className="h-24 w-24 mx-auto mb-4 text-white" />
                <h4 className="font-semibold text-xl mb-2">Quality Assured</h4>
                <p className="text-base text-gray-200">
                  Rigorous quality control processes
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border border-white/20 text-white p-6 shadow-lg flex flex-col items-center justify-center h-full">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <Globe className="h-24 w-24 mx-auto mb-4 text-white" />
                <h4 className="font-semibold text-xl mb-2">Global Standards</h4>
                <p className="text-base text-gray-200">
                  International quality benchmarks
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function ProfessionalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timelineEvents = [
    {
      year: "1976",
      title: "Foundation Built on Reliability and Quality",
      description:
        "Jaydeep Industries was founded in India with a firm commitment to reliability, consistent quality, and exceptional after-sales service. What began as a small manufacturing unit soon became a trusted name in weaving accessories across the Indian textile industry.",
    },
    {
      year: "1980s - 1990s",
      title: "Growth Through Innovation",
      description:
        "The company introduced its flagship ‘SWASTIK’ brand Twin Wire Healds, which rapidly gained recognition for their superior performance and durability. Continuous quality improvement and innovation led to the development of high-quality Nickel Plated Wire Healds with GROZ-BECKERT (formerly Bracker) inset mail eyes for high-speed Jacquard looms.",
    },
    {
      year: "2000",
      title: "Diversification and Product Expansion",
      description:
        "Driven by strong customer trust, Jaydeep expanded its manufacturing portfolio to include Flat Steel Healds and Drop Wires, offering complete solutions for weaving needs across Sulzer, Rapier, Dornier, Water Jet, Carpet, Jute, Felt, and Terry-Towel looms.",
    },
    {
      year: "1999 - Present",
      title: "Introduction of SWASTIK Metal Reeds",
      description:
        "The launch of SWASTIK brand Metal Reeds marked another milestone, establishing a wide size range and high precision standards. Diligent service and impeccable product quality have strengthened Jaydeep’s position in both domestic and international markets.",
    },
    {
      year: "Recent Years",
      title: "Global Recognition and Excellence",
      description:
        "With a strong Quality Management System and consistent export performance, Jaydeep Industries has earned multiple Export Excellence Awards and continues to be recognized as a global leader in the weaving accessories industry.",
    },
    {
      year: "Future",
      title: "Continuing a Legacy of Trust and Innovation",
      description:
        "As Jaydeep Industries moves forward, the focus remains on innovation, customer satisfaction, and quality leadership — continuing to serve as a trusted partner to the global textile industry.",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Decorative Background Shadows */}
      {/* <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-black-shadow shadow-2xl blur-2xl rounded-full z-0 -translate-x-1/2"></div>
      <div className="absolute top-[1600px] right-0 w-[700px] h-[700px] bg-gradient-black-shadow shadow-2xl blur-2xl rounded-full z-0 translate-x-1/2"></div> */}

      {/* ABOUT SECTION */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 py-20 px-8 rounded-2xl shadow-md"
        >
          {/* <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            JAYDEEP INDUSTRIES
          </h3> */}

          <div className="space-y-6 text-gray-700 leading-relaxed text-justify text-md">
            <p>
              Established in India on a strong foundation of{" "}
              <strong>Reliability, Consistent Quality,</strong> and{" "}
              <strong>After-Sales Service</strong>, Jaydeep Industries has grown
              into a globally trusted name in the weaving accessories industry.
              The satisfaction of Indian textile weavers and international
              buyers has placed Jaydeep Industries on the global map as a
              front-line manufacturer.
            </p>
            <p>
              Our <strong className="text-primary-red">SWASTIK</strong> brand{" "}
              <strong>Twin Wire Healds</strong> have established a legacy of
              precision, durability, and reliability in the textile engineering
              industry worldwide. Through continuous innovation, we introduced{" "}
              <strong>High-Quality Nickel Plated Wire Healds</strong> featuring{" "}
              <strong>GROZ-BECKERT (formerly Bracker)</strong>{" "}
              <em>inset mail eyes</em> for high-speed Jacquard looms — setting
              new benchmarks in weaving efficiency.
            </p>
            <p>
              The faith and trust placed by customers across the globe
              encouraged us to expand our product range with{" "}
              <strong>Flat Steel Healds</strong> and <strong>Drop Wires</strong>
              , providing comprehensive solutions to meet diverse weaving
              requirements.
            </p>
            <p>
              Our <strong className="text-primary-red">SWASTIK</strong> brand{" "}
              <strong>Metal Reeds</strong> are known for their precision,
              strength, and longevity. Backed by diligent service, impeccable
              quality control, and custom-built solutions, Jaydeep Industries
              has strengthened its presence across both domestic and
              international markets.
            </p>
            <p>
              Today, we proudly cater to the weaving needs of{" "}
              <strong>
                Sulzer, Rapier, Dornier, Water Jet, Carpet, Jute, Felt, and
                Terry-Towel Looms
              </strong>
              , delivering products designed for performance and precision.
            </p>
            <p>
              Our relentless pursuit of quality excellence has been recognized
              with prestigious <strong>Export Excellence Awards</strong>,
              reflecting our continued commitment to innovation, reliability,
              and customer satisfaction across the global textile industry.
            </p>
          </div>
        </motion.div>
      </div>

      {/* TIMELINE SECTION - FULL WIDTH */}
      <div className="w-full bg-gray-50 py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900">Our Journey</h3>
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

      {/* VISION AND MISSION */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full p-8 shadow-lg hover:shadow-2xl border-t-4 border-primary-black transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our vision is to be a globally trusted manufacturer of weaving
                  accessories that uphold the values of precision, quality, and
                  enduring relationships while creating a legacy of innovation,
                  development, and future-ready manufacturing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="h-full p-8 shadow-lg hover:shadow-2xl border-t-4 border-primary-red transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We aim to manufacture superior-quality weaving aids that meet
                  evolving global standards by blending traditional expertise
                  with modern systems to deliver consistent, first-rate quality
                  and build long-term valued relationships through honesty,
                  service, and credibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="relative pt-20 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-dotted-pattern bg-[size:40px_40px] animate-move-dots z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative z-20 mx-auto max-w-7xl px-6 p-8"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Quality Certifications & Standards
            </h3>
            <p className="text-lg text-gray-100">
              Our commitment to quality is validated by international
              certifications and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <Card className="bg-white/10 border border-white/20 text-white p-8 shadow-lg">
              <CardContent>
                <Award className="h-24 w-24 mx-auto mb-4 text-white" />
                <h4 className="font-semibold text-xl mb-2">
                  50+ Years Experience
                </h4>
                <p className="text-base text-gray-200">
                  Trusted expertise in manufacturing premium weaving reeds
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border border-white/20 text-white p-8 shadow-lg">
              <CardContent>
                <Shield className="h-24 w-24 mx-auto mb-4 text-white" />
                <h4 className="font-semibold text-xl mb-2">Quality Assured</h4>
                <p className="text-base text-gray-200">
                  Rigorous quality control processes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border border-white/20 text-white p-8 shadow-lg">
              <CardContent>
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

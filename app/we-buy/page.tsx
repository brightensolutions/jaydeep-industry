"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import PageHeroTitle from "@/components/page-hero-title"; // New import

export default function WeBuyPage() {
  return (
    <>
      <PageHeroTitle
        title="We Buy"
        description="Information about materials or products Jaydeep Industries is interested in purchasing."
        themeColor="blue"
      />
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative Shadow Element (Blue themed) - Increased size and blur */}
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-blue-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold text-[#0066a4] mb-4">
              Scrap & Industrial Waste
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Jaydeep Industries is actively involved in sustainable practices,
              including the procurement of various types of industrial scrap and
              waste materials for recycling and responsible disposal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left"
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Materials We Are Interested In:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  Ferrous and Non-Ferrous Metals (Iron, Steel, Copper, Aluminum,
                  Brass)
                </li>
                <li>Industrial Plastics (HDPE, LDPE, PP, PVC)</li>
                <li>Electronic Waste (E-waste)</li>
                <li>Rubber and Tires</li>
                <li>Paper and Cardboard Waste</li>
                <li>Used Machinery and Equipment</li>
                <li>
                  Chemical Waste (with proper documentation and safety
                  protocols)
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                If you have materials not listed here, please contact us to
                discuss. We are always looking for new opportunities to expand
                our recycling efforts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left"
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Inquire About Selling Your Materials:
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="border-gray-300 focus:border-[#0066a4] focus:ring-[#0066a4]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-gray-300 focus:border-[#0066a4] focus:ring-[#0066a4]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="material"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type of Material
                  </label>
                  <Input
                    id="material"
                    type="text"
                    placeholder="e.g., Copper Scrap, HDPE Plastic"
                    className="border-gray-300 focus:border-[#0066a4] focus:ring-[#0066a4]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Quantity (approx.)
                  </label>
                  <Input
                    id="quantity"
                    type="text"
                    placeholder="e.g., 5 tons, 100 kg"
                    className="border-gray-300 focus:border-[#0066a4] focus:ring-[#0066a4]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Any other relevant information..."
                    className="border-gray-300 focus:border-[#0066a4] focus:ring-[#0066a4]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full !bg-[#da222a] !hover:bg-[#da222a]/90 !text-white !rounded-lg py-3 font-bold"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="!bg-[#0066a4] !hover:bg-[#0066a4]/90 !text-white font-bold rounded-xl px-8 py-3 shadow-lg"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="!border-2 !border-[#0066a4] !text-[#0066a4] !bg-transparent !hover:bg-[#0066a4] !hover:text-white !font-bold !rounded-xl !px-8 !py-3 !shadow-xl !hover:shadow-2xl !transition-all !duration-300"
            >
              <Link
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Directly
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

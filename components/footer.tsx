"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#1a1a1a] text-gray-300 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Jaydeep Industries Logo"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  JAYDEEP INDUSTRIES
                </h3>
                <p className="text-sm text-gray-400">
                  Weaving Excellence Since 1976
                </p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading manufacturer of precision weaving accessories, committed
              to quality and innovation for the global textile industry.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#da222a" }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#0066a4" }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#da222a" }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#0066a4" }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/group"
                  className="text-gray-400 hover:text-[#da222a] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#da222a] transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-gray-400 hover:text-[#da222a] transition-colors"
                >
                  Feedback & Inquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/we-buy"
                  className="text-gray-400 hover:text-[#da222a] transition-colors"
                >
                  We Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#da222a] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#da222a] flex-shrink-0" />
                <span className="text-gray-400">+91 9825311311</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#0066a4] flex-shrink-0" />
                <span className="text-gray-400">info@jaydeep-industry.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#da222a] flex-shrink-0" />
                <address className="not-italic text-gray-400">
                  D2/92-95, Bhagwati Nagar Industrial Estate, Near Navjivan
                  Automotive Showroom, Bhestan, Surat - 395023 (Gujarat) India
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter (Optional) */}
          <div className="col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="text-gray-400">
              Stay updated with our latest products and news.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0066a4]"
              />
              <button
                type="submit"
                className="bg-[#0066a4] hover:bg-[#0066a4]/90 text-white font-semibold py-3 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Jaydeep Industries. All rights
          reserved.
        </div>
      </div>
    </motion.footer>
  );
}

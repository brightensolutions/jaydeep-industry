"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "/about" },
  // { name: "Group", href: "/group" },
  { name: "Our Products", href: "/products" },
  { name: "Feedback & Inquiry", href: "/feedback" },
  { name: "We Buy", href: "/we-buy" },
  { name: "Reseller Program", href: "/reseller-program" }, // Updated href for new page
];

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header with Glass Morphism Effect */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`sticky top-0 z-50  ${
          scrolled
            ? "bg-[#0066a4]/90 backdrop-blur-xl shadow-2xl border-b border-[#0066a4]"
            : "bg-[#0066a4]/95 backdrop-blur-lg shadow-xl"
        }`}
      >
        {/* Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#da222a] via-[#0066a4] to-[#da222a]"></div>

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 lg:py-3">
            {/* Premium Logo Design */}
            <motion.div
              initial={{ x: -50, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="flex items-center"
            >
              <Link href="/" className="group relative flex items-center">
                <div className="relative">
                  {" "}
                  {/* Removed motion.div and its animations */}
                  <Image
                    src="/logo.png"
                    alt="Jaydeep Industries"
                    width={100} // Changed to 100
                    height={100} // Changed to 100
                    className="h-24 w-24 object-contain relative z-10" // Adjusted Tailwind classes for 100x100
                    priority
                  />
                </div>
              </Link>
            </motion.div>
            {/* Premium Desktop Navigation */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center space-x-1"
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-5 xl:px-6 py-3 text-white font-bold text-base xl:text-lg transition-colors duration-300 group rounded-xl"
                    >
                      {/* Text with Hover Effect */}
                      <motion.span
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 group-hover:text-white transition-all duration-300" // Removed text shadow class
                      >
                        {item.name}
                      </motion.span>

                      {/* Bottom Glow Line */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#da222a] group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Premium CTA Button */}
            <motion.div
              initial={{ x: 50, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="hidden md:flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-[#0066a4] hover:bg-[#da222a] hover:text-white font-bold px-8 lg:px-10 text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-[#0066a4]"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </motion.div>
            </motion.div>
            {/* Stylish Mobile Menu Button */}
            <div className="md:hidden">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:text-[#da222a] p-3 rounded-xl bg-[#1a1a1a] hover:bg-[#da222a]/10 transition-all duration-300 shadow-md"
                  aria-label="Toggle mobile menu"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Premium Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden border-t border-gray-100 overflow-hidden bg-gradient-to-br from-[#0066a4]/90 via-[#da222a]/30 to-[#1a1a1a]/30 backdrop-blur-xl"
              >
                <div className="space-y-2 pb-6 pt-6">
                  {/* Mobile Contact Info with Premium Design */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="px-4 py-4 bg-[#0066a4]/20 mx-4 rounded-2xl mb-6 shadow-lg border border-white/50" // Simplified background
                  >
                    <div className="flex items-center space-x-3 text-sm text-white mb-3">
                      <div className="p-2 bg-[#da222a]/20 rounded-full">
                        <Phone className="h-4 w-4 text-[#da222a]" />
                      </div>
                      <span className="font-bold">+91 XXX XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-white mb-3">
                      <div className="p-2 bg-[#0066a4]/20 rounded-full">
                        <Mail className="h-4 w-4 text-[#0066a4]" />
                      </div>
                      <span className="font-bold">
                        info@jaydeep-industry.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-white">
                      <div className="p-2 bg-yellow-100/20 rounded-full">
                        <Award className="h-4 w-4 text-yellow-400" />
                      </div>
                      <span className="font-bold">ISO 9001:2015 Certified</span>
                    </div>
                  </motion.div>

                  {/* Mobile Navigation with Premium Styling */}
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-6 py-4 text-lg font-bold text-white hover:text-white hover:bg-[#da222a]/20 transition-all duration-300 rounded-2xl mx-4 shadow-sm hover:shadow-lg border-l-4 border-transparent hover:border-white" // Simplified hover
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA Buttons with Premium Design */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="px-4 pt-6"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full !rounded-xl !shadow-lg !py-3 !transition-all !duration-300"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0066a4] text-white font-bold text-base px-8 py-3 shadow-lg hover:bg-[#da222a] hover:shadow-xl transition-all duration-300 text-center"
                      >
                        Contact Us
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}

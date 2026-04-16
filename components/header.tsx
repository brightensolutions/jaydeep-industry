"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Info,
  ShoppingBag,
  MessageSquare,
  Star,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const detailedNavigation = [
  { label: "About Us", href: "/about", icon: Info },
  { label: "Weaving Solutions", href: "/products", icon: ShoppingBag },
  { label: "Feedback & Inquiry", href: "/feedback", icon: MessageSquare },
  { label: "Success Stories", href: "/success", icon: Star },
  { label: "Contact Us", href: "/contact", icon: Phone },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "zh-CN", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldBeSolid = !isHomePage || scrolled;

  // Logic to split the menu items around the center logo
  const leftNav = detailedNavigation.slice(0, 2); 
  const rightNav = detailedNavigation.slice(2);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 300);
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          shouldBeSolid ? "bg-black/95 backdrop-blur-lg shadow-2xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1800px] px-6 lg:px-12 flex justify-between items-center h-24 md:h-28">
          
          {/* LEFT SECTION: Main Logo */}
          <div className="flex items-center gap-2 md:gap-4 flex-1">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Jaydeep Industries"
                width={120}
                height={120}
                className="h-14 w-14 md:h-20 md:w-20 object-contain"
                priority
              />
            </Link>
          </div>

          {/* CENTER SECTION: Split Nav + Anniversary */}
          <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-6 flex-[2]">
            {/* Left Nav Items */}
            {leftNav.map((item) => (
              <Link key={item.label} href={item.href} className="relative px-4 py-3 text-white font-black uppercase tracking-tighter text-sm xl:text-base group">
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#da222a] group-hover:w-8 transition-all duration-300 rounded-full" />
              </Link>
            ))}

            {/* THE 50TH ANNIVERSARY DESIGN */}
            <div className="flex flex-col items-center px-6 border-x border-white/10">
               <span className="text-[#e6c27a] text-3xl xl:text-4xl font-serif leading-none">50<span className="text-[10px] uppercase align-top">th</span></span>
               <span className="text-[#e6c27a] text-[10px] uppercase tracking-[0.3em] font-bold -mt-1">Anniversary</span>
            </div>

            {/* Right Nav Items */}
            {rightNav.map((item) => (
              <Link key={item.label} href={item.href} className="relative px-4 py-3 text-white font-black uppercase tracking-tighter text-sm xl:text-base group">
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#da222a] group-hover:w-8 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT SECTION: Brand Logo & Lang Selector */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <Image
              src="/swastik-logo-removebg-preview1.png"
              alt="Brand Logo"
              width={200}
              height={200}
              className="h-16 w-16 md:h-20 md:w-20 object-contain brightness-110"
              priority
            />

            <select
              value={currentLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="hidden md:block bg-black border border-white/30 text-white text-xs px-2 py-1 rounded cursor-pointer notranslate"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white bg-white/10 p-3 rounded-full active:scale-90 transition-transform"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black flex flex-col justify-between p-6 md:p-10 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[#da222a] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white bg-white/10 p-3 rounded-full active:scale-90 transition-transform"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 mb-10">
              {detailedNavigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-6 py-6 border-b border-white/5 group active:bg-white/5 transition-colors"
                  >
                    <item.icon className="text-[#da222a] shrink-0" size={26} />
                    <span className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Language grid or extra footer items can stay here */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
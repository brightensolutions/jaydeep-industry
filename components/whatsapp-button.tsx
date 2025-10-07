"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-20 z-50" // Adjusted right position to make space for scroll-to-top
    >
      <Button
        asChild
        variant="ghost" // Changed variant to ghost
        className="rounded-full shadow-lg bg-[#25D366] hover:bg-[#1DA851] text-white w-14 h-14 flex items-center justify-center" // Removed !important
        aria-label="Chat on WhatsApp"
      >
        <Link
          href="https://wa.me/919429621290"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-7 w-7" />
        </Link>
      </Button>
    </motion.div>
  );
}

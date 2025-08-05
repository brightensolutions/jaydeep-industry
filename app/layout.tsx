import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import MainHeader from "@/components/header"; // Renamed import
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top"; // Import ScrollToTop
import WhatsAppButton from "@/components/whatsapp-button"; // Import WhatsAppButton

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaydeep Industries",
  description: "Leading Manufacturer of Weaving Accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainHeader /> {/* Renamed component */}
          <main>{children}</main>
          <Footer />
          <ScrollToTop /> {/* Add ScrollToTop component */}
          <WhatsAppButton /> {/* Add WhatsAppButton component */}
        </ThemeProvider>
      </body>
    </html>
  );
}

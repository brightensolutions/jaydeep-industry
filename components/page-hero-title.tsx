"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface PageHeroTitleProps {
  title: string;
  description: string;
  themeColor?: "blue" | "red"; // To apply a tint if needed
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function PageHeroTitle({
  title,
  description,
  themeColor = "blue",
}: PageHeroTitleProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const label = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      return { label, href };
    }),
  ];

  // Use a subtle gradient for the background
  const sectionBgGradient = "bg-gradient-to-br from-[#e6f2f8] to-[#f8e6e6]"; // Very light blue to very light red
  // Use dark text colors for contrast
  const titleTextColor = "text-gray-900";
  const descriptionTextColor = "text-gray-700";
  const breadcrumbTextColor = "text-gray-800"; // Darker for better visibility on light background
  const breadcrumbActiveColor = "text-gray-900";
  const breadcrumbHoverColor =
    themeColor === "red" ? "hover:text-[#da222a]" : "hover:text-[#0066a4]";
  const iconColor = "text-gray-600"; // For ChevronRight and Home icons

  return (
    <section
      className={`relative h-[280px] md:h-[350px] flex items-center justify-center text-center overflow-hidden ${sectionBgGradient}`}
    >
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
        {/* Title and Description */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold ${titleTextColor} mb-4`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-lg md:text-xl ${descriptionTextColor} max-w-2xl`}
        >
          {description}
        </motion.p>

        {/* Breadcrumb (moved below title and description) */}
        <nav className="mt-6" aria-label="Breadcrumb">
          <ol
            className={`flex items-center space-x-2 text-sm md:text-base ${breadcrumbTextColor}`}
          >
            {breadcrumbs.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }} // Adjusted delay for new position
                className="flex items-center"
              >
                {index > 0 && (
                  <ChevronRight
                    className={`h-4 w-4 ${iconColor} mx-2 flex-shrink-0`}
                    aria-hidden="true"
                  />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className={`font-semibold ${breadcrumbActiveColor}`}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`${breadcrumbTextColor} ${breadcrumbHoverColor} transition-colors duration-200 flex items-center`}
                  >
                    {item.label === "Home" ? (
                      <Home className={`h-4 w-4 mr-1 ${iconColor}`} />
                    ) : (
                      item.label
                    )}
                  </Link>
                )}
              </motion.li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}

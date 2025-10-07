"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    number: "01",
    title: 'Four "Export Excellency Awards"',
    detail:
      "Conferred by Chamber of Commerce, Surat for FY 2001-02, 2004-05, 2005-06 and 2006-07.",
    icon: Award,
  },
  {
    number: "02",
    title: 'Two "National Awards"',
    detail: "Conferred by EEPC India for FY 2021-22 & 2022-23.",
    icon: Trophy,
  },
  {
    number: "03",
    title: 'Two "Western Region Export Awards"',
    detail: "Conferred by EEPC India for FY 2021-22 & 2022-23.",
    icon: Star,
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-blue-shadow shadow-2xl blur-2xl rounded-full z-0 translate-x-1/2"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Excellence Recognized
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Our commitment to quality and innovation has earned us prestigious
            accolades across the industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Card className="h-full p-8 lg:p-10 shadow-lg hover:shadow-2xl border-t-4 border-primary-blue transition-all duration-300 bg-white group">
                  <CardContent className="p-0">
                    {/* Number badge and icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-4xl font-bold text-primary-blue">
                        {item.number}
                      </span>
                      <div className="p-3 rounded-xl bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary-blue" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight text-balance">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      {item.detail}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 h-1 w-16 bg-primary-red rounded-full" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative text */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
}

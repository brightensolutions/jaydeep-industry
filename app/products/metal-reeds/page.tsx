"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageHeroTitle from "@/components/page-hero-title";
import { motion } from "framer-motion";

export default function MetalReedsPage() {
  const sizeRangeData = [
    { parameter: "Count", range: "4 to 280" },
    { parameter: "Length", range: "450 to 4200 mm" },
    { parameter: "Width of wire", range: "2.2 to 8.0 mm" },
    { parameter: "Thickness of frame", range: "5.0 ± 0.2 to 8.0 ± 0.2 mm" },
  ];

  return (
    <>
      <PageHeroTitle
        title="Metal Reeds"
        description="Comprehensive Range of Industrial Weaving Reeds - Premium quality metal reeds for all types of looms"
        themeColor="red"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-red-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="flex justify-center gap-2 flex-wrap mb-8">
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                All Metal Construction
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Stainless Steel
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Chrome Plated
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Card className="mb-8 shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Product Range
                </CardTitle>
                <CardDescription>
                  Complete selection of metal reeds for various loom types and
                  applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      All Metal Reeds
                    </h3>
                    <p className="text-gray-700">
                      Standard metal construction for general applications
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Stainless Steel Reeds
                    </h3>
                    <p className="text-gray-700">
                      Corrosion-resistant for demanding environments
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Sulzer & Dornier Reeds
                    </h3>
                    <p className="text-gray-700">
                      Specialized reeds for rapier looms
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Ruti &apos;C&apos; & &apos;B&apos; Type
                    </h3>
                    <p className="text-gray-700">
                      Compatible with Ruti loom systems
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Carpet Weaving Reeds
                    </h3>
                    <p className="text-gray-700">
                      Heavy-duty reeds for carpet manufacturing
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Water Jet Loom Reeds
                    </h3>
                    <p className="text-gray-700">
                      Optimized for water jet weaving systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="mb-8 shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Special Features
                </CardTitle>
                <CardDescription>
                  Advanced manufacturing and finishing options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Hard Chrome Plated Warping Reeds
                        </h3>
                        <p className="text-gray-600">
                          Superior surface hardness and wear resistance for
                          extended service life
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Precision Manufacturing
                        </h3>
                        <p className="text-gray-600">
                          Tight tolerances and consistent quality across all
                          products
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">Wide Size Range</h3>
                        <p className="text-gray-600">
                          Comprehensive selection to meet diverse weaving
                          requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">Custom Solutions</h3>
                        <p className="text-gray-600">
                          Tailored specifications available for specific
                          applications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Size Range Specifications
                </CardTitle>
                <CardDescription>
                  Complete dimensional specifications for all metal reed
                  products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          Parameter
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Range
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sizeRangeData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.parameter}
                          </TableCell>
                          <TableCell>{item.range}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
                  <h4 className="font-semibold text-lg mb-2 text-[#da222a]">
                    Applications
                  </h4>
                  <p className="text-gray-700">
                    Our metal reeds are suitable for various weaving
                    applications including cotton, silk, synthetic fibers,
                    carpet manufacturing, and technical textiles. Each reed is
                    manufactured to precise specifications ensuring optimal
                    performance and longevity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}

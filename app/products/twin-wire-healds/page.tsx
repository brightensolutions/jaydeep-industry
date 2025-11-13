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

export default function TwinWireHealdsPage() {
  const wireGaugeChart = [
    { swg: "18", diameter: "1.219" },
    { swg: "20", diameter: "0.914" },
    { swg: "22", diameter: "0.711" },
    { swg: "24", diameter: "0.558" },
    { swg: "27", diameter: "0.416" },
    { swg: "30", diameter: "0.315" },
    { swg: "32", diameter: "0.274" },
    { swg: "34", diameter: "0.234" },
  ];

  return (
    <>
      <PageHeroTitle
        title="Twin Inserted Twisted Wire Healds"
        description="Premium Quality Wire Healds with Nickel Plating"
        themeColor="red"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative Shadow Element (Red themed) */}
        {/* <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-red-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div> */}

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
                Various Wire Gauges
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Nickel Plated
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                100-1000mm Length
              </Badge>
            </div>
          </motion.div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <Card className="shadow-xl border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#da222a]">
                    Product Features
                  </CardTitle>
                  <CardDescription>
                    Advanced manufacturing for superior performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Various Wire Gauges Available
                        </h3>
                        <p className="text-gray-600">
                          Multiple gauge options to suit different weaving
                          requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">Flexible Length Range</h3>
                        <p className="text-gray-600">
                          Available from 100 mm to 1000 mm lengths
                        </p>
                      </div>
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
              <Card className="shadow-xl border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#da222a]">
                    Nickel Plating Benefits
                  </CardTitle>
                  <CardDescription>
                    Superior finish and protection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">Lustrous Finish</h3>
                        <p className="text-gray-600">
                          Professional appearance with excellent surface quality
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">Homogeneous Deposit</h3>
                        <p className="text-gray-600">
                          Uniform coating for consistent performance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Better Corrosion Resistance
                        </h3>
                        <p className="text-gray-600">
                          Extended lifespan in demanding environments
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Wire Gauge Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Wire Gauge Chart
                </CardTitle>
                <CardDescription>
                  Standard Wire Gauge (SWG) specifications and corresponding
                  diameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          SWG
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Diameter (mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {wireGaugeChart.map((gauge, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {gauge.swg}
                          </TableCell>
                          <TableCell>{gauge.diameter}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}

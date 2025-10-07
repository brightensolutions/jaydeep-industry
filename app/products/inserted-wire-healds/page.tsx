"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export default function InsertedWireHealdsPage() {
  const wireGauges = [
    { type: "O Series", size: "25", length: "330mm" },
    { type: "O Series", size: "28", length: "280mm" },
    { type: "H Series", size: "30", length: "260mm" },
  ];

  const oSeriesMailEyes = [
    { length: "100mm", type: "Round" },
    { length: "120mm", type: "Oval" },
    { length: "150mm", type: "Round" },
  ];

  const hSeriesMailEyes = [
    { length: "80mm", type: "Round" },
    { length: "100mm", type: "Oval" },
    { length: "130mm", type: "Round" },
  ];

  const loopTypes = [
    { type: "Double Loop", feature: "Increased durability" },
    { type: "Single Loop", feature: "Economical and easy fitting" },
  ];

  // ✅ Cleaned wire specs
  const largeWireSpecs = [
    { swg: "5¼", diaInch: "0.207", diaMM: "5.26", wtPer100M: "99.23" },
    { swg: "5/2", diaInch: "0.131", diaMM: "3.33", wtPer100M: "8.90" },
    { swg: "13", diaInch: "0.086", diaMM: "2.18", wtPer100M: "5.13" },
    { swg: "22", diaInch: "0.028", diaMM: "0.71", wtPer100M: "0.31" },
    { swg: "8.5", diaInch: "0.165", diaMM: "4.19", wtPer100M: "5.00" },
    { swg: "13.75", diaInch: "0.093", diaMM: "2.36", wtPer100M: "0.83" },
    { swg: "24", diaInch: "0.022", diaMM: "0.56", wtPer100M: "0.21" },
    { swg: "18.4", diaInch: "0.048", diaMM: "1.22", wtPer100M: "0.43" },
    { swg: "13.4", diaInch: "0.092", diaMM: "2.34", wtPer100M: "0.25" },
    { swg: "10.4", diaInch: "0.128", diaMM: "3.25", wtPer100M: "0.94" },
    { swg: "16.4", diaInch: "0.064", diaMM: "1.63", wtPer100M: "0.31" },
    { swg: "20.4", diaInch: "0.036", diaMM: "0.91", wtPer100M: "0.36" },
    { swg: "18.5", diaInch: "0.048", diaMM: "1.22", wtPer100M: "0.64" },
    { swg: "22.5", diaInch: "0.028", diaMM: "0.71", wtPer100M: "0.22" },
  ];

  return (
    <>
      <PageHeroTitle
        title="Inserted Wire Healds"
        description="With Groz-Beckert Mail Eyes - Premium quality healds with multiple loop configurations"
        themeColor="red"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Wire Gauges Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Wire Gauges
                </CardTitle>
                <CardDescription>
                  Various O and H series heald wire gauges and lengths
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Length</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {wireGauges.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.size}</TableCell>
                          <TableCell>{item.length}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* O-Series Mail Eyes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  O-Series Mail Eyes
                </CardTitle>
                <CardDescription>
                  Length and type of mail eyes available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Length</TableHead>
                        <TableHead>Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {oSeriesMailEyes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.length}</TableCell>
                          <TableCell>{item.type}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* H-Series Mail Eyes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  H-Series Mail Eyes
                </CardTitle>
                <CardDescription>
                  Length and type of mail eyes available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Length</TableHead>
                        <TableHead>Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hSeriesMailEyes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.length}</TableCell>
                          <TableCell>{item.type}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Loop Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Loop Types
                </CardTitle>
                <CardDescription>Available loop configurations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Feature</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loopTypes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.feature}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ✅ Wire Specification Table (Cleaned) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Wire Specifications
                </CardTitle>
                <CardDescription>
                  SWG, Diameter, and Weight per 100M
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>SWG No.</TableHead>
                        <TableHead>Dia (inch)</TableHead>
                        <TableHead>Dia (MM)</TableHead>
                        <TableHead>Wt. per 100M (kg)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {largeWireSpecs.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.swg}</TableCell>
                          <TableCell>{item.diaInch}</TableCell>
                          <TableCell>{item.diaMM}</TableCell>
                          <TableCell>{item.wtPer100M}</TableCell>
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

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

export default function InsertedWireHealdsPage() {
  const wireGauges = [
    { gauge: "swg 18", diameter: "1.219 mm" },
    { gauge: "swg 20", diameter: "0.914 mm" },
    { gauge: "swg 22", diameter: "0.711 mm" },
    { gauge: "swg 24", diameter: "0.558 mm" },
    { gauge: "swg 27", diameter: "0.416 mm" },
    { gauge: "swg 30", diameter: "0.314 mm" },
    { gauge: "swg 32", diameter: "0.274 mm" },
    { gauge: "swg 34", diameter: "0.233 mm" },
  ];

  const oSeriesMailEyes = [
    { refNo: "O-1", innerDimension: "3.0 × 1.2" },
    { refNo: "O-2", innerDimension: "3.7 × 1.5" },
    { refNo: "O-3", innerDimension: "4.0 × 1.5" },
    { refNo: "O-4", innerDimension: "4.0 × 1.7" },
    { refNo: "O-5", innerDimension: "4.5 × 1.7" },
    { refNo: "O-6", innerDimension: "5.0 × 1.7" },
  ];

  const hSeriesMailEyes = [
    { refNo: "H-1", innerDimension: "3.0 × 1.2" },
    { refNo: "H-2", innerDimension: "5.0 × 1.3" },
    { refNo: "H-3", innerDimension: "6.0 × 1.5" },
    { refNo: "H-4", innerDimension: "6.5 × 2.0" },
    { refNo: "H-5", innerDimension: "7.5 × 3.0" },
    { refNo: "H-6", innerDimension: "8.0 × 2.0" },
    { refNo: "H-7", innerDimension: "8.0 × 2.8" },
    { refNo: "H-8", innerDimension: "11.5 × 3.5" },
    { refNo: "H-9", innerDimension: "13.0 × 4.0" },
  ];

  const switzerlandMailEyes = [
    { refNo: "1010 R", dimension: "2.6 × 0.9 mm" },
    { refNo: "1020 R", dimension: "4.0 × 1.5 mm" },
    { refNo: "355 R", dimension: "5.2 × 2.3 mm" },
    { refNo: "385 R", dimension: "6.0 × 3.4 mm" },
    { refNo: "390 R", dimension: "8.0 × 4.2 mm" },
    { refNo: "450 R", dimension: "10.0 × 6.3 mm" },
    { refNo: "360 R", dimension: "5.5 × 1.5 mm" },
    { refNo: "373 R", dimension: "7.1 × 1.6 mm" },
    { refNo: "1015 R", dimension: "3.2 × 1.3 mm" },
    { refNo: "328 R", dimension: "4.2 × 2.3 mm" },
    { refNo: "380 R", dimension: "5.6 × 2.7 mm" },
    { refNo: "1080 R", dimension: "6.6 × 3.9 mm" },
    { refNo: "420 R", dimension: "9.0 × 4.8 mm" },
    { refNo: "480 R", dimension: "13.5 × 7.5 mm" },
    { refNo: "370 R", dimension: "6.0 × 1.5 mm" },
    { refNo: "395 R", dimension: "8.3 × 2.5 mm" },
  ];

  const loopTypes = [
    { name: "Oblong Loops", length: "5-8 mm", width: "15-25 mm" },
    { name: "Jacquard - Upper Oblong", length: "4.0 mm", width: "2.0 mm" },
    { name: "Round Jacquard", length: "2.5-10.0 mm", width: "-" },
    {
      name: "Open End Loops",
      length: "-",
      width: "-",
      shape: "'C' / 'J' Shaped",
    },
  ];

  return (
    <>
      <PageHeroTitle
        title="Inserted Wire Healds"
        description="With Groz-Beckert Mail Eyes - Premium quality healds with multiple loop configurations"
        themeColor="red"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-red-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <motion.div
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
                Groz-Beckert Quality
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Multiple Loop Types
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                O & H Series
              </Badge>
            </div>
          </motion.div> */}

          {/* Wire Gauges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-8"
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Wire Gauges
                </CardTitle>
                <CardDescription>
                  Available SWG and corresponding diameter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold text-[#da222a]">
                        Wire Gauge
                      </TableHead>
                      <TableHead className="font-semibold text-[#da222a]">
                        Diameter
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {wireGauges.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.gauge}</TableCell>
                        <TableCell>{item.diameter}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>

          {/* O & H Series Mail Eyes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 mb-8"
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  &apos;O&apos; Series Mail Eyes
                </CardTitle>
                <CardDescription>
                  Standard O-series specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          Ref. No
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Inner Dimension (mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {oSeriesMailEyes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.refNo}</TableCell>
                          <TableCell>{item.innerDimension}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  &apos;H&apos; Series Mail Eyes
                </CardTitle>
                <CardDescription>
                  Heavy-duty H-series specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          Ref. No
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Inner Dimension (mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hSeriesMailEyes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.refNo}</TableCell>
                          <TableCell>{item.innerDimension}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Switzerland Inserted Bracker Mail Eyes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mb-8"
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Switzerland Inserted Bracker Mail Eyes
                </CardTitle>
                <CardDescription>
                  Various specifications with inner dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          Ref. No
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Inner Dimension (mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {switzerlandMailEyes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.refNo}</TableCell>
                          <TableCell>{item.dimension}</TableCell>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Loop Types
                </CardTitle>
                <CardDescription>
                  Available loop configurations with dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          Loop Type
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Length (mm)
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Width (mm)
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Shape
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loopTypes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.length}</TableCell>
                          <TableCell>{item.width || "-"}</TableCell>
                          <TableCell>{item.shape || "-"}</TableCell>
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

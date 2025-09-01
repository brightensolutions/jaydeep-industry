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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Card className="mb-8 shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Available Loop Types
                </CardTitle>
                <CardDescription>
                  Comprehensive range of loop configurations for different
                  applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Round Loops
                    </h3>
                    <p className="text-gray-600">
                      Standard circular configuration
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Open End Loops
                    </h3>
                    <p className="text-gray-600">For riderless heald frames</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Crimp Type
                    </h3>
                    <p className="text-gray-600">Enhanced grip configuration</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Oblong Loops
                    </h3>
                    <p className="text-gray-600">
                      Elongated design for specific applications
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-lg mb-2 text-[#da222a]">
                      Arrow Type
                    </h3>
                    <p className="text-gray-600">Directional configuration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  &apos;O&apos; Series Mail Eyes
                </CardTitle>
                <CardDescription>
                  Standard O-series specifications with inner dimensions
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
                          <TableCell className="font-medium">
                            {item.refNo}
                          </TableCell>
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
                  Heavy-duty H-series specifications with inner dimensions
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
                          <TableCell className="font-medium">
                            {item.refNo}
                          </TableCell>
                          <TableCell>{item.innerDimension}</TableCell>
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

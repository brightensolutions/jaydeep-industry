"use client";

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageHeroTitle from "@/components/page-hero-title";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function TwinWireHealdsPage() {
  const wireGaugeChart = [
    { swg: "18", diameter: "1.219" }, { swg: "20", diameter: "0.914" },
    { swg: "22", diameter: "0.711" }, { swg: "24", diameter: "0.558" },
    { swg: "27", diameter: "0.416" }, { swg: "30", diameter: "0.315" },
    { swg: "32", diameter: "0.274" }, { swg: "34", diameter: "0.234" },
  ];

  const mailEyesGroups = [
    {
      title: "O Type — Standard Range",
      data: [
        { no: "1010 R", thickness: "0.3 / 0.4", inner: "2.6 x 2.9", image: "/1010.jpg" },
        { no: "1015 R", thickness: "0.35 / 0.5 / 0.4", inner: "3.2 x 1.3", image: "/1015.jpg" },
        { no: "1020 R", thickness: "0.35 / 0.5", inner: "4.0 x 1.5", image: "/1020.jpg" },
        { no: "328 R", thickness: "0.5 / 0.9", inner: "4.2 x 2.3", image: "/328.jpg" },
        { no: "355 R", thickness: "0.55 / 0.8", inner: "5.2 x 2.3", image: "/355.jpg" },
        { no: "380 R", thickness: "0.6 / 0.8 / 1.2", inner: "5.6 x 2.7", image: "/380.jpg" },
        { no: "385 R", thickness: "0.7 / 1.0", inner: "6.2 x 3.4", image: "/385.jpg" },
        { no: "1080 R", thickness: "0.8 / 1.2", inner: "6.6 x 3.9", image: "/1080.jpg" },
        { no: "390 R", thickness: "1.0 / 1.4", inner: "8.0 x 4.2", image: "/390.jpg" },
        { no: "420 R", thickness: "1.0 / 1.4", inner: "9.0 x 4.8", image: "/420.jpg" },
        { no: "450 R", thickness: "1.4", inner: "10.0 x 6.3", image: "/450.jpg" },
        { no: "480 R", thickness: "1.5", inner: "13.5 x 7.5", image: "/480.jpg" },
      ],
    },
    {
      title: "O Type — Special Oval Range",
      data: [
        { no: "2810 R", thickness: "0.4", inner: "2.8 x 1.2", image: "/2810.jpg" },
        { no: "3012 R", thickness: "0.4 / 0.45", inner: "3.0 x 1.2", image: "/3012.jpg" },
        { no: "3214 R", thickness: "0.4", inner: "3.2 x 1.4", image: "/314.jpg" },
        { no: "3815 R", thickness: "0.4", inner: "3.8 x 1.5", image: "/3815.jpg" },
        { no: "6740 R", thickness: "1.4", inner: "6.7 x 4.0", image: "/6740.jpg" },
        { no: "8142 R", thickness: "1.4", inner: "8.1 x 4.2", image: "/8142.jpg" },
      ],
    },
    {
      title: "C Type — Heavy Range",
      data: [
        { no: "100 C", thickness: "2.2", inner: "12.0", image: "/100.jpg" },
        { no: "140 C", thickness: "2.2", inner: "7.5 x 4.0", image: "/140.jpg" },
        { no: "150 C", thickness: "2.2", inner: "10.0 x 6.0", image: "/150.jpg" },
        { no: "160 C", thickness: "2.2", inner: "13.5 x 7.5", image: "/160.jpg" },
        { no: "200 C", thickness: "2.2", inner: "19.0 x 11.0", image: "/200.jpg" },
      ],
    },
    {
      title: "O Type — Flat Slot Range",
      data: [
        { no: "360 R", thickness: "0.4 / 0.55", inner: "5.5 x 1.2", image: "/360.jpg" },
        { no: "370 R", thickness: "0.6", inner: "6.0 x 1.5", image: "/370.jpg" },
        { no: "395 R", thickness: "1.0", inner: "8.3 x 2.5", image: "/395.jpg" },
        { no: "440 R", thickness: "1.0", inner: "10.5 x 2.8", image: "/440.jpg" },
        { no: "8040 R", thickness: "1.0 / 1.2", inner: "8.0 x 4.0", image: "/8040.jpg" },
        { no: "1340 R", thickness: "1.0", inner: "13.0 x 4.0", image: "/1340.jpg" },
      ],
    },
    {
      title: "O Type — Gauge Series",
      data: [
        { no: "31 / 0", thickness: "0.5", inner: "3.1", image: "/31.jpg" },
        { no: "50 / 0", thickness: "0.8 / 1.4 / 1.6", inner: "5.0", image: "/50.jpg" },
        { no: "65 / 0", thickness: "1.4", inner: "6.5", image: "/65.jpg" },
        { no: "80 / 0", thickness: "1.4", inner: "8.0", image: "/80.jpg" },
        { no: "100 / 0", thickness: "1.6", inner: "10.0", image: "/100.jpg" },
      ],
    },
    {
      title: "SR Type — Slot Range",
      data: [
        { no: "312 SR", thickness: "0.4 / 0.45", inner: "3.0 x 1.2", image: "/312-SR.jpg" },
        { no: "518 SR", thickness: "0.45", inner: "5.0 x 1.8", image: "/518.jpg" },
      ],
    },
  ];

  return (
    <div className="font-heading bg-white min-h-screen">
      <PageHeroTitle
        title="Twisted Twin Wire Healds"
        description="High-performance weaving accessories manufactured to absolute international standards."
        themeColor="red"
      />

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

          {/* 01: PRODUCT SUMMARY */}
          <div className="grid lg:grid-cols-12 gap-8 items-center mb-10 lg:mb-16">
            <div className="lg:col-span-5 relative aspect-square lg:aspect-[4/3] bg-gray-50 border border-gray-200 overflow-hidden group">
              <Image
                src="/w-tween.jpeg"
                alt="Twin Inserted Twisted Wire Healds"
                fill
                className="object-cover hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            <div className="lg:col-span-7 border-l-[6px] border-[#da222a] pl-6 lg:pl-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 mb-6 leading-none">
                Engineering <br /> Specifications.
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-bold max-w-4xl italic">
                Jaydeep Industries produces premium Twin Inserted Twisted Wire
                Healds utilizing high-tensile materials and specialized nickel
                plating.
              </p>
            </div>
          </div>

          {/* 02: TECHNICAL CHARACTERISTICS & GAUGE CHART */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gray-50 border-t-[4px] border-gray-900 flex flex-col justify-center shadow-sm">
              <h3 className="text-sm font-black uppercase text-gray-900 mb-6 tracking-widest">Manufacturing Range</h3>
              <ul className="space-y-4">
                {[{ label: "Wire Gauges", val: "SWG 18 – 34" }, { label: "Standard Lengths", val: "100 mm – 1000 mm" }, { label: "Surface Treatment", val: "Nickel Plated", red: true }].map((spec, i) => (
                  <li key={i} className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">{spec.label}</span>
                    <span className={`font-black text-base ${spec.red ? "text-[#da222a]" : "text-gray-900"}`}>{spec.val}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 border border-gray-200 bg-white overflow-hidden shadow-md">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow className="h-12">
                    {[1, 2].map((x) => (
                      <React.Fragment key={x}>
                        <TableHead className="text-xs font-black text-gray-900 uppercase px-6">SWG</TableHead>
                        <TableHead className="text-xs font-black text-gray-900 uppercase px-6 border-r">Dia (mm)</TableHead>
                      </React.Fragment>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[0, 1, 2, 3].map((i) => (
                    <TableRow key={i} className="h-12 border-b last:border-0 hover:bg-gray-50">
                      <TableCell className="font-bold text-gray-400 text-sm px-6 border-r">{wireGaugeChart[i].swg}</TableCell>
                      <TableCell className="font-black text-base px-6 border-r italic text-gray-900">{wireGaugeChart[i].diameter}</TableCell>
                      <TableCell className="font-bold text-gray-400 text-sm px-6 border-r">{wireGaugeChart[i + 4].swg}</TableCell>
                      <TableCell className="font-black text-base px-6 italic text-gray-900">{wireGaugeChart[i + 4].diameter}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* 03: MAIL EYES PRODUCT RANGE - With Larger Oval Images */}
          <div className="space-y-8">
            <h3 className="text-3xl font-black uppercase text-gray-900 tracking-tighter border-b-2 border-gray-900 pb-2">
              Mail Eyes <span className="text-[#da222a]">Product Range.</span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16 items-start">
              {mailEyesGroups.map((group, gi) => (
                <div key={gi} className="space-y-4">
                  {/* <h4 className="text-sm font-black uppercase text-gray-400 tracking-[0.3em] flex items-center gap-3">
                    <div className="w-6 h-[2px] bg-gray-200" /> {group.title}
                  </h4> */}
                  <div className="border border-gray-200 bg-white shadow-md overflow-hidden rounded-sm">
                    <Table>
                      <TableHeader className="bg-gray-50 h-12">
                        <TableRow>
                          <TableHead className="text-xs font-black uppercase border-r px-4 text-gray-900 text-center w-32">Mail Eye</TableHead>
                          <TableHead className="text-xs font-black uppercase border-r px-4 text-gray-900">No.</TableHead>
                          <TableHead className="text-xs font-black uppercase border-r px-4 text-gray-900">Thick (mm)</TableHead>
                          <TableHead className="text-xs font-black uppercase px-4 text-gray-900">Inner Ø (mm)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {group.data.map((item: any, index: number) => (
                          <TableRow key={index} className="group hover:bg-red-50/20 h-20 transition-colors border-b last:border-0">
                            <TableCell className="px-2 border-r text-center">
                              <div className="relative w-20 h-16 mx-auto overflow-visible">
                                <Image
                                  src={item.image}
                                  alt={`Mail eye ${item.no}`}
                                  fill
                                  className="object-scale-down scale-110"
                                  sizes="80px"
                                  style={{ objectFit: 'scale-down' }}
                                />
                              </div>
                            </TableCell>
                            <TableCell className="font-black text-sm md:text-base border-r px-4 text-gray-900">{item.no}</TableCell>
                            <TableCell className="font-bold text-gray-500 text-sm border-r px-4">{item.thickness}</TableCell>
                            <TableCell className="font-black text-sm md:text-base px-4 whitespace-nowrap text-gray-900">
                              {item.inner} <span className="text-xs font-normal text-gray-400 ml-1">mm</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
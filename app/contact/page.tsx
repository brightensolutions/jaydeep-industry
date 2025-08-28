"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PageHeroTitle from "@/components/page-hero-title"; // New import

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeroTitle
        title="Contact Us"
        description="Get in touch with Jaydeep Industries for inquiries, support, or partnerships."
        themeColor="blue"
      />
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-to-r from-blue-100 to-blue-200 shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1a1a1a]">
              Contact Jaydeep Industries
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We are here to assist you with any inquiries, support, or
              partnerships you may need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Send Us a Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Failed to send message. Please try again.
                  </p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-[#da222a] focus:ring-[#da222a]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-[#da222a] focus:ring-[#da222a]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Inquiry about products"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-[#da222a] focus:ring-[#da222a]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-[#da222a] focus:ring-[#da222a]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full !bg-[#0066a4] hover:!bg-[#da222a] text-white font-bold rounded-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  Our Contact Details
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#da222a] flex-shrink-0" />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:info@jaydeep-industry.com"
                        className="text-[#0066a4] hover:underline"
                      >
                        info@jaydeep-industry.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#da222a] flex-shrink-0" />
                    <span>
                      Phone:{" "}
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="text-[#0066a4] hover:underline"
                      >
                        +91 9825311311
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#da222a] flex-shrink-0 mt-1" />
                    <span>
                      Address: D2/92-95, Bhagwati Nagar Industrial Estate, Near
                      Navjivan Automotive Showroom, Bhestan, Surat - 395023
                      (Gujarat) India
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  Business Hours
                </h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  Find Us on Map
                </h3>
                <div className="relative h-64 w-full bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Office Location Map"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

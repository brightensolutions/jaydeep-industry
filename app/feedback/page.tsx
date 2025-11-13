"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MessageSquare, Star, Lightbulb } from "lucide-react";
import PageHeroTitle from "@/components/page-hero-title";
import { useState } from "react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "General Feedback",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          type: "General Feedback",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <PageHeroTitle
        title="Feedback & Inquiry"
        description="Provide your feedback or send us an inquiry."
        themeColor="black"
      />
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-to-r from-black-100 to-black-200 shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold text-[#000000] mb-4">
              Your Feedback Matters to Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              At Jaydeep Industries, we are constantly striving to improve. Your
              feedback helps us enhance our products, services, and overall
              customer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left"
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Share Your Thoughts
              </h3>
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your feedback! We&apos;ll review it carefully.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Sorry, there was an error submitting your feedback. Please
                    try again.
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
                    className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
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
                    className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type of Feedback
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="block w-full p-3 border border-gray-300 rounded-lg focus:border-[#000000] focus:ring-[#000000] bg-white text-gray-700"
                  >
                    <option>General Feedback</option>
                    <option>Product Suggestion</option>
                    <option>Service Improvement</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
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
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  disabled={isSubmitting}
                  className="w-full !bg-[#da222a] hover:!bg-[#da222a]/90 !text-white font-bold !rounded-lg py-3"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 space-y-8"
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                Why Your Feedback is Important
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-8 w-8 text-[#da222a] flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a1a1a]">
                      Continuous Improvement
                    </h4>
                    <p className="text-gray-700">
                      Your insights directly contribute to the ongoing
                      refinement of our offerings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-[#da222a] flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a1a1a]">
                      Customer Satisfaction
                    </h4>
                    <p className="text-gray-700">
                      We use your comments to ensure our services meet and
                      exceed your expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-8 w-8 text-[#da222a] flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a1a1a]">
                      Innovation & Growth
                    </h4>
                    <p className="text-gray-700">
                      New ideas and suggestions help us innovate and expand our
                      capabilities.
                    </p>
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

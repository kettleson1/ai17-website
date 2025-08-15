import React from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

export default function Book() {
  const calendlyUrl = "https://calendly.com/jjkettleson/discovery-meeting"; // ← put your link here

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#E55C20] mb-4">Book a Meeting</h1>
        <p className="text-lg text-gray-600 mb-10">
          Pick a time that works for you. We’ll come prepared—
          <span className="font-medium"> AI from people with the hearts of a teacher.</span>
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="rounded-xl shadow-lg border border-gray-200 bg-white">
          <InlineWidget
            url={calendlyUrl}
            styles={{ width: "100%", height: "820px" }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "E55C20",
              textColor: "1f2937",
            }}
          />
        </div>

        {/* Fallback link */}
        <div className="text-center mt-6">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[#E55C20] hover:underline"
          >
            Trouble loading? Open Calendly in a new tab →
          </a>
        </div>
      </motion.div>
    </div>
  );
}
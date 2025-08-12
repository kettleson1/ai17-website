import React from "react";
import { motion } from "framer-motion";

export default function Book() {
  const calendlyUrl = "https://calendly.com/YOUR-CALENDLY-USERNAME/30min"; // ← replace

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#E55C20] mb-4">
          Book a Meeting
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Pick a time that works for you. We’ll come prepared to discuss your goals and
          how AI17 can help — <span className="font-medium">AI from people with the hearts of a teacher.</span>
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="820"
            frameBorder="0"
            title="Book a meeting"
            className="rounded-xl"
          />
        </div>

        {/* Fallback / alt link */}
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
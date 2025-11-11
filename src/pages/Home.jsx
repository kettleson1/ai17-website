import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-ai17.png";
import aiEngineeringImg from "../assets/ai-engineering-ai17.png";
import modelGovernanceImg from "../assets/model-governance-ai17.png";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">AI17</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Intrigrate AI into your business with people who have a teacher's heart.
          </p>
          <Link
            to="/book"
            className="bg-[#E55C20] text-white px-6 py-3 rounded-lg shadow hover:bg-[#d14f1b] transition"
          >
            Book a Meeting
          </Link>
        </motion.div>
      </section>

      {/* Value Props (animated) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">AI Engineering</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Custom AI development and integration tailored to your business goals —
              from automation and decisioning to better customer experiences.
            </p>
            <img
              src={aiEngineeringImg}
              alt="AI Engineering"
              className="rounded-lg shadow-lg w-full h-auto object-cover mt-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">AI Transformation</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Accelerate your organization's shift to AI-first operations — responsibly and at scale.
              We help you identify the right opportunities, align stakeholders, and build sustainably.
            </p>
            <img
              src={modelGovernanceImg}
              alt="AI Transformation"
              className="rounded-lg shadow-lg w-full h-auto object-cover mt-6"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
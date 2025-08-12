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
            AI from people with the hearts of a teacher.
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
              Custom AI model development and integration tailored to your business goals —
              from automation and decisioning to better customer experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Model Governance</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Documentation, validation, fairness testing, and oversight aligned to OCC, CFPB,
              and SEC expectations — built to scale with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive: AI Engineering (image left) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={aiEngineeringImg}
              alt="AI Engineering"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">AI Engineering</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Go from idea to production with pipelines, models, and APIs that perform.
              We design reliable systems and the MLOps to keep them healthy.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use‑case discovery & technical scoping</li>
              <li>LLMs, RAG, NLP, forecasting, and scoring models</li>
              <li>Data pipelines, evaluation, and observability</li>
              <li>Production deployment & ongoing optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep Dive: Model Governance (image right) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Model Governance</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Build trust in AI with clear documentation, explainability, and risk controls.
              We align your program to current regulatory expectations.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Model inventory, documentation, & audit trails</li>
              <li>Bias testing, scenario reviews, and challenger models</li>
              <li>Policies aligned to OCC, CFPB, SEC & more</li>
              <li>Monitoring, alerts, and human‑in‑the‑loop reviews</li>
            </ul>
          </div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={modelGovernanceImg}
              alt="Model Governance"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E55C20] text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Let’s build AI you can trust — and prove it to your regulators.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/book"
            className="bg-white text-[#E55C20] hover:bg-gray-100 font-semibold py-3 px-6 rounded-md"
          >
            Book a Meeting
          </Link>
          <Link
            to="/solutions"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-md border border-white/30"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Testimonials (continuous scrolling cards) */}
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by leaders in finance, insurance, and technology.
          </p>
        </div>

        {/* Duplicate rows for seamless loop */}
        <motion.div
          className="flex gap-6 w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={`t1-${i}`}
              className="w-[300px] bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-6 text-left shrink-0"
            >
              <p className="text-gray-700 mb-4">
                “AI17 helped us launch our first AI initiative with complete
                documentation and regulatory clarity.”
              </p>
              <p className="font-semibold text-gray-900">— Exec, FinTech Company</p>
            </div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={`t2-${i}`}
              className="w-[300px] bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-6 text-left shrink-0"
            >
              <p className="text-gray-700 mb-4">
                “From engineering to governance, their team delivered fast and safely.”
              </p>
              <p className="font-semibold text-gray-900">— Director, Regional Bank</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
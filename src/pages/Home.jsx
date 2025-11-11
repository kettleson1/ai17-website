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
              Go from idea to production — we seamlessly integrate AI into your business.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use‑case discovery & technical scoping</li>
              <li>Voice agents, chatbots, LLMs, RAG, NLP, forecasting, and scoring models</li>
              <li>Data pipelines, evaluation, and observability</li>
              <li>Production deployment & ongoing optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep Dive: AI Transformation (image right) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">AI Transformation</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Move beyond pilots to transform how work gets done. We partner with your teams to
              prioritize AI use cases, build the right operating model, and create adoption plans
              that deliver measurable business value.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use‑case discovery, value estimation, and prioritization</li>
              <li>Operating model, roles, and governance for responsible AI</li>
              <li>Data readiness, pipelines, and MLOps for reliable production models</li>
              <li>Model lifecycle, monitoring, and performance management</li>
              <li>Change management, training, and stakeholder adoption</li>
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
              alt="AI Transformation"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
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

        <motion.div
          className="flex gap-6 w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[
            { quote: "The chatbot on our site helps drive in business without guests needing to call the host stand. It’s like having a digital host available 24/7.", name: "Matt, Owner Holtz" },
            { quote: "The bot on our website answers customer questions on its own. It saves our staff time and keeps visitors engaged right on the site.", name: "Miguel" },
            { quote: "Since adding the chatbot, our reservation requests have doubled. Guests love getting quick answers instead of waiting on hold.", name: "Sarah, Restaurant Manager" },
            { quote: "The chatbot takes care of the routine questions, so my team can focus on planning memorable events. It’s become part of our daily operations.", name: "Jasmine, Event Coordinator" },
            { quote: "I was skeptical at first, but the bot has reduced missed inquiries by over 50%. Customers get the info they need instantly.", name: "David, Small Business Owner" },
            { quote: "The chatbot doesn’t just answer questions—it guides visitors into bookings. It’s like having a smart sales assistant on the website.", name: "Lena, Marketing Director" }
          ].map((testimonial, idx) => (
            <div key={idx} className="w-[300px] bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-6 text-left shrink-0">
              <p className="text-gray-700 mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#E55C20] text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Bring Your AI Vision to Life</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Whether you're just starting or ready to scale, we're here to help you navigate the AI journey with confidence and clarity.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#E55C20] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
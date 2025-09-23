import React from 'react';

const Solutions = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        AI Engineering Solutions
      </h1>

      <p className="text-center text-lg text-gray-700 mb-12">
        We build secure, documented, and scalable GenAI applications—no vendor lock-in, no black-box magic.
      </p>

      {/* AI Engineering Packages */}
      <section className="space-y-16">
        {/* Package 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">💡 Starter: LLM Launch Kit – $4,950</h2>
          <p className="text-gray-700 mb-2">Best for startups or teams launching their first GenAI product.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>RAG app setup with OpenAI or Anthropic</li>
            <li>Vector DB integration (Pinecone, Weaviate, etc.)</li>
            <li>Prompt tuning + retrieval flow</li>
            <li>Basic model card + usage log template</li>
            <li>1-hour handoff & walkthrough</li>
          </ul>
          <p className="text-sm text-gray-500">Delivered in 5–7 business days via GitHub or Notion.</p>
        </div>

        {/* Package 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">🏗️ Pro: GPT Agent Builder – $6,500+</h2>
          <p className="text-gray-700 mb-2">Best for businesses wanting fully custom AI agents with tools and memory.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Custom planner + tool-based agent logic</li>
            <li>Streaming UI or React frontend</li>
            <li>Memory layer + fallback controls</li>
            <li>Audit trail + logging setup</li>
            <li>Agent documentation (Notion + PDF)</li>
          </ul>
          <p className="text-sm text-gray-500">Optional add-ons: Whisper voice input, webhook actions, third-party APIs.</p>
        </div>

        {/* Package 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">🧱 Enterprise: AI Stack Deployment – $12,500+</h2>
          <p className="text-gray-700 mb-2">Best for teams building production-grade AI infrastructure.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Secure LLM API gateway + containerized architecture</li>
            <li>LangChain or LlamaIndex pipeline</li>
            <li>Prompt versioning + rollback</li>
            <li>Observability with LangSmith / OpenTelemetry</li>
            <li>Documentation + admin dashboard</li>
          </ul>
          <p className="text-sm text-gray-500">Fully deployable to AWS, GCP, Azure. SOC2-lite pattern available.</p>
        </div>

        {/* Package 4 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">📋 AI Model Audit & Documentation – $2,000</h2>
          <p className="text-gray-700 mb-2">For teams needing model clarity and compliance structure.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Model card + version history</li>
            <li>Traceability map for inputs/outputs</li>
            <li>Risk log + recommendations memo</li>
            <li>Deployment checklist</li>
          </ul>
          <p className="text-sm text-gray-500">Turnaround in 3–5 business days.</p>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href="https://ai17.jimkettleson.com/book"
            className="inline-block bg-[#F79C1F] hover:bg-[#e68a0e] text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Book Your Free AI Consult →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
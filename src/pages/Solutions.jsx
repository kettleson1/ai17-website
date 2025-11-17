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
          <h2 className="text-2xl font-semibold mb-2">💡 Starter: LLM Launch Kit – $917</h2>
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
          <h2 className="text-2xl font-semibold mb-2">🏗️ Pro: GPT Agent Builder – $2,417+</h2>
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
          <h2 className="text-2xl font-semibold mb-2">🧱 Enterprise: AI Stack Deployment – $12,417+</h2>
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

        {/* Package 5 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">🚀 AI Transformation Consulting – $22,417</h2>
          <p className="text-gray-700 mb-2">Full-stack advisory for executives driving organization-wide AI adoption.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Executive workshop to align GTM, ops, and data stakeholders</li>
            <li>AI roadmap with prioritized initiatives, ROI forecast, and quick wins</li>
            <li>Technical reference architecture covering data estate, models, and guardrails</li>
            <li>Change-management kit: playbooks, training paths, and governance checklist</li>
            <li>90-day action plan plus bi-weekly advisory calls for implementation support</li>
          </ul>
          <p className="text-sm text-gray-500">Ideal for scaleups modernizing whole business units with AI.</p>
        </div>

        {/* AI Transformation Section */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col gap-4">
            <p className="uppercase text-sm tracking-[0.3em] text-[#F79C1F]">AI Transformation</p>
            <h2 className="text-3xl font-semibold">Modernize every layer of your business.</h2>
            <p className="text-gray-200">
              Partner with our team to move from experimentation to operational impact. We guide leaders through
              strategy, architecture, and enablement so AI becomes a durable capability instead of a one-off pilot.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">1. Diagnose & Align</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Executive workshops to prioritize value pools</li>
                <li>Data, governance, and risk assessments</li>
                <li>North-star KPI + ROI modeling</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">2. Build the Stack</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Reference architectures and security guardrails</li>
                <li>LLM + data foundation with observability baked in</li>
                <li>Playbooks for delivery pods and vendor selection</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">3. Enable & Scale</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Change-management kits and training paths</li>
                <li>Ops dashboards + guardrail monitoring</li>
                <li>90-day execution scorecard with coaching</li>
              </ul>
            </div>
          </div>
        </section>

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

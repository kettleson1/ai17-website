import React from "react";
import { motion } from "framer-motion";

const items = [
  { name: "Model Inventory (CSV)", file: "/templates/model-inventory.csv", desc: "Central register for all AI/ML models." },
  { name: "Model Risk Assessment (DOCX)", file: "/templates/model-risk-assessment.docx", desc: "Qualitative + quantitative risk scoring." },
  { name: "Validation Plan (DOCX)", file: "/templates/validation-plan.docx", desc: "Scope, tests, evidence checklist." },
  { name: "Monitoring Plan (DOCX)", file: "/templates/monitoring-plan.docx", desc: "Metrics, thresholds, alerts & HIL." },
  { name: "Change Log (XLSX)", file: "/templates/model-change-log.xlsx", desc: "Versioning & approvals trace." },
  { name: "AI Use Case Charter (DOCX)", file: "/templates/ai-use-case-charter.docx", desc: "Business objective & control mapping." },
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#E55C20]">Model Governance Templates</h1>
        <p className="text-gray-600 text-lg mt-2">
          Download ready-to-use templates to document, validate, and monitor your AI models.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {items.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-gray-600 text-sm mt-2 flex-1">{t.desc}</p>
            <a
              href={t.file}
              download
              className="mt-4 inline-flex items-center justify-center rounded-md border border-[#E55C20] text-[#E55C20] px-4 py-2 font-medium hover:bg-[#E55C20] hover:text-white transition"
            >
              Download
            </a>
          </div>
        ))}
      </motion.div>

      <div className="max-w-5xl mx-auto text-center mt-10 text-gray-500">
        Don’t see a format you need? <a href="/contact" className="text-[#E55C20] hover:underline">Contact us</a> for a custom version.
      </div>
    </div>
  );
}
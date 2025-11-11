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
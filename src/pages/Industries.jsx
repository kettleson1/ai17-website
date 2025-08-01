const Industries = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Industries We Serve
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We specialize in helping regulated and risk-conscious organizations harness AI
        safely and strategically. Whether you’re a bank, insurer, hospital system, or
        growth-stage business — we bring domain expertise to every engagement.
      </p>

      {/* Grid of Industries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Banking */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Banking</h2>
          <p className="text-gray-600">
            From credit risk and marketing to collections and fraud — we help banks apply AI
            under strict regulatory scrutiny while improving profitability.
          </p>
        </div>

        {/* Insurance */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Insurance</h2>
          <p className="text-gray-600">
            Improve underwriting, claims triage, and fraud detection with compliant AI models
            tailored to P&C, life, and health insurance.
          </p>
        </div>

        {/* Healthcare */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Healthcare</h2>
          <p className="text-gray-600">
            We assist healthcare organizations with responsible AI to support care delivery,
            resource planning, and administrative automation — all while respecting HIPAA and
            ethical guidelines.
          </p>
        </div>

        {/* General Business */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">General Business</h2>
          <p className="text-gray-600">
            We partner with SMBs and mid-sized firms to deploy AI in sales, customer service,
            finance, and operations — safely and affordably.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded hover:bg-indigo-700 transition"
        >
          Let’s Talk About Your Industry
        </a>
      </div>
    </div>
  );
};

export default Industries;
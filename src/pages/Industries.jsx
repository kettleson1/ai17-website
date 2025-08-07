const Industries = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Industries We Serve
      </h1>

      <p className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
        We specialize in helping regulated and risk-conscious organizations harness AI
        safely and strategically. Whether you’re a bank, insurer, healthcare provider,
        or scaling business — we bring domain expertise to every engagement.
      </p>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Banking</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            From credit risk and marketing to collections and fraud — we help banks apply AI
            under strict regulatory scrutiny while improving profitability.
          </p>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Insurance</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Improve underwriting, claims triage, and fraud detection with compliant AI models
            tailored to P&C, life, and health insurance.
          </p>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Healthcare</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We assist healthcare organizations with responsible AI to support care delivery,
            resource planning, and administrative automation — all while respecting HIPAA and
            ethical guidelines.
          </p>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">General Business</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We partner with SMBs and mid-sized firms to deploy AI in sales, customer service,
            finance, and operations — safely and affordably.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a
          href="/contact"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-primary/90 transition"
        >
          Let’s Talk About Your Industry
        </a>
      </div>
    </div>
  );
};

export default Industries;
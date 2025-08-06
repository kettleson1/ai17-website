const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          AI for Profit + Compliance
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Helping businesses harness AI to drive growth while maintaining risk control and regulatory compliance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">AI Engineering</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Custom AI model development and integration tailored to your business goals.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Model Governance</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Documentation, validation, and oversight controls that meet OCC, CFPB, and SEC expectations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Regulatory Compliance</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ongoing AI model risk monitoring for regulated industries like banking and insurance.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-indigo-50 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">Ready to get started?</h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Let’s build AI you can trust — and prove it to your regulators.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
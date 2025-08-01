const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI for Profit + Compliance
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
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
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
          <p className="text-gray-600">
            Custom AI model development and integration tailored to your business goals.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Model Governance</h3>
          <p className="text-gray-600">
            Documentation, validation, and oversight controls that meet OCC, CFPB, and SEC expectations.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
          <p className="text-gray-600">
            Ongoing AI model risk monitoring for regulated industries like banking and insurance.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-indigo-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-700 mb-6">
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
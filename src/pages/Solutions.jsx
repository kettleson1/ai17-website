const Solutions = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Our AI Solutions
      </h1>

      <div className="space-y-16">
        {/* Section: AI Engineering */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Engineering</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We design and deploy customized AI/ML models aligned with your business goals.
            Whether you're automating marketing, credit decisioning, fraud detection, or
            customer onboarding — we help you integrate AI seamlessly with your workflows
            and tech stack.
          </p>
        </section>

        {/* Section: Model Governance */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Model Risk & Governance</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We implement documentation, validation, and oversight protocols to meet
            expectations from OCC, CFPB, SEC, and other regulators. From model inventories
            to pre-launch checklists and bias audits — our governance framework is
            designed to scale.
          </p>
        </section>

        {/* Section: Compliance Monitoring */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Compliance Monitoring</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AI17 offers continuous risk monitoring, performance dashboards, drift alerts,
            and review workflows to ensure your models remain explainable, fair, and compliant
            — even after deployment.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-primary/90 transition"
        >
          Talk to an AI Risk Expert
        </a>
      </div>
    </div>
  );
};

export default Solutions;
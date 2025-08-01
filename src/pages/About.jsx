const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        About AI17
      </h1>

      {/* Mission Statement */}
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          AI17 exists to help businesses unlock the profit potential of AI while maintaining strong documentation, control, and governance — especially in regulated industries like banking and insurance.
        </p>
      </section>

      {/* Founder Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Founder</h2>
        <p className="text-gray-600 leading-relaxed">
          Jim Kettleson brings over 20 years of experience in financial services, credit risk, and data strategy. As a former senior leader at Discover, US Bank, and Citizens Bank, he led AI/ML integration across acquisition, marketing, and fraud. His passion lies in making AI both profitable and compliant — ensuring businesses can scale responsibly in today's evolving regulatory environment.
        </p>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h2>
        <ul className="space-y-4">
          <li>
            <strong className="text-indigo-600">Transparency:</strong>{' '}
            We believe AI models should be explainable to stakeholders and regulators alike.
          </li>
          <li>
            <strong className="text-indigo-600">Responsibility:</strong>{' '}
            AI isn’t just about automation — it’s about making ethical, fair, and traceable decisions.
          </li>
          <li>
            <strong className="text-indigo-600">Partnership:</strong>{' '}
            We act as an extension of your team — translating complex technical solutions into real business outcomes.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded hover:bg-indigo-700 transition"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default About;
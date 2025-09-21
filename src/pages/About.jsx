const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        About AI17
      </h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-12">
        AI17 helps businesses harness the power of artificial intelligence while ensuring
        responsible governance, regulatory compliance, and long-term business value. 
        We specialize in AI strategy, model risk management, and AI governance frameworks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To help organizations drive growth with AI while maintaining model accountability, fairness, and transparency — ensuring technology serves both profit and the public interest.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Difference
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We combine deep technical AI expertise with risk and regulatory insight. 
            That means your AI projects get off the ground — and stay in bounds with 
            your governance, audit, and compliance teams.
          </p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-primary/90 transition"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default About;
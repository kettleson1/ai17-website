import { motion } from 'framer-motion';
import heroImage from '../assets/hero-placeholder.jpg';
import aiEngineeringImg from '../assets/ai-engineering.jpg';
import modelGovernanceImg from '../assets/model-governance.jpg';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
  {/* Background Image */}
  <img
    src={heroImage}
    alt="AI17 Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Smarter AI, Safer Outcomes
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-2xl">
      AI from people with the hearts of a teacher. We help businesses build smarter models while staying fully compliant.
    </p>
    <div className="flex flex-col md:flex-row gap-4">
      <a
        href="/solutions"
        className="bg-[#F79C1F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e68f1b] transition"
      >
        Explore Solutions
      </a>
      <a
        href="/contact"
        className="bg-white text-[#F79C1F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Get In Touch
      </a>
    </div>
  </div>
</section>
      {/* Value Props */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">What We Do</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-md"
            >
              <h3 className="text-2xl font-semibold text-[#F79C1F] mb-2">AI Engineering</h3>
              <p className="text-gray-700">
                From strategy to deployment, we build robust, scalable AI solutions customized for
                your business.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-md"
            >
              <h3 className="text-2xl font-semibold text-[#F79C1F] mb-2">Model Governance</h3>
              <p className="text-gray-700">
                Ensure transparency, accountability, and regulatory compliance for all AI systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Engineering Deep Dive */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.img
            src={aiEngineeringImg}
            alt="AI Engineering"
            className="w-full md:w-1/2 rounded-lg shadow-md"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-[#F79C1F] mb-4">AI Engineering</h3>
            <p className="text-lg text-gray-700">
              Our engineers combine technical excellence and practical business insights to deliver
              production-grade AI applications. We support end-to-end lifecycle management,
              including strategy, development, testing, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Model Governance Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.img
            src={modelGovernanceImg}
            alt="Model Governance"
            className="w-full md:w-1/2 rounded-lg shadow-md"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-[#F79C1F] mb-4">Model Governance</h3>
            <p className="text-lg text-gray-700">
              We help you document, monitor, and manage AI models across your organization. Our
              solutions ensure audit-readiness, explainability, and adherence to regulatory
              expectations from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F79C1F] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let’s Build Trustworthy AI Together</h2>
          <p className="text-xl mb-8">
            From concept to compliance, AI17 is your partner in safe, strategic AI.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/solutions"
              className="bg-white text-[#F79C1F] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="bg-white text-[#F79C1F] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leaders in finance, insurance, and technology.
          </p>
        </div>

        <motion.div
          className="flex gap-6 w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-[300px] bg-gray-50 shadow-lg rounded-lg p-6 text-left shrink-0 border border-gray-200"
            >
              <p className="text-gray-700 mb-4">
                “AI17 helped us launch our first AI initiative with complete documentation and
                regulatory clarity.”
              </p>
              <p className="font-semibold text-gray-900">- Executive, FinTech Company</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
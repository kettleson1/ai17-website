const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        About AI17
      </h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-12">
        AI17 is an AI transformation and engineering studio. We design the roadmap, build the
        software, and guide teams through launch so your organization can scale AI into daily
        operations faster than piecemeal vendors or lone internal experiments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To unlock durable business value from AI initiatives by pairing bold transformation
            goals with pragmatic engineering. We exist to turn executive vision into working
            products, processes, and teams.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Difference
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Senior AI engineers, product leaders, and operators build side-by-side inside AI17
            squads. We partner from experimentation through deployment, embedding with your
            staff to transfer code, skills, and reliable delivery playbooks.
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

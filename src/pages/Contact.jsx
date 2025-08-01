const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Contact Us
      </h1>

      <p className="text-center text-gray-700 mb-12">
        Have a question about AI compliance, governance, or engineering? Want to book a
        consultation? Reach out using the form below or schedule a time with us directly.
      </p>

      {/* Contact Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            rows="5"
            placeholder="Tell us what you're looking for..."
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Optional: Calendly Embed */}
      {/* 
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Prefer to Book a Time?</h2>
        <iframe
          src="https://calendly.com/YOUR-USERNAME"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded shadow"
          title="Schedule with AI17"
        ></iframe>
      </div>
      */}
    </div>
  );
};

export default Contact;
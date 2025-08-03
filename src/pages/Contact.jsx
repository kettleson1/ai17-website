const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Contact Us
      </h1>

      <p className="text-center text-gray-700 mb-12">
        Have a question about AI compliance, governance, or engineering? Want to book a
        consultation? Reach out using the form below.
      </p>

      <form
        action="https://formspree.io/f/mgvzlqvn"
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_subject" value="New contact from AI17 website" />

        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
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
    </div>
  );
};

export default Contact;
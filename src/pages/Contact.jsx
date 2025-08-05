import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgvzlqvn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Contact Us
      </h1>

      {!submitted ? (
        <>
          <p className="text-center text-gray-700 mb-12">
            Have a question about AI compliance, governance, or engineering? Want to book a
            consultation? Reach out using the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            {error && (
              <p className="text-red-600 text-sm mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you!</h2>
          <p className="text-gray-700 mb-6">
            Your message has been sent. We’ll get back to you shortly.
          </p>
          <a
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Return to Homepage
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mgvzlqvn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Ready to explore how AI17 can help your business grow responsibly?
        Get in touch — we’d love to learn about your goals.
      </p>

      {status === "success" && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center font-medium">
          Thank you! Your message has been sent.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-100 text-red-800 p-4 rounded mb-6 text-center font-medium">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-primary text-white font-semibold py-2 px-6 rounded hover:bg-primary/90 transition w-full"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

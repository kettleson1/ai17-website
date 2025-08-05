const ThankYou = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your message has been received. We’ll get back to you shortly.
      </p>
      <a
        href="/"
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
      >
        Return to Homepage
      </a>
    </div>
  );
};

export default ThankYou;
import React from "react";

const Videos = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            AI17 Video Library
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Educational videos to help you understand AI Engineering, Governance, and Risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Q020C-Jw0o8"
                title="AI17 Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">The Five Must-Haves of an AI Governance Framework</h3>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ixt-4T6oxk4"
                title="AI17 Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">The 3 Lines of Defense in AI Risk</h3>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hkZO1Tg_B0Q"
                title="AI17 Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">How Banks Can Modernize AI Governance</h3>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NrkJLbn3dDE"
                title="AI17 Video 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">SR 11-7 & AI Model Risk – A Primer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
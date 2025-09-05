import React from "react";

const Videos = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/Q020C-Jw0o8",
    "https://www.youtube.com/embed/Ixt-4T6oxk4",
    "https://www.youtube.com/embed/hkZO1Tg_B0Q",
    "https://www.youtube.com/embed/NrkJLbn3dDE",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        AI17 YouTube Education Series
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videoUrls.map((url, index) => (
          <div key={index} className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src={url}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
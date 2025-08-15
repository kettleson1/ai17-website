import React from "react";
import { motion } from "framer-motion";

const YT = ({ id, title }) => (
  <div className="aspect-video w-full overflow-hidden rounded-xl shadow">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

export default function Videos() {
  // Put your real video IDs here
  const featured = { id: "dQw4w9WgXcQ", title: "AI17: Responsible AI in Practice" };
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Model Governance 101" },
    { id: "dQw4w9WgXcQ", title: "Building RAG Systems that Scale" },
    { id: "dQw4w9WgXcQ", title: "Monitoring & Drift: What Matters" },
    { id: "dQw4w9WgXcQ", title: "LLM Safety and Evaluations" },
    { id: "dQw4w9WgXcQ", title: "AI for Regulated Industries" },
    { id: "dQw4w9WgXcQ", title: "Documentation that Auditors Love" },
  ];

  const upcoming = [
    { date: "Sep 12, 2025", name: "Webinar: Building Audit-Ready AI", link: "#" },
    { date: "Oct 2, 2025", name: "Live Demo: Model Monitoring in 20m", link: "#" },
  ];

  const past = [
    { date: "Aug 1, 2025", name: "LLM Eval Playbook", link: "#" },
    { date: "Jul 15, 2025", name: "AI in Banking: Risks & Controls", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#E55C20]">AI17 on YouTube & Events</h1>
        <p className="text-gray-600 text-lg mt-2">
          Talks, demos, and education — AI from people with the hearts of a teacher.
        </p>
      </motion.div>

      {/* Featured */}
      <motion.div
        className="max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <YT id={featured.id} title={featured.title} />
          <div className="p-6">
            <h2 className="text-2xl font-semibold">{featured.title}</h2>
            <p className="text-gray-600 mt-2">
              A deep dive into how we engineer AI responsibly and make governance practical.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Video Grid */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Recent Videos</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow bg-white">
              <YT id={v.id} title={v.title} />
              <div className="p-4">
                <h4 className="font-medium text-gray-900">{v.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Events */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-12 lg:grid-cols-2">
        {/* Upcoming */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Upcoming Events</h3>
          <div className="space-y-3">
            {upcoming.map((e, i) => (
              <a
                key={i}
                href={e.link}
                className="flex items-center justify-between p-4 rounded-lg bg-white shadow hover:shadow-md transition"
              >
                <span className="text-gray-800">{e.name}</span>
                <span className="text-sm text-gray-500">{e.date}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Past */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Past Events</h3>
          <div className="space-y-3">
            {past.map((e, i) => (
              <a
                key={i}
                href={e.link}
                className="flex items-center justify-between p-4 rounded-lg bg-white shadow hover:shadow-md transition"
              >
                <span className="text-gray-800">{e.name}</span>
                <span className="text-sm text-gray-500">{e.date}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
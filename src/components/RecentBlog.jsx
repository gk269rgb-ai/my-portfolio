import React from "react";
import { Link } from "react-router-dom";

function RecentBlog() {
  // Example recent posts (you can map dynamically if needed)
  const recentPosts = [
    { title: "Real-Time Fault Detection in 220kV Transmission Lines using Deep Learning", slug: "real-time-fault-detection" },
    { title: "AI for Healthcare: Insomnia Detection from ECG Signals", slug: "insomnia-detection-ecg" },
  ];

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Recent Blogs
      </h2>

      <div className="space-y-3 mb-6">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block text-teal-600 dark:text-teal-400 hover:underline"
          >
            {post.title}
          </Link>
        ))}
      </div>

      {/* Smooth navigation to blog list page */}
      <Link
        to="/blog"
        className="inline-block px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
      >
        View All Blogs
      </Link>
    </section>
  );
}

export default RecentBlog;

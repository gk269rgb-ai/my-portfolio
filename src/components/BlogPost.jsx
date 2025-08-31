import React, { useState } from "react";

function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tags = ["All", "AI", "Robotics", "Power Systems", "Healthcare"];

  return (
    <div className="blog-container">
      <h1>Blog</h1>

      {/* Tag Filter */}
      <div className="tag-filter">
        {tags.map((tag) => (
          <button
            key={tag}
            className={activeTag === tag ? "active" : ""}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Placeholder for posts */}
      <div className="posts">
        <p>Blog content coming soon!</p>
      </div>
    </div>
  );
}

export default Blog;

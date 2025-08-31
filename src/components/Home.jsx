import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop solution for electrical goods and services.</p>

      {/* Recent Blog Section */}
      <section className="recent-blog">
        <h2>Recent Blog</h2>
        <div className="posts">
          <p>No recent posts yet. Blog content coming soon!</p>
        </div>
        <Link to="/blog">Go to Blog</Link>
      </section>
    </div>
  );
}

export default Home;

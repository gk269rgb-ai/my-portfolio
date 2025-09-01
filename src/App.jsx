import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Blog from "./components/Blog.jsx";
import BlogPost from "./components/BlogPost.jsx";
import RecentBlog from "./components/RecentBlog.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const recentPosts = [
    { title: "Real-Time Fault Detection in 220kV Transmission Lines using Deep Learning", slug: "real-time-fault-detection" },
    { title: "AI for Healthcare: Insomnia Detection from ECG Signals", slug: "insomnia-detection-ecg" },
  ];

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <RecentBlog recentPosts={recentPosts} />

              {/* Blog section inside Home */}
              <div id="blog-section">
                <Blog />
              </div>

              <Resume />
              <Contact />
            </>
          }
        />

        {/* ✅ Blog List Page (separate full blog page if needed) */}
        <Route path="/blog" element={<Blog />} />

        {/* ✅ Blog Detail Page */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* ✅ Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const blogPosts = [
  {
    slug: "real-time-fault-detection",
    title: "Fault Detection in 220kV Transmission Lines using Deep Learning",
    excerpt: "Explored deep learning models for classifying transmission line faults...",
  },
  {
    slug: "insomnia-detection-ecg",
    title: "AI for Healthcare: Insomnia Detection from ECG Signals",
    excerpt: "Developed Vision Transformer(ViT) models to classify insomnia patterns from ECG data...",
  },
  {
    slug: "ai-powered-content-creation",
    title: "AI-Powered Content Creation: Transforming Education",
    content: `
  # AI-Powered Content Creation: Transforming Education

  Artificial Intelligence (AI) is reshaping the educational landscape, making learning more **personalized, efficient, and engaging**.  
  Our AI-powered system generates high-quality practice problems, explanations, and interactive quizzes for high school mathematics and physics.

  ---

  ## Benefits for Students
  - **Personalized Learning**: Exercises tailored to each student’s level.  
  - **Instant Feedback**: Immediate solutions and hints.  
  - **Accessible Resources**: Learn anytime, anywhere.  

  **Impact Data**  
  - 📈 30% improvement in test scores.  
  - 💡 65% report more confidence in physics & trigonometry.  

  ---

  ## Benefits for Educators
  - **Time Efficiency**: Automates quiz & problem set creation.  
  - **Content Diversity**: Wide range of examples.  
  - **Focus on Teaching**: More time for mentoring.  

  **Impact Data**  
  - ⏳ 50% less time preparing study materials.  
  - 🎓 70% say AI tools boost student engagement.  

  ---

  ## Practical Examples
  - **Trigonometry Practice** *(Download PDF)*  
  - **Physics (Motion & NLM Concepts)** *(Download PDF)*  

  ---


  http://localhost:5173/files/ai_vstraditional.png
,

  ## Conclusion
  AI is **revolutionizing education** by making learning more **effective, engaging, and accessible**.
    `,
  },
  {
    slug: "digital-image-processing",
    title: "Digital Image Processing Project",
    excerpt: "Implemented image compression, transformations, filtering, and morphological processing...",
  },
  {
    slug: "human-following-robot",
    title: "Human Following Robot",
    excerpt: "Built an autonomous robot with vision + lidar for real-time human tracking...",
  },
  {
    slug: "home-automation",
    title: "Advanced Home Automation using Bluetooth Module",
    excerpt: "Designed a cost-effective smart home automation system with mobile app control...",
  },
  {
    slug: "nlp-text-classification",
    title: "Natural Language Processing for Text Classification",
    excerpt: "Compared ML and DL models like SVM, Random Forest, CNN, and Transformers...",
  },
];

function Blog() {
  const location = useLocation();

  return (
    <section id="blog" style={styles.section}>
      {/* ✅ Show breadcrumb only when on /blog */}
      {location.pathname === "/blog" && (
        <nav style={styles.breadcrumb}>
          <Link to="/" style={styles.breadcrumbLink}>🏠 Home</Link>
          <span style={styles.separator}>/</span>
          <span style={styles.current}>Blog</span>
        </nav>
      )}

      <h2 style={styles.heading}>Blog</h2>
      <div style={styles.grid}>
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} style={styles.card}>
            <h3 style={styles.cardTitle}>{post.title}</h3>
            <p style={styles.excerpt}>{post.excerpt}</p>
            <span style={styles.link}>Read More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "80px 20px", textAlign: "center" },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "20px",
    fontSize: "0.95rem",
    color: "#555",
  },
  breadcrumbLink: {
    color: "#00A7A7",
    textDecoration: "none",
    fontWeight: "bold",
  },
  separator: { color: "#777" },
  current: { color: "#333", fontWeight: "500" },
  heading: { fontSize: "2rem", marginBottom: "40px", color: "#00A7A7" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    background: "#E6F7F7",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardTitle: { fontSize: "1.2rem", marginBottom: "10px" },
  excerpt: { marginBottom: "12px", fontSize: "0.95rem" },
  link: { color: "#00A7A7", fontWeight: "bold" },
};

export default Blog;

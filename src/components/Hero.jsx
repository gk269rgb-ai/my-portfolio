import React from "react";

function Hero() {
  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Hi, I'm Gunjan Kumar 👋</h1>
        <h3 style={styles.subtitle}>
          B.Tech in Electrical Engineering, IITRAM (Batch of 2025)
        </h3>
        <p style={styles.text}>
          Aspiring Engineer | Research Enthusiast | Innovator
        </p>

        {/* Professional Quote */}
        <p style={styles.quote}>
          "Manifestation is the perfection already in the man."
          <br />— Swami Vivekananda
        </p>

        <a href="#projects" style={styles.button}>View My Projects</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0A192F",
    color: "white",
    textAlign: "center",
  },
  content: {
    maxWidth: "700px",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "25px",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "1.4rem",       // Increased font size
    marginBottom: "30px",     // Added spacing below quote
    lineHeight: "1.6",        // Better readability
    color: "#A0E7E5",         // Subtle teal highlight
    fontWeight: "500",         // Slightly bolder for elegance
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",     // Slightly larger button
    backgroundColor: "white",
    color: "#00A7A7",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

export default Hero;

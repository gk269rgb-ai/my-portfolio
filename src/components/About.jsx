import React from "react";

function About() {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>
          I am <b>Gunjan Kumar</b>, a recent graduate with a 
          <b> B.Tech in Electrical Engineering</b> from 
          <b> IITRAM (Batch of 2025)</b>. I was recognized as the 
          <b> Gold Medalist in Electrical Engineering</b> and honored with the 
          <b> Dean’s Certificate for Academic Excellence</b>. I have consistently 
          demonstrating strong academic performance throughout my studies.
        </p>

        <p style={styles.text}>
          My passion lies in <b>Artificial Intelligence, Machine Learning, 
          and Deep Learning research</b>. I have applied advanced AI models 
          to real-world domains including <b>power systems, biomedical signals, 
          robotics, automation, and natural language processing</b>.
        </p>

        <p style={styles.text}>
          Some of my key works include <b>Real-time fault detection in 220kV 
          transmission lines using CNNs, Insomnia detection from ECG signals, 
          human-following robots, and AI-powered content generation for 
          Mathematics and Physics domains</b>. These projects have strengthened 
          my expertise in <b>data preprocessing, model design, simulation, 
          and performance optimization</b>.
        </p>

        <p style={styles.text}>
          My long-term career aspiration is to become a 
          <b>Research Scientist or AI/ML Engineer</b> at leading global 
          organizations such as <b>Google, Microsoft, or other top MNCs</b>, 
          where I can contribute to cutting-edge innovations at the 
          intersection of <b>AI, science, and engineering</b>.
    
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    padding: "80px 20px",
    backgroundColor: "#F4F6F8",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#00A7A7",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "15px",
    lineHeight: "1.6",
    color: "#333333", 
  },
};

export default About;

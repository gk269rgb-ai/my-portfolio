import React from "react";

function Resume() {
  return (
    <section id="resume" style={styles.resume}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Resume</h2>
        <p style={styles.text}>
          You can download my latest resume below:
        </p>
        <a 
          href="/resume.pdf"   // place your PDF inside public folder
          download
          style={styles.button}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

const styles = {
  resume: {
    padding: "80px 20px",
    backgroundColor: "#F4F6F8",
    textAlign: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#00A7A7",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#00A7A7",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

export default Resume;

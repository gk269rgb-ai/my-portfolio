import React from "react";

function CoreSkills() {
  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Core Skills</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Power Systems & Transmission Lines</div>
          <div style={styles.card}>Electrical Machines & Transformers</div>
          <div style={styles.card}>Fault Analysis & System Diagnostics</div>
          <div style={styles.card}>Electrical Maintenance (Basics)</div>
          <div style={styles.card}>MATLAB & Simulink</div>
          <div style={styles.card}>Embedded Systems & Automation</div>
          <div style={styles.card}>Engineering Documentation</div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  skills: {
    padding: "80px 20px",
    backgroundColor: "#FFFFFF",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#00A7A7",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "15px",
  },
  card: {
    padding: "14px 16px",
    backgroundColor: "#F4F6F8",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#333",
    fontWeight: "500",
  },
};

export default CoreSkills;

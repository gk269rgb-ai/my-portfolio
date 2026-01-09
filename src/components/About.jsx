import React from "react";

function About() {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.text}>
          I am <b>Gunjan Kumar</b>, a <b>Gold Medalist</b> and
          <b> B.Tech Electrical Engineering graduate (2025)</b> from
          <b> IITRAM, Ahmedabad</b>. I have a strong academic foundation and
          practical experience in
          <b> power systems, circuit analysis, electrical machines,
          transmission lines, and fault analysis</b>.
        </p>

        <p style={styles.text}>
          During my academic and research work, I extensively worked on
          <b> real-time fault detection and condition monitoring</b> of
          <b> 11 kV and 220 kV power systems</b> using voltage and current signals.
          I have hands-on experience with
          <b> MATLAB, Simulink, system modeling, signal processing,
          and electrical diagnostics</b>.
        </p>

        <p style={styles.text}>
          Alongside core electrical engineering, I have applied
          <b> AI and machine learning techniques</b> as supporting tools for
          engineering analysis, particularly in
          <b> power system fault classification, data validation,
          and system behavior analysis</b>.
          This has strengthened my ability to
          <b> interpret complex engineering data and validate model outputs</b>.
        </p>

        <p style={styles.text}>
          I am interested in roles involving
          <b> electrical system analysis, AI-assisted engineering validation,
          simulation-based studies, and technical documentation</b>.
          I aim to contribute to
          <b> accurate, reliable, and scalable engineering solutions</b>
          while continuously expanding my industry and domain expertise.
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

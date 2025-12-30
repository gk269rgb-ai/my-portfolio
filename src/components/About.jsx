import React from "react";

function About() {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.text}>
          I am <b>Gunjan Kumar</b>, a <b>B.Tech Electrical Engineering graduate (2025)</b> from
          <b> IITRAM</b>, with a strong academic background and hands-on experience in
          <b> power systems, electrical machines, transmission lines, and fault analysis</b>.
          I was awarded the <b>Dean’s Certificate for Academic Excellence</b> for consistent
          academic performance during my undergraduate studies.
        </p>

        <p style={styles.text}>
          During my academic journey, I worked extensively on
          <b> real-time fault detection and condition monitoring of 11 kV and 220 kV
          power systems</b> using electrical signals such as voltage and current.
          I gained practical exposure to <b>MATLAB, Simulink, system modeling,
          signal processing, and electrical diagnostics</b>.
        </p>

        <p style={styles.text}>
          I have also applied <b>data-driven and machine learning techniques</b> as
          supporting tools for engineering analysis in areas such as
          <b> power system fault classification, biomedical signal interpretation,
          robotics-based automation, and sensor-integrated systems</b>.
          These projects strengthened my understanding of
          <b> system behavior, monitoring, and performance evaluation</b>.
        </p>

        <p style={styles.text}>
          I am currently seeking an <b>Engineer (Trainee)</b> role where I can contribute to
          <b> electrical engineering operations, maintenance activities, site execution,
          and system reliability</b>, while continuously learning industry standards and
          best engineering practices in real-world environments.
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

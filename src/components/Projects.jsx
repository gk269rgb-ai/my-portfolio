import React from "react";

const projectList = [
  {
    title: "Real-Time Fault Detection in 220kV Transmission Line using Deep Learning",
    description:
      "Developed a real-time fault detection and classification system using three-phase voltage and current signals. Simulated electrical faults
relevant to transmission systems and validated performance using
MATLAB and Simulink.

Focus areas included fault behavior analysis, system monitoring,
and maintenance-oriented diagnostics.",
    link: "/files/GUNJAN_KUMAR_REPORT.pdf",
  },
  {
    title: "Insomnia Detection using ECG Signals and Deep Learning",
    description:
      "Built a deep learning pipeline to analyze ECG data and detect insomnia patterns with high classification accuracy. Applied advanced signal processing and CNN/LSTM architectures for feature extraction and classification.",
    link: "/files/Insomnia_Detection_using_ECG.pdf",
  },

  {
    title: "Human Following Robot",
    description:
      "Designed and implemented robot capable of real-time object tracking using
computer vision and LiDAR. Integrated sensor data for navigation logic,
demonstrating applications in automation and industrial monitoring.
",
    link: "/files/Human_Following_robot.pdf",
  },

  {
    title: "Advanced Home Automation using Bluetooth Module",
    description:
      "Designed and implemented an electrical automation system for appliance
control using Arduino. Focused on switching logic, safety considerations,
and basic electrical control principles.",
    link: "#", // no report yet
  },
  {
    title: "Digital Image Processing",
    description:
      "Implemented various image processing techniques using Python. Covered image compression, intensity transformations (logarithmic, gamma, etc.), geometric transformations (rotation, shifting), histogram analysis and equalization, filtering (low-pass and high-pass), edge detection using gradients, and morphological operations (erosion, dilation, opening, closing, etc.).",
    link: "/files/DIP_Project.pdf",
  },
  {
    title: "Advanced Automatic Irrigation System Using Weather Prediction and ESP8266 NodeMCU",
    description:
      "Designed and implemented an intelligent irrigation system leveraging ESP8266 NodeMCU, soil moisture sensors, water motor, and weather prediction APIs. Enabled efficient water usage by integrating real-time environmental data with automated control for sustainable agriculture.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Multiple Links */}
            {project.links ? (
              project.links.map((file, idx) => (
                <a
                  key={idx}
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...styles.button, marginRight: "8px" }}
                >
                  {file.name}
                </a>
              ))
            ) : project.link && project.link !== "#" ? (
              // Single Link
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
              >
                View Report
              </a>
            ) : (
              // No Report
              <span style={styles.disabledButton}>Coming Soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  projects: {
    padding: "80px 20px",
    backgroundColor: "white",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#00A7A7",
  },
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
    transition: "transform 0.2s",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#00A7A7",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
  disabledButton: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#cccccc",
    color: "white",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "not-allowed",
  },
};

export default Projects;

import React from "react";

const projectList = [
  {
    title: "Real-Time Fault Detection in 220kV Transmission Line using Deep Learning",
    description:
      "Developed a deep learning-based fault classification and localization system for high-voltage transmission lines. Implemented data preprocessing and CNN models on MATLAB/Simulink datasets, enabling real-time fault detection and reliable grid monitoring.",
    link: "/files/GUNJAN_KUMAR_REPORT.pdf", // Replace with report PDF or GitHub repo
  },
  {
    title: "Insomnia Detection using ECG Signals and Deep Learning",
    description:
      "Built a deep learning pipeline to analyze ECG data and detect insomnia patterns with high classification accuracy. Applied advanced signal processing and CNN/LSTM architectures for feature extraction and classification.",
    link: "/files/Insomnia_Detection_using_ECG.pdf",
  },
  {
    title: "AI-Powered Content Creation for Mathematics and Physics (Grade 9–12)",
    description:
      "Developed an AI system capable of generating high-quality educational content for high school-level mathematics and physics. Leveraged NLP models and knowledge-based generation techniques to create practice problems, explanations, and quizzes.",
    link: "/files//files/Insomnia_Detection_using_ECG.pdf" , links: "/files/Trigo part 1.pdf" ,
  },
  {
    title: "Human Following Robot",
    description:
      "Designed and implemented a robot that autonomously follows human movement using computer vision and Lidar. Applied AI-based path-tracking algorithms for real-time operation in dynamic environments.",
    link: "/files/Human_Following_robot.pdf",
  },
  {
    title: "Advanced Home Automation using Bluetooth Module",
    description:
      "Created a cost-effective smart home automation system using Bluetooth and microcontrollers. Enabled device control through mobile applications for enhanced convenience and energy efficiency.",
    link: "#",
  },
  {
    title: "Image Classification and Transfer Learning in AI",
    description:
      "Explored CNN-based image classification tasks with transfer learning using pre-trained models such as ResNet and VGG. Evaluated performance on benchmark datasets to study model generalization and fine-tuning.",
    link: "#",
  },
  {
    title: "Natural Language Processing for Text Classification",
    description:
      "Implemented machine learning and deep learning models for sentiment analysis and document classification. Compared performance of traditional ML techniques with transformers-based architectures.",
    link: "#",
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
    link: "/files/Automatic_Irrigation_System.pdf", // Place your PDF in /public/files
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Report
            </a>
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
};

export default Projects;

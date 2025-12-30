import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Correct import for Twitter (X)

function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.text}>
Open to Engineer Trainee, Electrical Engineer, and Site Engineering roles.
Available for full-time opportunities across India.
        </p>
        <div style={styles.links}>
          <a
            href="mailto:anshuman7520gunjan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/gunjan-kumar-478632240"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gk269rgb-ai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/gunjan_maithils_anshuman"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/GunjanAnshuman"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/share/14QiyhhyxRz/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  contact: {
    padding: "80px 20px",
    backgroundColor: "#0A192F",
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
    color: "#F4F6F8",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  iconLink: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#00A7A7",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};

export default Contact;

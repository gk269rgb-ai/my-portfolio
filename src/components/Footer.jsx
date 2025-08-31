import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Gunjan Kumar | All Rights Reserved
      </p>
      <p style={styles.credit}>
         <span style={{ color: "#00A7A7", fontWeight: "bold" }}></span>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#073B3A",
    color: "Cyan",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
  text: {
    margin: "5px 0",
    fontSize: "0.95rem",
  },
  credit: {
    margin: "5px 0",
    fontSize: "0.85rem",
    color: "#aaa",
  },
};

export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        <a
          href="https://github.com/arham-ali1323/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arham-ali-973359289/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:arham.ali1323@gmail.com"
          style={styles.icon}
        >
          <FaEnvelope />
        </a>
      </div>
      <p style={styles.text}>© {new Date().getFullYear()} Arham Ali. All rights reserved.</p>
    </footer>
  );
};


export default Footer;

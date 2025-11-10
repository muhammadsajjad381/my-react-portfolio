// Footer.jsx
import React from "react";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        padding: "15px 0",
        backgroundColor: "#1a1a1a",
        color: "white",
        fontSize: "14px",
        flexWrap: "wrap",
      }}
    >
      <span>© 2025 @aliniaxi1234. All rights reserved.</span>
      <a
        href="https://github.com/betanni"
       
      >
       <GithubIcon className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-yellow-400  transition-transform transform hover:scale-110" size={18} />

      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-sajjad-4aa2212b7/"
       
      >
        <LinkedinIcon className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-yellow-400  transition-transform transform hover:scale-110" size={18} />
      </a>
      <a
        href="https://mail.google.com/mail/u/0/#inbox"
        >
        <Mail className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-yellow-400  transition-transform transform hover:scale-110" size={18} />
      </a>
    </footer>
  );
};

export default Footer;

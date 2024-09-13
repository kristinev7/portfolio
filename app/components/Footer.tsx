"use client";

import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex flex-col h-48 w-full items-center justify-center bg-gradient-to-t from-gray-900 via-gray-700 text-white">
      <div className="flex space-x-6 mb-4">
        <a href="https://github.com/kristinev7" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-black dark:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/kristineveneles/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-black dark:text-white" />
        </a>
        <a href="mailto:kveneles@gmail.com">
          <FaEnvelope className="text-2xl text-black dark:text-white" />
        </a>
      </div>
      <div className="text-sm text-white dark:text-white">
        &copy; 2024 KrisV
      </div>
    </footer>
  );
}

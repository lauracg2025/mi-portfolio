import { FaLinkedin } from "react-icons/fa";
export default function Linkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/laura-campa-gonzalez-0518b6175/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Laura Campa"
      className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-l-full shadow-lg p-3 cursor-pointer z-50 flex items-center justify-center hover:bg-blue-50 transition-colors">
      <FaLinkedin size={28} className="text-blue-600" />
    </a>
  );
}

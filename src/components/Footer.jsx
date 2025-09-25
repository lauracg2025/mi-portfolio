import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center text-sm text-gray-700 tracking-wide px-4">
      <p className="mb-2 text-sky-600 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        📧 <a className="hover:underline">lauracampagonzalez@gmail.com</a>
        📞 <a className="hover:underline">678 149 816</a>
        <a
          href="https://www.linkedin.com/in/laura-campa-gonzalez-0518b6175/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Laura Campa"
          className="hover:text-blue-800 transition-colors">
          <FaLinkedin size={20} />
        </a>
      </p>
      <p>
        © 2025 <span className="font-semibold text-gray-700">Laura Campa</span>.
        Todos los derechos reservados.
      </p>
    </footer>
  );
}

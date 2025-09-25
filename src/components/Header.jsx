import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Laura Campa</h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu">
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* Menú normal en escritorio */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium tracking-wide">
          <li>
            <a
              href="#about"
              className="relative inline-block transition-colors duration-300 hover:text-sky-600
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
                 after:bg-sky-600 hover:after:w-full after:transition-all after:duration-300">
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative inline-block transition-colors duration-300 hover:text-sky-600
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
                 after:bg-sky-600 hover:after:w-full after:transition-all after:duration-300">
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative inline-block transition-colors duration-300 hover:text-sky-600
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
                 after:bg-sky-600 hover:after:w-full after:transition-all after:duration-300">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-sky-600 hover:underline">
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-sky-600 hover:underline">
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-sky-600 hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

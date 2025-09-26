import { useState } from "react";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-sky-600 font-semibold hover:underline">
        Ver video
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative">
            {/* Botón de cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black hover:text-gray-700 text-4xl font-bold bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar">
              &times;
            </button>

            {/* Video */}
            <video controls autoPlay className="w-full rounded-md">
              <source src="src/assets/GestorDeCitas.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative">
        <button
          onClick={() => setIsOpen(false)}
          className="z-50 absolute top-2 right-2 text-black hover:text-gray-700 text-4xl font-bold bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
          aria-label="Cerrar">
          &times;
        </button>

        <video controls autoPlay muted className="w-full rounded-md">
          <source src="/videos/GestorDeCitas.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </div>
  );

  return (
    <>
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="text-sky-600 font-semibold hover:underline tracking-wide">
          Ver video
        </button>
      </div>

      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
}

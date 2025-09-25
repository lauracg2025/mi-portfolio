import { useForm } from "@formspree/react";
import Linkedin from "./Linkedin";

export default function Contact() {
  const [state, handleSubmit] = useForm("mvgwojop");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gray-100 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            ¡Gracias por escribirme! 💌
          </h3>
          <p className="text-lg text-gray-700 max-w-xl mx-auto italic text-center">
            Me pondré super contenta😊 cuando lea tu mensaje. <br />
            ¡Hablamos pronto! <br />
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 px-4">
      <div className="max-w-3xl mx-auto ">
        <Linkedin />
        <h3 className="text-3xl font-bold mb-6 tracking-wide">Contacto</h3>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mvgwojop"
          method="POST"
          className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Escribe un mensaje"
            className="w-full p-3 border border-gray-300 rounded"
            rows="5"></textarea>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-sky-600 text-white px-6 py-3 rounded hover:bg-sky-300">
            {state.submitting ? "Enviando..." : "📩 Enviar "}
          </button>
        </form>
      </div>
    </section>
  );
}

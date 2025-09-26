import cinexinImg from "../assets/cinexin.png";
import gestorDeCitasImg from "../assets/gestorDeCitas.png";
import VideoModal from "./VideoModal";

export default function Proyect() {
  return (
    <section id="projects" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 tracking-wide">Proyectos</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}

          <div className=" bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src={cinexinImg}
              alt="App CINEXIN"
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-ind-700 mb-2 tracking-wide">
                🍿 CINEXIN
              </h4>
              <p className="text-gray-700 text-sm mb-4 tracking-wide">
                Aplicación de películas desarrollada con <strong>React</strong>{" "}
                y <strong>Tailwind</strong>, integrada con la API de{" "}
                <strong>TMDB</strong>. Permite buscar títulos, filtrarlos por
                género y acceder a información detallada de cada película,
                incluyendo sinopsis, puntuación y carátula. El diseño es
                totalmente responsive, pensado para ofrecer una experiencia
                cómoda desde cualquier dispositivo. Está desplegada en{" "}
                <strong>Vercel</strong>.
              </p>
              <div className="mt-28">
                <a
                  href="https://movies-app-sigma-kohl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sky-600 font-semibold hover:underline">
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src={gestorDeCitasImg}
              alt="App GESTOR DE CITAS"
              className="w-full h-52 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 tracking-wide">
                📅 GESTOR DE CITAS
              </h4>
              <p className="text-gray-700 text-sm mb-4 tracking-wide">
                Proyecto personal desarrollado con <strong>React</strong> y{" "}
                <strong>Supabase</strong>, pensado para gestionar citas de forma
                sencilla. Los usuarios pueden registrarse, iniciar sesión,
                visualizar su calendario, agendar nuevas citas y eliminar las ya
                existentes. Puedes registrarte o usar el siguiente usuario y
                contraseña de prueba:
              </p>

              <div className="bg-gray-100 border border-gray-300 rounded-md p-4 text-sm text-gray-800 mb-6">
                <p>
                  <strong>Usuario:</strong> prueba@email.com
                </p>
                <p>
                  <strong>Contraseña:</strong> 123456
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://citas-app-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sky-600 font-semibold hover:underline"
                  aria-label="Ver proyecto GESTOR DE CITAS en una nueva pestaña">
                  Ver proyecto
                </a>
                <VideoModal />
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-center mt-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Todos los proyectos que ves aquí están desarrollados con mucho amor y
          se encuentran en constante evolución: siempre hay algo que aprender,
          mejorar o pulir ✨. Cada línea de código está escrita con cariño,
          ilusión y muchas ganas de seguir creciendo. Si tienes cualquier
          feedback, no dudes en escribirme, te estaré muy agradecida. Las
          imágenes han sido seleccionadas de bancos libres de derechos,
          intentando cuidar cada detalle.
          <br />
          🙏¡Gracias por tu tiempo!
        </p>
      </div>
    </section>
  );
}

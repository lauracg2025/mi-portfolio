import portfolioImg from "../assets/portfolio.png";

export default function () {
  return (
    <section
      className="relative flex items-center justify-center text-white text-center px-4 py-20 min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${portfolioImg})` }}>
      {/* Overlay oscuro semi-transparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido encima del overlay */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 tracking-wide">
          ¡Hola! Soy Laura
        </h2>
        <p className="text-lg md:text-3xl tracking-wide">
          .Desarrolladora web.
        </p>
      </div>
    </section>
  );
}

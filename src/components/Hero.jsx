export default function Hero() {
  return (
    <section id="hero">
      <div className="w-full flex flex-col justify-start items-start pt-20 px-6 text-slate-950 space-y-6">

        {/* Títulos y descripción */}
        <div className="space-y-2">
          <p className="text-4xl font-semibold text-slate-800">
            Web <span className="text-indigo-600">eficiente</span>. Diseño que <span className="text-indigo-600">conecta</span>.
          </p>
          <p className="text-lg text-slate-700/80">
            Creo experiencias digitales <span className="font-semibold text-indigo-600">únicas</span>, <span className="font-semibold text-indigo-600">intuitivas</span> y <span className="font-semibold text-indigo-600">personalizadas</span>, pensadas para cautivar a tus usuarios y reflejar tu identidad.
          </p>
        </div>

        {/* Badge "Disponible para trabajar" */}
        <div className="bg-black rounded-lg p-2 self-start">
          <span className="text-sm font-semibold text-white">Disponible para trabajar</span>
        </div>

        {/* Imagen con overlay y texto encima */}
        <div className="relative mt-6 w-full max-w-md">
          <img
            className="w-full rounded-lg shadow-xl"
            src="/maykellramos.webp"
            alt="Maykell Ramos"
          />

          {/* Overlay degradado */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>

          {/* Texto encima de la imagen */}
          <div className="absolute inset-0 z-10 pb-6 flex flex-col justify-end items-center text-white">
            <span className="text-4xl font-bold">Maykell Ramos</span>
            <p className="text-2xl">Full-Stack Junior</p>
          </div>
        </div>

      </div>
    </section>
  );
}

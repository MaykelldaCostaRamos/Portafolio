export default function Hero() {
  return (
    <section id="hero" className="pt-20 text-base md:pt-24 lg:pt-32 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 2xl:gap-8">

        {/* Títulos y descripción */}
        <div className="space-y-4 md:my-auto md:w-1/2 xl:mx-auto">
          <h1 className="text-4xl font-bold text-slate-900
                         md:text-5xl lg:text-6xl">
            Web <span className="text-indigo-600">eficiente</span>.  
            Diseño que <span className="text-indigo-600">conecta</span>.
          </h1>
          <p className="text-slate-700/80
                        md:text-xl lg:text-2xl">
            Creo experiencias digitales <span className="font-semibold text-indigo-600">únicas</span>, 
            <span className="font-semibold text-indigo-600"> intuitivas</span> y 
            <span className="font-semibold text-indigo-600"> personalizadas</span>, pensadas para cautivar a tus usuarios y reflejar tu identidad.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative w-full md:w-1/2 lg:w-80 lg:mx-auto xl:w-96 2xl:mx-0">
          <img
            className="w-full rounded-lg shadow-xl"
            src="/maykellramos.webp"
            alt="Maykell Ramos"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent rounded-lg"></div>
          <div className="absolute inset-0 z-10 pb-6 flex flex-col justify-end items-center text-white">
            <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Maykell Ramos
            </span>
            <p className="md:text-xl lg:text-2xl">Full-Stack Junior</p>
          </div>
        </div>

      </div>
    </section>
  );
}

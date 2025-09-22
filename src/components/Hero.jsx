export default function Hero() {
  return (
<section id="hero">
  <div className="w-full flex flex-col justify-start items-start pt-20 px-6 text-slate-950 space-y-6
                  md:flex-row md:px-10 md:space-y-0 md:space-x-10 md:items-center">

    {/* Imagen con overlay y texto encima */}
    <div className="relative w-full max-w-md mt-6 md:mt-0 md:order-1 md:w-80 md:max-w-none">
      <img
        className="w-full rounded-lg shadow-xl"
        src="/maykellramos.webp"
        alt="Maykell Ramos"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
      <div className="absolute inset-0 z-10 pb-6 flex flex-col justify-end items-center text-white">
        <span className="text-4xl font-bold">Maykell Ramos</span>
        <p className="text-2xl">Full-Stack Junior</p>
      </div>
    </div>

    {/* Títulos y descripción */}
    <div className="space-y-2 md:order-2 md:flex-1">
      <p className="text-4xl font-semibold text-slate-800">
        Web <span className="text-indigo-600">eficiente</span>. Diseño que <span className="text-indigo-600">conecta</span>.
      </p>
      <p className="text-xl text-slate-700/80">
        Creo experiencias digitales <span className="font-semibold text-indigo-600">únicas</span>, <span className="font-semibold text-indigo-600">intuitivas</span> y <span className="font-semibold text-indigo-600">personalizadas</span>, pensadas para cautivar a tus usuarios y reflejar tu identidad.
      </p>
    </div>

  </div>
</section>


  );
}

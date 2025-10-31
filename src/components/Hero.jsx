import LayoutReveal from "../ui/LayoutReveal";
import BlinkVariants from "../ui/BlinkVariants";

export default function Hero() {
 
  return (
    <section
      id="hero"
      className="pt-20 text-base px-4 md:pt-24 lg:pt-28 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950 dark:text-slate-200  p-4 rounded-b-lg 
"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

         {/* Títulos y descripción */}
        <div className="space-y-6 flex-1 xl:mx-autot">
          {/* Título */}
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <LayoutReveal isHero  >
              Web <span className="text-indigo-600">eficiente</span>.
            </LayoutReveal>{" "}
            <LayoutReveal isHero >
              Diseño que <span className="text-indigo-600">conecta</span>.
            </LayoutReveal>
          </h1>

          {/* Párrafo */}
          <p className="text-slate-700/80 dark:text-slate-400 text-lg md:text-2xl lg:text-2xl xl:text-4xl font-light">
            <LayoutReveal isHero  >
              Creo experiencias digitales{" "}
              <span className="font-semibold text-indigo-600">únicas</span>,{" "}
            </LayoutReveal>
            <LayoutReveal isHero >
              <span className="font-semibold text-indigo-600">intuitivas</span> y{" "}
              <span className="font-semibold text-indigo-600">personalizadas</span>,
            </LayoutReveal>
            <LayoutReveal isHero >
              pensadas para cautivar a tus
            </LayoutReveal>
            <LayoutReveal isHero >
              usuarios y reflejar tu identidad.
            </LayoutReveal>
          </p>
        </div>


        {/* Imagen */}
        <LayoutReveal isHero className="delay-400 md:w-64 lg:w-80 lg:mx-auto xl:w-96">
          <div className="relative w-full">
            <img
              className="w-full h-auto rounded-lg"
              src="/profile.webp"
              alt="Maykell Ramos"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">
              <BlinkVariants>
                  <LayoutReveal isHero>
                <span className="text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  Maykell Ramos            
                </span>
                  </LayoutReveal>
                <p className="text-xl">
                  <LayoutReveal isHero>
                    Full-Stack 
                  </LayoutReveal>
                </p>
              </BlinkVariants>
            </div>
          </div>
        </LayoutReveal>
        
       


        
      </div>
    </section>
  );
}

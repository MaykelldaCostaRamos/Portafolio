import { motion } from "framer-motion";
import LayoutReveal from "../ui/LayoutReveal";

export default function Hero() {
  // ✨ Parpadeo suave (3 veces)
  const blinkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0.6, 1],
      transition: {
        duration: 4.5, 
        repeat: 1,   
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="pt-20 text-base px-4 md:pt-24 lg:pt-28 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950 dark:text-slate-200 bg-slate-900/10 backdrop-blur-3xl p-4 rounded-b-lg dark:bg-slate-600/30 dark:backdrop-blur-sm
"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        
        {/* Títulos y descripción */}
        <div className="space-y-4 flex-1 xl:mx-auto">
          <LayoutReveal isHero>
            <motion.h1
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
              variants={blinkVariants}
              initial="hidden"
              animate="visible"
            >
              Web <span className="text-indigo-600">eficiente</span>. <br />
              Diseño que <span className="text-indigo-600">conecta</span>.
            </motion.h1>
          </LayoutReveal>

          <LayoutReveal isHero>
            <p className="text-slate-700/80 dark:text-slate-400 text-lg md:text-2xl lg:text-2xl xl:text-5xl font-light tracking-wide">
              Creo experiencias digitales{" "}
              <span className="font-semibold text-indigo-600">únicas</span>,{" "}
              <span className="font-semibold text-indigo-600">intuitivas</span>{" "}
              y
              <span className="font-semibold text-indigo-600">
                {" "}personalizadas
              </span>
              , pensadas para cautivar a tus usuarios y reflejar tu identidad.
            </p>
          </LayoutReveal>
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
            <div className="absolute inset-0 z-10 pb-24 flex flex-col justify-end items-center text-white">
              <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                Maykell Ramos
              </span>
              <p className="md:text-xl lg:text-2xl">Full-Stack Junior</p>
            </div>
          </div>
        </LayoutReveal>
      </div>
    </section>
  );
}

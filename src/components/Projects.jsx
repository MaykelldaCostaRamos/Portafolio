import rc001 from "../assets/projects/rock-clicker/rc001.png";
import RocketIcon from "../assets/svg/rocket-ship.svg?react";
import GithubIcon from "../assets/svg/github.svg?react";
import ReactIcon from "../assets/svg/react.svg?react";
import TailwindcssIcon from "../assets/svg/tailwindcss.svg?react";
import FirebaseIcon from "../assets/svg/firebase.svg?react";
import JSIcon from "../assets/svg/js.svg?react";
import LayoutReveal from "../ui/LayoutReveal";

export default function Projects() {
  return (
      <LayoutReveal>
    

      <section id="project" className="pt-28 text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950">

        <h2 className="flex items-center w-full md:text-2xl">
          
            <span className="relative flex items-center mr-4 font-extralight tracking-wider">
            <span className="w-2 h-2 rounded-full bg-slate-950 mr-2"></span>
              PROYECTOS
            </span>
            
            <span className="flex-grow h-[1px] bg-slate-950/50"></span>
          </h2>

        {/* Proyecto */}
      <div className="pt-8 flex justify-center">
      <div className="w-full max-w-[900px] p-6 rounded-2xl bg-black shadow-xl border border-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col md:flex-row gap-6">
      
      {/* Imagen */}
      <img
        src={rc001}
        alt="Rock Clicker preview"
        className="rounded-xl shadow-md shadow-indigo-900/30 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 w-full md:w-2/5 h-auto md:h-[300px] lg:h-[350px] object-cover"
      />


      {/* Contenido */}
      <div className="flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="text-lg md:text-3xl font-bold text-indigo-100">
            Rock Clicker
          </h3>

          <div className="pt-4 flex gap-4 md:gap-6">
            <ReactIcon className="w-5 md:w-6 h-5 md:h-6 inline-block"/>
            <FirebaseIcon className="w-5 md:w-6 h-5 md:h-6 inline-block"/>
            <TailwindcssIcon className="w-5 md:w-6 h-5 md:h-6 inline-block"/>
            <JSIcon className="w-5 md:w-6 h-5 md:h-6 inline-block"/>
          </div>

          <p className="md:text-xl text-indigo-50 mt-3 leading-relaxed">
            Juego tipo clicker ambientado en una mina: pica rocas, acumula puntos y
            desbloquea mejoras para avanzar cada vez más rápido.
          </p>
        </div>

        {/* Botones */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 mt-7">
          <a
            href="https://rock-clicker.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-center shadow-md transition transform hover:-translate-y-1"
          > 
            <RocketIcon className="w-5 md:w-6 h-5 md:h-6 inline-block"/>
            Visitar página
          </a>

          <a
            href="https://github.com/MaykelldaCostaRamos/Project-Rock-Clicker"
            target="_blank"
            rel="noreferrer noopener"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 border-2 border-indigo-50 text-indigo-50 hover:bg-indigo-700 rounded-xl font-semibold text-center transition transform hover:-translate-y-1"
          >
            <GithubIcon className="w-5 md:w-6 h-5 md:h-6 inline-block"/>
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  </div>

      </section>

   </LayoutReveal>
  );
}

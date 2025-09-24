import rc001 from "../assets/projects/rock-clicker/rc001.png";

export default function Projects() {
  return (
    <section id="project" className="pt-16 text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto">

       <h2 className="flex items-center w-full md:text-4xl font-bold">
          <span className="relative flex items-center mr-4 text-indigo-900">
            <span className="w-3 h-3 rounded-full bg-indigo-200 mr-4"></span>
            PROJECTOS
          </span>
          <span className="flex-grow h-[1px] bg-indigo-900/30"></span>
        </h2>

      {/* Proyecto */}
      <div className="pt-8">
        <div className="w-full p-6 md:p-8 rounded-2xl bg-slate-50 shadow-2xl border border-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img
            src={rc001}
            alt="Rock Clicker preview"
            className="rounded-xl shadow-md shadow-indigo-900/30 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
          />

          {/* Descripción */}
          <div className="mt-6">
            <h3 className="md:text-3xl font-bold text-slate-800">Rock Clicker</h3>
            <p className="md:text-xl text-slate-600 mt-3 leading-relaxed">
              Juego tipo clicker ambientado en una mina: pica rocas, acumula puntos y
              desbloquea mejoras para avanzar cada vez más rápido.
            </p>
          </div>

          {/* Botones */}
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 mt-6">
            <a
              href="https://rock-clicker.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full sm:w-auto px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-center shadow-md transition transform hover:-translate-y-1"
            >
              🚀 Visitar página
            </a>

            <a
              href="https://github.com/MaykelldaCostaRamos/Project-Rock-Clicker"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full sm:w-auto px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold text-center transition transform hover:-translate-y-1"
            >
              📂 Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

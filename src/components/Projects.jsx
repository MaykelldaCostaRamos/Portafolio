import rc001 from "../assets/projects/rock-clicker/rc001.png";

export default function Projects() {
  return (
    <section id="project" className="py-20 px-6 sm:px-8 md:px-10">
      <div>
        <h2 className="text-3xl font-bold py-1">
          Proyectos<span className="text-indigo-900 px-1">.</span>
        </h2>
        <div className="w-full border-0 border-b border-indigo-600" aria-hidden="true"></div>

        {/* Proyecto */}
        <div className="pt-8">
          <div className="w-full p-3 rounded-lg bg-slate-50 shadow-md">
            <img
              src={rc001}
              alt="Rock Clicker preview"
              className="rounded-lg shadow-md shadow-indigo-900/30 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
            />

            {/* Descripción */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-slate-800">Rock Clicker</h3>
              <p className="text-lg text-slate-600 mt-2">
                Juego tipo clicker ambientado en una mina: pica rocas, acumula puntos
                y desbloquea mejoras para avanzar cada vez más rápido.
              </p>
            </div>

            {/* Botones */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a
                href="https://rock-clicker.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-center transition"
              >
                🚀 Visitar página
              </a>

              <a
                href="https://github.com/MaykelldaCostaRamos/Project-Rock-Clicker"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto px-6 py-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg font-semibold text-center transition"
              >
                📂 Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

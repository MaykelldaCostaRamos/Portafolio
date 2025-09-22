export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 px-6 md:pt-20 md:pb-10 bg-slate-950 text-indigo-100
     md:px-12 
     lg:px-44
     xl:px-96
     2xl:max-w-[800px] 2xl:mx-auto 2xl:px-14">
      {/* Contenedor principal: columna en móviles, fila en tablet+ */}
      <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-12 md:gap-24 lg:gap-28 xl:gap-28 2xl:gap-32">

        {/* Parte izquierda: nombre + social media */}
        <div className="flex flex-col items-center md:items-start space-y-10">
          <p className="text-2xl font-extrabold text-indigo-200">
            Maykell da Costa Ramos
          </p>

          <div className="flex gap-14">
            <a
              href="https://github.com/MaykelldaCostaRamos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-indigo-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/maykelldacostaramos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-indigo-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Parte derecha: navegación + copyright */}
        <div className="flex flex-col items-center md:items-end space-y-6 text-center md:text-right">
          <nav className="flex flex-1 md:flex-row gap-4 md:gap-8">
            <a href="#about" className="text-indigo-200 hover:text-indigo-400 transition-colors">
              Sobre mí
            </a>
            <a href="#project" className="text-indigo-200 hover:text-indigo-400 transition-colors">
              Proyectos
            </a>
            <a
              href="mailto:mkpako2009@hotmail.com"
              className="text-indigo-200 hover:text-indigo-400 transition-colors"
            >
              Contacto
            </a>

          </nav>

          <div className="text-sm text-indigo-200/50">
            <p>
              Copyright &copy; 2025 Maykell da Costa Ramos <br /> Todos los derechos reservados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function Header() {
  return (
    <header id="home">
     <div className="fixed top-1 left-1/2 transform -translate-x-1/2 z-50
                bg-slate-100/30 rounded-lg shadow-md backdrop-blur-sm
                flex items-center text-slate-950 px-0 w-auto max-w-full header-container">

        
        <a
          href="#hero"
          className="text-xl bg-white shadow-sm font-extrabold rounded-lg p-2 flex-shrink-0"
        >
          M<strong>|</strong>R
        </a>

     
        <nav
          className="flex gap-4 text-base md:gap-14 lg:text-lg lg:gap-10 ml-auto overflow-hidden
                     px-6 sm:px-4 md:px-10"
        >
          <a href="#about" className="whitespace-nowrap hover:text-slate-900 transition">
            Sobre mí
          </a>
          <a href="#project" className="whitespace-nowrap hover:text-slate-900 transition">
            Proyectos
          </a>
          <a href="#contact" className="whitespace-nowrap hover:text-slate-900 transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

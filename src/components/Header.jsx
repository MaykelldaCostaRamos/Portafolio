export default function Header() {
  return (
    <header id="home">
     <div className="
        fixed top-1 left-1/2 transform -translate-x-1/2 z-50
        bg-slate-100/30 rounded-lg shadow-lg backdrop-blur-sm
        flex items-center text-slate-950 px-0 gap-2 w-auto max-w-full
        sm:w-11/12   // ~91% en móviles grandes
        md:w-5/6     // ~83% en tablets
        lg:w-2/3     // ~66% en desktop normal
        xl:w-1/2     // 50% en desktop grande (1280px+)
        2xl:w-2/5    // 40% en ultra wide
      ">


        
        <a
          href="#hero"
          className="text-xl md:text-2xl bg-white shadow-lg font-extrabold rounded-lg p-2 flex-shrink-0"
        >
          M<strong>|</strong>R
        </a>

     
        <nav
          className="flex flex-1 justify-center ml-auto gap-4 px-3 text-base overflow-hidden
                    sm:gap-8 sm:space-x-4
                    md:gap-10 md:space-x-6">
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

export default function Header() {
  return (
    <header>
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-slate-100 rounded-full shadow-md backdrop-blur-sm flex items-center w-auto max-w-full"
      >
        
        {/* Logo */}
        <h1 className="text-xl bg-slate-500/20 shadow-sm shadow-slate-400 font-extrabold rounded-full p-2 flex-shrink-0">
          M<strong>|</strong>R
        </h1>

        {/* Navegación scrollable en móviles */}
        <nav className="flex gap-3 text-base lg:text-lg lg:gap-6 ml-2 lg:ml-6 overflow-hidden"
         style={{paddingInline: "clamp(0.5rem, 5vw, 5rem)"}}>
          <a href="#sobre-mi" className="whitespace-nowrap hover:text-slate-900 transition">Sobre mí</a>
          <a href="#proyectos" className="whitespace-nowrap hover:text-slate-900 transition">Proyectos</a>
          <a href="#contacto" className="whitespace-nowrap hover:text-slate-900 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header id="home">
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-slate-100/30 rounded-lg shadow-md backdrop-blur-sm flex items-center w-auto max-w-full text-slate-950"
      >
        
        {/* Logo */}
        <a href="#hero" className="text-xl bg-white shadow-sm font-extrabold rounded-lg p-2 flex-shrink-0">
          M<strong>|</strong>R
        </a>

        {/* Navegación scrollable en móviles */}
        <nav className="flex gap-3 text-base lg:text-lg lg:gap-6 ml-2 lg:ml-6 overflow-hidden"
         style={{paddingInline: "clamp(0.5rem, 5vw, 5rem)"}}>
          <a href="#about" className="whitespace-nowrap hover:text-slate-900 transition">Sobre mí</a>
          <a href="#project" className="whitespace-nowrap hover:text-slate-900 transition">Proyectos</a>
          <a href="#contact" className="whitespace-nowrap hover:text-slate-900 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

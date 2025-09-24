import WaveText from "../ui/WaveText";

export default function About() {
  return (
    <section id="about" className="pt-16 text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950">

      <div className="flex flex-col items-start gap-8">

        <h2 className="flex items-center w-full md:text-4xl font-bold">
          <span className="relative flex items-center mr-4 text-indigo-900">
            <span className="w-3 h-3 rounded-full bg-indigo-200 mr-4"></span>
            SOBRE MÍ
          </span>
          <span className="flex-grow h-[1px] bg-indigo-900/30"></span>
        </h2>

        
        {/* Párrafos */}
        <div className="py-2 space-y-6 md:space-y-8 lg:space-y-10">
          <p className="text-left md:text-xl lg:text-2xl leading-relaxed">
            Soy un desarrollador web en formación continua, con la mente puesta en crecer como{" "}
            <strong className="text-indigo-600 font-semibold">
              <WaveText text="Full Stack" />
            </strong>
            . Me gusta asumir nuevos retos porque cada proyecto representa la oportunidad de
            superarme y desarrollar nuevas capacidades. No me limito a una sola área, me interesa
            comprender el conjunto y aportar donde más se necesite.
          </p>

          <p className="text-left md:text-xl lg:text-2xl leading-relaxed">
            Mis fortalezas están en el trabajo en equipo y en proponer soluciones: disfruto
            colaborar, intercambiar ideas y buscar caminos que hagan que un proyecto avance con
            claridad y eficiencia. Estoy convencido de que el código no solo resuelve problemas
            técnicos, sino que también puede transformar experiencias y abrir nuevas oportunidades.
          </p>
        </div>

        {/* Blockquote */}
        <blockquote className="mt-2 border-l-2 border-indigo-900/30 pl-6 italic text-indigo-900 md:text-xl lg:text-2xl">
          "Cada proyecto me impulsa a explorar nuevas soluciones, adquirir habilidades y crecer como
          <span className="italic"> profesional</span>."
        </blockquote>
      </div>
    </section>
  );
}

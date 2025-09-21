import WaveText from "../ui/WaveText";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 sm:px-8 md:px-12 flex text-slate-950">
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold py-1">
          Sobre mí
          <span className="text-indigo-600 px-1">.</span>
        </h2>

        <div className="w-full border-0 border-b border-indigo-600" aria-hidden="true" />

        {/* Párrafos */}
        <div className="py-8 space-y-6">
          <p className="text-left text-lg leading-relaxed">
            Soy un desarrollador web en formación continua, con la mente puesta en crecer como{" "}
            <strong className="text-indigo-600 font-semibold">
              <WaveText text="Full Stack" />
            </strong>
            . Me gusta asumir nuevos retos porque cada proyecto representa la oportunidad de
            superarme y desarrollar nuevas capacidades. No me limito a una sola área, me interesa
            comprender el conjunto y aportar donde más se necesite.
          </p>

          <p className="text-left text-lg leading-relaxed">
            Mis fortalezas están en el trabajo en equipo y en proponer soluciones: disfruto
            colaborar, intercambiar ideas y buscar caminos que hagan que un proyecto avance con
            claridad y eficiencia. Estoy convencido de que el código no solo resuelve problemas
            técnicos, sino que también puede transformar experiencias y abrir nuevas oportunidades.
          </p>
        </div>

        {/* Blockquote */}
        <blockquote className="mt-6 border-l-4 border-indigo-600 pl-4 italic text-indigo-400">
          "Cada proyecto me impulsa a explorar nuevas soluciones, adquirir habilidades y crecer como
          <span className="italic"> profesional</span>."
        </blockquote>
      </div>
    </section>
  );
}

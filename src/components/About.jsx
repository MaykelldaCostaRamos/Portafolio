import LayoutReveal from "../ui/LayoutReveal";
import WaveText from "../ui/WaveText";
import AnimatedLine from "../ui/AnimatedLine";

export default function About() {
  return (
    

    <section id="about" className="pt-20 max-h-dvh text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950 dark:text-slate-200">

   <LayoutReveal>
      <div className="flex flex-col items-start space-y-6">
     
        <h2 className="flex items-center w-full md:text-2xl">            
            <span className="flex items-center mr-4 font-extralight tracking-wider">
              <span className="w-2 h-2 rounded-full bg-slate-950 dark:bg-slate-200 mr-2"></span>
              SOBRE MÍ
            </span>      
            <AnimatedLine/>
        </h2>

        
        {/* Párrafos */}
        <div className="px-4 space-y-6 md:space-y-8 lg:space-y-10">

          <LayoutReveal>
          <p className="text-left md:text-xl lg:text-2xl leading-relaxed">
            Soy un desarrollador web en formación continua, con la mente puesta en crecer como{" "}
            <strong className="text-indigo-600 font-semibold">
              <WaveText text="Full Stack" />
            </strong>
            . 
            Me gusta asumir nuevos retos porque cada proyecto representa la oportunidad de
            superarme y desarrollar nuevas capacidades. No me limito a una sola área, me interesa
            comprender el conjunto y aportar donde más se necesite.
          </p>
          </LayoutReveal>

          <LayoutReveal>
          <p className="text-left md:text-xl lg:text-2xl leading-relaxed">
            Mis fortalezas están en el trabajo en equipo y en proponer soluciones: disfruto
            colaborar, intercambiar ideas y buscar caminos que hagan que un proyecto avance con
            claridad y eficiencia. Estoy convencido de que el código no solo resuelve problemas
            técnicos, sino que también puede transformar experiencias y abrir nuevas oportunidades.
          </p>
          </LayoutReveal>
        </div> 
        
      </div>
      </LayoutReveal>
    </section>

    
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="w-full flex flex-col justify-start items-start pt-24 px-[24px] text-slate-950">

         <p className="text-3xl leading-relaxed  text-slate-700/70">
          "Creando experiencias web eficientes y atractivas. Diseños modernos y personalizados."
        </p>
        
        
        <div className="bg-black rounded-lg p-2 mt-2">
          <span className="text-sm font-semibold text-white">Disponible para trabajar</span>
        </div>


        <div className="relative pt-6">
          <img className="w-auto rounded-lg shadow-xl" src="/maykellramos.webp" alt="Maykell Ramos" />   
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
          <div className="absolute inset-0 z-10 pb-6 flex flex-col justify-end items-center text-white">
            <span className="text-4xl font-bold">Maykell Ramos</span>
            <p className="text-2xl">Full-Stack Junior</p>    
           </div>  
        </div>        
        
      </div>


    </section>
  );
}

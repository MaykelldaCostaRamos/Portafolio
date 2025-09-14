export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center pt-10">
      
      <div className="flex items-center gap-2">
        <img className="w-36 h-36 rounded-full border-4 border-slate-200 shadow-lg" src="/maykellramos.webp" alt="Maykell Ramos" />
      </div>

      <h1 className="text-4xl font-bold">Maykell Ramos</h1>
   
      <p className="text-lg leading-relaxed text-center text-slate-600 mt-2">
        <strong className="text-xl">Desarrollador de aplicaciones web</strong> Apasionado por JavaScript, React y la creación de
        experiencias web eficientes y atractivas.
      </p>

    </div>
  );
}

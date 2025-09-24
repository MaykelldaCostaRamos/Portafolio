export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-16 text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto"
    >
     
        
        {/* Título y descripción */}
        <div className="max-w-2xl mb-8 text-left md:text-center md:mx-auto">
          <h2 className="flex items-center w-full md:text-4xl font-bold">
          <span className="relative flex items-center mr-4 text-indigo-900">
            <span className="w-3 h-3 rounded-full bg-indigo-200 mr-4"></span>
            CONTACTO
          </span>
          <span className="flex-grow h-[1px] bg-indigo-900/30"></span>
        </h2>

          <p className="md:text-xl text-slate-700 py-3">
            ¿Tienes un proyecto en mente o quieres colaborar? Haz clic en el botón y podrás enviarme un correo directamente.
          </p>
        </div>

        {/* Botón */}
        <div className="w-1/2 mx-auto">
          <button
            type="button"
            onClick={() => window.location.href = "mailto:mkpako2009@hotmail.com"}
            className="w-full sm:w-auto md:w-96 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-center shadow-md transition transform hover:-translate-y-1"
          >
            Enviar correo
          </button>
        </div>

    
    </section>
  );
}

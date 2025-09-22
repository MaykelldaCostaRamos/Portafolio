export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-800 text-white rounded-t-3xl shadow-lg 2xl:max-w-[800px] 2xl:mx-auto"
    >
      {/* Cabecera */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">✉️ Ponte en contacto</h2>
        <p className="text-lg">
          ¿Tienes un proyecto en mente o quieres colaborar? Haz clic en el botón y podrás enviarme un correo directamente.
        </p>
      </div>

      {/* Botón de correo */}
      <div className="max-w-xs mx-auto mb-10">
        <button
          type="button"
          onClick={() => window.location.href = "mailto:mkpako2009@hotmail.com"}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-md shadow-lg shadow-indigo-800/40 transition-colors"
        >
          Enviar correo
        </button>
      </div>

    </section>
  );
}

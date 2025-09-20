export default function Contact() {
  return (
    <form
      action=""
      id="contact"
      className="flex flex-col py-12 px-6 text-lg text-slate-950 
      bg-indigo-50/10 rounded-lg shadow-2xl backdrop-blur-sm "
    >
      
   
      <h2 className="text-4xl font-bold mb-8">Contacto</h2>


        <div className="mb-8">
          <label htmlFor="nombre" className="font-medium px-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre y apellidos"
            className="w-full mt-2 p-2 focus:outline-none focus:placeholder-transparent  bg-transparent appearance-none"
            required
          />
          <div className="border-0 border-b border-indigo-950/30" aria-hidden="true"></div>

        </div>
        <div className="mb-8">
          <label htmlFor="email" className="font-medium px-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Dirección de email"
            className="w-full mt-2 p-2 focus:outline-none focus:placeholder-transparent bg-transparent appearance-none"
            required
          />
          <div className="border-0 border-b border-indigo-950/30" aria-hidden="true"></div>

        </div>

        <div className="mb-6">
          <label htmlFor="message" className="font-medium px-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            placeholder="Escribe tu mensaje...."
            rows="4"
            className="w-full mt-2 p-2 focus:outline-none focus:placeholder-transparent bg-transparent appearance-none"
          ></textarea>
          <div className="border-0 border-b border-indigo-950/30" aria-hidden="true"></div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-black rounded-lg p-2"
    
        >
          Enviar
        </button>

     
    </form>
  );
}

import LinkedinIcon from "../assets/svg/linkedin.svg?react";
import GithubIcon from "../assets/svg/github.svg?react";
import MailIcon from "../assets/svg/mail.svg?react";
import LayoutReveal from "../ui/LayoutReveal";
import AnimatedLine from "../ui/AnimatedLine";

export default function Contact() {
  return (

    

      <section id="contact" className="pt-12 text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950 dark:text-slate-200">
        
        <LayoutReveal>

          <div className="flex md:flex-row justify-start items-center gap-12 md:gap-24 lg:gap-28 xl:gap-28 2xl:gap-32">
            <div className="flex flex-col items-start md:items-center py-4 text-left md:w-full">
                    <h2 className="flex items-center w-full md:text-2xl">
                        <span className="w-2 h-2 rounded-full bg-slate-950 dark:bg-slate-200 mr-2"></span>
                        <span className="relative flex items-center mr-4 font-extralight tracking-wider">            
                        CONTACTO
                        </span>
                        <AnimatedLine/>
                    </h2>

                    <LayoutReveal>
                      <div className="max-w-2xl mb-8 px-4 pt-6 md:pt-10 text-left md:text-center">
                        <p className="text-lg md:text-xl md:text-left lg:text-2xl text-slate-600 dark:text-slate-200">
                          ¿Tienes un proyecto en mente o quieres colaborar?
                        </p>
                      </div>
                    </LayoutReveal>

                    
                   {/* Redes sociales */}
                    <LayoutReveal isHero>
                      <div className="flex flex-col lg:text-lg md:flex-row px-4 gap-4 md:gap-10 font-extralight text-slate-600 dark:text-slate-200">
                        
                        {/* Linkedin */}
                        <a
                          href="https://www.linkedin.com/in/maykelldacostaramos/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Perfil de Linkedin de Maykell Da Costa Ramos"
                          className="group flex items-center gap-3 transition"
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black group-hover:bg-indigo-700 transition">
                            <LinkedinIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="flex items-center h-12 group-hover:text-indigo-400 transition translate-y-1">
                            Linkedin
                          </span>
                        </a>

                        {/* Github */}
                        <a
                          href="https://github.com/MaykelldaCostaRamos"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Perfil de Github de Maykell Da Costa Ramos"
                          className="group flex items-center gap-3 transition"
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black group-hover:bg-indigo-700 transition">
                            <GithubIcon className="w-6 h-6 text-white" aria-hidden="true" />
                          </div>
                          <span className="flex items-center h-12 group-hover:text-indigo-400 transition translate-y-1">
                            Github
                          </span>
                        </a>

                        {/* Email */}
                        <a
                          onClick={() => (window.location.href = "mailto:mkpako2009@hotmail.com")}
                          name="Email"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Enviar email a mkpako2009@hotmail.com"
                          className="group flex items-center gap-3 transition cursor-pointer"
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black group-hover:bg-indigo-700 transition">
                            <MailIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="flex items-center h-12 group-hover:text-indigo-400 transition">
                            Email
                          </span>
                        </a>
                      </div>
                    </LayoutReveal>


                    

                    <LayoutReveal isHero>
                      <nav className="flex flex-nowrap text-center tracking-tight px-14 pt-10 md:pt-14 gap-6 md:gap-12 text-base lg:text-lg dark:text-slate-200">
                        <a
                          href="#about"
                          className="whitespace-nowrap hover:text-slate-500 transition"
                        >
                          Sobre mí
                        </a>
                        <a
                          href="#project"
                          className="whitespace-nowrap hover:text-slate-500 transition"
                        >
                          Proyectos
                        </a>              
                        <button type="button" name="Email"
                          onClick={() =>
                            (window.location.href = "mailto:mkpako2009@hotmail.com")
                          }
                          target="_blank" rel="noreferrer noopener" className="whitespace-nowrap hover:text-slate-500 transition"
                        >
                          Contacto
                        </button>
                      </nav>
                    </LayoutReveal>

            </div>
          </div>
        </LayoutReveal>

        <LayoutReveal isHero>
          <div className="text-center text-sm md:py-4 text-slate-900/40 dark:text-slate-500">
            <p>&copy; 2025 Maykell da Costa Ramos</p>
          </div>
        </LayoutReveal>
          

      </section>

  );
}

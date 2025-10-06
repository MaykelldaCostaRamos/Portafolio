import LinkedinIcon from "../assets/svg/linkedin.svg?react";
import GithubIcon from "../assets/svg/github.svg?react";
import MailIcon from "../assets/svg/mail.svg?react";
import LayoutReveal from "../ui/LayoutReveal";

export default function Contact() {
  return (

    

      <section id="contact" className="pt-12 text-base px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 max-w-screen-xl mx-auto text-slate-950">
        
        <LayoutReveal>

          <div className="flex md:flex-row justify-start items-center gap-12 md:gap-24 lg:gap-28 xl:gap-28 2xl:gap-32">
            <div className="flex flex-col items-start md:items-center py-4 text-left md:w-full">
                    <h2 className="flex items-center w-full md:text-2xl">
                        <span className="w-2 h-2 rounded-full bg-slate-950 dark:bg-slate-200 mr-2"></span>
                        <span className="relative flex items-center mr-4 font-extralight tracking-wider">            
                        CONTACTO
                        </span>
                        <span className="flex-grow h-[1px] bg-slate-950/50 dark:bg-slate-200"></span>
                    </h2>

                    <LayoutReveal>
                      <div className="max-w-2xl mb-8 px-4 pt-6 md:pt-10 text-left md:text-center">
                        <p className="text-lg md:text-xl md:text-left text-slate-600 dark:text-slate-200">
                          ¿Tienes un proyecto en mente o quieres colaborar?
                        </p>
                      </div>
                    </LayoutReveal>

                    
                    {/* Redes sociales */}
                      <LayoutReveal isHero>
                        <div className="flex flex-col md:flex-row px-4 gap-4 md:gap-10 font-extralight tracking-widest text-slate-600 dark:text-slate-200">
                          
                          {/* Linkedin */}
                          <a
                            href="https://www.linkedin.com/in/maykelldacostaramos/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Perfil de Linkedin de Maykell Da Costa Ramos"
                            className="group flex items-center gap-2 transition"
                          >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black group-hover:bg-indigo-700 transition">
                              <LinkedinIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="group-hover:text-slate-500 transition">Linkedin</span>
                          </a>

                          {/* Github */}
                          <a
                            href="https://github.com/MaykelldaCostaRamos"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Perfil de Github de Maykell Da Costa Ramos"
                            className="group flex items-center gap-2 transition"
                          >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black group-hover:bg-indigo-700 transition">
                              <GithubIcon className="w-7 h-7 text-white" aria-hidden="true" />
                            </div>
                            <span className="group-hover:text-slate-500 transition">Github</span>
                          </a>

                          {/* Email */}
                          <a
                            onClick={() =>
                              (window.location.href = "mailto:mkpako2009@hotmail.com")
                            }
                            name="Email"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Enviar email a mkpako2009@hotmail.com"
                            className="group flex items-center gap-2 transition cursor-pointer"
                          >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black group-hover:bg-indigo-700 transition">
                              <MailIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="group-hover:text-slate-500 transition">Email</span>
                          </a>
                        </div>
                      </LayoutReveal>

                    

                    <LayoutReveal isHero>
                      <nav className="flex flex-wrap text-center px-14 pt-10 md:pt-14 gap-6 md:gap-12 text-base dark:text-slate-200">
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

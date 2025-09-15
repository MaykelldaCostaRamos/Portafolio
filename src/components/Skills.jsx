import { motion } from "framer-motion";

import { ReactComponent as HTMLIcon } from "../assets/svg/html5.svg";
import { ReactComponent as CSSIcon } from "../assets/svg/css3.svg";
import { ReactComponent as JSIcon } from "../assets/svg/js.svg";
import { ReactComponent as NodeIcon } from "../assets/svg/node-js.svg";
import { ReactComponent as REACTIcon } from "../assets/svg/react.svg";

export default function Skills() {
  const skills = ["HTML", "CSS3", "JavaScript", "React-JS", "NODE.JS"];
  const loopSkills = [...skills, ...skills];


  const skillIcons = {
    HTML: HTMLIcon,
    CSS3: CSSIcon,
    JavaScript: JSIcon,
    "React-JS": REACTIcon,
    "NODE.JS": NodeIcon 
  }



  return (
    <section id="skills" className="w-full overflow-hidden">
      <div className="px-6">
        <div className="relative flex items-center w-full mt-4 overflow-hidden">
          <p className="bg-indigo-600 shadow-sm shadow-indigo-400 text-slate-100 text-lg font-bold p-2 z-10 shrink-0 rounded-lg">
            Stack
          </p>

          
          <motion.div
            className="absolute left-0 flex gap-8 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
         {/*    {loopSkills.map((skill, i) => (
              <span
                key={i}
                className="text-black text-lg font-semibold px-4"
              >
                {skill}
              </span>
            ))}*/}


            {loopSkills.map((skill, i) => {
                const Icon = skillIcons[skill]; // obtenemos el SVG correspondiente
                return (
                    <span key={i} className="flex items-center gap-2 text-black text-lg font-semibold px-4">
                    <Icon className="w-6 h-6" /> {/* SVG */}
                    {skill} {/* Texto */}
                    </span>
                );
                })}

          </motion.div>
        </div>
      </div>
    </section>
  );
}

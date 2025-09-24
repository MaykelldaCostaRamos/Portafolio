import { motion } from "framer-motion";

import HTMLIcon from "../assets/svg/html5.svg?react";
import CSSIcon from "../assets/svg/css3.svg?react";
import JSIcon from "../assets/svg/js.svg?react";
import NodeIcon from "../assets/svg/node-js.svg?react";
import ReactIcon from "../assets/svg/react.svg?react";
import TailwindcssIcon from "../assets/svg/tailwindcss.svg?react";

export default function Skills() {
  const skills = ["HTML", "CSS3", "JavaScript", "React-JS", "Node.js", "Tailwindcss"];
  const skillIcons = { HTML: HTMLIcon, CSS3: CSSIcon, JavaScript: JSIcon, "React-JS": ReactIcon, "Node.js": NodeIcon, Tailwindcss: TailwindcssIcon};
  const loopSkills = [...skills, ...skills];

  return (
    <section id="skill" className="w-full overflow-hidden py-3 text-base">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36">
        <div className="relative flex items-center w-full overflow-hidden">
      
          <p className="relative bg-black text-white font-black md:text-xl lg:text-2xl p-3 z-10 shrink-0 rounded-lg overflow-hidden">
            Stack
            <span className="absolute top-1/2 right-[-90%] w-5 h-5 bg-indigo-600/50 rounded-full blur-sm animate-orbit-alt pointer-events-none" />
            <span className="absolute top-1/6 right-[-10%] w-5 h-5 bg-amber-400/30 rounded-full blur-sm animate-orbit pointer-events-none" />
            <span className="absolute top-1/2 left-[30%] w-5 h-5 bg-cyan-500/50 rounded-full blur-sm animate-orbit pointer-events-none" />
          </p>  

          {/* Ticker Motion */}
          <motion.div
            className="absolute left-0 flex gap-6 md:gap-8 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: "loop" , duration: 20, ease: "linear" }}
          >
            {loopSkills.map((skill, i) => {
              const Icon = skillIcons[skill];
              return (
                <span key={i} className="flex items-center gap-2 text-black text-base md:text-lg lg:text-xl font-semibold px-4">
                  {Icon && <Icon className="w-5 md:w-6 h-5 md:h-6" />}
                  {skill}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

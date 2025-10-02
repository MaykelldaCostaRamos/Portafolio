import { motion } from "framer-motion";

export default function WaveText({ text = "" }) {
  const letters = text.split("");

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      transition={{ staggerChildren: 0.05 }}
      className="inline-block"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnimation}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

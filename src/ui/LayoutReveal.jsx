import { motion } from "framer-motion";

const variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  },
};

export default function LayoutReveal({
  children,
  className = "",
  isHero = false,
}) {
  return (
    <motion.div
      initial="hidden"
      animate={isHero ? "visible" : undefined}
      whileInView={isHero ? undefined : "visible"}
      variants={variants}
      viewport={isHero ? undefined : { once: false, amount: 0.15 }}
      className={`${className} will-change-transform will-change-opacity`}
    >
      {children}
    </motion.div>
  );
}

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
    transition: { duration: 1.3, ease: "easeInOut" }
  },
};

export default function LayoutReveal({
  children,
  className = "",
  isHero = false,
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isHero ? "visible" : undefined}
        whileInView={isHero ? undefined : "visible"}
        variants={variants}
        viewport={isHero ? undefined : { once: true, amount: 0.3 }}
        className={`${className} will-change-transform will-change-opacity`}
      >
        {children}
      </motion.div>
    </div>
  );
}


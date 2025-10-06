import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // disparar cada vez

  return (
    <motion.span
      ref={ref}
      className="flex-1 h-[1px] bg-slate-950/30 dark:bg-slate-200 origin-left"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      transition={{
        duration: 2, // velocidad de crecimiento
        ease: "easeInOut",
      }}
    />
  );
}

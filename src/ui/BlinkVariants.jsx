import { motion } from "framer-motion";

const blinkVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: [0, 1, 0.6, 1],
    transition: {
      duration: 4.5,
      ease: "easeInOut",
    },
  },
};

export default function BlinkVariants({ children }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={blinkVariants}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

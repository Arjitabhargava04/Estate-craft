import type { ReactNode } from "react";
import { motion } from "framer-motion";

const SlideUp = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
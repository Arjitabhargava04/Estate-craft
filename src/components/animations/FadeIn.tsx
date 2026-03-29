import type { ReactNode } from "react";
// Importing 'motion' from Framer Motion for the actual animation logic
import { motion } from "framer-motion";
// Importing 'useInView' - the tool that tells us when an element is visible on the user's screen
import { useInView } from "react-intersection-observer";

// FadeIn Component
//This is a 'wrapper' component.
// Any content you put inside <FadeIn>...</FadeIn> will slide up and fade in automatically.

const FadeIn = ({
  children, // The content to animate
  delay = 0, // How long to wait before starting
  duration = 0.6, // How long should the animation take
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Start animating when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { PROJECT_NAME } from "../../utils/constants";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden bg-black"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </motion.div>

      {/* Floating Gradient Orb */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />

      <Container className="relative z-10">
        <motion.div
          style={{ y: yText, opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-blue-300">
              Legacy of Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                {PROJECT_NAME}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl mx-auto text-xl text-gray-300 font-light leading-relaxed mb-10"
          >
            A sanctuary of sophistication where modern architecture meets
            timeless luxury. Your new home in the heart of Pune awaits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => document.getElementById("inquiry-section")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black hover:bg-gray-100 shadow-2xl"
            >
              Book Site Visit
            </Button>
            <button className="px-8 py-4 text-white font-medium hover:text-blue-400 border border-white/10 rounded-lg backdrop-blur-sm transition-all">
              Discover Lifestyle
            </button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
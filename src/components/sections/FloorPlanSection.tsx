import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ImageModal from "../common/ImageModal";

const FloorPlanSection = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [active, setActive] = useState("2bhk");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images: Record<string, string[]> = {
    "2bhk": ["/images/2bhk/living.jpg", "/images/2bhk/bedroom.jpg", "/images/2bhk/kitchen.jpg", "/images/2bhk/bathroom.jpg", "/images/2bhk/balcony.jpg"],
    "3bhk": ["/images/3bhk/living.png", "/images/3bhk/bedroom1.png", "/images/3bhk/bedroom2.png", "/images/3bhk/kitchen.png", "/images/3bhk/balcony.png"],
    "penthouse": ["/images/penthouse/living.png", "/images/penthouse/bedroom.png", "/images/penthouse/terrace.png", "/images/penthouse/kitchen.png", "/images/penthouse/balcony.png"],
  };

  return (
    <section ref={ref} className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 space-y-10 lg:sticky lg:top-32">
            <div>
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Select Your space</span>
              <SectionTitle
                title="Luxury Apartments"
                className="text-left mx-0 text-white"
              />
              <p className="text-gray-400 font-light leading-relaxed mt-4">
                Explore our meticulously planned layouts, designed to maximize natural light and urban connectivity.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {["2bhk", "3bhk", "penthouse"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActive(type)}
                  className={`group flex items-center justify-between px-8 py-5 rounded-2xl transition-all duration-500 ${active === type
                    ? "bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                >
                  <span className="font-bold tracking-widest text-sm uppercase">{type}</span>
                  <div className={`w-8 h-px transition-all duration-500 ${active === type ? "bg-white w-12" : "bg-white/20 group-hover:w-12"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {images[active].map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square rounded-[32px] overflow-hidden cursor-zoom-in bg-white/5 border border-white/10 shadow-2xl"
                    onClick={() => setSelectedImg(img)}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                        Space 0{index + 1}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                        <span className="text-white font-bold text-xs uppercase tracking-wider">Expand Details</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      <ImageModal
        isOpen={selectedImg !== null}
        onClose={() => setSelectedImg(null)}
        imageSrc={selectedImg || ""}
      />
    </section>
  );
};

export default FloorPlanSection;
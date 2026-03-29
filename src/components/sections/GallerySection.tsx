import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../animations/FadeIn";
import ImageModal from "../common/ImageModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const GallerySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <section ref={ref} className="py-32 bg-transparent relative overflow-hidden">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Project Gallery"
            subtitle="A visual journey through architecture and design excellence."
          />
        </FadeIn>

        {inView && (
          <FadeIn delay={0.2}>
            <div className="relative group">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="gallery-swiper !pb-12"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative aspect-[4/3] rounded-[32px] overflow-hidden group/item cursor-zoom-in border border-gray-100 shadow-xl"
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/90 backdrop-blur-md text-black px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">View Large</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </FadeIn>
        )}
      </Container>

      <ImageModal
        isOpen={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        imageSrc={selectedImg || ""}
      />
    </section>
  );
};

export default GallerySection;
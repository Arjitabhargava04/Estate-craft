import { useState, useEffect } from "react";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import FadeIn from "../../components/animations/FadeIn";
import ImageModal from "../../components/common/ImageModal";
import SEO from "../../components/common/SEO";
import { PROJECT_NAME } from "../../utils/constants";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  const sections = [
    {
      title: "Amenities",
      images: [
        "/images/amenities/pool.png",
        "/images/amenities/gym.png",
        "/images/amenities/garden.png",
      ],
    },
    {
      title: "Luxury Rooms",
      images: [
        "/images/2bhk/living.jpg",
        "/images/3bhk/bedroom1.png",
        "/images/penthouse/bedroom.png",
        "/images/img1.jpg",
        "/images/img2.jpg",
      ],
    },
    {
      title: "Kitchens",
      images: [
        "/images/2bhk/kitchen.jpg",
        "/images/3bhk/kitchen.png",
        "/images/penthouse/kitchen.png",
      ],
    },
    {
      title: "Balcony & Views",
      images: [
        "/images/2bhk/balcony.jpg",
      ],
    },
  ];

  return (
    <section className="py-24 bg-transparent min-h-screen">
      <SEO
        title="Project Gallery"
        description={`View high-resolution images of our luxury interiors, world-class amenities, and modern architectural design at ${PROJECT_NAME}.`}
      />
      <Container>
        <SectionTitle
          title="Project Gallery"
          subtitle={`Explore the exquisite details and premium amenities of ${PROJECT_NAME}.`}
        />

        <div className="space-y-20 mt-16">
          {sections.map((section, sIndex) => (
            <div key={sIndex}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-0.5 bg-blue-600 rounded-full"></span>
                {section.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.map((img, iIndex) => (
                  <FadeIn key={iIndex}>
                    <div
                      className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/3] cursor-zoom-in"
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img}
                        alt={`${section.title} ${iIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-medium border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm">
                          View Large
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
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

export default Gallery;
// Importing motion for animations and icons for the features
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaSwimmingPool,
  FaTree,
  FaShieldAlt,
  FaParking,
  FaWifi,
} from "react-icons/fa";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const AMENITIES_LIST = [
  {
    icon: <FaSwimmingPool size={40} />,
    title: "Infinity Pool",
    desc: "Temperature controlled luxury pool.",
  },
  {
    icon: <FaDumbbell size={40} />,
    title: "Modern Gym",
    desc: "World-class fitness equipment.",
  },
  {
    icon: <FaTree size={40} />,
    title: "Zen Garden",
    desc: "Peaceful landscaped green spaces.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "24/7 Security",
    desc: "Advanced surveillance & personnel.",
  },
  {
    icon: <FaParking size={40} />,
    title: "Private Parking",
    desc: "Spacious multi-level arrangement.",
  },
  {
    icon: <FaWifi size={40} />,
    title: "Smart Living",
    desc: "High-speed WiFi & home automation.",
  },
];

const AmenitiesSection = () => {
  return (
    <section className="py-32 bg-transparent relative">
      <Container>
        <SectionTitle
          title="World-Class Amenities"
          subtitle="Designed to provide an unparalleled living experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {AMENITIES_LIST.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10, // Moves up 10 pixels
                rotateX: 5, // Tilts forward
                rotateY: 5, // Tilts sideways
                scale: 1.02, // Grows slightly
              }}
              className="p-8 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex justify-center mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-black transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-light italic">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AmenitiesSection;

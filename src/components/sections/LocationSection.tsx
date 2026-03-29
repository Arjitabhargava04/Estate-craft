import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../animations/FadeIn";
import { PROJECT_NAME, ADDRESS, CONTACT_PHONE, CONTACT_EMAIL } from "../../utils/constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Prime Location"
            subtitle="Strategically located in the heart of Pune with seamless connectivity."
          />
        </FadeIn>

        <div className="relative mt-16 rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-white group">
          <div className="w-full h-[600px] grayscale group-hover:grayscale-0 transition-all duration-1000">
            <iframe
              className="w-full h-full border-none"
              src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          <div className="absolute bottom-10 left-10 right-10 md:right-auto md:w-[400px]">
            <FadeIn>
              <div className="p-10 bg-white/90 backdrop-blur-3xl rounded-[32px] shadow-2xl border border-white/40 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{PROJECT_NAME}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 font-light leading-relaxed">{ADDRESS}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-blue-600 flex-shrink-0" />
                    <p className="text-gray-600 font-light">{CONTACT_PHONE}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-600 flex-shrink-0" />
                    <p className="text-gray-600 font-light">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all">
                  Get Directions
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocationSection;
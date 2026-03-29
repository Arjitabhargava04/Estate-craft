import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../animations/FadeIn";
import { PROJECT_NAME } from "../../utils/constants";

const AboutProject = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden selection:bg-gray-900 selection:text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/img1.jpg"
                  className="w-full h-full object-cover"
                  alt="Living room"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white hidden md:block">
                <img
                  src="/images/img2.jpg"
                  className="w-full h-full object-cover"
                  alt="Kitchen"
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn>
              <div className="text-left">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                  The Vision
                </span>
                <SectionTitle
                  title="Crafting a New Standard of Living"
                  className="text-left w-full mx-0"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                {PROJECT_NAME} offers premium residential homes with
                modern architecture, landscaped surroundings, and world-class
                amenities. Located in the heart of Pune, the project provides
                excellent connectivity to major IT hubs.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <FadeIn>
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-gray-900">120+</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Luxury Units</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-gray-900">2.5</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Acres Area</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutProject;
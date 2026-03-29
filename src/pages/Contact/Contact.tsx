import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import FadeIn from "../../components/animations/FadeIn";
import SEO from "../../components/common/SEO";

import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  ADDRESS,
  PROJECT_NAME,
} from "../../utils/constants";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const loadingToast = toast.loading("Sending message...");

    const templateParams = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      reply_to: data.email,
      message: `Message from Contact Page:
                Name: ${data.name}
                Phone: ${data.phone}
                User Email: ${data.email}
                
                Content:
                ${data.message}`,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! We'll contact you soon.");
        reset();
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  const contactItems = [
    { icon: <FaPhoneAlt />, title: "Call Us", value: CONTACT_PHONE, sub: "Mon - Sat, 9am - 6pm" },
    { icon: <FaEnvelope />, title: "Email Us", value: CONTACT_EMAIL, sub: "Response within 24 hours" },
    { icon: <FaMapMarkerAlt />, title: "Visit Us", value: ADDRESS, sub: "Click for directions" },
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-transparent min-h-screen">
      <SEO
        title="Contact Us"
        description={`Have questions about ${PROJECT_NAME}? Get in touch with our luxury property consultants to schedule a site visit or learn more about pricing.`}
      />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-40" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Get in touch</span>
            <SectionTitle
              title="We're Here to Help You Find Your Dream Home"
              className="mb-0"
            />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <FadeIn key={index}>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                      <p className="text-xl font-bold text-gray-900 mb-0.5">{item.value}</p>
                      <p className="text-sm text-gray-500 font-light italic">{item.sub}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="pt-8">
              <FadeIn>
                <div className="h-[350px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <iframe
                    className="w-full h-full"
                    src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                  ></iframe>
                </div>
              </FadeIn>
            </div>

            <FadeIn>
              <div className="flex items-center gap-6 pt-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Connect:</p>
                <div className="flex gap-4">
                  {[FaLinkedin, FaInstagram, FaFacebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn>
              <div className="p-10 md:p-16 bg-white rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-500" />

                <div className="relative z-10 space-y-10">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Send an Inquiry</h3>
                    <p className="text-gray-500 font-light leading-relaxed italic">"Fill out the form below, and one of our luxury property consultants will contact you shortly."</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input
                          {...register("name", { required: true })}
                          placeholder="Ex: Alexander Pierce"
                          className={`w-full bg-gray-50/50 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-100'} p-4 focus:border-blue-600 outline-none transition-all font-light text-lg placeholder:text-gray-300`}
                        />
                        {errors.name && <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Required</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input
                          {...register("phone", { required: true })}
                          placeholder="+91 0000 000 000"
                          className={`w-full bg-gray-50/50 border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-100'} p-4 focus:border-blue-600 outline-none transition-all font-light text-lg placeholder:text-gray-300`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Required</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email address</label>
                      <input
                        {...register("email", { required: true })}
                        placeholder="alex@example.com"
                        className={`w-full bg-gray-50/50 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-100'} p-4 focus:border-blue-600 outline-none transition-all font-light text-lg placeholder:text-gray-300`}
                      />
                      {errors.email && <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Required</p>}
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea
                        {...register("message")}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-gray-50/50 border-b-2 border-gray-100 p-4 focus:border-blue-600 outline-none transition-all font-light text-lg min-h-[150px] resize-none placeholder:text-gray-300"
                      ></textarea>
                    </div>

                    <Button className="w-full py-6 rounded-[24px] text-xl font-black uppercase tracking-[0.1em] shadow-2xl shadow-blue-200/50 bg-blue-600 hover:bg-black transition-all transform active:scale-95">
                      Send message
                    </Button>
                  </form>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
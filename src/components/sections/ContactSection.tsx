import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../animations/FadeIn";
import Button from "../common/Button";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
}

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading("Sending inquiry...");

    const templateParams = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      reply_to: data.email,
      message: `New Inquiry for Site Visit.
                Name: ${data.name}
                Phone: ${data.phone}
                User Email: ${data.email}`,
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
        toast.success("Inquiry sent successfully! We'll contact you soon.");
        reset();
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send inquiry. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section id="inquiry-section" className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-50" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <FadeIn>
            <div className="h-full min-h-[400px] rounded-[32px] overflow-hidden shadow-2xl relative group">
              <img
                src="/images/img4.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Architecture"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white space-y-2">
                  <h3 className="text-3xl font-bold">Ready to Visit?</h3>
                  <p className="text-gray-200 font-light text-lg">Schedule a private tour of our luxury suites and world-class amenities.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="p-10 md:p-14 bg-gray-50 rounded-[32px] border border-gray-100 shadow-sm space-y-10">
              <div>
                <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Reservation</span>
                <SectionTitle
                  title="Secure Your Site Visit"
                  className="text-left mx-0 mb-0"
                />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="John Doe"
                      className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-gray-200'} p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-light`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">Name is required</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      placeholder="+91 000 000 0000"
                      className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-200'} p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-light`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">Phone is required</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                  <input
                    {...register("email", { required: true })}
                    placeholder="john@example.com"
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-light`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">Email is required</p>}
                </div>

                <Button className="w-full py-5 rounded-2xl text-lg font-bold shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:bg-blue-600 hover:scale-[1.02]">
                  Confirm Site Visit
                </Button>

                <p className="text-center text-xs text-gray-400 font-light">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
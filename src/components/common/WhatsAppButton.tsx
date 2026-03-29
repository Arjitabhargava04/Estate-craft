import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER, PROJECT_NAME } from "../../utils/constants";

const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-8 right-8 z-[60] flex items-center group">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mr-4 px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg text-gray-700 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block"
            >
                Chat with us
            </motion.div>

            <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in ${PROJECT_NAME}. Can you provide more details?`}
                target="_blank"    // To open whtsp in new tab or window
                rel="noopener noreferrer" //noopener :-  Closes the connection with previous website and noreferrer :-  Prevents the previous website from knowing where the user went next or come from 
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1
                }}
                className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_60px_rgba(37,211,102,0.6)] transition-shadow duration-300 overflow-visible"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
                />

                <FaWhatsapp size={32} />
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;

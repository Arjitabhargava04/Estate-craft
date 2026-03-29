import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc }: ImageModalProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
                >
                    <motion.button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IoClose size={32} />
                    </motion.button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-7xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={imageSrc}
                            alt="Large view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;

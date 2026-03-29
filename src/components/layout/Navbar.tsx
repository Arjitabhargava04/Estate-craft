import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// Importing motion for smooth animations
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiHome, HiPhotograph, HiPhone, HiCalendar } from "react-icons/hi";
import { PROJECT_NAME } from "../../utils/constants";

const Navbar = () => {
  // 'scrolled' tells us if the user has moved down the page (so we can shrink the header)
  const [scrolled, setScrolled] = useState(false);
  // 'isOpen' manages the mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <HiHome className="w-5 h-5" /> },
    { name: "Gallery", path: "/gallery", icon: <HiPhotograph className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <HiPhone className="w-5 h-5" /> },
  ];

  // Variants for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -10, originX: "90%", originY: "0%" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 400,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" as const }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${scrolled ? "top-2" : "top-0"
        }`}
    >
      <div
        className={`container mx-auto transition-all duration-500 rounded-full flex justify-between items-center ${scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border border-white/20 py-3 px-8 max-w-5xl"
          : "bg-transparent py-4 px-4 max-w-7xl"
          }`}
      >
        <Link
          to="/"
          className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"
            }`}
        >
          {PROJECT_NAME.split(" ")[0]}
          <span className="font-light text-gray-400">
            {PROJECT_NAME.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${scrolled ? "text-gray-700" : "text-white/90"
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          ))}

          <button
            onClick={() => {
              if (location.pathname !== "/") {
                window.location.href = "/#inquiry-section";
              } else {
                document
                  .getElementById("inquiry-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${scrolled
              ? "bg-gray-900 text-white hover:bg-black shadow-md"
              : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
          >
            Book Visit
          </button>
        </div>

        {/* Mobile Toggle and Dropdown Container */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors duration-300 ${scrolled || isOpen ? "text-gray-900" : "text-white"
              }`}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          {/* Improved Mobile Menu Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-[calc(100%+12px)] right-0 w-64 p-2 bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-40 overflow-hidden"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.div key={link.path} variants={itemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3 rounded-[18px] text-sm font-bold transition-all ${location.pathname === link.path
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "text-gray-700 hover:bg-gray-50 bg-transparent"
                          }`}
                      >
                        <span className={`${location.pathname === link.path ? "text-white" : "text-blue-500"}`}>
                          {link.icon}
                        </span>
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants} className="h-px bg-gray-100 my-2 mx-4" />

                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname !== "/") {
                          window.location.href = "/#inquiry-section";
                        } else {
                          document
                            .getElementById("inquiry-section")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-gray-900 text-white rounded-[18px] text-sm font-bold shadow-lg shadow-gray-200 active:scale-95 transition-transform"
                    >
                      <HiCalendar className="w-5 h-5 text-blue-400" />
                      Book Visit
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

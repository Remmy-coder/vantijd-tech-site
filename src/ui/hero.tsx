import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const title = "VANTIJD";
  const letters = [...title].map((letter, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.5 + i * 0.03,
            ease: "circIn",
          },
        },
      }}
      initial="hidden"
      animate={controls}
      className="inline-block tracking-widest"
    >
      {letter}
    </motion.span>
  ));

  return (
    <motion.main
      id="#"
      className="relative h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}hero3.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-opacity-100 backdrop-blur-sm grayscale-80">
      </div>

      <div className="z-10 text-center px-4 sm:px-6 max-w-4xl">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight font-mono">
          {letters}
        </h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.2, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          Transforming ideas into powerful digital solutions for tomorrow's
          challenges.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 1.5, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg w-full sm:w-auto cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "", 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => {
              const servicesSection = document.getElementById("#services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Our Services
          </motion.button>

          <motion.button
            className="px-6 sm:px-8 py-3 bg-transparent border-2 border-black text-white font-semibold rounded-lg shadow-lg w-full sm:w-auto cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "", 
              color: "#ffffff",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => {
              const footerSection = document.getElementById("#footer");
              if (footerSection) {
                footerSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VantijdLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.1 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-48 w-48 rounded-full bg-cyan-400/20 blur-xl"
        />

        {/* Company name */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10 mb-8 mt-4"
        >
          {/* Vantijd Text */}
          <div className="flex justify-center">
            {["V", "a", "n", "t", "i", "j", "d", " ", "T", "e", "c", "h"].map((
              letter,
              i,
            ) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className={`font-bold text-2xl md:text-3xl ${
                  letter === " " ? "w-2" : ""
                } ${i < 7 ? "text-cyan-400" : "text-cyan-200"}`}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="flex space-x-1.5">
              {["L", "o", "a", "d", "i", "n", "g"].map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                  className="inline-block text-sm text-cyan-300"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 h-0.5 w-16 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

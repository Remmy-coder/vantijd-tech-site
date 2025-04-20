import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, Cpu, Smartphone } from "lucide-react";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string | null>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies that drive results.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
      ],
      icon: (
        <Code
          className="h-10 w-10 text-cyan-800"
          aria-label="Web Development icon"
        />
      ),
    },
    {
      id: 2,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Real-time Updates", "Offline Functionality"],
      icon: (
        <Smartphone
          className="h-10 w-10 text-cyan-800"
          aria-label="Mobile Applications icon"
        />
      ),
    },
    {
      id: 3,
      title: "AI Solutions",
      description:
        "Intelligent systems that analyze data, automate processes, and provide actionable insights.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Predictive Analytics",
      ],
      icon: (
        <Cpu
          className="h-10 w-10 text-cyan-800"
          aria-label="AI Solutions icon"
        />
      ),
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isAutoplayPaused) {
      timer = setTimeout(nextSlide, 5000);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, isAutoplayPaused]);

  const variants = {
    enter: (dir: string) => ({ x: dir === "right" ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: string) => ({ x: dir === "right" ? -300 : 300, opacity: 0 }),
  };

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    initial: {
      y: 0,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-white to-cyan-50 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "100px" }}
        >
          <div className="space-y-5 text-center">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-cyan-800 text-sm font-medium mb-2">
                What We Offer
              </span>
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-cyan-900 tracking-tight">
              Our <span className="text-cyan-600">Expert</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Empowering businesses with tailored digital solutions for
              tomorrow's challenges. We blend creativity with technical
              expertise to deliver outstanding results.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          <div
            className="relative h-[480px] rounded-3xl shadow-xl bg-gradient-to-br from-cyan-100 to-cyan-800 border border-gray-200/60 overflow-hidden hidden lg:block"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <motion.div
                  className="mb-6 p-6 bg-cyan-100/30 backdrop-blur-sm rounded-2xl"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                >
                  {services[currentIndex].icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-cyan-50 mb-4">
                  {services[currentIndex].title}
                </h3>
                <p className="bg-white/90 text-gray-700 font-medium text-sm py-3 px-6 rounded-full shadow-sm border border-gray-200 mb-4">
                  {services[currentIndex].description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {services[currentIndex].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-700/70 text-white text-xs py-1 px-3 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "w-8 bg-white" : "w-4 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-cyan-900" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-cyan-900" />
            </button>
          </div>

          <div className="space-y-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial="initial"
                whileHover="hover"
                variants={cardVariants}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHovered(idx)}
                onHoverEnd={() => setHovered(null)}
                className={`group flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200/60 transition-all duration-300 ${
                  hovered === idx ? "border-cyan-300" : ""
                }`}
              >
                <div
                  className={`p-4 bg-cyan-100/40 rounded-xl shadow-inner transition-all duration-300 ${
                    hovered === idx ? "bg-cyan-200/70" : ""
                  }`}
                >
                  <motion.div
                    animate={hovered === idx ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-cyan-900 mb-2">
                      {service.title}
                    </h4>
                    <motion.div
                      animate={hovered === idx ? { x: [0, 5, 0] } : {}}
                      transition={{
                        duration: 0.5,
                        repeat: hovered === idx ? Infinity : 0,
                        repeatDelay: 1,
                      }}
                    >
                      <ChevronRight
                        className={`h-5 w-5 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </motion.div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs py-1 px-2 bg-cyan-50 text-cyan-700 rounded-md border border-cyan-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <a
                href="#contact"
                className="inline-block mt-6 py-3 px-8 bg-cyan-700 hover:bg-cyan-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Discuss Your Project
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

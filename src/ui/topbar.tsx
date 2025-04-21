import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Topbar() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    [
      "none",
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    ],
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngle((prevAngle) => (prevAngle + 4) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const orbitRadius = 24;
  const orbitX = Math.cos(orbitAngle * (Math.PI / 180)) * orbitRadius;
  const orbitY = Math.sin(orbitAngle * (Math.PI / 180)) * orbitRadius;

  const menuItems = [{ name: "Home", link: `${import.meta.env.BASE_URL}` }, {
    name: "Services",
    link: "#services",
  }, { name: "About", link: "#about" }];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ boxShadow }}
    >
      <div className="px-8 py-4 flex justify-between items-center">
        <div className="relative">
          <motion.div
            className="text-black font-bold text-xl cursor-pointer relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            VT
          </motion.div>

          <motion.div
            className="absolute w-2 h-2 bg-black rounded-full"
            style={{
              top: "35%",
              left: "40%",
              x: orbitX,
              y: orbitY,
              zIndex: 5,
            }}
          />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.link}
                  className="text-black transition-colors"
                  whileHover={{ color: "gray" }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <motion.button
            className="text-black p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen
                ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                )
                : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
            </svg>
          </motion.button>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      >
        <div className="px-6 py-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.link}
                  className="text-black text-lg block py-2"
                  whileHover={{ color: "gray", x: 5 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
}

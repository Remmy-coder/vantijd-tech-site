import { motion } from "framer-motion";
import { LetterTextIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="#footer" className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">
                Vantijd Technologies
              </h3>
              <p className="text-sm leading-6">
                Transforming ideas into digital reality through innovative
                solutions and cutting-edge technology.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "Projects", "About Us"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href=""
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((
                link,
              ) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href=""
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm">
                  Plot 1505, Ilure Arowasafe Cresent, First Estate, Amuwo Odofin
                  GRA Lagos.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <a
                  href="tel:+2348106582590"
                  className="text-sm hover:text-blue-400"
                >
                  +234 810 658 2590
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LetterTextIcon className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:info@vantijd.com"
                  className="text-sm hover:text-blue-400"
                >
                  info@vantijd.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Vantijd Tech. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

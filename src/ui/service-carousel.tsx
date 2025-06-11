import { motion } from "framer-motion";
import {
  Boxes,
  Code,
  Cpu,
  MessageSquare,
  Search,
  Smartphone,
  Truck,
} from "lucide-react";

export default function ServicesCarousel() {

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
          className="h-10 w-10 text-gray-600"
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
          className="h-10 w-10 text-gray-600"
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
          className="h-10 w-10 text-gray-600"
          aria-label="AI Solutions icon"
        />
      ),
    },
    {
      id: 4,
      title: "B2B SMS Platform",
      description:
        "Powerful messaging solutions for businesses to engage with customers through local and international SMS delivery.",
      features: [
        "Bulk Messaging",
        "2-Way Communication",
        "Global Delivery Coverage",
      ],
      icon: (
        <MessageSquare
          className="h-10 w-10 text-gray-600"
          aria-label="B2B SMS Platform icon"
        />
      ),
    },
    {
      id: 5,
      title: "Shipping Enterprise Platform",
      description:
        "Scalable logistics systems to manage shipments, track parcels, and optimize delivery operations globally.",
      features: [
        "Multi-carrier Integration",
        "Real-time Tracking",
        "Customs & Compliance Tools",
      ],
      icon: (
        <Truck
          className="h-10 w-10 text-gray-600"
          aria-label="Shipping Platform icon"
        />
      ),
    },
    {
      id: 6,
      title: "Inventory Management Systems",
      description:
        "Robust systems to monitor stock levels, forecast demand, and streamline warehouse operations.",
      features: [
        "Real-time Stock Monitoring",
        "Automated Reordering",
        "Barcode & QR Integration",
      ],
      icon: (
        <Boxes
          className="h-10 w-10 text-gray-600"
          aria-label="Inventory Systems icon"
        />
      ),
    },
    {
      id: 7,
      title: "Product Tracking Solutions",
      description:
        "Advanced product tracking tools to monitor asset movement, ensure authenticity, and improve supply chain visibility.",
      features: [
        "GPS & RFID Tracking",
        "Tamper Detection",
        "Blockchain-Backed Traceability",
      ],
      icon: (
        <Search
          className="h-10 w-10 text-gray-600"
          aria-label="Product Tracker icon"
        />
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-900 text-sm font-medium mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
            Our <span className="text-blue-500">Expert</span> Services
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto mt-4 leading-relaxed">
            Empowering businesses with tailored digital solutions for tomorrow’s
            challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 p-4 bg-gray-100 rounded-xl w-fit transition-colors duration-300 group-hover:bg-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-xs bg-gray-500 text-white px-3 py-1 rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-full shadow-lg transition-all"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

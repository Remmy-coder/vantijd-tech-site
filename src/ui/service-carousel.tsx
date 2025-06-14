import { useEffect, useState } from "react";
import {
  ArrowRight,
  Boxes,
  ChevronRight,
  Code,
  Cpu,
  MessageSquare,
  Search,
  Smartphone,
  Sparkles,
  Truck,
} from "lucide-react";

export default function ServicesCarousel() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      shadowColor: "shadow-blue-500/20",
    },
    {
      id: 2,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Real-time Updates", "Offline Functionality"],
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      shadowColor: "shadow-purple-500/20",
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
      icon: Cpu,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      shadowColor: "shadow-emerald-500/20",
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
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      shadowColor: "shadow-orange-500/20",
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
      icon: Truck,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      shadowColor: "shadow-indigo-500/20",
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
      icon: Boxes,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      shadowColor: "shadow-amber-500/20",
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
      icon: Search,
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      shadowColor: "shadow-rose-500/20",
    },
  ];

  return (
    <section
      id="#services"
      className="relative py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse">
        </div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000">
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl">
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 text-blue-700 text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            What We Offer
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Expert
            </span>{" "}
            Services
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with tailored digital solutions that transform
            challenges into opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
                className={`group relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 cursor-pointer transition-all duration-700 ease-out transform
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    ${
                  isHovered
                    ? `shadow-2xl ${service.shadowColor} scale-105 -translate-y-2`
                    : "shadow-lg hover:shadow-xl"
                }
  `}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl`}
                >
                </div>

                <div className="relative z-10">
                  <div
                    className={`mb-6 p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className={`text-xs px-3 py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white font-medium shadow-sm transition-all duration-300 ${
                          isHovered ? "scale-105" : ""
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center text-sm font-medium transition-all duration-300 ${
                      isHovered ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    <span className="mr-2">Learn More</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-3xl`}
                  >
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              onClick={() => window.location.href = "mailto:info@vantijd.com"}
            >
              <span
                className="relative z-10 flex items-center gap-2"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </button>

            <div className="text-sm text-gray-500">
              or
            </div>

            <button className="group px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              <span className="flex items-center gap-2">
                View Our Portfolio
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

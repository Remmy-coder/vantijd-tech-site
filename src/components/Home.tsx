import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Topbar from "@/ui/topbar";
import Hero from "@/ui/hero";
import ServicesCarousel from "@/ui/service-carousel";
import Footer from "@/ui/footer";
import VantijdLoader from "@/ui/vantijd-loader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 2800);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <VantijdLoader />}
      </AnimatePresence>

      {contentVisible && (
        <div className="min-h-screen">
          <Topbar />
          <Hero />
          <ServicesCarousel />
          <Footer />
        </div>
      )}
    </>
  );
}

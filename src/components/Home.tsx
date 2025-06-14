import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Topbar from "@/ui/topbar";
import Hero from "@/ui/hero";
import ServicesCarousel from "@/ui/service-carousel";
import Footer from "@/ui/footer";
import VantijdLoader from "@/ui/vantijd-loader";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 1500);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const seoData = {
    title: "VANTIJD",
    description:
      "Transforming ideas into digital reality through innovative solutions and cutting-edge technology.",
    keywords:
      "professional services, business solutions, consultation, expert services, web development, ai solutions, b2b sms, shipping enterprise platform, inventory systems, product trackers",
    author: "VANTIJD",
    url: "https://vantijd.com",
    image: `${window.location.origin}/logo.png`,
    siteName: "VANTIJD",
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:site_name" content={seoData.siteName} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={seoData.title} />
        <meta property="og:locale" content="en_US" />

        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": seoData.siteName,
            "url": seoData.url,
            "logo": `${window.location.origin}/logo.png`,
            "description": seoData.description,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-810-658-2590",
              "contactType": "customer service",
            },
            //"sameAs": [
            //  "https://www.facebook.com/yourcompany",
            //  "https://www.twitter.com/yourcompany",
            //  "https://www.linkedin.com/company/yourcompany"
            //]
          })}
        </script>
      </Helmet>
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

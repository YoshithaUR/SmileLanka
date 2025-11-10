import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Silver Adventure",
      description: "Perfect for budget travelers seeking essential experiences",
      price: "$899",
      duration: "5 days",
      image:
        "https://i.pinimg.com/736x/c0/6d/62/c06d62de135a1665983e6fd5cb7231f1.jpg",
      features: [
        "3-star accommodation",
        "Basic breakfast included",
        "Guided city tour",
        "Airport transfers",
        "24/7 customer support",
      ],
      color: "gray",
      link: "silver-adventure",
    },
    {
      id: 2,
      name: "Golden Experience",
      description:
        "Ideal for travelers wanting a balanced mix of comfort and adventure",
      price: "$899",
      duration: "5 days",
      image:
        "https://i.pinimg.com/1200x/86/ef/c4/86efc4c5e3fcd3844ca67c04932afd30.jpg",
      features: [
        "4-star accommodation",
        "Daily breakfast & dinner",
        "All major attractions visit",
        "Private transportation",
        "Professional tour guide",
        "Airport transfers",
      ],
      color: "yellow",
      link: "golden-experience",
    },
    {
      id: 3,
      name: "Premium Luxury",
      description:
        "Ultimate experience with top-tier services and exclusive access",
      price: "$2,799",
      duration: "10 days",
      image:
        "https://i.pinimg.com/1200x/4a/53/4c/4a534c0f260f33300d256e2509a30b6c.jpg",
      features: [
        "5-star luxury hotels",
        "All meals included",
        "VIP access to attractions",
        "Private chauffeur service",
        "Personal tour guide",
        "Spa & wellness treatments",
        "Airport VIP transfers",
        "24/7 concierge service",
      ],
      color: "blue",
      link: "premium-luxury",
    },
    {
      id: 4,
      name: "Cultural Heritage",
      description: "Deep dive into Sri Lanka's rich history and traditions",
      price: "$1,299",
      duration: "7 days",
      image:
        "https://i.pinimg.com/736x/e6/97/68/e69768e3843f57804d08603af25828d0.jpg",
      features: [
        "4-star accommodation",
        "Traditional Sri Lankan meals",
        "Temple visits with monks",
        "Cooking class experience",
        "Cultural dance performances",
        "Historical site tours",
        "Local artisan workshops",
      ],
      color: "orange",
      link: "cultural-heritage",
    },
    {
      id: 5,
      name: "Beach Paradise",
      description:
        "Relaxing coastal getaway with water sports and beach activities",
      price: "$1,799",
      duration: "6 days",
      image:
        "https://i.pinimg.com/1200x/b8/84/77/b88477506f62b11719eee4f66a23087c.jpg",
      features: [
        "Beachfront resort stay",
        "Daily breakfast & dinner",
        "Water sports activities",
        "Snorkeling & diving",
        "Beach volleyball & games",
        "Sunset cruise",
        "Spa treatments",
        "24/7 beach service",
      ],
      color: "teal",
      link: "beach-paradise",
    },
    {
      id: 6,
      name: "Wildlife Explorer",
      description:
        "Experience Sri Lanka’s incredible wildlife up close in national parks and nature reserves",
      price: "$1,599",
      duration: "8 days",
      image:
        "https://i.pinimg.com/1200x/66/38/22/6638227f653785e3bafc15ab7f74dd6c.jpg",
      features: [
        "4-star eco-lodges and nature resorts",
        "All meals included",
        "Safari adventures in Yala and Wilpattu",
        "Guided wildlife tours",
        "Bird watching expeditions",
        "Nature photography sessions",
        "Private transportation",
        "Airport transfers",
      ],
      color: "green",
      link: "wildlife-explorer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const nextPackage = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
  };

  const prevPackage = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + packages.length) % packages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextPackage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevPackage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const PackageCard = ({ pkg, index }) => (
    <Link
      to={`/packages/${pkg.link}`}
      className={`bg-gray-800 rounded-2xl overflow-hidden shadow-xl border-2 flex flex-col h-full ${
        pkg.color === "yellow"
          ? "border-yellow-500 shadow-yellow-500/20 hover:border-yellow-400"
          : pkg.color === "blue"
          ? "border-blue-500 shadow-blue-500/20 hover:border-blue-400"
          : pkg.color === "green"
          ? "border-green-500 shadow-green-500/20 hover:border-green-400"
          : pkg.color === "teal"
          ? "border-teal-500 shadow-teal-500/20 hover:border-teal-400"
          : pkg.color === "orange"
          ? "border-orange-500 shadow-orange-500/20 hover:border-orange-400"
          : "border-gray-700 hover:border-gray-600"
      } transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{pkg.name}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{pkg.description}</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-500 font-bold text-lg">{pkg.price}</span>
          <span className="text-gray-400 text-sm">{pkg.duration}</span>
        </div>

        <ul className="mb-6 space-y-2 flex-grow">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                  pkg.color === "yellow"
                    ? "text-yellow-500"
                    : pkg.color === "blue"
                    ? "text-blue-500"
                    : pkg.color === "green"
                    ? "text-green-500"
                    : pkg.color === "teal"
                    ? "text-teal-500"
                    : pkg.color === "orange"
                    ? "text-orange-500"
                    : "text-gray-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 mt-auto ${
            pkg.color === "yellow"
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600 hover:text-white hover:shadow-lg"
              : pkg.color === "blue"
              ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg"
              : pkg.color === "green"
              ? "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg"
              : pkg.color === "teal"
              ? "bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg"
              : pkg.color === "orange"
              ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg"
              : "bg-gray-700 text-white hover:bg-gray-600 hover:shadow-lg"
          } transform hover:-translate-y-1`}
        >
          View Details
        </button>
      </div>
    </Link>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          Our <span className="text-yellow-500">Adventure</span> Packages
        </h1>
        <p
          className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover our carefully crafted adventure packages designed to give you the ultimate Sri Lankan experience.
        </p>

        <div className="relative">
          {isMobile ? (
            <div className="flex flex-col items-center">
              <div
                className={`w-full max-w-md ${
                  direction === "next" ? "animate-slideInRight" : "animate-slideInLeft"
                }`}
              >
                <PackageCard pkg={packages[currentIndex]} index={currentIndex} />
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {packages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? "next" : "prev");
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-yellow-500" : "bg-gray-600"
                    }`}
                    aria-label={`Go to package ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex justify-center mt-8 space-x-6">
                <button
                  onClick={prevPackage}
                  className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="Previous package"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextPackage}
                  className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="Next package"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Packages;

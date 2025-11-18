import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Cultural Triangle Explorer",
      description: "Discover Sri Lanka's ancient capitals and UNESCO World Heritage sites",
      price: "$999",
      duration: "4 Night, 5 Day package",
      image:
        "https://i.pinimg.com/1200x/86/ef/c4/86efc4c5e3fcd3844ca67c04932afd30.jpg",
      features: [
        "Sigiriya Rock Fortress",
        "Dambulla Cave Temple",
        "Ancient City of Polonnaruwa",
        "Sacred City of Kandy",
        "Temple of the Tooth",
        "Traditional dance performance",
        "4-star accommodation"
      ],
      color: "yellow",
      link: "cultural-triangle",
    },
    {
      id: 2,
      name: "Hill Country Retreat",
      description: "Experience the cool climate and scenic beauty of Sri Lanka's hill country",
      price: "$899",
      duration: "4 Night, 5 Day package",
      image:
        "https://i.pinimg.com/1200x/c0/6d/62/c06d62de135a1665983e6fd5cb7231f1.jpg",
      features: [
        "Tea plantation tours in Nuwara Eliya",
        "Horton Plains National Park",
        "Scenic train ride to Ella",
        "Visit Little Adam's Peak",
        "Explore Ella Rock",
        "Traditional hill country cuisine",
        "3-star accommodation"
      ],
      color: "green",
      link: "hill-country",
    },
    {
      id: 3,
      name: "Beach Paradise Getaway",
      description: "Relax on Sri Lanka's pristine beaches with water sports and coastal activities",
      price: "$1,299",
      duration: "5 Night, 6 Day package",
      image:
        "https://i.pinimg.com/1200x/4a/53/4c/4a534c0f260f33300d256e2509a30b6c.jpg",
      features: [
        "Stay at Unawatuna or Mirissa beaches",
        "Whale watching experience",
        "Snorkeling and diving",
        "Surfing lessons",
        "Sunset cruise",
        "Ayurvedic spa treatment",
        "Beachside accommodation"
      ],
      color: "teal",
      link: "beach-paradise",
    },
    {
      id: 4,
      name: "Wildlife Safari Adventure",
      description: "Spot leopards, elephants and diverse wildlife in Sri Lanka's national parks",
      price: "$1,499",
      duration: "5 Night, 6 Day package",
      image:
        "https://i.pinimg.com/1200x/66/38/22/6638227f653785e3bafc15ab7f74dd6c.jpg",
      features: [
        "Yala National Park safari",
        "Minneriya National Park safari",
        "Udawalawe National Park safari",
        "Bird watching expeditions",
        "Nature photography sessions",
        "Stay at eco-lodges",
        "Professional wildlife guide"
      ],
      color: "safari-brown",
      link: "wildlife-safari",
    },
    {
      id: 5,
      name: "Southern Coast Explorer",
      description: "Explore the historical and cultural sites of Sri Lanka's southern coast",
      price: "$1,199",
      duration: "6 Night, 7 Day package",
      image:
        "https://i.pinimg.com/736x/e6/97/68/e69768e3843f57804d08603af25828d0.jpg",
      features: [
        "Galle Fort UNESCO site",
        "Martin Wickramasinghe Folk Museum",
        "Katharagama Temple",
        "Yala National Park",
        "Tangalle and Hiriketiya beaches",
        "Traditional fishing village visit",
        "4-star accommodation"
      ],
      color: "blue",
      link: "southern-coast",
    },
    {
      id: 6,
      name: "Ultimate Sri Lanka Experience",
      description: "Comprehensive tour covering Sri Lanka's top cultural, scenic and wildlife attractions",
      price: "$2,499",
      duration: "13 Night, 14 Day package",
      image:
        "https://i.pinimg.com/1200x/b8/84/77/b88477506f62b11719eee4f66a23087c.jpg",
      features: [
        "All major UNESCO World Heritage sites",
        "Hill country train journey",
        "Yala and Minneriya safaris",
        "Beach relaxation in Mirissa",
        "Ayurvedic spa treatments",
        "Cultural dance performances",
        "5-star luxury accommodation",
        "Private transportation",
        "VIP airport transfers"
      ],
      color: "purple",
      link: "ultimate-experience",
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
          : pkg.color === "safari-brown"
  ? "border-[#8B5E3C] shadow-[#8B5E3C]/20 hover:border-[#A46A42]"
  : pkg.color === "purple"
  ? "border-purple-500 shadow-purple-500/20 hover:border-purple-400"
  : pkg.color === "cyan"
  ? "border-cyan-500 shadow-cyan-500/20 hover:border-cyan-400"
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
                    : pkg.color === "safari-brown"
  ? "text-[#8B5E3C]"
  : pkg.color === "purple"
  ? "text-purple-500"
  : pkg.color === "cyan"
  ? "text-cyan-500"
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
              : pkg.color === "safari-brown"
  ? "bg-[#8B5E3C] text-white hover:bg-[#A46A42] hover:shadow-lg"
  : pkg.color === "purple"
  ? "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg"
  : pkg.color === "cyan"
  ? "bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow-lg"
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
          Our <span className="text-yellow-500">Sri Lankan</span> Adventure Packages
        </h1>
        <p
          className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover the best of Sri Lanka with our carefully crafted adventure packages designed to give you an authentic experience of the Pearl of the Indian Ocean.
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
        
        {/* Custom Tour Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-dashed border-yellow-500" data-aos="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">Create Your Own Tour</h2>
            <p className="text-gray-300 mb-6">
              Don't see exactly what you're looking for? Our travel experts can create a personalized Sri Lankan adventure tailored to your specific interests, budget, and schedule.
            </p>
            
            {/* Mobile view - single movable card with fixed cards */}
            {isMobile ? (
              <div className="relative">
                {/* Fixed cards - always visible */}
                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <svg className="w-8 h-8 text-yellow-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <h3 className="font-bold text-sm mb-1">Choose Your Dates</h3>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <svg className="w-8 h-8 text-yellow-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="font-bold text-sm mb-1">Personalized Pricing</h3>
                  </div>
                </div>
                
                {/* Movable card - this one can be navigated with arrows */}
                <div className="bg-gray-800/50 p-6 rounded-lg my-4">
                  <svg className="w-12 h-12 text-yellow-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <h3 className="font-bold text-lg mb-2">Customize Your Itinerary</h3>
                  <p className="text-gray-400 text-sm">Choose the destinations and experiences that interest you most</p>
                </div>
              </div>
            ) : (
              // Desktop view - all three cards
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <svg className="w-12 h-12 text-yellow-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <h3 className="font-bold text-lg mb-2">Customize Your Itinerary</h3>
                  <p className="text-gray-400 text-sm">Choose the destinations and experiences that interest you most</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <svg className="w-12 h-12 text-yellow-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <h3 className="font-bold text-lg mb-2">Choose Your Dates</h3>
                  <p className="text-gray-400 text-sm">Select travel dates that work best for your schedule</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <svg className="w-12 h-12 text-yellow-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="font-bold text-lg mb-2">Personalized Pricing</h3>
                  <p className="text-gray-400 text-sm">Get a quote tailored to your budget and preferences</p>
                </div>
              </div>
            )}
            
            <Link
              to="/custom-tour"
              className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Request Custom Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
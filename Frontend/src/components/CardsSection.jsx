import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Mountain Adventures",
      description: "Experience breathtaking hikes through misty mountains and discover hidden waterfalls.",
      image: "https://i.pinimg.com/1200x/8e/cd/93/8ecd931c5ffba0d628c0fb70e288e9fb.jpg",
      delay: 100
    },
    {
      id: 2,
      title: "Beach Getaways",
      description: "Relax on pristine beaches with crystal clear waters and golden sand shores.",
      image: "https://i.pinimg.com/736x/aa/1d/fd/aa1dfd3ed9bcfdbb3166988681f9f051.jpg",
      delay: 200
    },
    {
      id: 3,
      title: "Wildlife Safaris",
      description: "Embark on thrilling safaris to see elephants, leopards, and other wildlife in their natural habitats.",
      image: "https://i.pinimg.com/1200x/18/11/d4/1811d4cf694ab9bdecdae4d8f0a84809.jpg",
      delay: 300
    },
    {
      id: 4,
      title: "Cultural Tours",
      description: "Discover ancient temples, historical sites, and experience the rich culture of Sri Lanka.",
      image: "https://i.pinimg.com/1200x/8c/10/d0/8c10d0d593695aa7893b3503ce8f5468.jpg",
      delay: 400
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState("next"); // Track animation direction

  // Check if it's mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextCard = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-4xl font-bold text-center mb-4 text-white"
          data-aos="fade-up"
        >
          WHY CHOOSE <span className="text-yellow-500">SMILE SRI LANKA</span>?
        </h2>
        <p 
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We offer unforgettable experiences with our expertly crafted adventure packages.
        </p>
        
        <div className="relative">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-6`}>
            {isMobile ? (
              // Mobile view - show only the current card with improved animation
              <div
                className={`rounded-xl overflow-hidden shadow-xl bg-gray-800 hover:bg-gray-700 transition-all group relative ${
                  isMobile ? 'h-80' : 'h-64'
                } ${direction === "next" ? "animate-slideInRight" : "animate-slideInLeft"}`}
                data-aos="fade-up"
                data-aos-delay={cards[currentIndex].delay}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cards[currentIndex].image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cards[currentIndex].title}</h3>
                  <p className="text-gray-200 text-sm">{cards[currentIndex].description}</p>
                </div>
              </div>
            ) : (
              // Desktop view - show all cards
              cards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl overflow-hidden shadow-xl bg-gray-800 hover:bg-gray-700 transition-all group relative h-64 transform transition-transform duration-300 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={card.delay}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-200 text-sm">{card.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Card indicators for mobile */}
          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? "next" : "prev");
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Navigation Arrows - Show only on mobile view */}
        {isMobile && (
          <div className="flex justify-center mt-8 space-x-6">
            <button
              onClick={prevCard}
              className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Previous card"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextCard}
              className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Next card"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardsSection;
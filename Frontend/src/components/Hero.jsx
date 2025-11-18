import React, { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  { 
    id: 1, 
    img: "https://i.pinimg.com/1200x/9d/8b/33/9d8b339fff4bb4af87501fb32f8301c9.jpg",
    title: "Embark On The Journey Of A Lifetime",
    heading: "TRAVEL FAR, FIND YOURSELF",
    description: "Explore the world's most stunning destinations across mountains, jungles, deserts and oceans. Experience unforgettable adventures and stories to cherish forever."
  },
  { 
    id: 2, 
    img: "https://i.pinimg.com/1200x/e7/58/78/e75878cb2b6f1e8be38a5fc595de6ab7.jpg",
    title: "Embark On The Journey Of A Lifetime",
    heading: "TRAVEL FAR, FIND YOURSELF",
    description: "Explore the world's most stunning destinations across mountains, jungles, deserts and oceans. Experience unforgettable adventures and stories to cherish forever."
  },
  { 
    id: 3, 
    img: "https://i.pinimg.com/1200x/34/b9/e3/34b9e3c9651264e2a895b45748f8fb20.jpg",
    title: "Embark On The Journey Of A Lifetime",
    heading: "TRAVEL FAR, FIND YOURSELF",
    description: "Explore the world's most stunning destinations across mountains, jungles, deserts and oceans. Experience unforgettable adventures and stories to cherish forever."
  },

  { 
    id: 4, 
    img: "https://i.pinimg.com/736x/77/a9/3c/77a93c757d3cef7edb8b0a5ca13763ac.jpg",
    title: "Embark On The Journey Of A Lifetime",
    heading: "TRAVEL FAR, FIND YOURSELF",
    description: "Explore the world's most stunning destinations across mountains, jungles, deserts and oceans. Experience unforgettable adventures and stories to cherish forever."
  },
  { 
    id: 5, 
    img: "https://i.pinimg.com/736x/89/2e/aa/892eaad87e548ec356824f15343ae025.jpg",
    title: "Embark On The Journey Of A Lifetime",
    heading: "TRAVEL FAR, FIND YOURSELF",
    description: "Explore the world's most stunning destinations across mountains, jungles, deserts and oceans. Experience unforgettable adventures and stories to cherish forever."
  },
];

// Background images that correspond to the carousel images
const backgroundImages = [
  "https://images.unsplash.com/photo-1598152642931-bf0e8635fdf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "https://images.unsplash.com/photo-1567157802189-aadc856131dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1187",
  "https://images.pexels.com/photos/16508231/pexels-photo-16508231.jpeg",
  "https://images.pexels.com/photos/4403903/pexels-photo-4403903.jpeg",
  "https://images.pexels.com/photos/4185785/pexels-photo-4185785.jpeg",
  
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState("next");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const nextSlide = useCallback(() => {
    setSlideDirection("next");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-move functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Get the two images to display (current and next)
  const getVisibleSlides = () => {
    const nextIndex = (current + 1) % slides.length;
    return [slides[current], slides[nextIndex]];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-start overflow-hidden pt-16 md:pt-0"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-400/30 animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Background with Ken Burns effect */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImages[current]}
          alt="hero bg"
          className="w-full h-full object-cover animate-kenBurns"
        />
      </div>

      {/* Overlay with dynamic gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 70%)`,
        }}
      ></div>

      {/* Content with advanced animations */}
      <div className={`relative z-10 max-w-2xl ml-6 md:ml-16 mt-0 md:mt-0 transition-all duration-1000 ease-in-out transform ${
        slideDirection === "next" ? "animate-fadeSlideInRight" : "animate-fadeSlideInLeft"
      }`}>
        <p 
          className="uppercase text-xs md:text-sm tracking-widest text-gray-300 md:pt-0 pt-0 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {slides[current].title}
        </p>
        <h1 
          className="text-3xl md:text-5xl font-bold mt-1 md:mt-2 leading-tight opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {slides[current].heading.split(", ")[0]}, <br />
          <span 
            className="text-yellow-400 inline-block opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            {slides[current].heading.split(", ")[1]}
          </span>
        </h1>
        <p 
          className="text-gray-300 mt-2 md:mt-3 text-sm opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          {slides[current].description}
        </p>
        <button 
          className="mt-3 md:mt-4 bg-yellow-400 text-black px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-yellow-500 transition text-sm md:text-base opacity-0 animate-fadeInUp transform hover:scale-105 transition-all duration-300 animate-pulseGlow"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          START YOUR ADVENTURE
        </button>
      </div>

      {/* Slider with enhanced 3D effect and perfect arrangement - Now visible on mobile */}
      <div className="absolute bottom-4 right-4 md:bottom-20 md:right-10 flex items-center space-x-2 md:space-x-6">
        <div className="flex space-x-2 md:space-x-4">
          {visibleSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`
                relative overflow-hidden rounded-xl transition-all duration-700 transform-gpu
                ${index === 0 
                  ? 'w-16 h-24 md:w-24 md:h-48 scale-105 z-10' 
                  : 'w-12 h-20 md:w-20 md:h-40 opacity-80'}
                ${index === 0 ? 'animate-tiltRotate' : ''}
              `}
              style={{
                transformStyle: 'preserve-3d',
                transform: index === 0 
                  ? `rotateY(${mousePosition.x * 3}deg) rotateX(${mousePosition.y * -3}deg) scale(1.05)` 
                  : `rotateY(10deg) scale(0.9)`,
                boxShadow: index === 0
                  ? '0 15px 30px -8px rgba(0, 0, 0, 0.5)'
                  : '0 5px 15px -3px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)'
              }}
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover transition-transform duration-700 animate-zoomIn"
                style={{
                  animationDelay: index === 0 ? '0s' : '0.2s',
                  animationFillMode: 'forwards'
                }}
              />
              {index === 0 && (
                <div
                  className="absolute inset-0 border border-yellow-400 rounded-xl pointer-events-none animate-pulseGlow"
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                />
              )}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-1 md:p-2">
                <span className="text-white text-[8px] md:text-xs font-semibold">
                  {slide.id}/5
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <span className="text-[8px] md:text-sm text-white">
          {current + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
};

export default Hero;
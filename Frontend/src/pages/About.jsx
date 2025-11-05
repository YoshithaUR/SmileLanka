import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  // Popular destinations data - Sri Lankan destinations
  const allDestinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      description: "Ancient rock fortress and palace ruin situated in the central Matale District.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      link: "/destinations/sigiriya-rock-fortress"
    },
    {
      id: 2,
      name: "Ella Rock",
      description: "Stunning hiking destination with panoramic views of the surrounding hills.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      link: "/destinations/ella-rock"
    },
    {
      id: 3,
      name: "Yala National Park",
      description: "Famous wildlife reserve known for its leopard population and diverse fauna.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      link: "/destinations/yala-national-park"
    },
    {
      id: 4,
      name: "Galle Fort",
      description: "UNESCO World Heritage site with well-preserved Dutch colonial architecture.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.6,
      link: "/destinations/galle-fort"
    },
    {
      id: 5,
      name: "Adam's Peak",
      description: "Sacred mountain with a pilgrimage site at its summit, offering stunning sunrise views.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.5,
      link: "/destinations/adams-peak"
    },
    {
      id: 6,
      name: "Mirissa Beach",
      description: "Popular beach destination known for whale watching and golden sand shores.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      link: "/destinations/mirissa-beach"
    },
    {
      id: 7,
      name: "Kandy Temple",
      description: "Sacred Buddhist temple housing the Tooth Relic of the Buddha in the royal palace.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      link: "/destinations/kandy-temple"
    },
    {
      id: 8,
      name: "Nuwara Eliya",
      description: "Picturesque hill country town known as 'Little England' for its colonial architecture.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.4,
      link: "/destinations/nuwara-eliya"
    },
    {
      id: 9,
      name: "Dambulla Cave Temple",
      description: "Ancient cave temple complex with over 150 Buddha statues and stunning murals.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.6,
      link: "/destinations/dambulla-cave-temple"
    },
    {
      id: 10,
      name: "Unawatuna Beach",
      description: "Beautiful crescent-shaped beach with coral reefs, perfect for swimming and snorkeling.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.5,
      link: "/destinations/unawatuna-beach"
    },
    {
      id: 11,
      name: "Horton Plains",
      description: "High-altitude plateau with diverse wildlife, endemic plants, and the famous World's End.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      link: "/destinations/horton-plains"
    },
    {
      id: 12,
      name: "Anuradhapura",
      description: "Ancient city with well-preserved ruins of the first Sri Lankan capital and sacred Bodhi tree.",
      image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.6,
      link: "/destinations/anuradhapura"
    }
  ];

  // Our Services data
  const services = [
    {
      id: 1,
      title: "Mountain Adventures",
      description: "Experience the breathtaking beauty of Sri Lanka's mountain ranges with our guided hiking tours.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Beach Getaways",
      description: "Relax on pristine beaches and enjoy water sports in some of the most beautiful coastal areas.",
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Wildlife Safaris",
      description: "Embark on thrilling safaris to see elephants, leopards, and other wildlife in their natural habitats.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Cultural Tours",
      description: "Discover ancient temples, historical sites, and experience the rich culture of Sri Lanka.",
      image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "City Exploration",
      description: "Discover the vibrant urban life, architecture, and nightlife of Sri Lanka's major cities.",
      image: "https://images.unsplash.com/photo-1594999293740-704bc4b75245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "Water Sports",
      description: "Dive into thrilling water activities including surfing, snorkeling, and boat trips in crystal clear waters.",
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDestinations, setVisibleDestinations] = useState(allDestinations.slice(0, 4));
  const [servicesIndex, setServicesIndex] = useState(0); // For services carousel
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [focusedService, setFocusedService] = useState(-1); // Track focused service card
  const navigate = useNavigate();

  // Update visible destinations when index changes
  useEffect(() => {
    const newVisibleDestinations = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % allDestinations.length;
      newVisibleDestinations.push(allDestinations[index]);
    }
    setVisibleDestinations(newVisibleDestinations);
  }, [currentIndex]);

  // Handle keyboard navigation for service cards
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle arrow keys when not in a form input
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        
        if (services.length === 0) return;
        
        let newIndex = focusedService;
        
        // Calculate grid dimensions
        const cols = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const rows = Math.ceil(services.length / cols);
        
        // Calculate current row and column
        const currentRow = Math.floor(focusedService / cols);
        const currentCol = focusedService % cols;
        
        switch (e.key) {
          case 'ArrowRight':
            if (focusedService === -1) {
              newIndex = 0; // Start from first card if none focused
            } else if (currentCol < cols - 1 && focusedService < services.length - 1) {
              newIndex = focusedService + 1;
            }
            break;
            
          case 'ArrowLeft':
            if (focusedService > 0) {
              newIndex = focusedService - 1;
            }
            break;
            
          case 'ArrowDown':
            if (focusedService === -1) {
              newIndex = 0; // Start from first card if none focused
            } else if (currentRow < rows - 1) {
              newIndex = Math.min(focusedService + cols, services.length - 1);
            }
            break;
            
          case 'ArrowUp':
            if (focusedService >= cols) {
              newIndex = focusedService - cols;
            } else if (focusedService === -1) {
              newIndex = 0; // Start from first card if none focused
            }
            break;
        }
        
        if (newIndex !== focusedService) {
          setFocusedService(newIndex);
        }
      }
      
      // Handle Enter key to "click" the focused card
      if (e.key === 'Enter' && focusedService >= 0 && focusedService < services.length) {
        e.preventDefault();
        // In a real implementation, you might navigate to a service detail page
        console.log(`Service selected: ${services[focusedService].title}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedService, services]);

  // Reset focused service when services change
  useEffect(() => {
    setFocusedService(-1);
  }, [services]);

  const nextDestinations = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % allDestinations.length);
  };

  const prevDestinations = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allDestinations.length - 3 : (prevIndex - 3 + allDestinations.length) % allDestinations.length
    );
  };

  // Services carousel navigation
  const nextServices = () => {
    setServicesIndex((prevIndex) => (prevIndex + 3) % services.length);
  };

  const prevServices = () => {
    setServicesIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 3 : (prevIndex - 3 + services.length) % services.length
    );
  };

  // Auto-move functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextDestinations();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextDestinations();
        setIsAutoPlaying(false); // Pause autoplay when user interacts
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevDestinations();
        setIsAutoPlaying(false); // Pause autoplay when user interacts
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset autoplay after a period of inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000); // Resume autoplay after 10 seconds of inactivity
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAutoPlaying]);

 return (
    <div>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/f5/dc/ad/f5dcade41729a230001a5b1d03ead500.jpg')",
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 
            className="text-5xl font-bold mb-6"
            data-aos="fade-down"
          >
            ABOUT <span className="text-yellow-400">SMILE SRI LANKA</span>
          </h1>
          <p 
            className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to <span className="text-yellow-400 font-semibold">Smile Sri Lanka</span> — your
            ultimate adventure travel partner! We’re a passionate team of explorers and travel
            enthusiasts who believe that the best way to experience life is through adventure.
          </p>

          <p 
            className="text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our mission is to help travelers discover the untamed beauty of Sri Lanka — from misty
            mountain hikes and breathtaking waterfalls to thrilling safaris and coastal escapes.
          </p>

          <div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">🌄 Our Vision</h3>
              <p>To inspire people to explore the world responsibly while protecting nature and culture.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">🧭 Our Mission</h3>
              <p>To offer sustainable travel experiences that connect travelers with Sri Lanka’s soul.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">🤝 Our Promise</h3>
              <p>We promise unforgettable adventures, eco-friendly practices, and meaningful connections.</p>
            </div>
          </div>

          <Link to="/read-more-about">
            <button 
              className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section
        className="py-16 bg-gradient-to-br from-gray-900 to-black"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            POPULAR <span className="text-yellow-500">DESTINATIONS</span>
          </h2>

          <div className="relative">
            <button
              onClick={() => {
                prevDestinations();
                setIsAutoPlaying(false);
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => {
                nextDestinations();
                setIsAutoPlaying(false);
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronRight size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
              {visibleDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="flex flex-col h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => navigate(destination.link)}
                  data-aos="fade-up"
                  data-aos-delay={destination.id * 50}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      ★ {destination.rating}
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-4 bg-gray-800">
                    <h3 className="text-white font-bold text-lg mb-2">{destination.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{destination.description}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(destination.link);
                      }}
                      className="py-2 border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section 
        className="py-16 bg-gradient-to-br from-gray-800 to-gray-900"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            OUR <span className="text-yellow-500">SERVICES</span>
          </h2>

          <div className="relative">
            <button
              onClick={() => {
                prevServices();
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => {
                nextServices();
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronRight size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
              {services.slice(servicesIndex, servicesIndex + 3).map((service, i) => (
                <div
                  key={service.id}
                  className={`rounded-2xl overflow-hidden shadow-xl bg-gray-800 hover:bg-gray-700 border ${
                    focusedService === i ? "border-yellow-500 ring-4 ring-yellow-500/30 scale-105" : "border-gray-700"
                  } transition-all`}
                  tabIndex={0}
                  onFocus={() => setFocusedService(i)}
                  onBlur={() => setFocusedService(-1)}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <button className="w-full py-2 border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
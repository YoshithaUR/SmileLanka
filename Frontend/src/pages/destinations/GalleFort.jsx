import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const GalleFort= () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 4,
   name: "Galle Fort",
      description:
        "UNESCO World Heritage site with well-preserved Dutch colonial architecture.",
      longDescription:
        "Galle Fort, also known as the Dutch Fort or Ramparts of Galle, is a historic fortress located in the coastal city of Galle in the Southern Province of Sri Lanka. Originally built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fort is a remarkable example of European architectural influence blended with South Asian traditions.",
        
      detailedInfo: [
        {
          id: "historical",
          title: "Historical Background",
          content:
            "Galle Fort, originally built by the Portuguese in 1588 and later extensively fortified by the Dutch in the 17th century, stands as one of the best-preserved colonial-era fortresses in Asia. Its architecture reflects a unique fusion of European and South Asian influences, symbolizing centuries of maritime history.",
          additionalDetails: [
            "The Portuguese first constructed a fortress at Galle in 1588 after they captured the area from the Sinhalese kingdom of Kotte.",
            "The Dutch took control of Galle in 1640 and significantly expanded the fortifications, creating the walls and bastions that exist today.",
            "The fort was designed according to European fortress building techniques adapted to local conditions.",
            "During the British period (1796 onwards), the fort was used primarily for administrative purposes rather than military defense.",
            "Galle Fort served as a critical trading post for spices, gems, and other valuable commodities during the colonial era."
          ],
          image:
            "https://images.pexels.com/photos/319952/pexels-photo-319952.jpeg",
        },
        {
          id: "architectural",
          title: "Architectural Beauty",
          content:
            "The fort features impressive stone ramparts, bastions, and watchtowers overlooking the Indian Ocean. Inside, cobblestone streets are lined with Dutch-style houses, museums, cafes, churches, and art galleries that showcase the colonial charm and cultural blend of Galle's past and present.",
          additionalDetails: [
            "The fort's walls stretch for about 1,400 meters and enclose an area of approximately 30 hectares.",
            "There are 14 bastions, each named after a different Dutch regiment or commander.",
            "The main entrance is through the 'Clock Tower' entrance, built in 1873 during British rule.",
            "Notable buildings within the fort include the Dutch Reformed Church (1755), the Maritime Museum (1937), and the Old Dutch Hospital (1681).",
            "The architecture seamlessly blends European fortress design with local tropical building techniques, such as using coral limestone and laterite."
          ],
          image:
            "https://i.pinimg.com/736x/c6/4f/5f/c64f5fdf3311d143e4396e9b66805c17.jpg",
        },
        {
          id: "unesco",
          title: "UNESCO World Heritage Site",
          content:
            "Recognized as a UNESCO World Heritage Site in 1988, Galle Fort remains a living heritage site where history and modern life coexist. It continues to attract visitors from around the world for its cultural richness, coastal beauty, and well-preserved colonial architecture.",
          additionalDetails: [
            "Galle Fort was inscribed as a UNESCO World Heritage Site in 1988 under criteria (ii), (iv), and (vi).",
            "It represents an outstanding example of a fortified city built by Europeans in South and Southeast Asia, showing the interaction between European architectural and urban design concepts and indigenous traditions.",
            "The fort is unique for its authenticity and integrity, with most of the original 17th-century Dutch structures still intact.",
            "Today, it houses a diverse community of people living within its walls, making it a rare example of a historic fortified city that remains a living community.",
            "The site continues to be managed under strict conservation guidelines to preserve its historical and cultural significance."
          ],
          image:
            "https://i.pinimg.com/736x/8e/66/47/8e66471ce6346c1cea241b47636df4f0.jpg",
        },
      ],
      image:
        "https://images.pexels.com/photos/33899020/pexels-photo-33899020.jpeg",
      Dimage:
        "https://i.pinimg.com/1200x/0c/98/88/0c98889ea2fc8f29acb6f0dcaa376028.jpg",
      gallery: [
        "https://i.pinimg.com/1200x/cd/81/e2/cd81e2d3f0c77440232554fc47a773c4.jpg",
        "https://i.pinimg.com/1200x/2b/07/b6/2b07b66d3da45c37a6afccd69a39c50b.jpg",
        "https://i.pinimg.com/736x/6f/50/c8/6f50c81b6168f21cae2d0bc1c9f67efa.jpg",
        "https://i.pinimg.com/1200x/a2/cc/17/a2cc17cc4f6e07babbc39375beb881e8.jpg",
      ],
      rating: 4.8,
      location: "Galle, Southern Province, Sri Lanka",
      bestTime: "December to April",
      activities: [
        "Fort Walking Tour",
        "Sightseeing",
        "Cultural Exploration",
        "Shopping and Dining",
      ],
      facts: [
        "Built by the Portuguese in 1588",
        "Expanded by the Dutch in the 17th century",
        "UNESCO World Heritage Site since 1988",
        "One of the best-preserved colonial forts in Asia",
        "Overlooks the Indian Ocean",
      ],
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <div className="pt-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
        data-aos="fade-in"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${destination.Dimage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1a202c'
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
            data-aos="fade-down"
          >
            {destination.name}
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {destination.description}
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center bg-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-yellow-500 mr-2">★</span>
              <span className="font-bold">{destination.rating}/5.0</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-yellow-500"
              data-aos="fade-up"
            >
              Discover {destination.name}
            </h2>
            <p 
              className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {destination.longDescription}
            </p>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {destination.facts.map((fact, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-gray-800/50 p-3 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm md:text-base">{fact}</span>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section 
        className="py-16 px-6 bg-gray-900/50"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Why Visit {destination.name}?
          </h2>
          
          <div className="space-y-20">
            {destination.detailedInfo.map((info, index) => (
              <div 
                key={index} 
                id={`section-${info.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 
                    className="text-3xl font-bold mb-6 text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {info.title}
                  </h3>
                  <p 
                    className="text-gray-300 text-lg mb-6 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {info.content}
                  </p>
                  <button 
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    onClick={() => {
                      setModalContent(info);
                      setShowModal(true);
                    }}
                  >
                    Learn More
                  </button>
                </div>
                <div 
                  className={`rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img 
                    src={info.image} 
                    alt={info.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-16 px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h2 
          className="text-4xl font-bold text-center mb-16 text-yellow-500"
          data-aos="fade-up"
        >
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destination.gallery.map((img, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64">
                <img 
                  src={img} 
                  alt={`${destination.name} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">View Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section 
        className="py-16 px-6 bg-gray-900/50"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Activities & Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destination.activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-yellow-500/10 transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition duration-300">
                  <div className="text-2xl">🌟</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{activity}</h3>
                <p className="text-gray-400">Experience the best of {destination.name} through {activity.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section 
        className="py-20 px-6"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-12">
          <h2 
            className="text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready for Your Adventure?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Book your trip to {destination.name} with Smile Sri Lanka and experience the magic of this incredible destination.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/book">
            <button 
              className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Now
            </button>
            </Link>
            <Link to="/contact">
            <button 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition duration-300 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Modal for additional details */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-yellow-500">{modalContent.title}</h3>
                <button 
                  className="text-white hover:text-gray-300 text-2xl"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={modalContent.image} 
                  alt={modalContent.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <p className="text-gray-300 text-lg mb-6">{modalContent.content}</p>
              
              <h4 className="text-xl font-bold text-white mb-4">Additional Information:</h4>
              <ul className="space-y-3">
                {modalContent.additionalDetails && modalContent.additionalDetails.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex justify-end">
                <button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleFort;
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Unawatuna = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 10,
  name: "Unawatuna Beach",
  description:
    "A stunning crescent-shaped beach on Sri Lanka's southern coast, famous for its golden sands, turquoise waters, and vibrant coastal life.",
  longDescription:
    "Unawatuna Beach, located just a few kilometers from the historic city of Galle, is one of Sri Lanka's most popular and picturesque beaches. Known for its golden sands, calm turquoise waters, and coral reefs teeming with marine life, Unawatuna is a haven for swimming, snorkeling, and relaxation. The beach is lined with palm trees, lively cafes, and boutique hotels, creating a perfect blend of tropical charm and modern comfort. Beyond the beach, visitors can explore nearby attractions such as the Japanese Peace Pagoda, Jungle Beach, and the UNESCO-listed Galle Fort. With its laid-back atmosphere and natural beauty, Unawatuna offers a quintessential Sri Lankan coastal experience ideal for travelers seeking both adventure and tranquility.",
  detailedInfo: [
    {
      id: "sands",
      title: "Golden Sands and Crystal Waters",
      content:
        "Unawatuna Beach is famous for its wide stretch of golden sand and calm, shallow waters, making it ideal for swimming and sunbathing. The gentle waves and warm ocean create a perfect environment for beach lovers throughout the year.",
      additionalDetails: [
        "The beach's distinctive crescent shape provides natural protection from strong ocean currents, making it safer for swimming than many other Sri Lankan beaches.",
        "The sand is composed of fine golden particles that stay pleasantly warm even during peak daytime hours.",
        "The water temperature averages between 26-29°C (79-84°F) year-round, making it comfortable for extended swimming sessions.",
        "The beach is regularly cleaned and maintained by local authorities, ensuring a pleasant environment for visitors.",
        "During low tide, visitors can walk out to small sandbars that appear just offshore, creating additional space for relaxation."
      ],
      image:
        "https://i.pinimg.com/1200x/64/3e/32/643e323649b459f1ae6ac89a4387e244.jpg",
    },
    {
      id: "marine",
      title: "Marine Life and Coral Reefs",
      content:
        "The clear waters of Unawatuna are home to vibrant coral reefs and colorful tropical fish, making it a great spot for snorkeling and diving. Several diving centers offer guided tours to nearby reef sites and shipwrecks for underwater exploration.",
      additionalDetails: [
        "The coral reefs around Unawatuna are part of a larger reef system that extends along the southern coast of Sri Lanka.",
        "Over 50 species of coral have been identified in the waters around Unawatuna, including both hard and soft coral varieties.",
        "The area is home to more than 200 species of tropical fish, including angelfish, butterflyfish, and parrotfish.",
        "Snorkeling is best during the dry season (November to April) when visibility can reach up to 15 meters.",
        "Several artificial reef structures have been installed to promote coral regeneration and enhance marine biodiversity."
      ],
      image:
        "https://i.pinimg.com/1200x/29/68/97/296897763105384ba59b0bcd504244a4.jpg",
    },
    {
      id: "attractions",
      title: "Nearby Attractions and Cultural Sites",
      content:
        "Beyond the beach, visitors can hike to the Japanese Peace Pagoda for panoramic coastal views or explore the historic Galle Fort, a UNESCO World Heritage Site located just 15 minutes away. The area also offers a vibrant nightlife and seaside dining experience.",
      additionalDetails: [
        "The Japanese Peace Pagoda, built in the 1970s, stands 33 meters tall and offers 360-degree views of the coastline and surrounding countryside.",
        "Jungle Beach, accessible via a scenic 15-minute walk through palm forests, offers a more secluded swimming experience.",
        "Galle Fort, a 17th-century Dutch fortification, houses museums, shops, cafes, and colonial-era buildings within its massive walls.",
        "The Unawatuna Beach Temple (Goddess of the Sea) is a colorful Hindu shrine located right on the beach, attracting both locals and tourists.",
        "The nearby Rumassala Hill is believed to be a fragment of Mount Meru from Hindu mythology and offers hiking trails with ocean views."
      ],
      image:
        "https://i.pinimg.com/736x/3c/b2/73/3cb273c9d24add86fceceb36065a3a63.jpg",
    },
  ],
  image:
    "https://i.pinimg.com/736x/57/57/4f/57574f84979a07a357c296bbcfbdf801.jpg",
    Dimage:
    "https://i.pinimg.com/736x/bf/c5/2f/bfc52f73dab71098ced03fee18b01606.jpg",
  gallery: [
    "https://i.pinimg.com/736x/06/e2/ea/06e2ea0d45491f11b6c929ec4ba0d6dd.jpg",
    "https://i.pinimg.com/1200x/91/1c/f1/911cf198c7cc1891636f19528a3d3539.jpg",
    "https://i.pinimg.com/1200x/fe/3a/f7/fe3af72a742054eabacbc768bd79988f.jpg",
    "https://i.pinimg.com/1200x/4c/60/42/4c6042606814216450efaf51be7eec98.jpg",
  ],
  rating: 4.7,
  location: "Unawatuna, Galle District, Southern Province, Sri Lanka",
  bestTime: "November to April (dry season with calm seas)",
  activities: [
    "Swimming and Sunbathing",
    "Snorkeling and Diving",
    "Beachfront Dining",
    "Exploring Galle Fort",
  ],
  facts: [
    "One of Sri Lanka's safest beaches for swimming",
    "Famous for coral reefs and tropical fish",
    "Located just 5 km from Galle Fort",
    "Home to Jungle Beach and the Japanese Peace Pagoda",
    "Popular for both relaxation and nightlife",
  ],
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <div className="pt-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center"
        data-aos="fade-in"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${destination.Dimage}')`
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            data-aos="fade-down"
          >
            {destination.name}
          </h1>
          <p 
            className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {destination.description}
          </p>
          <div 
            className="flex justify-center items-center space-x-4"
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
        className="py-16 px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-4xl font-bold mb-6 text-yellow-500"
              data-aos="fade-up"
            >
              Discover {destination.name}
            </h2>
            <p 
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {destination.longDescription}
            </p>
            <div 
              className="grid grid-cols-2 gap-4"
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
                  <span className="text-gray-300">{fact}</span>
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
            <button 
              className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Now
            </button>
            <button 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition duration-300 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
            </button>
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

export default Unawatuna;
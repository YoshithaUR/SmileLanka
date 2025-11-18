import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const KandyTemple = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id:7,
    name: "Kandy Temple",
    description:
      "Sacred Buddhist temple housing the Tooth Relic of the Buddha in the royal palace.",
    longDescription:
      "The Temple of the Sacred Tooth Relic, known locally as Sri Dalada Maligawa, is one of the most sacred Buddhist temples in Sri Lanka. Located in the heart of Kandy, the temple enshrines a tooth relic of Lord Buddha, making it a deeply spiritual site for Buddhists around the world. The temple complex, with its golden-roofed shrine, intricate Kandyan architecture, and serene surroundings by Kandy Lake, stands as a symbol of Sri Lanka's rich cultural and religious traditions. It also plays a central role in the annual Esala Perahera, a grand festival celebrated with traditional dances, drumming, and beautifully decorated elephants.",
    detailedInfo: [
      {
        id: "historical",
        title: "Historical and Religious Significance",
        content:
          "The Sacred Tooth Relic is believed to have been brought to Sri Lanka from India in the 4th century AD. Over the centuries, it became a symbol of sovereignty, with rulers claiming the right to govern only if they possessed the relic. The temple was built in the 16th century by King Wimaladharmasuriya I and remains one of the most important pilgrimage sites for Buddhists.",
        additionalDetails: [
          "The Sacred Tooth Relic is believed to have been brought to Sri Lanka in the 4th century AD by Princess Hemamali and her husband Prince Dantha.",
          "The relic has been moved 16 times to protect it from foreign invasions, with the current temple being its 8th permanent location.",
          "King Wimaladharmasuriya I built the first temple structure in 1595, which was later expanded by successive rulers.",
          "The temple complex includes several important structures: the main shrine, octagonal pavilion, and several museums housing royal artifacts.",
          "The relic is housed in a golden casket within a golden casket within a golden casket, symbolizing the layers of protection and reverence."
        ],
        image:
          "https://i.pinimg.com/736x/25/3f/33/253f33b09a8371e5c4ba477d6963b62e.jpg",
      },
      {
        id: "architectural",
        title: "Architectural Splendor",
        content:
          "The temple complex showcases the grandeur of Kandyan architecture, featuring intricate wood carvings, golden decorations, and traditional frescoes. The main shrine is surrounded by beautiful courtyards, ponds, and smaller shrines. The golden canopy above the relic chamber adds to the temple's majestic beauty and spiritual atmosphere.",
        additionalDetails: [
          "The temple's architecture represents the finest example of Kandyan style, with its distinctive roof design and ornate wooden carvings.",
          "The octagonal pavilion (Patirippuwa) is a masterpiece of Kandyan architecture, built in 1802 and covered in bronze sheets.",
          "The temple complex covers an area of 60,000 square feet and includes several courtyards, halls, and shrines.",
          "The two-story museum houses royal regalia, including crowns, swords, and ceremonial objects used in the Esala Perahera.",
          "The golden canopy (Guldastha) above the relic chamber weighs over 100 kilograms and is made of pure gold."
        ],
        image:
          "https://i.pinimg.com/1200x/a5/24/d4/a524d43a66467d5bb84bddcef6972615.jpg",
      },
      {
        id: "esala",
        title: "Esala Perahera Festival",
        content:
          "One of Asia's most spectacular festivals, the Kandy Esala Perahera is held annually in July or August to honor the Sacred Tooth Relic. The event features traditional Kandyan dancers, fire performances, drummers, and hundreds of elephants adorned with colorful garments, reflecting Sri Lanka's deep-rooted cultural heritage.",
        additionalDetails: [
          "The Esala Perahera is a 10-day festival that culminates with the inner chamber ritual (Randoli Perahera) on the final five nights.",
          "Over 5,000 dancers, drummers, and performers participate in the procession, along with decorated elephants carrying the sacred casket.",
          "The festival dates back over 1,000 years and was originally held to honor the goddess Pattini for bringing rain during droughts.",
          "The procession route covers 4 kilometers through the streets of Kandy, attracting over 1 million spectators annually.",
          "The festival includes five types of traditional dance: Kandyan, Sabaragamuwa, Uva-Paran, Low Country, and Devil dances."
        ],
        image:
          "https://i.pinimg.com/1200x/fb/41/d8/fb41d8abb7a8ec5e3204dfae61867b98.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/1200x/58/9a/04/589a04876211c1b078e183f7d3ac5128.jpg",
       Dimage:
      "https://i.pinimg.com/1200x/a4/76/c4/a476c4d8e912b208ebbe2b3938518143.jpg",
    gallery: [
      "https://i.pinimg.com/736x/5a/72/bb/5a72bbde9d82f9a29bea94af16b5a96e.jpg",
      "https://i.pinimg.com/736x/e6/bf/77/e6bf7797a077b090bc8fb8e51bc7eb87.jpg",
      "https://i.pinimg.com/736x/62/11/16/62111636780bdc9d181d8243a6e6df2e.jpg",
      "https://i.pinimg.com/736x/f5/85/85/f585855311d80b863caab30f14f0e943.jpg",
    ],
    rating: 4.9,
    location: "Kandy, Central Province, Sri Lanka",
    bestTime: "December to April and July to August (Esala Perahera season)",
    activities: [
      "Temple Visit and Worship",
      "Cultural Exploration",
      "Attend Esala Perahera Festival",
      "Explore Kandy Lake and nearby attractions",
    ],
    facts: [
      "Houses the sacred tooth relic of Lord Buddha",
      "Built in the 16th century by King Wimaladharmasuriya I",
      "Central to the annual Esala Perahera festival",
      "Symbol of sovereignty in ancient Sri Lanka",
      "UNESCO World Heritage Site since 1988",
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
            <Link to="/book">
            <button 
              className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Now
            </button>
            </Link>
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

export default KandyTemple;
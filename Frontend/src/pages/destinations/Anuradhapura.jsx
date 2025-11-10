import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Anuradhapura = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 12,
  name: "Anuradhapura",
  description:
    "An ancient sacred city renowned for its well-preserved ruins, majestic stupas, and deep spiritual significance in Sri Lankan history.",
  longDescription:
    "Anuradhapura, one of the oldest continuously inhabited cities in the world, served as the first capital of ancient Sri Lanka for over a millennium. Established in the 4th century BCE, it became the heart of Sri Lankan civilization, religion, and governance. Recognized as a UNESCO World Heritage Site, Anuradhapura is home to magnificent Buddhist monuments, sprawling reservoirs, and intricately carved stone structures. The city's sacred Bodhi Tree—grown from a branch of the original tree under which Lord Buddha attained enlightenment—remains a revered pilgrimage site for Buddhists worldwide. With its blend of history, spirituality, and archaeological wonder, Anuradhapura offers visitors a profound journey into the island's glorious past.",
    detailedInfo: [
      {
        id: "bodhi",
        title: "Sri Maha Bodhi Tree",
        content:
          "The Sri Maha Bodhi Tree is the oldest historically documented tree in the world, grown from a sapling of the original Bodhi Tree in Bodh Gaya, India. It was brought to Sri Lanka in the 3rd century BCE by Princess Sangamitta and planted by King Devanampiya Tissa. The tree remains one of the most sacred pilgrimage sites in Buddhism and a symbol of peace and enlightenment.",
        additionalDetails: [
          "The tree is over 2,300 years old and is considered the oldest living human-planted tree with a recorded date of planting.",
          "Princess Sangamitta, daughter of Emperor Ashoka, brought the sapling to Sri Lanka and established the first Buddhist monastery for nuns.",
          "The tree is surrounded by a protective wall and elaborate shrines, with pilgrims circumambulating it daily in a ritual called 'pradakshina.'",
          "The sacred water from the original Bodhi Tree in India is believed to have been used to irrigate the sapling, adding to its spiritual significance.",
          "The tree has survived numerous invasions and natural disasters, with several protective structures built around it over the centuries."
        ],
        image:
          "https://i.pinimg.com/736x/19/bc/84/19bc84ad81213d45adcee4afda612689.jpg",
         
      },
      {
        id: "ruwanwelisaya",
        title: "Ruwanwelisaya Stupa",
        content:
          "Built by King Dutugemunu in the 2nd century BCE, Ruwanwelisaya is one of the most venerated stupas in Sri Lanka. Standing at 103 meters, it symbolizes the spiritual and architectural brilliance of the ancient Sinhalese civilization. The stupa enshrines relics of the Buddha and continues to attract thousands of pilgrims each year.",
        additionalDetails: [
          "The stupa was once covered in gold plates and adorned with precious gems, making it one of the most magnificent structures of its time.",
          "King Dutugemunu considered the construction of Ruwanwelisaya his greatest achievement and is said to have spent his kingdom's entire treasury on it.",
          "The stupa's design influenced the construction of other stupas throughout Southeast Asia, including those in Myanmar and Thailand.",
          "The relic chamber contains several important Buddhist artifacts, including a golden casket with Buddha's collarbone relic.",
          "The surrounding monastery complex includes several meditation halls, libraries, and living quarters for monks that were active for over a millennium."
        ],
        image:
          "https://i.pinimg.com/1200x/84/2a/b9/842ab9710f047097e5c89cc936d60bf5.jpg",
      },
      {
        id: "jetavanaramaya",
        title: "Jetavanaramaya and Ancient Monasteries",
        content:
          "Jetavanaramaya, once one of the tallest brick structures in the ancient world, stands as a testament to Anuradhapura's advanced engineering. Surrounding the stupa are vast monastic complexes like Abhayagiri and Thuparamaya, each reflecting the city's deep devotion to Buddhist scholarship and meditation.",
        additionalDetails: [
          "Jetavanaramaya was 122 meters tall when completed, making it the world's tallest stupa and the third tallest structure in the ancient world after the pyramids of Giza.",
          "The stupa was built using over 93 million baked bricks, with a foundation that extends 8.5 meters deep into the ground.",
          "Abhayagiri Monastery was one of the largest monastic complexes in the ancient world, housing over 5,000 monks at its peak.",
          "Thuparamaya, the first stupa built in Sri Lanka, enshrines the collarbone relic of the Buddha and marks the beginning of Buddhism on the island.",
          "The ancient city's sophisticated water management system included over 50 reservoirs that supported a population of over 100,000 people."
        ],
        image:
          "https://i.pinimg.com/1200x/d7/6a/41/d76a41ffd39fcbcaaa3e12d4a330bc86.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/1200x/6f/d6/90/6fd69045c6d38acff94a8e92874d8862.jpg",
       Dimage:
          "https://i.pinimg.com/1200x/31/d7/c1/31d7c1ab248c72905d3c200e49c028bc.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/b4/b2/66/b4b2668489d2d6c72571ee5fa7d07568.jpg",
      "https://i.pinimg.com/736x/35/df/f8/35dff89f63bb5ffb976154030fe7abb2.jpg",
      "https://i.pinimg.com/736x/8f/ef/ad/8fefadd0e5043ccbcf61ebbee4637fce.jpg",
      "https://i.pinimg.com/1200x/35/b1/e4/35b1e4901e0bd77411c16be9cf022baf.jpg",
    ],
    rating: 4.8,
    location: "Anuradhapura, North Central Province, Sri Lanka",
    bestTime: "April to September (dry season, ideal for exploration)",
    activities: [
      "Exploring Ancient Ruins",
      "Visiting Buddhist Temples and Stupas",
      "Cultural Photography",
      "Historical Tours",
    
    ],
    facts: [
      "UNESCO World Heritage Site since 1982",
      "First capital of ancient Sri Lanka",
      "Home to the sacred Sri Maha Bodhi Tree",
      "Contains some of the world's largest ancient stupas",
      "Flourished between 4th century BCE and 11th century CE",
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

export default Anuradhapura;
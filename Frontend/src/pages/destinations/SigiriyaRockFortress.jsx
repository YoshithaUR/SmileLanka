import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const SigiriyaRockFortress = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 1,
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and palace ruin situated in the central Matale District.",
    longDescription: "Sigiriya or Sinhagiri (Lion Rock) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.",
    detailedInfo: [
      {
        id: "historical",
        title: "Historical Significance",
        content: "Built by King Kashyapa I in the 5th century AD, Sigiriya served as the capital of his kingdom for 18 years. The site is famous for its ancient frescoes dating back to the 5th century, which are among the finest surviving examples of ancient Sri Lankan art.",
        additionalDetails: [
          "King Kashyapa I ruled from 477 to 495 AD and chose Sigiriya as his capital after usurping the throne from his father.",
          "The fortress was abandoned after Kashyapa's death and later used as a Buddhist monastery until the 14th century.",
          "The ancient frescoes, known as the 'Sigiriya Maidens,' are painted on a small pocket of the rock face and are considered masterpieces of ancient art.",
          "Archaeological evidence suggests the site was inhabited as early as the 3rd century BC.",
          "Sigiriya was designated a UNESCO World Heritage Site in 1982 for its cultural significance."
        ],
        image: "https://i.pinimg.com/1200x/11/03/c3/1103c33d0a1a115d4b926bce0d22092d.jpg"
      },
      {
        id: "architectural",
        title: "Architectural Marvel",
        content: "The fortress features advanced engineering techniques for its time, including a sophisticated water garden with fountains and channels. The Mirror Wall, made of highly polished white plaster, reflects like a mirror when polished. The Lion Gate, though now只剩石狮子的爪子，once featured a massive lion sculpture.",
        additionalDetails: [
          "The water gardens feature an intricate hydraulic system with underground conduits and fountains that still function today.",
          "The Mirror Wall was once polished to a high sheen and covered with graffiti by ancient visitors, some of which can still be seen.",
          "The Lion Gate originally had a massive lion sculpture with stairs passing through its paws, hence the name 'Lion Rock.'",
          "The summit gardens include the remains of a palace with sophisticated brick and stone construction techniques.",
          "The site demonstrates advanced urban planning with separate areas for the king, courtiers, and service personnel."
        ],
        image: "https://i.pinimg.com/1200x/18/ad/45/18ad45f877db73a4d42b7ce87135a65d.jpg"
      },
      {
        id: "unesco",
        title: "UNESCO World Heritage Site",
        content: "Sigiriya was designated a UNESCO World Heritage Site in 1982. It is recognized for both its cultural and natural significance, representing a masterpiece of human ingenuity in an urban planning context.",
        additionalDetails: [
          "UNESCO recognized Sigiriya as one of the best-preserved examples of ancient urban planning in Asia.",
          "The site represents a unique fusion of art, architecture, and landscape design in a short-lived but significant period of Sri Lankan history.",
          "The gardens at Sigiriya are considered some of the oldest surviving landscaped gardens in the world.",
          "The frescoes and graffiti provide valuable insights into ancient Sri Lankan society and culture.",
          "Conservation efforts are ongoing to preserve the site for future generations, with special attention to the fragile frescoes."
        ],
        image: "https://i.pinimg.com/736x/46/86/fc/4686fcdfec1ef2b74c13adf58d2d7bc2.jpg"
      }
    ],
    image: "https://i.pinimg.com/1200x/2d/1d/7a/2d1d7ae6ed006c83c1704ed282d70d08.jpg",
    Dimage: "https://i.pinimg.com/736x/f0/be/b2/f0beb2a8362473b653da53ef76adef81.jpg",
    gallery: [
      "https://i.pinimg.com/736x/b6/19/a1/b619a1fd2e62fe3797cb5cb7efdf5b91.jpg",
      "https://i.pinimg.com/1200x/c0/1c/65/c01c65016c37a45a79d40a75a82f7cb9.jpg",
      "https://i.pinimg.com/1200x/63/ed/6b/63ed6bda7d423335c2361eeba49cafe1.jpg",
      "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg"
    ],
    rating: 4.8,
    location: "Matale District, Central Province",
    bestTime: "December to March",
    activities: ["Hiking", "Historical Tours", "Photography", "Rock Climbing"],
    facts: [
      "Over 1,500 years old",
      "UNESCO World Heritage Site since 1982",
      "Home to ancient frescoes",
      "Former royal palace",
      "Advanced hydraulic engineering"
    ]
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
        className="py-12 md:py-16 px-4 md:px-6 bg-gray-900/50"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Why Visit {destination.name}?
          </h2>
          
          <div className="space-y-16 md:space-y-20">
            {destination.detailedInfo.map((info, index) => (
              <div 
                key={index} 
                id={`section-${info.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {info.title}
                  </h3>
                  <p 
                    className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {info.content}
                  </p>
                  <button 
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 md:py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto"
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
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-yellow-500"
          data-aos="fade-up"
        >
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {destination.gallery.map((img, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 md:h-64">
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
        className="py-12 md:py-16 px-4 md:px-6 bg-gray-900/50"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Activities & Experiences
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                <p className="text-gray-400 text-sm">Experience the best of {destination.name} through {activity.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section 
        className="py-16 md:py-20 px-4 md:px-6"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-8 md:p-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
            data-aos="fade-up"
          >
            Ready for Your Adventure?
          </h2>
          <p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
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
              className="bg-black hover:bg-gray-900 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Now
            </button>
            <button 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition duration-300 backdrop-blur-sm w-full sm:w-auto"
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

export default SigiriyaRockFortress;
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const DambullaCaveTemple = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    name: "Dambulla Cave Temple",
    id: 9,
    description:
      "An ancient cave complex adorned with Buddhist murals and statues, located in the heart of Sri Lanka's Cultural Triangle.",
    longDescription:
      "Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is one of Sri Lanka's most iconic and well-preserved Buddhist heritage sites. Dating back over 2,000 years, this UNESCO World Heritage Site features a series of five caves carved into a massive rock, housing more than 150 magnificent Buddha statues and intricate murals that depict the life and teachings of Lord Buddha. The temple complex sits atop a 160-meter-high rock, offering breathtaking panoramic views of the surrounding plains and the Sigiriya Rock Fortress in the distance. It stands as a spiritual sanctuary and a testament to Sri Lanka's ancient art, devotion, and craftsmanship.",
    detailedInfo: [
      {
        id: "art",
        title: "Cave Art and Sculptures",
        content:
          "The Dambulla Cave Temple complex contains over 150 Buddha statues, including a colossal 14-meter-long reclining Buddha. The walls and ceilings of the caves are covered with detailed frescoes that narrate stories from the life of Buddha and the history of Buddhism in Sri Lanka.",
        additionalDetails: [
          "The temple complex consists of five main caves, each with its own unique collection of statues and paintings.",
          "The largest statue is a 14-meter-long reclining Buddha, carved from rock and covered in gold leaf.",
          "The caves contain over 150 Buddha statues in various postures, including seated, standing, and reclining positions.",
          "The murals cover an area of over 2,100 square meters and depict scenes from Buddhist mythology and history.",
          "The paintings use traditional mineral pigments that have retained their vibrant colors for over two millennia."
        ],
        image:
          "https://i.pinimg.com/736x/f0/9e/e4/f09ee49005ce71bbe05de45cd2cbd177.jpg",
      },
      {
        id: "history",
        title: "Historical Significance",
        content:
          "The temple dates back to the 1st century BCE when King Valagamba of Anuradhapura sought refuge in these caves during exile. Upon regaining his throne, he transformed the caves into a magnificent temple in gratitude, establishing Dambulla as one of the most sacred Buddhist pilgrimage sites in the country.",
        additionalDetails: [
          "King Valagamba took refuge in the caves during his 14-year exile from 103 to 89 BCE, hiding from his enemies.",
          "The temple was expanded and embellished by successive rulers, including King Nissanka Malla in the 12th century.",
          "The site contains artifacts and inscriptions dating back to the 1st century BCE, making it one of Sri Lanka's oldest continuously used religious sites.",
          "The caves were used as a monastery and place of worship for over 2,000 years, with continuous renovations and additions.",
          "The temple complex was designated a UNESCO World Heritage Site in 1991 for its cultural and historical significance."
        ],
        image:
          "https://i.pinimg.com/1200x/02/8c/8f/028c8fb52d792c7993fec8ffbc742b92.jpg",
      },
      {
        id: "ambience",
        title: "Spiritual Ambience and Scenic Views",
        content:
          "Set atop a large rock outcrop, the temple offers visitors a serene environment ideal for meditation and reflection. The summit provides panoramic views of the surrounding countryside, including the Sigiriya Rock Fortress, creating a harmonious blend of spirituality and natural beauty.",
        additionalDetails: [
          "The temple sits atop a 160-meter-high rock, providing spectacular views of the surrounding countryside.",
          "The complex includes a large standing Buddha statue carved from the rock face, visible from miles away.",
          "The site features a massive golden Buddha statue that was added in 1991, covered in pure gold leaf.",
          "The surrounding landscape includes several ancient stupas and meditation halls built on the rock plateau.",
          "The temple's location provides a peaceful atmosphere conducive to meditation and spiritual reflection."
        ],
        image:
          "https://i.pinimg.com/1200x/89/40/c8/8940c837ae563fef4402f13737040ff9.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/1200x/20/9c/68/209c686f2d008ca79c9821ce83365205.jpg",
      Dimage:
      "https://i.pinimg.com/736x/32/ac/11/32ac1158488c592eac9ee9ac205a14b4.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/65/af/db/65afdb6cd7d7f37900702e4a9ab083f6.jpg",
      "https://i.pinimg.com/736x/0a/c4/54/0ac454f41d6c98f5d35b41102fc2051a.jpg",
      "https://i.pinimg.com/1200x/90/aa/0b/90aa0b743cb4e6f0b345217f7cc21c0c.jpg",
      "https://i.pinimg.com/1200x/f8/a1/56/f8a1569ce2ad8f369f7b8695ccb3d421.jpg",
    ],
    rating: 4.8,
    location: "Dambulla, Matale District, Central Province, Sri Lanka",
    bestTime: "January to May (dry season)",
    activities: [
      "Temple Exploration",
      "Viewing Ancient Cave Paintings",
      "Meditation and Worship",
      "Climbing to the Cave Complex",
    ],
    facts: [
      "UNESCO World Heritage Site since 1991",
      "Contains over 150 Buddha statues and murals covering 2,100 square meters",
      "Dates back to the 1st century BCE",
      "Built by King Valagamba of Anuradhapura",
      "Also known as the Golden Temple of Dambulla",
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

export default DambullaCaveTemple;
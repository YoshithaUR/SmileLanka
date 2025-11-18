import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const EllaRock = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 2,
    name: "Ella Rock",
    description:
      "Stunning hiking destination with panoramic views of the surrounding hills.",
    longDescription:
      "Ella Rock is one of the most popular hiking destinations in Sri Lanka, offering breathtaking panoramic views of the surrounding hills and valleys. The hike to Ella Rock is moderately challenging and takes about 2-3 hours round trip.",
    detailedInfo: [
      {
        id: "hiking",
        title: "The Hiking Experience",
        content:
          "The trail to Ella Rock begins near Ella town and winds through tea plantations, small villages, and lush forests. The final ascent requires some scrambling over rocks, making it an exciting challenge for hikers. The summit rewards visitors with a 360-degree view of the picturesque Ella gap and surrounding mountain ranges.",
        additionalDetails: [
          "The hike is approximately 3 kilometers round trip and takes 2-3 hours to complete, depending on fitness level.",
          "The trail passes through several tea estates, offering opportunities to see tea processing and interact with local workers.",
          "The final 200 meters involve a steep rock scramble that requires careful footing but is not technically difficult.",
          "Best started early in the morning (6-7 AM) to avoid heat and crowds, and to catch sunrise views.",
          "The trail is well-marked but can be slippery after rain, so appropriate footwear is essential."
        ],
        image:
          "https://i.pinimg.com/736x/6b/d4/e3/6bd4e31d82e92dce4cd15adc3e3f4efa.jpg",
      },
      {
        id: "views",
        title: "Best Time for Views",
        content:
          "The best time to hike Ella Rock is early morning to catch the sunrise over the misty hills. The views during sunrise are spectacular, with the valleys below often shrouded in morning mist. Cloudy days can also provide dramatic views as clouds drift through the gaps between hills.",
        additionalDetails: [
          "Sunrise views from the summit are considered among the most spectacular in Sri Lanka, with the sun rising over the misty Uva province.",
          "The Ella Gap, a natural depression between mountain ranges, provides unobstructed views that stretch for dozens of kilometers.",
          "On clear days, visitors can see as far as the coast and identify several other mountain peaks in the distance.",
          "The best months for hiking are March to September when rainfall is minimal and visibility is highest.",
          "Evening hikes are also popular for sunset views, though the return journey will be in darkness."
        ],
        image:
          "https://i.pinimg.com/1200x/47/1b/ee/471bee063c7c553f8a3662fb9691769b.jpg",
      },
      {
        id: "attractions",
        title: "Nearby Attractions",
        content:
          "Ella Rock is just one of several hiking destinations near Ella town. Other popular hikes include Little Adam's Peak and Ella Rock's neighbor, Kiriigala. The town itself is charming, with colonial-era buildings and excellent local restaurants.",
        additionalDetails: [
          "Little Adam's Peak, a 1-hour hike from Ella town, offers easier access to panoramic views and is popular with families.",
          "Nine Arch Bridge, a historic railway bridge, is just 15 minutes from Ella and offers iconic photo opportunities.",
          "Ravana Falls, a 25-meter waterfall, is accessible via a short walk from the main road and is one of the widest waterfalls in Sri Lanka.",
          "Ella town features several excellent restaurants serving both local and international cuisine, with many offering hill views.",
          "The nearby Uva Halpewatte Tea Factory offers tours where visitors can learn about traditional tea processing methods."
        ],
        image:
          "https://i.pinimg.com/736x/b0/e0/12/b0e0129322e26adadd6cae0b157a8d10.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/736x/15/34/bb/1534bbb263c8f150bbc0e442075c22c7.jpg",
      Dimage:
      "https://i.pinimg.com/736x/d7/c3/0f/d7c30f51352c5f7793a90fd98640a71d.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/f3/ea/64/f3ea64abf7f290a563b746adf9801b6b.jpg",
      "https://i.pinimg.com/1200x/ce/78/e7/ce78e738757830d92eb964ea8b314b0e.jpg",
      "https://i.pinimg.com/1200x/39/40/28/39402864241bc1a995f2d354c78817c1.jpg",
      "https://i.pinimg.com/736x/1c/33/d7/1c33d7f62fd4bd9b9e4cdc54d582338c.jpg",
    ],
    rating: 4.9,
    location: "Badulla District, Uva Province",
    bestTime: "March to September",
    activities: ["Hiking", "Photography", "Nature Walks", "Sunrise Viewing"],
    facts: [
      "360-degree panoramic views",
      "Best at sunrise",
      "Tea plantation trails",
      "Popular Instagram spot",
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

export default EllaRock;
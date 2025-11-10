import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const NuwaraEliya = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id:8,
    name: "Nuwara Eliya",
    description:
      "A picturesque hill station known as 'Little England', surrounded by tea plantations, waterfalls, and misty mountains.",
    longDescription:
      "Nuwara Eliya, often referred to as 'Little England', is a charming hill station located in the Central Highlands of Sri Lanka. Set at an altitude of around 1,868 meters, the town is famous for its cool climate, rolling tea estates, colonial-era architecture, and breathtaking landscapes. Originally developed by the British in the 19th century as a retreat, Nuwara Eliya still retains its old-world charm with red-brick houses, rose gardens, and a scenic golf course. The region is also home to some of the island's most iconic attractions, including Lake Gregory, Hakgala Botanical Garden, and Horton Plains National Park.",
    detailedInfo: [
      {
        id: "tea",
        title: "Tea Plantations and Scenic Views",
        content:
          "Nuwara Eliya is surrounded by lush green tea plantations that produce some of the world's finest Ceylon tea. Visitors can tour famous tea factories such as Pedro Tea Estate or Blue Field Tea Gardens to learn about tea production and sample freshly brewed varieties while enjoying panoramic mountain views.",
        additionalDetails: [
          "Nuwara Eliya is home to some of Sri Lanka's most prestigious tea estates, including Pedro, Blue Field, and Mackwoods Labookellie Estate.",
          "The region produces high-quality black tea known as 'Ceylon tea', which is exported worldwide and considered among the finest teas globally.",
          "Tea factory tours typically include demonstrations of the tea-making process from withering to rolling, fermenting, and drying.",
          "The cool climate and specific soil conditions at this elevation create ideal conditions for growing premium tea varieties.",
          "Many tea estates offer accommodation in plantation bungalows, providing visitors with an authentic experience of colonial-era tea plantation life."
        ],
        image:
          "https://i.pinimg.com/1200x/9a/28/61/9a2861ff188800fbe4f2cf5e912b40b6.jpg",
      },
      {
        id: "colonial",
        title: "Colonial Heritage and Architecture",
        content:
          "Often called 'Little England', Nuwara Eliya is known for its colonial charm reflected in its Tudor-style houses, red-brick post office, and the Grand Hotel. The town was once a favorite retreat for British planters and governors who built English-style cottages and gardens that still adorn the misty hillsides today.",
        additionalDetails: [
          "The town's Victorian-era architecture includes the Grand Hotel, Post Office, and numerous Tudor-style bungalows built by British planters.",
          "The Nuwara Eliya Golf Club, established in 1889, is one of the oldest golf courses in Asia and still hosts international tournaments.",
          "The Hill Club, originally a British-only club, offers panoramic views of the town and surrounding tea estates from its elevated position.",
          "Lake Gregory, an artificial lake created in 1873, provides recreational activities and scenic views in the heart of the town.",
          "The town's climate, with temperatures averaging 15-20°C (59-68°F), reminded British colonists of their homeland, earning it the nickname 'Little England'."
        ],
        image:
          "https://i.pinimg.com/1200x/cd/5f/99/cd5f995ef6259a701b4e6575cf3476a7.jpg",
      },
      {
        id: "nature",
        title: "Nature and Outdoor Adventures",
        content:
          "Beyond its serene beauty, Nuwara Eliya offers many outdoor activities including boating on Lake Gregory, exploring Hakgala Botanical Gardens, and hiking at Horton Plains National Park to witness the famous World's End viewpoint and Baker's Falls. The cool climate makes it a perfect getaway for nature lovers and adventurers alike.",
        additionalDetails: [
          "Hakgala Botanical Gardens, established in 1861, is one of the highest botanical gardens in Sri Lanka and features diverse plant collections.",
          "Horton Plains National Park, a UNESCO World Heritage Site, offers hiking trails leading to World's End cliff and Baker's Falls.",
          "Lake Gregory provides opportunities for boating, fishing, and scenic walks around its perimeter.",
          "The region is home to several waterfalls, including Devon Falls and St. Clair's Falls, known as the 'Little Niagara of Sri Lanka'.",
          "The cool climate supports unique flora and fauna, including several endemic species found only in Sri Lanka's highland regions."
        ],
        image:
          "https://i.pinimg.com/1200x/22/8b/a9/228ba9050e7cb6bb32f98fb6d4bb291d.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/736x/96/00/92/960092b2d02398d56e7867fb6a0fc218.jpg",
       Dimage:
      "https://i.pinimg.com/736x/1e/73/c5/1e73c52f9e5a255b8e7f27b7b7034657.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/c4/ac/75/c4ac75d4eb669e16c5de728d53c0b506.jpg",
      "https://i.pinimg.com/1200x/b2/6d/70/b26d70d115f06f235775e527da43303a.jpg",
      "https://i.pinimg.com/736x/58/5b/df/585bdfb2de66f206ceb25ed08730b927.jpg",
      "https://i.pinimg.com/736x/e4/f9/3f/e4f93f30396ae9a248de901a71d1eefd.jpg",
    ],
    rating: 4.8,
    location: "Nuwara Eliya, Central Province, Sri Lanka",
    bestTime: "February to May and August to September",
    activities: [
      "Tea Estate Tours",
      "Boat Riding on Lake Gregory",
      "Sightseeing and Photography",
      "Hiking at Horton Plains",
      "Exploring Botanical Gardens",
    ],
    facts: [
      "Located 1,868 meters above sea level",
      "Known as 'Little England' for its colonial influence",
      "Major producer of world-famous Ceylon tea",
      "Home to Horton Plains and World's End",
      "Developed as a British hill station in the 19th century",
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

export default NuwaraEliya;
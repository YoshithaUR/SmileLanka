import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const HortonPlains = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 11,
    name: "Horton Plains",
    description:
      "A stunning highland plateau known for its breathtaking landscapes, diverse wildlife, and the famous World's End cliff.",
    longDescription:
      "Horton Plains National Park, located in the Central Highlands of Sri Lanka, is one of the island's most beautiful and ecologically rich natural reserves. Recognized as a UNESCO World Heritage Site, the park sits at an elevation of over 2,100 meters and features rolling grasslands, cloud forests, and sparkling streams. It is home to a variety of endemic flora and fauna, including the Sri Lankan sambar deer and several unique bird species. The park's most iconic attraction, World's End, offers a dramatic 870-meter drop with breathtaking panoramic views of the southern plains. Visitors can also explore Baker's Falls, a picturesque waterfall nestled within the park. With its cool climate, misty landscapes, and natural wonders, Horton Plains is a must-visit destination for nature lovers and hikers alike.",
    detailedInfo: [
      {
        id: "worlds-end",
        title: "World's End Viewpoint",
        content:
          "The main highlight of Horton Plains, World's End, is a sheer cliff with an 870-meter drop offering stunning views of the southern plains. On clear mornings, visitors can even see the distant Indian Ocean. The nearby Mini World's End provides another scenic vantage point within a shorter walk.",
        additionalDetails: [
          "World's End is a dramatic escarpment with a vertical drop of 870 meters (2,850 feet), making it one of the highest cliffs in Sri Lanka.",
          "On exceptionally clear days, visitors can see the Indian Ocean from the viewpoint, which is over 40 kilometers away.",
          "The walk to World's End takes approximately 2-3 hours from the main entrance and involves a moderate hike through varied terrain.",
          "Mini World's End, located about 1 kilometer from the main viewpoint, offers equally spectacular views but is less crowded.",
          "The best time to visit is early morning (7-9 AM) when mist often clears to reveal panoramic views of the southern plains."
        ],
        image:
          "https://i.pinimg.com/736x/ef/7f/a5/ef7fa52d5f7f4991b73e06dec32b4365.jpg",
      },
      {
        id: "bakers-falls",
        title: "Baker's Falls and Natural Beauty",
        content:
          "Baker's Falls, named after the British explorer Sir Samuel Baker, is one of the most photographed spots in Horton Plains. Surrounded by lush greenery and misty air, this picturesque waterfall adds to the park's enchanting atmosphere and is accessible via the main hiking trail.",
        additionalDetails: [
          "Baker's Falls is a 20-meter-high waterfall formed by the Belihul Oya river cascading over ancient rock formations.",
          "The waterfall was named after Sir Samuel Baker, a 19th-century British explorer who discovered the area during his travels in Ceylon.",
          "The falls are most impressive during the monsoon season (October to January) when water flow is at its peak.",
          "A wooden viewing platform provides safe access to observe the waterfall from multiple angles without disturbing the natural environment.",
          "The area around the falls is rich in endemic flora, including several species of orchids and rhododendrons that bloom seasonally."
        ],
        image:
          "https://i.pinimg.com/736x/78/bd/de/78bddee51c3c526e97e3770c9cf3aa00.jpg",
      },
      {
        id: "biodiversity",
        title: "Biodiversity and Unique Ecosystem",
        content:
          "Horton Plains is home to diverse ecosystems, including montane grasslands and cloud forests that support many endemic species. The Sri Lankan sambar deer, purple-faced langur, and various rare birds like the Sri Lanka whistling thrush thrive in this protected environment.",
        additionalDetails: [
          "The park is home to over 24 species of mammals, including the endemic Sri Lankan sambar deer and toque macaque.",
          "Over 150 bird species have been recorded in the park, including several endemics like the Sri Lanka whistling thrush and dull-blue flycatcher.",
          "The vegetation consists of montane grasslands, cloud forests, and patches of tropical montane forest at different elevations.",
          "The park contains several endemic plant species, including the Horton Plains slender loris and various species of rhododendron.",
          "The area is the source of three major river systems: the Mahaweli, Kelani, and Walawe, making it crucial for Sri Lanka's water resources."
        ],
        image:
          "https://i.pinimg.com/1200x/6a/9d/52/6a9d52cdddb643e26aba6d35f785ed14.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/1200x/8e/c7/ce/8ec7cebb3740e95fdcae9a464cc17de9.jpg",
      Dimage:
      "https://i.pinimg.com/1200x/be/d8/06/bed8065a4d8da3136905c02286f3d31d.jpg",
    gallery: [
      "https://i.pinimg.com/736x/28/de/9f/28de9f2b3257e65f9eaf62d42597606b.jpg",
      "https://i.pinimg.com/1200x/4d/02/5b/4d025b7905add79bb7b4bf1f9b087436.jpg",
      "https://i.pinimg.com/1200x/65/2f/59/652f59a2cedf8409384d5a56b5306155.jpg",
      "https://i.pinimg.com/736x/07/4f/25/074f254d1b480c9acc0a177d5435c9fa.jpg",
    ],
    rating: 4.9,
    location: "Central Highlands, Nuwara Eliya District, Sri Lanka",
    bestTime: "January to March (clear skies and best visibility)",
    activities: [
      "Hiking to World's End",
      "Visiting Baker's Falls",
      "Wildlife and Bird Watching",
      "Exploring Montane Forest Trails",
    ],
    facts: [
      "UNESCO World Heritage Site since 2010",
      "Home to the famous World's End viewpoint",
      "Elevation around 2,100-2,300 meters above sea level",
      "Source of major rivers like the Mahaweli, Kelani, and Walawe",
      "Habitat for many endemic species of flora and fauna",
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

export default HortonPlains;
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const AdamPeak= () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 4,
   name: "Adam's Peak",
    description:
      "Sacred mountain and pilgrimage site known for the Sri Pada footprint at its summit.",
    longDescription:
      "Adam's Peak, also known as Sri Pada, is a revered mountain located in the central highlands of Sri Lanka. Rising to a height of 2,243 meters (7,359 feet), it is one of the most famous pilgrimage destinations in the country. The mountain is known for the sacred footprint at its summit, believed by Buddhists to be the footprint of the Buddha, by Hindus as that of Lord Shiva, by Muslims as that of Adam, and by Christians as that of St. Thomas. Climbing the mountain, especially at night, to witness the breathtaking sunrise from the peak is considered a spiritual and unforgettable experience.",
    detailedInfo: [
      {
        id: "religious",
        title: "Religious Significance",
        content:
          "Adam's Peak is a multi-religious pilgrimage site revered by Buddhists, Hindus, Muslims, and Christians alike. The sacred footprint at the summit, known as Sri Pada, symbolizes different spiritual interpretations across these faiths, making it a unique symbol of harmony and devotion.",
        additionalDetails: [
          "For Buddhists, the footprint is believed to be that of Lord Buddha, making it one of the most sacred pilgrimage sites in Sri Lanka.",
          "Hindus believe the footprint belongs to Lord Shiva, and many pilgrims visit during the annual pilgrimage season.",
          "Muslims consider it to be the footprint of Adam, the first human according to Islamic tradition.",
          "Christians believe it to be the footprint of St. Thomas, one of Jesus Christ's twelve apostles.",
          "The pilgrimage season typically runs from December to May, with thousands of devotees making the climb each night."
        ],
        image:
          "https://i.pinimg.com/736x/f3/ce/e0/f3cee0e782cd36bb2d5ded111c742e1b.jpg",
      },
      {
        id: "climbing",
        title: "Climbing Experience",
        content:
          "The climb to the summit involves more than 5,000 steps and typically begins at night so that pilgrims and travelers can reach the top by dawn. The sight of the sunrise casting a triangular shadow of the peak over the surrounding valleys is a breathtaking highlight of the journey.",
        additionalDetails: [
          "The trek begins in the town of Nallathanniya or Dalupatha, with multiple trail options of varying difficulty levels.",
          "Most pilgrims start their ascent between 2 AM and 4 AM to reach the summit in time for sunrise.",
          "The final stretch includes climbing the famous 'Chain Path' where pilgrims hold onto a metal chain for support.",
          "Tea stalls and rest points are available along the trail, operated by local communities.",
          "The triangular shadow phenomenon, known as 'Sri Pada Shadow,' is visible only during certain months and is considered a sacred sight."
        ],
        image:
          "https://i.pinimg.com/736x/86/02/bc/8602bcf8fa0673ed16403be07338ef26.jpg",
      },
      {
        id: "natural",
        title: "Natural Beauty",
        content:
          "Surrounded by lush forests, waterfalls, and mist-covered hills, Adam's Peak is located within the Peak Wilderness Sanctuary, a biodiversity-rich area that is home to many endemic species. The path to the top is lined with small shrines, rest stops, and tea stalls that add to its serene atmosphere.",
        additionalDetails: [
          "The Peak Wilderness Sanctuary covers approximately 21,000 hectares and protects diverse flora and fauna.",
          "The area is home to endemic species like the Sri Lankan sambar deer, purple-faced langur, and various endemic bird species.",
          "Several waterfalls, including Bomburu Ella and Devon Falls, can be seen along different trekking routes.",
          "The mountain's ecosystem changes with elevation, from tropical lowland forests to montane forests near the summit.",
          "The best time to visit for natural beauty is during the monsoon season when waterfalls are at their fullest."
        ],
        image:
          "https://i.pinimg.com/736x/25/91/be/2591be81c55886bcc0480edb96bdef7f.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg",
      Dimage:
      "http://i.pinimg.com/736x/9c/da/cd/9cdacdd7adfc4e4e5518a632456bd3fb.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/91/7b/f3/917bf3784c8b4cefdc8f70a82f13c7b2.jpg",
      "https://i.pinimg.com/1200x/5d/62/ad/5d62adfd8c0918dec14f9e4e3853983d.jpg",
      "https://i.pinimg.com/736x/02/fb/c9/02fbc989dc781146451524a70eab30b2.jpg",
      "https://i.pinimg.com/1200x/65/27/7e/65277e7c03172719d828221e9174c772.jpg",
    ],
    rating: 4.9,
    location: "Nuwara Eliya District, Central Province, Sri Lanka",
    bestTime: "December to May (during pilgrimage season)",
    activities: [
      "Night Hike to the Summit",
      "Sunrise Viewing",
      "Pilgrimage and Worship",
      "Nature Observation",
    ],
    facts: [
      "Also known as Sri Pada (Sacred Footprint)",
      "Elevation: 2,243 meters (7,359 feet)",
      "Visited by pilgrims from multiple religions",
      "Best known for its spectacular sunrise",
      "Located within the Peak Wilderness Sanctuary",
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

export default AdamPeak;
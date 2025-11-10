import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const MirissaBeach = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 6,
    name: "Mirissa Beach",
    description:
      "A stunning crescent-shaped beach known for whale watching, surfing, and relaxed coastal vibes.",
    longDescription:
      "Mirissa Beach, located along Sri Lanka's southern coastline, is one of the island's most picturesque and vibrant beach destinations. With its soft golden sands, swaying coconut palms, and turquoise waters, Mirissa offers the perfect balance between relaxation and adventure. It's particularly famous for whale and dolphin watching, attracting travelers from all over the world who come to witness the majestic blue whales in their natural habitat. Beyond its natural beauty, Mirissa is also a lively hub for beachside dining, surfing, and exploring nearby attractions like Coconut Tree Hill and Parrot Rock Bridge.",
    detailedInfo: [
      {
        id: "whale",
        title: "Whale and Dolphin Watching",
        content:
          "Mirissa is one of the best places in the world to spot blue whales and spinner dolphins. Early morning boat tours take visitors out to the deep sea where these magnificent creatures can be seen breaching and playing. The whale watching season runs mainly from November to April, offering unforgettable marine experiences.",
        additionalDetails: [
          "Mirissa is considered one of the best places in the world to see blue whales, the largest animals ever to exist on Earth.",
          "The whale watching season peaks from November to April when blue whales migrate to the area's rich feeding grounds.",
          "Boat trips typically last 3-4 hours and depart early in the morning (6-7 AM) for the best viewing conditions.",
          "In addition to blue whales, visitors can spot sperm whales, pilot whales, and several species of dolphins including bottlenose and spinner dolphins.",
          "The waters off Mirissa are part of a larger whale migration route, making sightings possible year-round, though less frequent during off-peak months."
        ],
        image:
          "https://i.pinimg.com/1200x/4c/4e/34/4c4e34a76f958c2ff098fc06ae992719.jpg",
      },
      {
        id: "coconut",
        title: "Coconut Tree Hill",
        content:
          "Located at the eastern end of Mirissa Beach, Coconut Tree Hill is one of the most photographed spots in Sri Lanka. This small palm-covered cliff overlooks the ocean, offering breathtaking sunrise and sunset views. It's a perfect place for photography and enjoying the tropical sea breeze.",
        additionalDetails: [
          "Coconut Tree Hill rises about 30 meters above sea level and offers panoramic 360-degree views of the coastline.",
          "The hill is easily accessible via a 15-minute walk from the main beach area through local pathways.",
          "It's one of the most Instagrammed locations in Sri Lanka, with visitors coming specifically for the iconic photo opportunities.",
          "The best times to visit are early morning for sunrise or late afternoon for sunset, when the light creates dramatic photo opportunities.",
          "The hill is crowned with several coconut palms that sway in the ocean breeze, creating the perfect tropical silhouette against the sea."
        ],
        image:
          "https://i.pinimg.com/736x/05/4f/f4/054ff48fcfa601cd27a05ae96c945843.jpg",
      },
      {
        id: "surfing",
        title: "Surfing and Beach Life",
        content:
          "Mirissa's gentle waves make it an excellent spot for beginner and intermediate surfers. Surf schools along the beach offer lessons and board rentals. The lively beachside cafes, seafood restaurants, and relaxed nightlife add to Mirissa's charm as a favorite destination for both adventure seekers and those seeking tranquility.",
        additionalDetails: [
          "Mirissa has consistent waves suitable for beginners and intermediate surfers, with several surf schools offering lessons and board rentals.",
          "The best surfing conditions are during the dry season from November to April when offshore winds create cleaner waves.",
          "Popular surf spots include the main beach area and Point Break, which offers more challenging waves for experienced surfers.",
          "The beachfront is lined with numerous cafes, restaurants, and bars that cater to both tourists and locals, creating a vibrant social scene.",
          "Accommodation options range from budget guesthouses to luxury resorts, all within walking distance of the beach."
        ],
        image:
          "https://i.pinimg.com/1200x/e4/50/e3/e450e3e6b3e30fe4faaaee147712cf41.jpg",
      },
    ],
    image:
      "https://i.pinimg.com/1200x/06/3a/98/063a98bc9201e1a0a417641e2b98c718.jpg",
      Dimage:
      "https://i.pinimg.com/1200x/ae/cb/7f/aecb7f826b71d4ac1060373e11498b72.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/db/8b/56/db8b562a0650f480139a0073eaa45643.jpg",
      "https://i.pinimg.com/1200x/3d/f4/66/3df4664524e937a8babfb611c8a105c4.jpg",
      "https://i.pinimg.com/736x/fb/0a/99/fb0a9945f3a71ad9cebeeba53758fe2d.jpg",
      "https://i.pinimg.com/736x/9a/c9/9a/9ac99ad5532749fb6c032a8f092e674b.jpg",
    ],
    rating: 4.9,
    location: "Mirissa, Southern Province, Sri Lanka",
    bestTime: "November to April",
    activities: [
      "Whale Watching",
      "Surfing",
      "Sunbathing",
      "Beach Dining",
    ],
    facts: [
      "Famous for whale and dolphin watching",
      "Ideal surfing destination for beginners",
      "Home to the iconic Coconut Tree Hill viewpoint",
      "Known for vibrant beach nightlife and seafood cafes",
      "Crystal-clear waters perfect for swimming and snorkeling",
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

export default MirissaBeach;
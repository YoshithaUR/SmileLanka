import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const YalaNational= () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // Destination details
  const destination = {
    id: 3,
   name: "Yala National Park",
      description:
        "Famous wildlife reserve known for its leopard population and diverse fauna.",
      longDescription:
        "Yala National Park is a large wildlife sanctuary located in the southeastern region of Sri Lanka, spanning the Hambantota and Monaragala districts. It is the second-largest national park in the country and is renowned for its rich biodiversity and scenic landscapes. The park covers an area of nearly 979 square kilometres (378 square miles) and features a diverse range of ecosystems, including dry forests, grasslands, wetlands, and coastal lagoons.",
    detailedInfo: [
        {
          id: "wildlife",
          title: "Wildlife Diversity",
          content:
            "Yala National Park is home to one of the highest densities of leopards in the world, along with elephants, sloth bears, crocodiles, and over 200 species of birds. The park's rich biodiversity makes it one of Sri Lanka's most popular destinations for wildlife observation.",
          additionalDetails: [
            "Yala has the highest leopard density in the world, with an estimated 25-30 leopards in Block I alone.",
            "The park is home to the Sri Lankan elephant, a subspecies endemic to the island with distinct physical characteristics.",
            "Over 215 bird species have been recorded in Yala, including several endemic species like the Sri Lanka grey hornbill.",
            "The park protects one of the largest populations of Sri Lankan sloth bears, which are known for their distinctive cream-colored chest markings.",
            "Yala is one of the best places in Asia to see mugger crocodiles in their natural habitat."
          ],
          image:
            "https://i.pinimg.com/736x/80/a6/9b/80a69b9f0678cd5fc615dd2fc0bd559a.jpg",
        },
        {
          id: "landscapes",
          title: "Scenic Landscapes",
          content:
            "The park's terrain consists of a fascinating mix of dry forests, grasslands, wetlands, and coastal lagoons. Its dramatic landscapes, complemented by natural rock formations and serene water bodies, provide breathtaking views during safari tours.",
          additionalDetails: [
            "Yala features five blocks (I-V), with Block I being the most visited and accessible for safari tours.",
            "The park includes several important water bodies, including Yala West Tank and Yala East Tank, which are crucial for wildlife during dry seasons.",
            "The Ruhuna Maha vihara, an ancient Buddhist temple complex, is located within the park boundaries.",
            "Yala's coastline features beautiful beaches and rocky outcrops that provide nesting sites for marine turtles.",
            "The park's diverse ecosystems support different wildlife communities, making each area unique in its offerings."
          ],
          image:
            "https://i.pinimg.com/736x/5a/b7/52/5ab752693290c0538702287ae64b6256.jpg",
        },
        {
          id: "heritage",
          title: "Cultural Heritage",
          content:
            "Beyond its wildlife, Yala holds deep historical and cultural importance. The ancient Sithulpawwa Rock Temple, located within the park, dates back over 2,000 years and is believed to have once housed thousands of Buddhist monks.",
          additionalDetails: [
            "Sithulpawwa Rock Temple was built during the reign of King Mahanaga in the 2nd century BC and was a major monastic center.",
            "Archaeological excavations have revealed that the temple complex once housed over 1,200 monks in its heyday.",
            "The temple features ancient stupas, meditation caves, and a large image house carved into the rock face.",
            "Yala's name is derived from the Tamil word 'Yalaya,' meaning 'beehive,' referring to the many rock formations in the area.",
            "The park contains several prehistoric sites with evidence of human habitation dating back over 40,000 years."
          ],
          image:
            "https://i.pinimg.com/1200x/9b/49/de/9b49de63f818cba9e5273d4f1b42af6c.jpg",
        },
      ],
      image:
        "https://i.pinimg.com/1200x/7f/62/a8/7f62a896d04e425ee62d0574429ef936.jpg",
        Dimage:
        "https://i.pinimg.com/1200x/67/08/f9/6708f9e5cbc0d1d23e74f0274aa4780b.jpg",
      gallery: [
        "https://i.pinimg.com/736x/e3/8c/2e/e38c2e62e85f6d4b863c56edb5b8168e.jpg",
        "https://i.pinimg.com/1200x/de/94/68/de9468d180efee7ba29b489c71daae8d.jpg",
        "https://i.pinimg.com/1200x/aa/45/20/aa452032c04574feeb84ad0e287db9eb.jpg",
        "https://i.pinimg.com/1200x/56/97/dd/5697dd8ddf3b5815535a709c80af405b.jpg",
      ],
   
    rating: 4.9,
    location:
        "Southeastern Sri Lanka, spanning Hambantota and Monaragala Districts",
      bestTime: "February to July",
      activities: [
        "Jeep Safari",
        "Wildlife Photography",
        "Bird Watching",
        "Nature Exploration",
      ],
      facts: [
        "Second largest national park in Sri Lanka",
        "Covers an area of 979 square kilometers",
        "Known for the world's highest density of leopards",
        "Home to over 200 species of birds",
        "Contains the ancient Sithulpawwa Rock Temple",
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

export default YalaNational;
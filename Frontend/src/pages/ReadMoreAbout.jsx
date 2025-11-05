import React, { useState } from "react";

const ReadMoreAbout = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/f5/dc/ad/f5dcade41729a230001a5b1d03ead500.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          ABOUT <span className="text-yellow-400">US</span>
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="text-yellow-400 font-semibold">Smile Lanka</span> — your
          ultimate adventure travel partner! We are a passionate team of explorers and travel
          enthusiasts who believe that the best way to experience life is through adventure.
        </p>

        <p className="text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto">
          Our mission is to help travelers discover the untamed beauty of Sri Lanka — from misty
          mountain hikes and breathtaking waterfalls to thrilling safaris and coastal escapes. Each
          journey we plan is crafted with care, ensuring authentic local experiences, comfort, and
          unforgettable memories.
        </p>

        {/* Info Boxes */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🌄 Our Vision</h3>
            <p>
              To inspire people to explore the world responsibly and embrace adventure while
              protecting nature and local cultures.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🧭 Our Mission</h3>
            <p>
              To offer meaningful and sustainable travel experiences that connect travelers with the
              soul of Sri Lanka.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🤝 Our Promise</h3>
            <p>
              We promise unforgettable adventures, professional guides, eco-friendly practices, and
              a true sense of connection with every destination we visit.
            </p>
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setShowMore(true)}
          className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Read More
        </button>
      </div>

      {/* Modal for Read More */}
      {showMore && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative animate-fadeIn text-gray-800">
            <button
              onClick={() => setShowMore(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-4 text-yellow-500">More About Smile Lanka</h2>
            <p className="leading-relaxed text-gray-700 mb-4">
              At Smile Lanka, we believe travel is not just about destinations — it’s about
              experiences, emotions, and connections. Our team of local experts designs each package
              with attention to culture, adventure, and relaxation, ensuring a perfect balance for
              every traveler.
            </p>
            <p className="leading-relaxed text-gray-700 mb-4">
              Whether you’re hiking through the lush tea plantations of Ella, surfing in Arugam Bay,
              or exploring the ancient wonders of Sigiriya, we make sure your journey feels unique
              and unforgettable.
            </p>
            <p className="leading-relaxed text-gray-700">
              Our travelers become part of our extended family — we go the extra mile to provide
              warmth, safety, and joy on every trip. Choose Smile Lanka, and let’s explore paradise
              together!
            </p>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowMore(false)}
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReadMoreAbout;
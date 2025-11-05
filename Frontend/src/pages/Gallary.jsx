import React from "react";
import "./css/gallary.css";
import sigiriyaVideo from "../assest/sigiriye.mp4"
import kandyVideo from "../assest/kandy.mp4"
import nuwaraVideo from "../assest/nu-eliya.mp4"
import ellaVideo from "../assest/ella.mp4"
import galleVideo from "../assest/galle.mp4"

const places = [
  { name: "Kandy", video: kandyVideo },
  { name: "Sigiriya", video: sigiriyaVideo },
  { name: "Ella", video: ellaVideo },
  { name: "Galle", video: galleVideo },
  { name: "Nuwara Eliya", video: nuwaraVideo },
];

const Gallery = () => {
  return (
    <section 
      id="gallary"
      data-aos="fade-in"
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
        <h1 
          className="text-5xl md:text-6xl text-yellow-400font-bold text-yellow-400 mb-10 tracking-wider"
          data-aos="fade-down"
        >
          TRAVEL
        </h1>

        <div className="slider-container">
          <div className="slider">
            {places.concat(places).map((place, index) => (
              <div 
                key={index} 
                className="slide"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <video
                  className="rounded-xl w-full h-full object-cover"
                  src={place.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div className="caption">{place.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="absolute bottom-10 text-sm text-gray-300 animate-pulse font-handwriting"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Pearl Of Indian Ocean
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

          .font-handwriting {
            font-family: 'Great Vibes', cursive;
            font-size: 1.8rem;
            letter-spacing: 1px;
            color: #f5e6ca;
            text-shadow: 0 0 10px rgba(255,255,255,0.3);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;
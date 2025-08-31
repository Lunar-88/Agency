
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex md:pb-14 pt-28"
      style={{ backgroundImage: "url('./websitedeveloperkenya.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative px-6 md:px-0 md:ml-12 lg:ml-24 text-left text-white max-w-2xl">
        <h1 className="text-5xl sm:text-5xl font-serif md:text-6xl font-bold mb-6 drop-shadow-lg">
          Web Developer <br /> Kenya
        </h1>

        <p className="text-xl font-semibold sm:text-lg md:text-2xl pb-14">
          Best Web Developers in Kenya || Top Web Development Company in Nairobi
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Email Button */}
          <a
            href="mailto:info@webdeveloperkenya.com"
            className="flex items-center gap-2 bg-orange-600 text-lg font-semibold text-white px-8 py-3 rounded-full hover:bg-orange-700 transition duration-300"
          >
            <FaEnvelope className="text-xl" /> Email
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254759306105"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-lg font-semibold text-white px-4 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

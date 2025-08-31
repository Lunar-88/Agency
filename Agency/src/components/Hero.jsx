
import React from "react";

function Hero() {
  return (
    <section
  className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex md:pb-14 pt-28"
  style={{ backgroundImage: "url('./websitedeveloperkenya.png')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative px-6 md:px-0 md:ml-12 lg:ml-24 text-left text-white max-w-2xl">
    <h1 className="text-5xl sm:text-5xl font-serif text-white shadow-lg md:text-6xl font-bold mb-6">
      Web Developer<br /> Kenya
    </h1>
    <p className="text-xl font-semibold sm:text-lg md:text-2xl pb-14">
      Best Web Developers in Kenya || Top Web Development Company in Nairobi
    </p>

    <div className="space-x-4">
      {/* Email Button */}
      <a
        href="mailto:info@webdeveloperkenya.com"
        className="bg-orange-600 text-xl font-semibold text-white px-10 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-orange-700 transition duration-300 inline-block"
      >
        Email
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254759306105" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-600 text-lg font-semibold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-700 transition duration-300 inline-block"
      >
        WhatsApp
      </a>
    </div>
  </div>
</section>


  );
}
export default Hero;

import React from "react";
import { Trophy, Users, MapPin, Headphones } from "lucide-react"; // Icons

function AboutUs() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-100">
      <div className="px-4 md:px-12 lg:px-24">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-orange-600"
          aria-label="About Website Developer Kenya"
        >
          About Us
        </h2>

        {/* Flex container: About left, Facts right */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16">
          
          {/* Left: About Card */}
          <div className="bg-white font-serif rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 md:w-2/3">
            <article className="text-gray-700 space-y-5 leading-relaxed">
              <p className="text-lg md:text-xl text-left">
                <span className="text-orange-500 font-semibold">Website Developer Kenya</span> are the best
                web developers in Kenya. We are passionate about helping businesses in the retail, finance, health, and corporate industries fully leverage the latest software technologies.
                As a top web development company in Nairobi, our tech team is dedicated to creating websites that meet your exact needs because we pride ourselves on being the best web developers in Kenya.
              </p>
              <p className="text-lg md:text-xl font-medium text-left">
                Additionally, we help you integrate the latest payment gateways, enabling you to accept payments from debit and credit cards both locally and internationally. This integration ensures smooth transactions for your customers no matter where they are located.
              </p>
            </article>
          </div>

          {/* Right: Facts (2x2 grid) */}
          <div className="grid grid-cols-2 gap-6 md:w-1/3">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <Trophy className="mx-auto text-orange-600 w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Award Winning</h3>
              <p className="text-gray-600 text-sm">Recognized for excellence</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <Users className="mx-auto text-orange-600 w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">500+ Clients</h3>
              <p className="text-gray-600 text-sm">Trusted across Kenya</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <MapPin className="mx-auto text-orange-600 w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Based in Nairobi</h3>
              <p className="text-gray-600 text-sm">Serving globally</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <Headphones className="mx-auto text-orange-600 w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here for you</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;


import React from 'react';

function ThreeCards() {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="px-4 md:px-12 lg:px-24">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-orange-600"
          aria-label="Our Services"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Web Development</h3>
            <p className="text-gray-600 leading-relaxed">
              We build responsive, user-friendly websites tailored to your business needs using the latest technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">E-commerce Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Our e-commerce platforms are designed to provide seamless shopping experiences and secure payment integrations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">SEO & Digital Marketing</h3>
            <p className="text-gray-600 leading-relaxed">
              Enhance your online presence with our SEO strategies and digital marketing services to reach a wider audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeCards;
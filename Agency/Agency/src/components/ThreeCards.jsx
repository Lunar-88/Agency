
import React from 'react';
import { CheckCircle } from "lucide-react";

function ThreeCards() {
  return (
    <section className="py-8 sm:py-16 md:py-10 bg-gray-100">
      <div className="px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Key Services</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-10 h-6 mt-1" />
                <span><strong>Web Development:</strong> We build custom websites designed to your business needs and goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-12 h-6 mt-1" />
                <span><strong>E-commerce Development:</strong> Our ecommerce web design provides you online stores that drive sales.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-10 h-6 mt-1" />
                <span><strong>SEO:</strong> We help you grow your brand's organic traffic via our world's leading SEO services.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-10 h-6 mt-1" />
                <span>To help businesses build their brand through professional websites that drive sales.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-12 h-6 mt-1" />
                <span>To create websites and software solutions that perfectly align with each client’s specific needs and goals.</span>
              </li> 
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-12 h-6 mt-1" />
                <span>To become the best designers in Kenya known for delivering exceptional results-driven web app solutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-14 h-6 mt-1" />
                <span>To empower businesses & individuals across Africa with premium digital solutions that drive growth and success.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ThreeCards;

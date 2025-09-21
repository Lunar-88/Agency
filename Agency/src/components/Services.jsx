
import React from 'react';
import { FiCode, FiShoppingCart, FiTrendingUp, FiShield } from 'react-icons/fi'; // example icons

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build custom websites designed to your business needs and goals. Our web development services include responsive design, e-commerce solutions, CMS integration, and more.",
      icon: <FiCode className="w-12 h-12 text-orange-600 mb-4" />,
    },
    {
      title: "E-commerce Development",
      description:
        "Our ecommerce web design provides you online stores that drive sales. We specialize in platforms like Shopify, WooCommerce, and Magento to create seamless shopping experiences.",
      icon: <FiShoppingCart className="w-12 h-12 text-orange-600 mb-4" />,
    },
    {
      title: "SEO Services",
      description:
        "We help you grow your brand's organic traffic via our world's leading SEO services. Our strategies include keyword research, on-page optimization, link building, and content marketing.",
      icon: <FiTrendingUp className="w-12 h-12 text-orange-600 mb-4" />,
    },
    {
      title: "Website Maintenance",
      description:
        "We provide ongoing website maintenance to ensure your site is always secure, updated, and performing at its best. Services include bug fixes, updates, backups, and performance monitoring.",
      icon: <FiShield className="w-12 h-12 text-orange-600 mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="px-6 md:px-20 lg:px-24">
        <h2
          className="flex items-center justify-center text-orange-600 text-sm sm:text-lg md:text-sm font-semibold tracking-widest uppercase mb-4"
          aria-label="About Website Developer Kenya"
        >
          <span className="w-12 border-t border-orange-600 mx-3"></span>
          What We Do
          <span className="w-12 border-t border-orange-600 mx-3"></span>
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-600">
          Website Development Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-md font-semibold leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

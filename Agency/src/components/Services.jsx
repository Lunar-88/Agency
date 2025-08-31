
import React from 'react';

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build custom websites designed to your business needs and goals. Our web development services include responsive design, e-commerce solutions, CMS integration, and more.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9-6 9 6"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce Development",
      description:
        "Our ecommerce web design provides you online stores that drive sales. We specialize in platforms like Shopify, WooCommerce, and Magento to create seamless shopping experiences.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "SEO Services",
      description:
        "We help you grow your brand's organic traffic via our world's leading SEO services. Our strategies include keyword research, on-page optimization, link building, and content marketing.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h11M9 21V3m0 0L5 7m4-4l4 4m6 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5M9 17h5m-5 4h5"
          />
        </svg>
      ),
    },
    {
      title: "Website Maintenance",
      description:
        "We provide ongoing website maintenance to ensure your site is always secure, updated, and performing at its best. Services include bug fixes, updates, backups, and performance monitoring.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L12 19.25 19.25 12M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="px-6 md:px-20 lg:px-24">
      <h2
         className="flex items-center justify-center text-orange-600 text-sm sm:text-lg md:text-xl font-semibold tracking-widest uppercase mb-4"
         aria-label="About Website Developer Kenya"
      >
        <span className="w-12 border-t border-orange-600 mx-3"></span>
          What We Do
        <span className="w-12 border-t border-orange-600 mx-3"></span>
      </h2>
        <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-10 text-gray-600">
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

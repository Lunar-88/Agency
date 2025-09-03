
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons: npm i lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 px-6 md:px-20  py-7 shadow-md text-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-6 items-center">
          <img src="./webdeveloperkenya.png" alt="web developer kenya logo" className="h-10 w-10 object-contain scale-200"/>
          <h1 className="font-bold text-xl md:text-2xl text-orange-600">
            Web Developer Kenya
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex text-black font-semibold text-lg space-x-8">
          <li><a href="#home" className="hover:text-orange-600">Home</a></li>
          <li><a href="#about" className="hover:text-orange-600">About Us</a></li>
          <li><a href="#portfolio" className="hover:text-orange-600">Our Services</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-black font-semibold text-lg">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Our Services</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

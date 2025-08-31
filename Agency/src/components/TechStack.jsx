
import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiFlask,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSolidity,
} from "react-icons/si";

function TechStack() {
  const techs = [
    { name: "React", icon: <FaReact className="text-sky-500 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700 text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-green-500 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-black text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-5xl" /> },
    { name: "Solidity", icon: <SiSolidity className="text-gray-800 text-5xl" /> },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2
         className="flex items-center justify-center text-orange-600 text-sm sm:text-lg md:text-xl font-semibold tracking-widest uppercase mb-4"
         aria-label="About Website Developer Kenya"
      >
        <span className="w-12 border-t border-orange-600 mx-3"></span>
          Technologies We Use
        <span className="w-12 border-t border-orange-600 mx-3"></span>
      </h2>
        <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-10 text-gray-600">
            Our Teck Stack
        </h3>

      <div className="relative w-full overflow-x-auto">
        <div
          className="flex w-max"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={idx}
              className="w-40 h-40 flex-shrink-0 bg-white shadow-md flex flex-col justify-center items-center text-center border border-gray-200 mx-2 rounded-xl"
            >
              {tech.icon}
              <h3 className="text-md font-semibold text-gray-700 mt-2">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}

export default TechStack;

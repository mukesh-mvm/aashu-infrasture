import { useState } from "react";
import {
  FaTools,            // Custom Fabrication
  FaHardHat,          // On-Site Execution
  FaProjectDiagram,   // Turnkey Project Delivery
  FaShieldAlt         // Quality & Safety
} from "react-icons/fa";

// Icon mapping
const icons = {
  fabrication: <FaTools className="w-10 h-10" />,
  execution: <FaHardHat className="w-10 h-10" />,
  turnkey: <FaProjectDiagram className="w-10 h-10" />,
  quality: <FaShieldAlt className="w-10 h-10" />,
};

// Card data
const cards = [
  {
    id: 0,
    title: "Custom Fabrication",
    description:
      "Specialized MS and structural steel fabrication for cement plants, power plants, and industrial infrastructure with precise engineering standards.",
    icon: icons.fabrication,
  },
  {
    id: 1,
    title: "On-Site Execution",
    description:
      "With deep local expertise, we execute infrastructure projects like FOBs, railway bridges, and plant installations across India.",
    icon: icons.execution,
  },
  {
    id: 2,
    title: "Turnkey Project Delivery",
    description:
      "From design to commissioning, we manage the complete lifecycle of heavy industrial and infrastructure projects seamlessly.",
    icon: icons.turnkey,
  },
  {
    id: 3,
    title: "Quality & Safety",
    description:
      "We adhere to the highest safety and quality standards to ensure long-lasting and dependable infrastructure solutions.",
    icon: icons.quality,
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First card is active by default

  return (
    <div className="container mx-auto items-center pt-24 pb-10">
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative group p-6 w-[260px] h-[300px] rounded-xl cursor-pointer 
          transition-all duration-500 ease-in-out overflow-hidden bg-gray-100 text-black shadow-lg"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)} // Reset to first card when hover ends
          >
            {/* Animated Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-pink-500 to-indigo-600 transition-all duration-500
            ${
              activeIndex === index ? "top-0 opacity-100" : "top-full opacity-0"
            }
            `}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full transition-all duration-500">
              <div
                className={`transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-black"
                }`}
              >
                {card.icon}
              </div>
              <h3
                className={`text-lg font-bold mt-4 transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-black"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm mt-2 transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-black"
                }`}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

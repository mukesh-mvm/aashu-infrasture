import React from "react";

const DirectorMessage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 lg:p-12 bg-gray-100 rounded-2xl shadow-md">
      
      {/* Left Section - Director Info */}
      <div className="w-full lg:w-[40%] flex flex-col items-center text-center lg:text-left">
        <div className="overflow-hidden group w-full md:w-120  mb-6">
          <img
            src="/images/director.png" // Update with actual image path
            alt="Director Ravindar Kharwar"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Director</h2>
        <h3 className="text-2xl text-blue-700 font-semibold">Ravindar Kharwar</h3>
        {/* <p className="text-base text-gray-600 mt-2">Aashu Infrastructure</p>
        <p className="text-base text-gray-600">GST: 09GRLPR5456P1JZ</p>
        <p className="text-base text-gray-600">📞 7309897358 / 9506989735</p> */}
      </div>

      {/* Right Section - Message */}
      <div className="w-full lg:w-[50%] text-gray-700 text-justify">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Director’s Message</h2>
        <p className="leading-relaxed text-lg">
          At Aashu Infrastructure, our mission is to deliver engineering excellence and uncompromising quality across every project we undertake. With extensive expertise in MS fabrication, industrial cement plant setups, power plant solutions, heavy boiler fabrication, FOBs, railway bridges, and structural steel works, we are committed to building infrastructure that drives industrial growth and national progress.
        </p>
        <p className="leading-relaxed mt-4 text-lg">
          Every structure we design and every system we fabricate reflects our dedication to innovation, strength, and sustainability. With a strong foundation of trust and reliability, we continue to expand our reach and contribute meaningfully to India’s growing infrastructure landscape.
        </p>
        <p className="leading-relaxed mt-4 text-lg font-semibold">
          Thank you for trusting Aashu Infrastructure — where precision meets performance.
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;

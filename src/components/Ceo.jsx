import React from "react";

const Ceo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 lg:p-12 bg-gray-100 rounded-2xl shadow-md">
      
      {/* Left Section - Director Info */}
      <div className="w-full lg:w-[40%] flex flex-col items-center text-center lg:text-left">
        <div className="overflow-hidden group w-full md:w-120  mb-6">
          <img
            src="/images/ceo.png" // Update with actual image path
            alt="Director Ravindar Kharwar"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Ceo</h2>
        <h3 className="text-2xl text-blue-700 font-semibold">Sonu Kharwar</h3>
        {/* <p className="text-base text-gray-600 mt-2">Aashu Infrastructure</p>
        <p className="text-base text-gray-600">GST: 09GRLPR5456P1JZ</p>
        <p className="text-base text-gray-600">📞 7309897358 / 9506989735</p> */}
      </div>

      {/* Right Section - Message */}
      <div className="w-full lg:w-[50%] text-gray-700 text-justify">
  <h2 className="text-3xl font-bold mb-6 text-blue-900">CEO’s Message</h2>
  <p className="leading-relaxed text-lg">
    At Aashu Infrastructure, our vision is to set benchmarks in engineering excellence and deliver unmatched quality in every endeavor. With deep expertise in MS fabrication, industrial cement plant setups, power plant solutions, heavy boiler fabrication, FOBs, railway bridges, and structural steel works, we are proud to play a key role in accelerating India’s industrial and infrastructural growth.
  </p>
  <p className="leading-relaxed mt-4 text-lg">
    Each structure we build and every project we execute reflects our unwavering commitment to innovation, durability, and sustainable progress. Backed by trust and driven by purpose, we continue to shape a future where infrastructure empowers industries and communities alike.
  </p>
  <p className="leading-relaxed mt-4 text-lg font-semibold">
    Thank you for believing in Aashu Infrastructure — where leadership, precision, and performance converge.
  </p>
</div>

    </div>
  );
};

export default Ceo;

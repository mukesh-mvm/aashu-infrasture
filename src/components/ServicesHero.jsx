import ImageCrosel from "./ImageCrosel";

export default function ServicesHero() {
  return (

    <div className=" mx-auto items-center ">
    <section className="relative pt-20 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-gradient-to-r from-blue-500 to-purple-700">
      {/* Left Content */}
<div className="w-full lg:w-1/2 text-white">
  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
    Industrial Fabrication & Infrastructure Experts
  </h1>
  <p className="mt-4 text-lg lg:text-xl opacity-90">
    AASHU INFRASTRUCTURE specializes in precision engineering and large-scale fabrication solutions — from cement and power plants to heavy boilers, FOBs, and railway bridges. Trusted by industry leaders for quality and reliability.
  </p>

  <ul className="mt-6 space-y-2 text-lg">
    <li>➤ MS Fabrication for Industrial Projects</li>
    <li>➤ Cement Plant & Power Plant Infrastructure</li>
    <li>➤ Heavy Boiler & Structural Steel Fabrication</li>
    <li>➤ Railway & Road Bridge Construction</li>
    <li>➤ Turnkey Project Execution</li>
  </ul>

  {/* Request a Quote Button */}
  <div className="mt-8">
    <button className="relative px-6 py-3 font-semibold text-black bg-white overflow-hidden group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        REQUEST A QUOTE
      </span>
    </button>
  </div>
</div>


      {/* Right Content - Image Slider */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <ImageCrosel />
      </div>
    </section>
    </div>
  );
}

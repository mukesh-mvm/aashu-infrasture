import React, { useRef, useEffect, useState } from "react";

const MissionVision = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "mission" && entry.isIntersecting) {
            setMissionVisible(true);
          }
          if (entry.target.id === "vision" && entry.isIntersecting) {
            setVisionVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <div className="px-4 py-12 lg:py-20 bg-white space-y-24" id="mission-vision">
      {/* Mission Section */}
      <div
        ref={missionRef}
        id="mission"
        className={`flex flex-col-reverse lg:flex-row items-center gap-10 transition-all duration-1000 ease-in-out ${
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image - Left */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/mission.png"
            alt="Mission - Industrial Work"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>

        {/* Text - Right */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission at Aashu Infrastructure is to provide top-notch industrial construction and fabrication services. From cement and power plants to heavy boiler frameworks and bridges, we deliver projects with durability, safety, and cutting-edge precision that serve the foundation of national progress.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div
        ref={visionRef}
        id="vision"
        className={`flex flex-col lg:flex-row items-center gap-10 transition-all duration-1000 ease-in-out ${
          visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Text - Left */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to be a pioneering force in India’s industrial infrastructure sector — known for our engineering excellence, innovation, and commitment to quality. We aim to build bridges (literally and figuratively) that connect progress and sustainability for generations to come.
          </p>
        </div>

        {/* Image - Right */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/vission.png"
            alt="Vision - Future Infrastructure"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

import React from "react";

const images = [
  { id: 1, src: "/images/g1.png", alt: "MS Fabrication" },
  { id: 2, src: "/images/g2.png", alt: "Cement Plant Infrastructure" },
  { id: 3, src: "/images/g3.png", alt: "Power Plant Setup" },
  { id: 4, src: "/images/g4.png", alt: "Heavy Boiler Fabrication" },
  { id: 5, src: "/images/g8.png", alt: "Foot Over Bridge Construction" },
  { id: 6, src: "/images/g5.png", alt: "Railway Bridge Project" },
  { id: 7, src: "/images/g6.png", alt: "Industrial Welding Work" },
  { id: 8, src: "/images/g7.png", alt: "Site Installation Work" },
];

const ImageGallery = () => {
  return (
    <section className="py-10 px-4 lg:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Project Showcase
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;

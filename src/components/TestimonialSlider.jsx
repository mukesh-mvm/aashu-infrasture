import Slider from 'react-slick';
import { Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const testimonials = [
  {
    image: '/images/t1.png',
    name: 'UltraTech Cement',
    location: 'Sonbhadra, Uttar Pradesh',
  },
  {
    image: '/images/t2.png',
    name: 'Shree Cement Plant',
    location: 'Beawar, Rajasthan',
  },
  {
    image: '/images/tt2.png',
    name: 'JP Cement Plant',
    location: 'Rewa, Madhya Pradesh',
  },
  {
    image: '/images/t4.png',
    name: 'JK Laxmi Cement',
    location: 'Rajasthan',
  },
  {
    image: '/images/t5.png',
    name: 'Mangalam Cement',
    location: 'Morak, Kota, Rajasthan',
  },
  {
    image: '/images/tt3.png',
    name: 'Binani Cement',
    location: 'Sirohi, Rajasthan',
  },
  {
    image: '/images/tt4.png',
    name: 'ACC Cement',
    location: 'Himachal Pradesh',
  },
  {
    image: '/images/tt5.png',
    name: 'Ranbaxy',
    location: 'Mohali, Chandigarh',
  },
  {
    image: '/images/tt6.png',
    name: 'Ranbaxy',
    location: 'Tonsa, Ropar, Punjab',
  },
  {
    image: '/images/tt7.png',
    name: 'Gudiyar',
    location: 'Faridabad',
  },
  {
    image: '/images/tt8.png',
    name: 'Apollo Tyres',
    location: 'Bagodara, Vadodara, Gujarat',
  },
  {
    image: '/images/tt9.png',
    name: 'CEAT Tyres',
    location: 'Butibori, Nagpur',
  },
  {
    image: '/images/tt10.png',
    name: 'Jubilant Life & Sciences',
    location: 'Bharuch, Gujarat',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function TestimonialSlider() {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Clients</h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{testimonial.location}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

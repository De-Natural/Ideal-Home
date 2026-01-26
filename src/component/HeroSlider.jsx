import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SideArrow } from "../assets/Icons/SideArrow";
import { storeSelectedApartment } from "../utils/apartmentStorage";


import img1 from "../assets/images/bedroom 1.jpg";
import img2 from "../assets/images/bedroom 2.jpg";
import img3 from "../assets/images/bedroom 3.jpg";

import Image1  from "../assets/images/home away 7.png";
import Image2  from "../assets/images/home away 10.png";
import Image3  from "../assets/images/home away 11.png";

import images from "../assets/images/Bedroom 6.jpg";

export default function HeroSlider() {
  const navigate = useNavigate();
  const apartments = [
    {
      title: "Modern 2-Bedroom | Lekki Phase 1",
      description:
        "Our Crown Apartments provide a modern and welcoming home-from-home experience in the heart of Newcastle City Centre, ideal for business and leisure stays.",
      images: [Image2, img2, img3],
      price: "₦450,000 / month",
    },
    {
      title: "Luxury Studio | Victoria Island",
      description:
        "A stylish studio designed for professionals who value comfort, elegance, and city access with premium amenities.",
      images: [Image3, img3, Image1],
      price: "₦950,000 / month",
    },
    {
      title: "Family Apartment | Ikoyi",
      description:
        "Spacious living with multiple bedrooms, modern kitchen, and secure surroundings—perfect for families.",
      images: [images, img1, Image1],
      price: "₦750,000 / month",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const activeApartment = apartments[activeIndex];

  const handleBookNow = () => {
    // Store the current apartment data
    storeSelectedApartment({
      title: activeApartment.title,
      description: activeApartment.description,
      image: activeApartment.images[0],
      price: activeApartment.price,
    });
    // Navigate to view apartment page
    navigate("/view-apartment");
  };

  return (
    <section className="w-full flex flex-col items-center p-0.5 lg:p-4">
      <div className="w-11/12 flex flex-col lg:flex-row gap-10 bg-[#F8FCFF] rounded-3xl p-5 border-1 border-[#F8FCFF]">

        {/* LEFT – IMAGE SLIDER */}
        <div className="lg:w-1/2 rounded-[32px] overflow-hidden relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {apartments.map((apartment, index) => (
              <SwiperSlide key={index}>
                <img
                  src={apartment.images[0]}
                  alt={apartment.title}
                  className="w-full h-[320px] lg:h-[360px] object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM NAVIGATION BUTTONS */}
          <button
            className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
            aria-label="Previous slide"
          >
            <SideArrow className="w-6 h-6 transform rotate-180" />
          </button>
          <button
            className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
            aria-label="Next slide"
          >
            <SideArrow className="w-6 h-6" />
          </button>
        </div>

        {/* RIGHT – TEXT CONTENT (SYNCED) */}
        <div className="lg:w-1/2 flex flex-col justify-center transition-all duration-300">
          <h2 className="text-xl lg:text-3xl font-semibold leading-10 not-italic align-middle mb-4">
            {activeApartment.title}
          </h2>

          <p className="font-normal text-sm leading-[100%] tracking-normal mb-8">
            {activeApartment.description}
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-3xl border border-[#1C56BA] text-[#1C56BA] hover:bg-[#1C56BA] hover:text-white transition">
              Read More
            </button>

            <button 
              onClick={handleBookNow}
              className="px-8 py-3 rounded-full bg-[#1C56BA] text-white hover:bg-[#0e306c] transition"
            >
              Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

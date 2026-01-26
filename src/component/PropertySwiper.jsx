import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropertyCard from "./PropertyCard";

/**
 * PropertySwiper - Reusable Swiper Component
 * @param {Array} properties - Array of property objects with id, title, location, price, image, tag, description
 * @returns {JSX.Element}
 */
export default function PropertySwiper({ properties = [] }) {
  return (
    <section className="py-10 px-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertyCard {...property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

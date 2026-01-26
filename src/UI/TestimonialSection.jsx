
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

 const testimonials = [
  {
    name: "A. Alpha M.",
    quote:
      "I found my new apartment within two days. Everything from viewing to payment was smooth.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "M. Sarah K.",
    quote: "Very smooth process. Highly recommended!",
    rating: 5,
    avatar: "SK",
  },
  {
    name: "D. Daniel E.",
    quote:
      "Finally, a rental site I can trust. No hidden fees, no scams.",
    rating: 5,
    avatar: "DE",
  },
  {
    name: "D. Daniel E.",
    quote:
      "Finally, a rental site I can trust. No hidden fees, no scams.",
    rating: 5,
    avatar: "DE",
  },
  {
    name: "A. Jims Olaska",
    quote: "They helped me rent my duplex in less than a week.",
    rating: 5,
    avatar: "JO",
  },
  {
    name: "A. Jims Olaska",
    quote: "They helped me rent my duplex in less than a week.",
    rating: 5,
    avatar: "JO",
  },
  {
    name: "M. Sarah K.",
    quote: "Very smooth process. Highly recommended!",
    rating: 5,
    avatar: "SK",
  },
  {
    name: "D. Daniel E.",
    quote:
      "Finally, a rental site I can trust. No hidden fees, no scams.",
    rating: 5,
    avatar: "DE",
  },
];
console.log(window.innerWidth);

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-base md:text-3xl font-bold mb-10">
          What Our Rentors Are Saying
        </h2>

        <p className="font-normal text-sm md:text-base leading-normal not-italic">Real stories from happy tenants who found their dream apartments through Week2Week</p>

        <div className="relative">
          {/* Custom Buttons */}
          <button className="prev-btn absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10">
            <ChevronLeft />
          </button>

          <button className="next-btn absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            className=""
            breakpoints={{
              750: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className=" " key={index}>
                {/* SAME CARD UI */}
                <div className="bg-[#F8F8F8] border-[#EAEAEA] rounded-2xl px-4 py-10 flex-col items-start gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-3 self-stretch">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>

                      <h3 className="font-bold text-lg">
                        {testimonial.name}
                      </h3>

                    </div>

                    <div>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>

                    <p className="not-italic font-normal leading-normal font-[inter] text-[#333] text-base">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="h-6 flex items-center justify-center gap-5">
          <div className="p-0.5 rounded-lg border border-[#DAEFFF] w-1/3"></div>
          <p className="text-[#333333] text-xs md:text-lg not-italic font-medium md:font-bold leading-normal">Follow Us on Instagram</p>
          <div className="p-0.5 rounded-lg border border-[#DAEFFF] w-1/3"></div>
        </div>
      </div>
    </section>
  );
}

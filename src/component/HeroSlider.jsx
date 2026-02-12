import { useState, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SideArrow } from "../assets/Icons/SideArrow";
import BookingForm from "./BookingForm";
import { storeSelectedApartment } from "../utils/apartmentStorage";




export default function HeroSlider( props ) {

  console.log("props in HeroSlider:", props);

  const apartments = props.apartments || [];
  
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  
  // Generate a unique ID for this component instance
  const sliderId = useMemo(() => `slider-${Math.random().toString(36).substr(2, 9)}`, []);

  // Build a flat list of slides from apartments' images (up to 6 images per apartment)
  const slides = useMemo(() => {
    return apartments.flatMap((apartment, aptIndex) =>
      (apartment.images || []).slice(0, 6).map((img, imgIndex) => {
        const src = typeof img === 'string' ? img : img?.src;
        const description = typeof img === 'string' ? null : img?.description;
        const title = typeof img === 'string' ? null : img?.title;
        return {
          apartmentIndex: aptIndex,
          imageIndex: imgIndex,
          src,
          title,
          description,
        };
      })
    );
  }, [apartments]);

  const activeSlide = slides[activeIndex] || { apartmentIndex: 0, imageIndex: 0, src: apartments?.[0]?.images?.[0]?.src || apartments?.[0]?.images?.[0] || null, title: null, description: null };
  const activeApartment = apartments[activeSlide.apartmentIndex] || {};

  const goToView = () => {
    // Store the current apartment data and current image (including image description/title if available)
    storeSelectedApartment({
      title: activeApartment.title,
      description: activeApartment.description,
      image: activeSlide.src,
      imageTitle: activeSlide.title || null,
      imageDescription: activeSlide.description || null,
      price: activeApartment.price,
    });
    // Navigate to view apartment page
    navigate("/view-apartment");
  };

  const [showBookingModal, setShowBookingModal] = useState(false);
  const openBookingModal = () => setShowBookingModal(true);
  const closeBookingModal = () => setShowBookingModal(false);

  return (
    <section className="w-full flex flex-col items-center p-0.5 lg:p-4">
      <div className="w-11/12 flex flex-col lg:flex-row gap-10 bg-[#F8FCFF] rounded-3xl p-5 border-1 border-[#F8FCFF]">

        {/* LEFT – IMAGE SLIDER */}
        <div className="lg:w-1/2 rounded-[32px] overflow-hidden relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              nextEl: `.${sliderId}-next`,
              prevEl: `.${sliderId}-prev`,
            }}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.src}
                  alt={slide.title || apartments[slide.apartmentIndex]?.title || 'Apartment image'}
                  className="w-full h-[320px] lg:h-[360px] object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM NAVIGATION BUTTONS */}
          <button
            className={`${sliderId}-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition`}
            aria-label="Previous slide"
          >
            <SideArrow className="w-6 h-6 transform rotate-180" />
          </button>
          <button
            className={`${sliderId}-next absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition`}
            aria-label="Next slide"
          >
            <SideArrow className="w-6 h-6" />
          </button>
        </div>

        {/* RIGHT – TEXT CONTENT (SYNCED) */}
        <div className="lg:w-1/2 flex flex-col justify-center transition-all duration-300">
          <h2 className="text-xl lg:text-3xl font-semibold leading-10 not-italic align-middle mb-4">
            {activeSlide.title || activeApartment.title}
          </h2>

          <p className="font-normal text-sm leading-[100%] tracking-normal mb-8">
            {activeSlide.description || activeApartment.description}
          </p>

          <div className="flex gap-4">
            <button onClick={goToView} className="px-4 lg:px-8 py-1 lg:py-3 rounded-3xl border border-[#1C56BA] text-[#1C56BA] hover:bg-[#1C56BA] hover:text-white transition">
              Read More
            </button>

            <button 
              onClick={openBookingModal}
              className="px-4 lg:px-8 py-1 lg:py-3 rounded-full bg-[#1C56BA] text-white hover:bg-[#0e306c] transition"
            >
              Book Now
            </button>
          </div>
        </div>

      </div>

      {showBookingModal && (
        <BookingForm
          asModal
          onClose={closeBookingModal}
          initialData={{
            title: activeApartment.title,
            description: activeApartment.description,
            price: activeApartment.price,
            imageTitle: activeSlide.title,
            imageDescription: activeSlide.description,
            image: activeSlide.src,
          }}
        />
      )}

    </section>
  );
}

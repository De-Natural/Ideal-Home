import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import add1 from "../assets/images/add1.png"
import add2 from "../assets/images/add2.png"
import add3 from "../assets/images/add3.png"
import add4 from "../assets/images/add4.png"
import AddedApartment from "./AddedApartment";

const properties = [
    {
        id: 1,
        tag: "01",
        title: "Bungalow",
        description: "Experience the heartbeat of the city from your private skyline view. Perfect for professionals who love open-concept living, modern finishes, and instant access to restaurants, workspaces, and nightlife.",
        image: add1
    },
    {
        id: 2,
        tag: "02",
        title: "The Family Apartment",
        description: "Spacious and cozy with multiple bedrooms, a large kitchen, and outdoor space for the kids.  Designed for families who want comfort, safety, and community living all in one.",
        image: add2
    },
    {
        id: 3,
        tag: "03",
        title: "City Lifestyle Apartment",
        description: "This well-planned home offers multiple bedrooms, a large modern kitchen, and a private outdoor space ideal for children. Perfect for families seeking a safe, comfortable environment with room to grow and a welcoming neighborhood feel.",
        image: add3
    },
    {
        id: 4,
        tag: "04",
        title: "Family-Focused Home",
        description: "Enjoy panoramic city views from a contemporary, open-plan apartment designed for urban professionals. With modern finishes and immediate access to dining, work hubs, and nightlife, this home delivers both sophistication and convenience at the heart of the city.",
        image: add4
    }
];

export default function AddedApartmentSwiper(){
    return(
        <div className="mt-10 py-10 px-6 w-full">
            <h2 className="font-[inter] font-semibold text-base md:text-3xl leading-10 align-middle text-center mb-4">Recently Added Apartment In Lagos</h2>
          <Swiper
            modules={[Navigation]}
            // navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1},
                768: { slidesPerView: 2}
            }}
          >
            {properties.map((property) =>(
                <SwiperSlide key={property.id}>
                    <AddedApartment {...property} />
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}
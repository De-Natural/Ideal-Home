import PropertySwiper from "../component/PropertySwiper";
import { featuredProperties } from "../data/properties";

export default function RecentlyApartment(){
    return(
        <div className="w-full flex flex-col gap-10 mt-20">
            <h2 className="text-[#333] text-center text-base md:text-3xl not-italic font-bold leading-7">Recently Featured Apartments</h2>
            <p className="font-normal text-xs md:text-base text-center not-italic leading-6 text-[#777]">Hand-picked rentals in the most sought-after neighbourhoods, verified, affordable, and ready for you to move in.</p>

            <PropertySwiper properties={featuredProperties} />
        </div>
    )
}
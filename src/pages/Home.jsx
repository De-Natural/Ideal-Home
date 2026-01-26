import { Link } from "react-router-dom"
import mainImage from "../assets/images/image 337.png"
import AddedApartmentSwiper from "../component/AddedApartmentSwiper"
import AmenitiesCard from "../component/AmenitiesCard"
import CategoryTags from "../component/CategoryTags"
import ApartmentNearYou from "../UI/ApartmentNearYou"
import HomeAminities from "../UI/HomeAminaties"
import LetProperty from "../UI/LetProperty"
import { Map } from "../UI/Map"
import RecentlyApartment from "../UI/RecentlyApartment"
import TestimonialSection from "../UI/TestimonialSection"

export default function Home(){
    return(
        
        <div className="">
            <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${mainImage})`
            }}
            >
                <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>
              {/* <img 
                src={mainImage} 
                alt="" 
                className="w-full"
              /> */}
                <div className="h-60 w-full text-center flex flex-col items-center justify-around gap-1 md:gap-10 text-white top-2 md:top-20 z-30">
                    <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                        <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center  md:leading-[74px] space-y-6 tracking-normal align-middle">Find your next apartment, simple, verified, and stress-free.</h2>
                        <p className="font-[inter] font-normal text-xs md:text-xl leading-6 tracking-normal align-middle">Browse hundreds of apartments, condos, and homes for rent. All listings are verified and ready for you to move in.</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Link to={"/all-apartments"}>
                            <button className="bg-white text-black flex text-xs md:text-base px-4 py-2 rounded-3xl items-center justify-center">
                                Find an Apartment
                            </button>
                        </Link>
                        <button className="bg-[#1C56BA] text-white text-xs md:text-base flex px-4 py-2 rounded-3xl items-center justify-center">
                        Let your Property
                        </button>
                    </div>
                </div>

                <CategoryTags />
            </section>
            <AddedApartmentSwiper />
            <ApartmentNearYou />
            <RecentlyApartment />
            <HomeAminities />
            <LetProperty />
            <TestimonialSection />
            <Map />
        </div>
    )
}
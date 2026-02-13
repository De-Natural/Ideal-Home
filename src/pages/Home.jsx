import { Link } from "react-router-dom"
import mainImage from "../assets/images/image 337.png"
import AddedApartmentSwiper from "../component/AddedApartmentSwiper"
import CategoryTags from "../component/CategoryTags"
import ApartmentNearYou from "../UI/ApartmentNearYou"
import HomeAminities from "../UI/HomeAminaties"
import LetProperty from "../UI/LetProperty"
import { Map } from "../UI/Map"
import RecentlyApartment from "../UI/RecentlyApartment"
import TestimonialSection from "../UI/TestimonialSection"
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (

        <div className="">
            <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${mainImage})`
                }}
            >
                <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>
               
                <div className="h-60 w-full text-center flex flex-col items-center justify-around gap-1 md:gap-10 text-white top-2 md:top-20 z-30">
                    <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                        <h2 className="font-[Montserrat] font-semibold text-xl lg:text-5xl text-center  lg:leading-[74px] space-y-6 tracking-normal align-middle">{t('home.hero_title')}</h2>
                        <p className="font-[Montserrat] font-normal text-xs lg:text-xl leading-6 tracking-normal align-middle">{t('home.hero_desc')}</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Link to={"/all-apartments"}>
                            <button className="bg-white text-black flex items-center text-xs md:text-base gap-3 rounded-full px-6 md:px-10 py-3 md:py-4">
                                {t('home.hero_cta')}
                            </button>
                        </Link>
                        <Link to={"/property-management-apartment"}>
                            <button className="bg-[#1C56BA] text-white flex items-center text-xs md:text-base gap-3 rounded-full px-6 md:px-10 py-3 md:py-4">
                                 {t('home.hero_cta')}
                            </button>
                            
                        </Link>
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
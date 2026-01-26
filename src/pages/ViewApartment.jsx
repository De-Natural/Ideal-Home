import { useEffect, useState } from "react";
import Image from "../assets/images/Bedroom 3.jpg"
import TabNavigation from "../component/TabNavigation"
import PropertySwiper from "../component/PropertySwiper"
import RecentlyApartment from "../UI/RecentlyApartment"
import { ViewApartmentsData } from "../data/viewApartments"
import { getSelectedApartment } from "../utils/apartmentStorage"
import Facilities from "../component/Facilities";
import FindLocationMap from "../component/FindLocationMap";
import BookingForm from "../component/BookingForm";

function ViewApartment() {
    const [selectedApartment, setSelectedApartment] = useState(null);

    useEffect(() => {
        // Get the apartment data stored from HeroSlider
        const apartment = getSelectedApartment();
        if (apartment) {
            setSelectedApartment(apartment);
        }
    }, []);

    // Use selected apartment data if available, otherwise use defaults
    const displayImage = selectedApartment?.image || Image;
    const displayTitle = selectedApartment?.title || "Find your apartment.";
    const displayDescription = selectedApartment?.description || "Our Crown Apartments provide a modern and welcoming home-from-home experience in the heart of Newcastle City Centre, making them ideal for both business and leisure stays.";
    const displayPrice = selectedApartment?.price || "₦450,000 / month";
    return (
        <div className='flex flex-col gap-10'>
            <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${displayImage})`
                }}
            >
                <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="h-60 w-4/5 text-center flex flex-col items-center justify-around gap-1 md:gap-4 text-white top-2 md:top-20 z-30">
                    <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                        <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center  md:leading-[74px] space-y-6 capitalize tracking-normal align-middle">{displayTitle}</h2>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <TabNavigation />
                    </div>

                </div>

            </section>

            <div className="h-fit lg:h-96 w-full lg:w-4/5 mx-0 lg:mx-auto flex flex-col lg:flex-row items-center p-2 gap-12 mb-4">
                <div className="h-fit lg:h-96 flex p-2 flex-col gap-8 w-full lg:w-3/4">
                    <div className="flex p-2 items-center justify-between"> 
                        <h2 className="text-[#333] font-semibold text-lg lg:text-3xl leading-10 not-italic">{displayTitle}</h2>
                        <span className="h-8 lg:h-12 w-2/4 lg:w-52 p-0 lg:p-1 items-center justify-center flex gap-1 rounded-lg bg-[#DAEFFF] text-xs lg:text-lg font-medium leading-normal text-[#1C56BA]">{displayPrice}</span>
                    </div>

                    <p className="font-[poppins] text-base font-normal not-italic leading-normal">{displayDescription}</p>
                    <p className="font-[poppins] text-base font-normal not-italic leading-normal">These bright and spacious apartments offer ample room to unwind, with features such as separate or ensuite bathrooms and, in some cases, private balconies that showcase stunning views of Newcastle—perfect for immersing yourself in the vibrant city atmosphere.</p>
                </div>

                <div className="h-96 w-full lg:w-3/4">
                    <img 
                        src={displayImage} 
                        alt={displayTitle} 
                        className="h-full w-full rounded-3xl object-cover object-center"
                    />
                </div>
            </div>

            <div className="w-full px-6 py-10">
                <h2 className="text-[#333] text-center text-base md:text-3xl not-italic font-bold leading-7 mb-4">Apartment Gallery</h2>
                <PropertySwiper properties={ViewApartmentsData} />
            </div>

            <div>
                <Facilities />
            </div>

            <FindLocationMap />

            <BookingForm />

        </div>
    )
}

export default ViewApartment
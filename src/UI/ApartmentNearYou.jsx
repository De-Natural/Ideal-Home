import { HouseCategory } from "../assets/Icons/HouseCategory";
import CategoryCard from "../component/CategoryCard";


export default function ApartmentNearYou(){
    return(
        <div className="w-full flex flex-col gap-14 items-center justify-center">
            <h2 className="font-[inter] font-bold text-base md:text-3xl leading-7 tracking-normal align-middle">Featured Apartments to Rent Near You</h2>
            <p className="font-[Regular] font-normal text-xs md:text-base text-center leading-6 align-middle tracking-normal">From cozy studios to spacious family homes,  discover the perfect apartment that matches your needs, budget, and style.</p>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
               <CategoryCard
                    icon={<HouseCategory className="text-blue-700" />}
                    title="Studio Apartments"
                    description="Compact and affordable spaces for solo renters."
                    buttonText="View Properties"
                    onClick={() => console.log("View clicked")}
                />

                <CategoryCard
                    icon={<HouseCategory className="text-blue-700" />}
                    title="2–3 Bedroom Homes"
                    description="Spacious living for couples or small families."
                    buttonText="View Properties"
                    onClick={() => console.log("View clicked")}
                />

                <CategoryCard
                    icon={<HouseCategory className="text-blue-700" />}
                    title="Student Housing"
                    description="Premium finishes, serviced facilities, prime locations."
                    buttonText="View Properties"
                    onClick={() => console.log("View clicked")}
                />

                <CategoryCard
                    icon={<HouseCategory className="text-blue-700" />}
                    title="Duplex"
                    description="Private comfort for everyday living."
                    buttonText="View Properties"
                    onClick={() => console.log("View clicked")}
                />

                <CategoryCard
                    icon={<HouseCategory className="text-blue-700" />}
                    title="Short-Stay Rentals"
                    description="Fully furnished homes for flexible stays."
                    buttonText="View Properties"
                    onClick={() => console.log("View clicked")}
                />
             
                <CategoryCard
                    icon={<HouseCategory className="text-blue-700" />}
                    title="Luxury Apartments"
                    description="Elegant spaces with modern amenities."
                    buttonText="View Properties"
                    onClick={() => console.log("View clicked")}
                />
           </div>

        </div>
    )
}
// import { CustomerSupport } from "../assets/Icons/CustomerSupport";
// import { FlexiblePayment } from "../assets/Icons/FlexiblePayment";
// import { HouseKeepingIcon } from "../assets/Icons/HouseKeepingIcon";
// import { KitchenUtensile } from "../assets/Icons/KitchenUtensile";
// import { SearchviewIcon } from "../assets/Icons/searchviewIcon";
// import { ToiletIcon } from "../assets/Icons/ToiletIcon";
// import AmenitiesCard from "../component/AmenitiesCard";


// export default function HomeAminaties(){
//     return(
//         <div className="flex flex-col items-center gap-9">
//             <h2 className="text-center font-[inter] text-3xl not-italic font-bold leading-7">Why Rent With Week2week?</h2>
//             <p className="text-center text-base not-italic font-normal leading-6 text-[#777]">We simplify the rental experience, giving you verified listings, transparent pricing, and homes that feel like you belong.</p>
//            <div className="grid grid-cols-3 gap-4 p-4">
//              <AmenitiesCard
//                 icon={<SearchviewIcon />}
//                 label={"Verified Listings Only"}
//              />
//              <AmenitiesCard
//                 icon={<CustomerSupport />}
//                 label={"22/7 Support"}
//              />
//              <AmenitiesCard
//                 icon={<FlexiblePayment />}
//                 label={"Flexible Payment Option"}
//              />
//              <AmenitiesCard
//                 icon={<KitchenUtensile />}
//                 label={"Fully Equipped Kitchen"}
//              />
//              <AmenitiesCard
//                 icon={<ToiletIcon />}
//                 label={"En Suite Bathroom"}
//              />
//              <AmenitiesCard
//                 icon={<HouseKeepingIcon />}
//                 label={"House Keeping"}
//              />
//            </div>
//         </div>
//     )
// }

import { CustomerSupport } from "../assets/Icons/CustomerSupport";
import { FlexiblePayment } from "../assets/Icons/FlexiblePayment";
import { HouseKeepingIcon } from "../assets/Icons/HouseKeepingIcon";
import { KitchenUtensile } from "../assets/Icons/KitchenUtensile";
import { SearchviewIcon } from "../assets/Icons/searchviewIcon";
import { ToiletIcon } from "../assets/Icons/ToiletIcon";
import AmenitiesCard from "../component/AmenitiesCard";

export default function HomeAminities() {
 
  const amenities = [
    {
      id: 1,
      icon: <SearchviewIcon />,
      label: "Verified Listings Only",
      description: "Every property is personally inspected and verified"
    },
    {
      id: 2,
      icon: <CustomerSupport />,
      label: "24/7 Support",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      id: 3,
      icon: <FlexiblePayment />,
      label: "Flexible Payment Options",
      description: "Choose from multiple payment plans"
    },
    {
      id: 4,
      icon: <KitchenUtensile />,
      label: "Fully Equipped Kitchen",
      description: "Complete kitchen with all modern appliances"
    },
    {
      id: 5,
      icon: <ToiletIcon />,
      label: "En Suite Bathroom",
      description: "Private bathroom attached to each bedroom"
    },
    {
      id: 6,
      icon: <HouseKeepingIcon />,
      label: "House Keeping",
      description: "Regular cleaning and maintenance services"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center gap-9 py-12 px-6">
      <h2 className="text-center font-[inter] text-base md:text-4xl not-italic font-bold leading-7 text-gray-900">
        Why Rent With Week2week?
      </h2>
      <p className="text-center text-xs md:text-lg not-italic font-normal leading-6 text-[#777] max-w-2xl">
        We simplify the rental experience, giving you verified listings, transparent pricing, and homes that feel like you belong.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {amenities.map((amenity) => (
          <AmenitiesCard
            key={amenity.id}
            icon={amenity.icon}
            label={amenity.label}
            description={amenity.description}
          />
        ))}
      </div>
    </div>
  );
}
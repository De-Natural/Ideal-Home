
import { CustomerSupport } from "../assets/Icons/CustomerSupport";
import { FlexiblePayment } from "../assets/Icons/FlexiblePayment";
import { HouseKeepingIcon } from "../assets/Icons/HouseKeepingIcon";
import { KitchenUtensile } from "../assets/Icons/KitchenUtensile";
import { SearchviewIcon } from "../assets/Icons/searchviewIcon";
import { ToiletIcon } from "../assets/Icons/ToiletIcon";
import AmenitiesCard from "../component/AmenitiesCard";

export default function HomeAminities({
  heading = "Why Rent With Week2week?",
  description = "We simplify the rental experience, giving you verified listings, transparent pricing, and homes that feel like you belong."
}) {

  const amenities = [
    {
      id: 1,
      icon: <SearchviewIcon />,
      label: "Verified Listings Only",
      description: "We only list apartments from trusted landlords and verified property owners, no scams, no fake listings."
    },
    {
      id: 2,
      icon: <CustomerSupport />,
      label: "24/7 Support",
      description: "Our dedicated support team is available round-the-clock to assist with any issues or maintenance requests."
    },
    {
      id: 3,
      icon: <FlexiblePayment />,
      label: "Flexible Payment Options",
      description: "Choose how you pay — monthly, quarterly, or annually. We make renting easier and more convenient for you."
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
        {heading}
      </h2>
      <p className="text-center text-xs md:text-lg not-italic font-normal leading-6 text-[#777] max-w-2xl">
        {description}
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
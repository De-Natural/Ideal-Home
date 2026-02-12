
import { IntegrityIcon } from "../assets/Icons/IntegrityIcon";
import { LoyalityIcon } from "../assets/Icons/LoyalityIcon";
import { ProfitabilityIcon } from "../assets/Icons/ProfitabilityIcon";
import { TransparencyIcon } from "../assets/Icons/TransparencyIcon";
import AmenitiesCard from "../component/AmenitiesCard";

export default function OurValuesAmenities({
  heading = "Our Values",
  description = "From cozy studios to spacious family homes,  discover the perfect apartment that matches your needs, budget, and style."
}) {
 
  const amenities = [
    {
      id: 1,
      icon: <TransparencyIcon />,
      label: "Transparency",
      description: "Clear reporting, no hidden fees, and full visibility on your property’s performance."
    },
    {
      id: 2,
      icon: <ProfitabilityIcon />,
      label: "Profitability",
      description: "Optimised occupancy and pricing strategies that help you earn more — consistently."
    },
    {
      id: 3,
      icon: <IntegrityIcon />,
      label: "Integrity",
      description: "We do what we say, and we say what we do. Trust sits at the heart of every property we manage."
    },
    {
      id: 4,
      icon: <LoyalityIcon />,
      label: "Loyality",
      description: "We build lasting partnerships with our property owners. Your success is our success."
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
      
      <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
        {amenities.map((amenity) => (
          <AmenitiesCard
            width="w-full"
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
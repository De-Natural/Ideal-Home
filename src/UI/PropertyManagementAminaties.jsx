
import { CommunicationIcon } from "../assets/Icons/CommunicationIcon";
import { CooperateGroupIcon } from "../assets/Icons/CooperateGroupIcon";
import { IntegrityIcon } from "../assets/Icons/IntegrityIcon";
import { LoyalityIcon } from "../assets/Icons/LoyalityIcon";
import { ProfitabilityIcon } from "../assets/Icons/ProfitabilityIcon";
import { TransparencyIcon } from "../assets/Icons/TransparencyIcon";
import AmenitiesCard from "../component/AmenitiesCard";

export default function PropertyManagementAminaties({
  heading = "What you’ll Enjoy",
  description = "We simplify the rental experience, giving you verified listings, transparent pricing, and homes that feel like you belong."
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
      icon: <CooperateGroupIcon />,
      label: "Professionalism",
      description: "Every interaction is handled with care, clarity, and consistency. From tenant screening to maintenance."
    },
    {
      id: 4,
      icon: <CommunicationIcon />,
      label: "Communication",
      description: "We keep you updated every step of the way with prompt, open communication."
    },
    {
      id: 5,
      icon: <IntegrityIcon />,
      label: "Integrity",
      description: "We do what we say, and we say what we do. Trust sits at the heart of every property we manage."
    },
    {
      id: 6,
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
      {/* <p className="text-center text-xs md:text-lg not-italic font-normal leading-6 text-[#777] max-w-2xl">
        {description}
      </p> */}
      
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
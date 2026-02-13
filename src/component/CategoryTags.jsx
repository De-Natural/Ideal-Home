import React from "react";
import { Link } from "react-router-dom";
import { LeisureIcon } from "../assets/Icons/LeisureIcon";
import { BusinessIcon } from "../assets/Icons/BusinessIcon";
import { CooperateGroupIcon } from "../assets/Icons/CooperateGroupIcon";
import { ContractorIcon } from "../assets/Icons/ContractorIcon";

const CategoryTags = () => {
  const categories = [
    {
      id: 1,
      name: "Leisure",
      emoji: <LeisureIcon />,
      path: "/leisure-apartment",
      description: "Vacation and holiday stays"
    },
    {
      id: 2,
      name: "Business",
      emoji: <BusinessIcon />,
      path: "/business-apartment",
      description: "Work-ready accommodations"
    },
    {
      id: 3,
      name: "Corperate Groups",
      emoji: <CooperateGroupIcon />,
      path: "/cooperate-apartment",
      description: "Team and group stays"
    },
    {
      id: 4,
      name: "Contractors",
      emoji: <ContractorIcon />,
      path: "/contractor-apartment",
      description: "Project site stays"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 absolute bottom-4 md:bottom-12 w-full px-4 z-40">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.path}
          className="flex items-center gap-3 bg-white border border-gray-100 rounded-full px-4 md:px-10 py-2 md:py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm group"
        >
          <span className="text-sm md:text-lg font-bold text-[#1C56BA] whitespace-nowrap">
            {category.name}
          </span>
          <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            {category.emoji}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTags;
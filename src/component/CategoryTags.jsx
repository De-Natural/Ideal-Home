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
      path: "/leisure-apartments",
      description: "Vacation and holiday stays"
    },
    { 
      id: 2, 
      name: "Business", 
      emoji: <BusinessIcon />, 
      path: "/business-travel",
      description: "Work-ready accommodations"
    },
    { 
      id: 3, 
      name: "Cooperate Groups", 
      emoji: <CooperateGroupIcon />, 
      path: "/corporate-groups",
      description: "Team and group stays"
    },
    { 
      id: 4, 
      name: "Contractors", 
      emoji: <ContractorIcon />, 
      path: "/contractor-accommodation",
      description: "Project site stays"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4 md:gap-4 absolute bottom-2 md:bottom-10 w-full lg:w-2/3 items-center justify-around">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.path}
          className="flex flex-nowrap md:flex-row items-center gap-2 md:gap-2 bg-[#ffffff] hover:bg-gray-200 border border-gray-300 rounded-full px-2 md:px-10 py-1 md:py-3 transition-all duration-200 hover:scale-105 hover:shadow-md"
        >
          <span className="text-xs font-normal md:font-medium text-gray-700">{category.name}</span>
          <span className="text-sm md:text-md">{category.emoji}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTags;
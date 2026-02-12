import React, { useState } from "react";

const ContractorTabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { label: "Leisure", id: "Leisure" },
    { label: "Business", id: "Business" },
    { label: "Corporate Groups", id: "CorporateGroups" },
    { label: "Contractors", id: "Contractors" }
  ];

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center px-2 py-2 bg-white rounded-[32px] gap-4 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`px-6 w-48 py-3 text-sm font-medium transition-colors duration-200 rounded-3xl ${
              activeTab === tab.id
                ? "text-white bg-blue-800 rounded-3xl border-blue-600"
                : "text-[#333] hover:text-gray-70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContractorTabNavigation;
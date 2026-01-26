import React from "react";

export default function AmenitiesCard({ icon, label }) {
  return (
    <div className="w-full sm:w-[260px] rounded-2xl bg-white shadow-sm px-5 py-12 flex flex-col items-center text-center">
      
      {/* Icon box */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
        {icon}
      </div>

      {/* Divider */}
      <div className="w-10 h-[2px] bg-blue-200 my-4 rounded-full" />

      {/* Text */}
      <p className="text-gray-800 font-medium">
        {label}
      </p>
    </div>
  );
}

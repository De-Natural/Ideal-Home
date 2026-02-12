import React from "react";

export default function AmenitiesCard({ icon, label, description = "", showDivider = true, className = "", width = "w-full sm:w-[260px]" }) {
  return (
    <div className={`${width} rounded-2xl bg-white shadow-sm px-5 py-12 flex flex-col items-center text-center ${className}`}>

      {/* Icon box */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
        {icon}
      </div>

      {/* Divider (can be hidden via prop) */}
      {showDivider && <div className="w-10 h-[2px] bg-blue-200 my-4 rounded-full" />}

      {/* Text */}
      <p className="text-gray-800 font-medium">
        {label}
      </p>

      {/* Optional description under the label */}
      {description && (
        <p className="text-sm text-[#777] mt-2 max-w-[220px]">{description}</p>
      )}
    </div>
  );
}

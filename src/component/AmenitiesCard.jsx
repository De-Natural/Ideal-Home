import React from "react";

export default function AmenitiesCard({ icon, label, description = "", showDivider = true, className = "", width = "w-full sm:w-[260px]" }) {
  return (
    <div className={`${width} rounded-2xl bg-white shadow-sm px-5 py-12 flex flex-col items-center text-center relative overflow-hidden group ${className}`}>

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

      {/* Hover Overlay - Shows when user hovers */}
      {description && (
        <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
          <p className="text-[#777] text-sm md:text-base font-medium leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

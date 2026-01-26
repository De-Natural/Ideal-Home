import { Check } from "lucide-react";
import { DoubleTickIcon } from "../assets/icons/DoubleTickIcon";

const leftFacilities = [
  "Fully fitted equipped kitchen including all appliances",
  "En-suite or separate bathroom",
  "Weekly housekeeping, linen & towel service",
  "Secure entry access",
];

const rightFacilities = [
  "Off street parking space",
  "Cot and high-chairs available",
  "Weekly housekeeping, linen & towel service",
  "Secure entry access",
];

export default function Facilities() {
  return (
    <section className="bg-transparent py-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-xl md:text-3xl font-semibold align-middle leading-10 not-italic text-[#333] mb-10">
          Facilities
        </h2>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vertical Divider (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-300/70" />

          {/* Left Column */}
          <ul className="space-y-5">
            {leftFacilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#333] text-sm md:text-base">
                <DoubleTickIcon className="w-5 h-5 text-[#1C56BA] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Right Column */}
          <ul className="space-y-5">
            {rightFacilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#333] text-sm md:text-base">
                <DoubleTickIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

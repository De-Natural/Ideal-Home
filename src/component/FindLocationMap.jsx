import { Car } from "lucide-react";
import MapImage from "../assets/images/map.png";
import { DoubleTickIcon } from "../assets/Icons/DoubleTickIcon";

export default function FindLocationMap() {
  return (
    <section className="bg-transparent py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-xl md:text-3xl font-semibold leading-6 not-italic text-[#333] mb-12">
          Find this Apartment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* MAP */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={MapImage}
              alt="Apartment location map"
              className="w-full h-[320px] md:h-[380px] object-cover"
            />

            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-[#1C56BA] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="text-gray-400 space-y-8">

            {/* Location */}
            <div>
              <h3 className="text-lg md:text-2xl not-italic leading-6 font-semibold text-[#333] mb-4">
                Location
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <DoubleTickIcon />
                  <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    <strong className="font-semibold">Address:</strong> 14 Admiralty Way, Lekki Phase 1, Lagos.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <DoubleTickIcon />
                  <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    <strong className="font-semibold">Neighborhood:</strong> Lekki Peninsula, Victoria Island Axis.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <DoubleTickIcon />
                  <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    <strong className="font-semibold">Landmark Nearby:</strong> Opposite The Good Beach, 5 mins from The Palms Shopping Mall, Oniru.
                  </span>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-800" />

            {/* Distance */}
            <div>
              <h3 className="text-2xl font-semibold leading-normal not-italic text-[#333] mb-4">
                Distance & Accessibility
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <Car className="text-[#1C56BA] w-4 h-4" />
                  5 mins to Lekki Toll Gate
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <Car className="text-[#1C56BA] w-4 h-4" />
                  10 mins to Victoria Island
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <Car className="text-[#1C56BA] w-4 h-4" />
                  15 mins to Ikoyi Bridge
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <Car className="text-[#1C56BA] w-4 h-4" />
                  2 mins walk to Restaurants & Cafés on Admiralty Way
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <Car className="text-[#1C56BA] w-4 h-4" />
                  Closest Bus Stop: Admiralty Way Junction (2 mins away)
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

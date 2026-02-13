import { Car } from "lucide-react";
import { DoubleTickIcon } from "../assets/Icons/DoubleTickIcon";
import { CarIcon } from "../assets/Icons/CarIcon";
import { HumanIcon } from "../assets/Icons/HumanIcon";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Mock coordinates (same as in Map.jsx)
const DEFAULT_CENTER = [54.9783, -1.6178];
const APARTMENT_LOCATIONS = {
  1: [54.9733, -1.6138],
  2: [54.9693, -1.6248],
  3: [54.9813, -1.6048],
  4: [54.9753, -1.6098],
  5: [54.9853, -1.6198],
};

export default function FindLocationMap({ locationRef, apartment }) {
  // Determine location based on apartment ID or fallback to default
  const position = apartment && APARTMENT_LOCATIONS[apartment.id]
    ? APARTMENT_LOCATIONS[apartment.id]
    : DEFAULT_CENTER;

  const handleGetDirections = () => {
    const dest = `${position[0]},${position[1]}`;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`, '_blank');
  };

  return (
    <section className="bg-transparent py-20 px-6" ref={locationRef}>
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-xl md:text-3xl font-semibold leading-6 not-italic text-[#333] mb-12">
          Find this Apartment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* MAP */}
          <div className="relative rounded-3xl overflow-hidden h-[320px] md:h-[380px] shadow-lg z-0">
            <MapContainer
              center={position}
              zoom={14}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={position}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-semibold">{apartment?.title || "Apartment Location"}</h3>
                    <button
                      onClick={handleGetDirections}
                      className="mt-2 text-blue-600 underline text-xs"
                    >
                      Get Directions
                    </button>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
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
                  <CarIcon />
                  5 mins to Lekki Toll Gate
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <CarIcon />
                  10 mins to Victoria Island
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <CarIcon />
                  15 mins to Ikoyi Bridge
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <HumanIcon />
                  2 mins walk to Restaurants & Cafés on Admiralty Way
                </li>

                <li className="flex items-center gap-3 text-base not-italic font-medium leading-normal text-[#333]">
                  <CarIcon />
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

import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyCard({
  id,
  image,
  tag,
  title,
  location,
  price,
  description,
  viewDetails,
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />

        {/* Tag - Only show if tag exists */}
        {tag && (
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="font-semibold text-base md:text-lg mb-1 text-left">{title}</h3>

        {/* Location - Only show if location exists */}
        {location && (
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin size={14} className="mr-1" />
            {typeof location === 'object' ? location.address : location}
          </div>
        )}

        <p className="text-[#333] text-xs not-italic font-normal leading-normal text-left">{description}</p>

        <div className="flex items-center justify-between">
          {/* Price - Only show if price exists */}
          {price && (
            <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
              {price}
            </span>
          )}

          {/* View Details Button - Only show if viewDetails prop is passed */}
          {viewDetails && (
            <Link to={`/view-apartment/${id}`}>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                View Details →
              </button>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}

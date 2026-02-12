import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ViewApartmentsData } from '../data/ViewApartments';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet with Vite/Webpack
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

// Custom icon for user location (blue dot)
const UserIcon = L.divIcon({
  className: 'custom-user-icon',
  html: `<div style="background-color: #4285F4; width: 15px; height: 15px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>`,
  iconSize: [15, 15],
  iconAnchor: [7, 7]
});

// Default center (Lagos)
const DEFAULT_CENTER = [6.4474, 3.4731];

// Component to handle map centering
const RecenteringMap = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};

export const Map = () => {
  const [center, setCenter] = useState(DEFAULT_CENTER);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = [position.coords.latitude, position.coords.longitude];
          setUserLocation(pos);
          setCenter(pos);
        },
        () => {
          console.log("Error: The Geolocation service failed.");
        }
      );
    }
  }, []);

  const handleGetDirections = (destination) => {
    // Open Google Maps in a new tab for directions
    const origin = userLocation
      ? `${userLocation[0]},${userLocation[1]}`
      : "Current+Location";
    const dest = `${destination[0]},${destination[1]}`;
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`, '_blank');
  };

  return (
    <div className='h-screen w-full flex flex-col gap-4 items-center mb-10'>
      <h2 className='font-[inter] font-bold text-base md:text-3xl leading-6 tracking-normal text-center align-middle'>Find Apartments Near You On the Map</h2>
      <p className='font-normal text-sm md:text-base leading-6 align-middle text-center text-[#777777]'>Simply click a map pin to view an apartment or to learn more about that location.</p>

      <div className='h-4/5 w-11/12 bg-gray-100 rounded-lg overflow-hidden shadow-lg relative z-0'>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <RecenteringMap center={center} />

          {/* User Location Marker */}
          {userLocation && (
            <Marker position={userLocation} icon={UserIcon}>
              <Popup>
                You are here
              </Popup>
            </Marker>
          )}

          {/* Apartment Markers */}
          {ViewApartmentsData.map((apartment) => {
            const location = apartment.location
              ? [apartment.location.lat, apartment.location.lng]
              : [6.4474, 3.4731]; // Default to Lagos if missing
            return (
              <Marker key={apartment.id} position={location}>
                <Popup>
                  <div className="p-2 max-w-xs">
                    <img
                      src={apartment.image}
                      alt={apartment.title}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />
                    <h3 className="font-bold text-sm mb-1">{apartment.title}</h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{apartment.description}</p>
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs w-full hover:bg-blue-700 transition-colors"
                      onClick={() => handleGetDirections(location)}
                    >
                      Get Directions
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  )
}

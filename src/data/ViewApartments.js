import Bedroom1 from "../assets/images/Bedroom 1.jpg";
import Bedroom2 from "../assets/images/Bedroom 2.jpg";
import Bedroom3 from "../assets/images/Bedroom 3.jpg";
import Bedroom4 from "../assets/images/Bedroom 4.jpg";
import Bedroom5 from "../assets/images/Bedroom 5.jpg";

export const ViewApartmentsData = [
  {
    id: 1,
    title: "Modern Studio",
    image: Bedroom1,
    description: "Perfect for professionals. Fully equipped with modern amenities, high-speed internet, and a workspace for remote work.",
    price: "₦450,000 / month",
    location: {
      lat: 6.4474,
      lng: 3.4731, // Lekki Phase 1
      address: "14 Admiralty Way, Lekki Phase 1, Lagos",
      neighborhood: "Lekki Peninsula, Victoria Island Axis",
      landmark: "Opposite The Good Beach, 5 mins from The Palms Shopping Mall, Oniru"
    },
    distances: [
      { label: "Lekki Toll Gate", time: "5 mins", icon: "car" },
      { label: "Victoria Island", time: "10 mins", icon: "car" },
      { label: "Ikoyi Bridge", time: "15 mins", icon: "car" },
      { label: "Restaurants & Cafés on Admiralty Way", time: "2 mins walk", icon: "walk" },
      { label: "Closest Bus Stop: Admiralty Way Junction", time: "2 mins", icon: "car" }
    ]
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    image: Bedroom2,
    description: "Premium comfort with panoramic city views, jacuzzi tub, rooftop access, and concierge service included.",
    price: "₦1,200,000 / month",
    location: {
      lat: 6.4253,
      lng: 3.4219, // Victoria Island
      address: "10 Ozumba Mbadiwe Ave, Victoria Island, Lagos",
      neighborhood: "Victoria Island, Lagos Island Axis",
      landmark: "Near Civic Center, 10 mins from Eko Hotel"
    },
    distances: [
      { label: "Lekki Toll Gate", time: "10 mins", icon: "car" },
      { label: "Ikoyi", time: "5 mins", icon: "car" },
      { label: "Eko Atlantic", time: "15 mins", icon: "car" },
      { label: "Hard Rock Cafe", time: "5 mins walk", icon: "walk" }
    ]
  },
  {
    id: 3,
    title: "Cozy 1-Bedroom",
    image: Bedroom3,
    description: "Intimate and charming, ideal for couples. Features a modern kitchen, comfortable bedroom, and living area.",
    price: "₦600,000 / month",
    location: {
      lat: 6.4549,
      lng: 3.5521, // Ikate
      address: "5 Freedom Way, Ikate Elegushi, Lekki",
      neighborhood: "Ikate, Lekki Phase 1 Axis",
      landmark: "Behind This Present House"
    },
    distances: [
      { label: "Lekki Phase 1", time: "10 mins", icon: "car" },
      { label: "Circle Mall", time: "5 mins", icon: "car" },
      { label: "Nike Art Gallery", time: "8 mins", icon: "car" }
    ]
  },
  {
    id: 4,
    title: "Spacious 2-Bedroom",
    image: Bedroom4,
    description: "Family-friendly apartment with separate living areas, master bedroom ensuite, and a welcoming ambiance.",
    price: "₦850,000 / month",
    location: {
      lat: 6.4316,
      lng: 3.4243, // Oniru
      address: "Bishop Aboyade Cole St, Victoria Island",
      neighborhood: "Victoria Island",
      landmark: "Close to Eko Hotel & Suites"
    },
    distances: [
      { label: "The Palms Mall", time: "10 mins walk", icon: "walk" },
      { label: "Oniru Beach", time: "5 mins", icon: "car" }
    ]
  },
  {
    id: 5,
    title: "Executive Loft",
    image: Bedroom5,
    description: "High-end finishes with open-plan layout, premium fixtures, and smart home technology throughout.",
    price: "₦700,000 / month",
    location: {
      lat: 6.4414,
      lng: 3.4182, // VI Extension
      address: "Adeola Odeku St, Victoria Island",
      neighborhood: "Victoria Island Central",
      landmark: "Near Mike Adenuga Towers"
    },
    distances: [
      { label: "Silverbird Galleria", time: "5 mins", icon: "car" },
      { label: "Mega Plaza", time: "8 mins walk", icon: "walk" }
    ]
  },
];

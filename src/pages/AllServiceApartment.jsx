import React from 'react'
import { SearchIcon } from '../assets/Icons/SearchIcon'
import  Image  from '../assets/images/3d-house-model-with-modern-architecture 1.png'
import HeroSlider from '../component/HeroSlider'


import img1 from "../assets/images/bedroom 1.jpg";
import img2 from "../assets/images/bedroom 2.jpg";
import img3 from "../assets/images/bedroom 3.jpg";
import img4 from "../assets/images/bedroom 4.jpg";
import img5 from "../assets/images/bedroom 5.jpg";
import img6 from "../assets/images/bedroom 6.jpg";

export default function AllServiceApartment() {
  // Base apartment meta (titles/descriptions/prices stay the same)
  const apartmentsBase = [
    {
      title: "Modern 2-Bedroom | Lekki Phase 1",
      description:
        "Our Crown Apartments provide a modern and welcoming home-from-home experience in the heart of Newcastle City Centre, ideal for business and leisure stays.",
      price: "₦450,000 / month",
    },
    {
      title: "Luxury Studio | Victoria Island",
      description:
        "A stylish studio designed for professionals who value comfort, elegance, and city access with premium amenities.",
      price: "₦950,000 / month",
    },
    {
      title: "Family Apartment | Ikoyi",
      description:
        "Spacious living with multiple bedrooms, modern kitchen, and secure surroundings—perfect for families.",
      price: "₦750,000 / month",
    },
  ];

  // Three different image sets (each image includes title + description)
  const imagesSet1 = [
    { src: img1, title: "Master Bedroom", description: "Spacious bedroom with natural light and modern decor." },
    { src: img2, title: "Guest Bedroom", description: "Cozy bedroom featuring soft tones and comfortable bedding." },
    { src: img3, title: "Cozy Corner", description: "Stylish bedroom with wooden accents and city view." },
    { src: img4, title: "Panoramic Bedroom", description: "Elegant bedroom with plush headboard and ambient lighting." },
    { src: img5, title: "Skylight Bedroom", description: "Bright bedroom with large windows and minimalist design." },
    { src: img6, title: "Deluxe Bedroom", description: "Contemporary bedroom with tasteful art and soft textiles." },
  ];
  const imagesSet2 = [
    { src: img2, title: "Guest Bedroom", description: "Cozy bedroom featuring soft tones and comfortable bedding." },
    { src: img3, title: "Cozy Corner", description: "Stylish bedroom with wooden accents and city view." },
    { src: img4, title: "Panoramic Bedroom", description: "Elegant bedroom with plush headboard and ambient lighting." },
    { src: img5, title: "Skylight Bedroom", description: "Bright bedroom with large windows and minimalist design." },
    { src: img6, title: "Deluxe Bedroom", description: "Contemporary bedroom with tasteful art and soft textiles." },
    { src: img1, title: "Master Bedroom", description: "Spacious bedroom with natural light and modern decor." },
  ];
  const imagesSet3 = [
    { src: img3, title: "Cozy Corner", description: "Stylish bedroom with wooden accents and city view." },
    { src: img4, title: "Panoramic Bedroom", description: "Elegant bedroom with plush headboard and ambient lighting." },
    { src: img5, title: "Skylight Bedroom", description: "Bright bedroom with large windows and minimalist design." },
    { src: img6, title: "Deluxe Bedroom", description: "Contemporary bedroom with tasteful art and soft textiles." },
    { src: img1, title: "Master Bedroom", description: "Spacious bedroom with natural light and modern decor." },
    { src: img2, title: "Guest Bedroom", description: "Cozy bedroom featuring soft tones and comfortable bedding." },
  ];

  const apartmentsA = apartmentsBase.map((a) => ({ ...a, images: imagesSet1 }));
  const apartmentsB = apartmentsBase.map((a) => ({ ...a, images: imagesSet2 }));
  const apartmentsC = apartmentsBase.map((a) => ({ ...a, images: imagesSet3 }));

  return (
    <div className='flex flex-col gap-10'>
       <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
       style={{
            backgroundImage: `url(${Image})`
        }}
       >
        <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="h-60 w-4/5 text-center flex flex-col items-center justify-around gap-1 md:gap-4 text-white top-2 md:top-20 z-30">
            <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center  md:leading-[74px] space-y-6 capitalize tracking-normal align-middle">Find your apartment.</h2>
            </div>

            <div className="h-12 lg:h-16 w-full lg:w-1/2  rounded-3xl bg-white flex p-2 gap-2 items-center justify-between">
                <SearchIcon className="cursor-pointer" />
                <input
                  className='w-full lg:w-96 h-10 text-base text-black outline-none indent-2 p-2 rounded-3xl'
                  type="text"
                  placeholder='Enter Location the you want to get an apartment'
                   />
                <button className='h-10 lg:h-12 w-2/4 lg:w-48 bg-[#1C56BA] text-white py-2 px-4 text-xs lg:text-base rounded-3xl'>Search Location</button>
            </div>
        </div>

       </section>

       <div className='flex flex-col gap-14 items-center justify-around mb-10'>
        <HeroSlider apartments={apartmentsA} />
        <HeroSlider apartments={apartmentsB} />
        <HeroSlider apartments={apartmentsC} />
       </div>
    </div>
  )
}

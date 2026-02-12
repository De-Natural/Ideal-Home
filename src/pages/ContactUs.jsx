import { useRef } from "react";
import Image from "../assets/images/3d-house-model-with-modern-architecture 1.png"
import BookingForm from "../component/BookingForm";
import SocialFollow from "../component/SocialFollow";
import MapImage from "../assets/images/map.png";

function Contact() {
    const locationRef = useRef(null);

    return (
        <div className='flex flex-col gap-10'>
            <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Image})`
                }}
            >
                <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>

                <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                    <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center md:leading-[74px] space-y-6 capitalize tracking-normal text-white z-30 align-middle">Contact Us</h2>
                </div>

            </section>

            <SocialFollow />

            <BookingForm locationRef={locationRef} />

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
                               
                               <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                                 <strong className="font-semibold">Address:</strong> 14 Admiralty Way, Lekki Phase 1, Lagos.
                               </span>
                             </li>
             
                             <li className="flex items-start gap-3">
                               
                               <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                                 <strong className="font-semibold">Neighborhood:</strong> Lekki Peninsula, Victoria Island Axis.
                               </span>
                             </li>
             
                             <li className="flex items-start gap-3">
                               
                               <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                                 <strong className="font-semibold">Landmark Nearby:</strong> Opposite The Good Beach, 5 mins from The Palms Shopping Mall, Oniru.
                               </span>
                             </li>

                             <li className="flex items-start gap-3">
                               
                               <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                                 <strong className="font-semibold">Call:</strong> +44 7405 076376
                               </span>
                             </li>
                           </ul>

                           <button
                            type="button"
                            onClick={() => {
                              locationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              // focus the first input after scrolling for accessibility
                              setTimeout(() => {
                                const firstInput = locationRef.current?.querySelector('input[name="name"]');
                                firstInput?.focus();
                              }, 300);
                            }}
                            className={`flex-1 h-12 bg-[#1C56BA] mt-10 px-3 py-2 text-white rounded-full font-semibold text-sm transition`}
                            >
                                Book Apartment Now
                            </button>
                        </div>
             
                      </div>
                     </div>
                   </div>
            </section>

        </div>
    )
}

export default Contact
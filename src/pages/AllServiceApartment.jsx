import React from 'react'
import { SearchIcon } from '../assets/Icons/SearchIcon'
import  Image  from '../assets/images/3d-house-model-with-modern-architecture 1.png'
import HeroSlider from '../component/HeroSlider'

export default function AllServiceApartment() {
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
        <HeroSlider />
        <HeroSlider/>
        <HeroSlider />
       </div>
    </div>
  )
}

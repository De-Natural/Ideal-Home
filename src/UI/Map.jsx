import MapImage from '../assets/images/map.png'

export const Map = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-4 items-center'>
        <h2 className='font-[inter] font-bold text-base md:text-3xl leading-6 tracking-normal text-center align-middle'>Find Apartments Near You On the Map</h2>
        <p className='font-normal text-sm md:text-base leading-6 align-middle text-center text-[#777777]'>Simply click a map pin to view an apartment or to learn more about that location.</p>

        <div className='h-4/5 w-11/12 bg-cover bg-center'
         style={{
            backgroundImage: `url(${MapImage})`
         }}
        >

        </div>
    </div>
  )
}

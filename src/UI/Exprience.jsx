import dinner from '../assets/images/dinner.png'
import coverage from '../assets/images/coverage.png'
import veranda from '../assets/images/veranda.png'
import { SideArrow } from '../assets/Icons/SideArrow'

export default function Exprience() {
  return (
    <div className='h-fit lg:h-screen text-black font-[Montserrat] flex flex-col items-center w-full relative bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,#1C56BA_50%,#1C56BA_100%)]'>
       <div className='w-4/5 flex flex-col items-center justify-center'>
            <h2 className='font-bold text-base lg:text-3xl leading-[26px] tracking-normal align-middle capitalize'>Live better with Ideal home</h2>
            <p className='font-normal leading-6 text-base tracking-normal text-[#777777]'>Discover smart rental tips, lifestyle inspiration, and stories from renters who’ve made our apartments their perfect home.</p>
            <div className='h-fit lg:h-[410px] rounded-3xl p-4 flex flex-col lg:flex-row gap-5 bg-white mt-10'>
                <section className='h-[370px] w-full lg:w-2/4 px-5 py-4 rounded-2xl flex flex-col gap-4'>
                    <img
                    className='h-[212px] w-full rounded-2xl'
                    src={dinner}
                    alt=""
                    />
                    <h2 className='font-bold text-lg leading-[100%]'>Your home away from home</h2>
                    <p className='font-normal text-sm leading-[100%] text-left text-[#777777]'>Find comfort and convenience while you study, work, or explore a new city. Our rentals are designed to make every stay feel personal and peaceful.</p>
                </section>

                <section className='h-[370px] w-full lg:w-2/4 px-5 py-4 rounded-2xl flex flex-col gap-4'>
                    <img
                    className='h-[212px] w-full rounded-2xl'
                    src={coverage }
                    alt=""
                    />
                    <h2 className='font-bold text-lg leading-[100%]'>Why flexible Living in the future</h2>
                    <p className='font-normal text-sm leading-[100%] text-left text-[#777777]'>Say goodbye to long-term leases. Choose freedom, from monthly rentals to fully serviced stays, live where life takes you.</p>
                </section>

                <section className='h-[370px] w-full lg:w-2/4 px-5 py-4 rounded-2xl flex flex-col gap-4'>
                    <img 
                    className='h-[212px] w-full rounded-2xl'
                        src={veranda} 
                        alt="" 
                    />
                    <h2 className='font-bold text-lg leading-[100%]'>Escape the city, stay inspired</h2>
                    <p className='font-normal text-sm leading-[100%] text-left text-[#777777]'>Find your next getaway apartment near the coast, hills, or hidden neighbourhoods. Perfect for weekend resets and creative escapes.</p>
                </section>
            </div>
            {/* the bottom */}
            <div className='w-3/4 lg:w-full flex flex-col text-white gap-4 items-center justify-center mt-5 mb-3'>
                <p className='font-semibold text-lg lg:text-3xl leading-6 lg:leading-3 tracking-normal align-middle capitalize'>ready to find your apartment?</p>
                <p className='font-normal text-sm lg:text-base leading-6 tracking-normal align-middle'>Contact one of our rental experts today and we’ll help you secure the perfect space, fast, safe, and stress-free.</p>
                <button className='h-9 lg:h-12 w-44 rounded-3xl px-8 py-3 gap-2 bg-white text-[#1C56BA] flex items-center'>
                    Contact us 
                    <SideArrow className="text-white" />
                </button>
            </div>
       </div>
       {/* <div className='w-full flex-1 bg-white' />
       <div className='w-full flex-1 bg-[#1C56BA]' /> */}
       
    </div>
  )
}

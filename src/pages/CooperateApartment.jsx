
import BusinessImage from "../assets/images/BusinessImage.avif"
import CoooperateImg from  "../assets/images/Cooperategroupimage.png"
import TestimonialSection from "../UI/TestimonialSection";
import SocialFollow from "../component/SocialFollow";
import HomeAminities from "../UI/HomeAminaties";
import RecentlyApartment from "../UI/RecentlyApartment";
import ContractorTabNavigation from "../component/ContractorTabNavigation"; 

function BusinessApartment() {
    
;
    return (
        <div className='flex flex-col gap-10'>
            <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
                
                style={{
                    backgroundImage: `url(${CoooperateImg})`
                }}
            >
                <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="h-60 w-4/5 text-center flex flex-col items-center justify-around gap-1 md:gap-4 text-white top-2 md:top-20 z-30">
                    <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                        <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center  md:leading-[74px] space-y-6 capitalize tracking-normal align-middle">Corporate group Apartments</h2>
                    </div>

                    <div className="w-full flex items-center justify-center">
                       <ContractorTabNavigation />
                    </div>

                </div>

            </section>

            <div className="h-fit lg:h-96 w-full lg:w-4/5 mx-0 lg:mx-auto flex flex-col lg:flex-row items-center p-2 gap-12 mb-4">
                <div className="h-fit lg:h-96 flex p-2 flex-col gap-8 w-full lg:w-3/4">
                    <div className="flex p-2 items-center justify-between"> 
                        <h2 className="text-[#333] font-semibold text-lg lg:text-3xl leading-10 not-italic">Apartment for Cooperate Groups</h2>
                    </div>

                    <div className="flex items-center flex-col gap-4">
                       <p className="font-[poppins] text-base font-normal not-italic leading-normal">If you are considering a much-needed leisure break in the Newcastle upon Tyne area either alone, with a partner or with your family, then Week2Week can provide you with a beautiful apartment that will meet your needs. We have apartments close by to all of the local attractions at the centre of it all.</p>

                        <p className="font-[poppins] text-base font-normal not-italic leading-normal">Our serviced apartments provide you with a home from home feel coupled with the benefits of a luxury hotel giving you the advantages of both experiences.</p>

                        <p className="font-[poppins] text-base font-normal not-italic leading-normal">Week2Week Serviced Apartments offer a range of 1, 2, 3 and 4 – 5 bedroom options all with ample space and additional rooms you wouldn’t usually get when staying at a hotel and all for affordable prices.</p>
                    </div>
                </div>

                <div className="h-96 w-full lg:w-3/4"> 
                    <img 
                        src={BusinessImage} 
                        alt="Business Apartment"
                        className="h-full w-full rounded-3xl object-cover object-center"
                    />
                </div>
            </div>

            <div>
                <HomeAminities
                    heading="Facilites you Enjoy in Our Corporate groups" 
                    description="We simplify the rental experience, giving you verified listings, transparent pricing, and homes that feel like you belong" 
                />
            </div>

            <div className="w-full px-6 py-10">
                <RecentlyApartment 
                    heading="Work-Ready Apartments for Corporate groups" 
                    description="From small teams to large groups, we offer spacious, fully serviced apartments tailored for corporate stays." 
                />
            </div>


            <TestimonialSection />
            <SocialFollow />

        </div>
    )
}

export default BusinessApartment
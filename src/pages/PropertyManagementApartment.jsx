
import { DoubleTickIcon } from "../assets/icons/DoubleTickIcon";
import PropertyImage from "../assets/images/propertyManagementImage.png"
import SocialFollow from "../component/SocialFollow";
import PropertyManagementAminaties from "../UI/PropertyManagementAminaties";
import ProcessSteps from "../UI/ProcessSteps";
import PartnerCTA from "../component/PartnerCTA";
import FeedbackForm from "../UI/FeedbackForm";

function PropertyManagementApartment() {
    
;
    return (
        <div className='flex flex-col gap-10'>
            <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
                
                style={{
                    backgroundImage: `url(${PropertyImage})`
                }}
            >
                <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="h-60 w-4/5 text-center flex flex-col items-center justify-around gap-1 md:gap-4 text-white top-2 md:top-20 z-30">
                    <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                        <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center  md:leading-[74px] space-y-6 capitalize tracking-normal align-middle">Property Management</h2>
                    </div>


                </div>

            </section> 

           <div className="flex flex-col justify-center items-center gap-16 px-4">
            <h2 className="text-[#333] text-center text-xl md:text-3xl not-italic font-semibold leading-3">Accommodation Experts for Extended Stays</h2>
            <p className="text-sm not-italic font-normal leading-normal">
                We’re actively looking for quality properties in prime locations — including Lekki, Ikoyi, Victoria Island, Ajah, and other high-demand areas.
                Whether you already have an apartment or need help finding one that suits your investment goals, our property management team is here to assist.
                One of our specialists can visit your property, assess its potential, and guide you on setup and profitability. Once onboarded, we’ll arrange:
            </p> 

            <ul className="space-y-3 w-full text-sm">
                <li className="flex items-start gap-3">
                    <DoubleTickIcon />
                    <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    Professional Apartment photography
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <DoubleTickIcon />
                    <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    Full online marketing via our platform and partner networks
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <DoubleTickIcon />
                    <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    Transparent performance tracking
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <DoubleTickIcon />
                    <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    Reliable income through verified tenants and corporate stays
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <DoubleTickIcon />
                    <span className="font-[Montserrat] text-base not-italic leading-normal font-normal text-[#333]">
                    and Lots More...
                    </span>
                </li>
            </ul>
           </div>

            <div className="w-full px-6 py-10">
                
            </div>

            <PropertyManagementAminaties />

            <ProcessSteps />

            <PartnerCTA />

            <FeedbackForm />

            <SocialFollow />

        </div>
    )
}

export default PropertyManagementApartment
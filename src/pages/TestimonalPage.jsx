
import TestimonialImage from "../assets/images/testimonyImage.png"
import PartnerCTA from "../component/PartnerCTA"
import SocialFollow from "../component/SocialFollow"
import FeedbackForm from "../UI/FeedbackForm"
import TestimonialSection from "../UI/TestimonialSection"

function TestimonalPage() {
  return (
    <div className='flex flex-col gap-10'>
        <section className="h-screen relative flex flex-col items-center justify-center bg-cover bg-center"
                        
            style={{
                backgroundImage: `url(${TestimonialImage})`
            }}
        >
            <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="h-60 w-4/5 text-center flex flex-col items-center justify-around gap-1 md:gap-4 text-white top-2 md:top-20 z-30">
                <div className=" w-full md:w-2/3 flex flex-col gap-0 md:gap-4">
                    <h2 className="font-[poppins] font-semibold text-xl md:text-5xl text-center  md:leading-[74px] space-y-6 capitalize tracking-normal align-middle">Testimonials</h2>
                </div>


            </div>
        
        </section> 
        
        <TestimonialSection />

        <FeedbackForm />

        <SocialFollow />

        <PartnerCTA
            heading="Ready to Find Your Next Apartment"
            subheading=""
            description="Contact one of our rental experts today and we’ll help you secure the perfect space, fast, safe, and stress-free."
            buttonText="Contact Us" 
        />
    </div>
  )
}

export default TestimonalPage
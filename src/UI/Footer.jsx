import { FacebookIcon } from '../assets/Icons/FacebookIcon';
import { InstagramIcon } from '../assets/Icons/InstagramIcon';
import { LinkedinIcon } from '../assets/Icons/LinkedinIcon';
import { SendIcon } from '../assets/Icons/SendIcon';
import { TiwtterIcon } from '../assets/Icons/TiwtterIcon';
import CompanyLogo from '../assets/images/Week2week Serviced Apartments Newcastle Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-black font-[Montserrat] w-full">
        <div className="container flex flex-col md:flex-row px-6 lg:px-8 py-8 lg:py-12">
        {/* Top Section */}
        <div className="flex flex-col justify-between text-left p-1 mb-8 lg:mb-12">
          {/* Brand Info - LEFT on desktop, TOP on mobile */}
         
            <div className="">
                <img 
                src={CompanyLogo} 
                alt="Company Logo" 
                className="h-9 lg:h-24 w-11 lg:w-32" 
                />
            </div>
            <p className="text-sm lg:text-base leading-6 not-italic font-[Hind] font-normal text-[#666666] lg:w-full mt-3">
              Your trusted platform for finding verified apartments and rental homes across Nigeria, with reliable landlords.
            </p>
          {/* Newsletter - RIGHT on desktop, BELOW on mobile */}
          <div className="lg:w-4/5 mt-2">
                <h2 className="text-xs md:text-base leading-[100%] font-[inter] font-semibold mb-3 lg:mb-2">
                Sign Up For Our Newsletter And Stay Informed
                </h2>
                <div className="relative flex">
                <input
                    type="email"
                    name='email'
                    autoComplete=''
                    placeholder="Enter Email"
                    className="w-11/12 py-3 px-4 pr-12 border border-[#CCCCCC] text-sm lg:text-base bg-[#EFF8FF] outline-none"
                />
                <button className="absolute bg-[#3E6DBD] h-full w-14 right-0 flex items-center justify-center top-1/2 transform -translate-y-1/2">
                    <SendIcon size={20} className="text-white " />
                </button>
                </div>
          </div>
            
        </div>

        {/* Divider - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block border-t border-[#CCCCCC] my-8"></div>

        {/* Quick Links Section */}
        <div className="mb-8 lg:mb-12 w-full md:w-3/4">

          {/* DESKTOP: Grid layout with labeled sections */}
          <div className="w-11/12 col-span-8 grid grid-cols-1 text-left lg:grid-cols-3 gap-8">
          {/* About Us Column */}
              <div>
                <h4 className="text-smlg:text-base leading-[100%] font-[inter] font-bold mb-6">About Us</h4>
                <div className=" flex flex-col gap-3">
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer font-[inter]">How It Works</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer font-[inter]">Explore Apartments</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer font-[inter]">Blog</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer font-[inter]">Testimonials</p>
                </div>
              </div>

              {/* Support Column */}
              <div>
                <h4 className="text-smlg:text-base leading-[100%] font-[inter] font-bold mb-6">Support</h4>
                <div className="flex flex-col gap-3">
                  <p className="font-[inter] font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">FAQs</p>
                  <p className="font-[inter] font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Help Centre</p>
                  <p className="font-[inter] font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Terms & Conditions</p>
                  <p className="font-[inter] font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Contact Us</p>
                  <p className="font-[inter] font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">+44(0)191 2813129</p>
                </div>
              </div>

              {/* Apartments Column */}
              <div>
                <h4 className="text-smlg:text-base leading-[100%] font-[inter] font-bold mb-6">Apartments</h4>
                <div className="font-[inter] flex flex-col gap-3">
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Lagos</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Maldives</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Sydney</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Los Angeles</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Calabar</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Abuja</p>
                  <p className="font-normal not-italic text-sm leading-[100%] hover:text-blue-600 cursor-pointer">Singapore</p>
                </div>
              </div>
          </div>
        </div>
        
        </div>
        {/* Divider - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block border-t border-[#CCCCCC] my-8"></div>

        {/* Bottom Section */}
        <div className="pt-4 lg:pt-0 mb-3 p-3">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Copyright */}
            <p className="text-sm font-[inter] leading-[26px] tracking-tight font-normal text-center lg:text-left mb-4 lg:mb-0">
              © 2025 Week2Week. All rights Reserved
            </p>

            <div className='h-9 w-40 flex items-center justify-around gap-2'>
              <FacebookIcon />
              <TiwtterIcon />
              <InstagramIcon />
              <LinkedinIcon />
            </div>

            {/* Policies - Different order on mobile vs desktop */}
            <div className="flex flex-row items-center gap-2 mt-4 lg:gap-6">
              <p className="text-sm lg:text-base font-medium hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </p>
              <div className="hidden lg:block text-[#CCCCCC]">|</div>
              <p className="text-sm lg:text-base font-medium hover:text-blue-600 cursor-pointer">
                Cookies Policy
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
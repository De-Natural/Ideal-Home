import { Link } from "react-router-dom";
import Kitchen from "../assets/images/home away kitchen 2.png"

const LetProperty = () => {
  return (
    <section className="w-full bg-[#1C56BA]">
      <div className="">
        <div className="bg-transparent text-white rounded-2xl p-8 flex flex-col items-center md:flex-row gap-6">
          <div className="h-64 text-left flex flex-col items-left justify-between mx-auto">
            {/* Title */}
            <div>
                <h1 className="text-xl lg:text-4xl font-semibold mb-2 font-[inter] leading-8">
                    Own a Property?
                </h1>
                <h2 className="text-xs lg:text-xl font-semibold mb-8 leading-8 font-[inter]">
                    Let's Help You Earn More from It.
                </h2>
            </div>
            
            <p className="text-xs lg:text-base mb-10 lg:mb-12 leading-6 font-[inter]">
              Turn your apartments into steady income with our trusted property management service. We handle tenants, maintenance, and rent collection, so you can sit back and relax.
            </p>
            
            {/* CTA Button */}
            <Link to="/property-management-apartment">
              <button className="bg-white w-40 md:w-64 hover:bg-white text-[#1C56BA] font-bold py-2 px-4 rounded-full text-base lg:text-xl transition-all duration-300 transform hover:scale-105 font-[Montserrat]">
                Get Started
                <span className="ml-3">→</span>
              </button>
            </Link>
          </div>

          <div className="w-full md:w-3/4 rounded-2xl">
            <img 
            className="h-full w-full"
            src={Kitchen} 
            alt="" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetProperty;
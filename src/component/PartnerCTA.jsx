import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnerCTA({
    heading = "Ready to Partner With Us?",
    subheading = "Contact our Property Management Team",
    description = "Our specialists are ready to guide you through the process — from onboarding to earning.",
    buttonText = "Contact Us",
    buttonLink = "/contact-us",
    backgroundColor = "bg-[#1C56BA]"
}) {
    return (
        <section className={`${backgroundColor} py-16 px-6`}>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                {/* Heading - Only show if heading is provided */}
                {heading && (
                    <h2 className="text-white text-2xl md:text-4xl font-semibold not-italic leading-tight">
                        {heading}
                    </h2>
                )}

                {/* Subheading - Only show if subheading is provided */}
                {subheading && (
                    <p className="text-white text-base md:text-lg font-normal not-italic">
                        {subheading}
                    </p>
                )}

                {/* Description - Only show if description is provided */}
                {description && (
                    <p className="text-white/90 text-sm md:text-base font-normal not-italic leading-normal max-w-2xl">
                        {description}
                    </p>
                )}

                {/* Button - Only show if buttonText is provided */}
                {buttonText && (
                    <Link to={buttonLink}>
                        <button className="bg-white text-[#1C56BA] hover:bg-gray-100 transition px-8 py-3 rounded-full font-medium text-sm md:text-base flex items-center gap-2">
                            {buttonText}
                            <ArrowRight size={18} />
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}

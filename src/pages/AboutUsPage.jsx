
import { useEffect } from "react"
import Image from "../assets/images/whoWeareImg.png"
import PartnerCTA from "../component/PartnerCTA"
import teamMembers from "../data/teammembers"
import MeetTheTeam from "../UI/MeetTheTeam"
import OurValuesAmenities from "../UI/OurValuesAmenities"
import TestimonialSection from "../UI/TestimonialSection"
import MapImage from "../assets/images/map.png";
import SocialFollow from "../component/SocialFollow"

export default function AboutUsPage() {
    // Handle smooth scroll on mount and hash change
    useEffect(() => {
        const scrollToSection = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        };

        // Scroll on mount
        scrollToSection();

        // Listen for hash changes
        window.addEventListener('hashchange', scrollToSection);

        return () => {
            window.removeEventListener('hashchange', scrollToSection);
        };
    }, []);

    return (
        <div className="flex flex-col gap-12">
            <section id="who-we-are" className="bg-transparent py-24 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="space-y-6 items-start h-full">
                        <h2 className="font-bold text-2xl md:text-4xl leading-10 align-middle">
                            Who we are
                        </h2>

                        <p className="font-regular text-base leading-[100%] tracking-wide">
                            Week2Week is on a mission to bring the best live-event
                            experiences in Nigeria to your fingertips. From Lagos to Abuja
                            and beyond, we combine the spirit of local music, comedy and
                            culture with top-notch ticketing technology so you can focus on
                            the fun, not the logistics.
                        </p>

                        <p className="font-regular text-base leading-[100%] tracking-wide">
                            Founded by a team of event-lovers, tech builders and local
                            creators, we believe that every show should be easy to find,
                            easy to buy, and easy to attend. We’re building the platform
                            that makes that happen.
                        </p>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="w-full">
                        <div className="overflow-hidden rounded-[32px]">
                            <img
                                src={Image}
                                alt="Apartment building"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <div id="our-values" className="scroll-mt-20">
                <OurValuesAmenities />
            </div>

            <PartnerCTA
                heading="Find the right Apartment"
                subheading=""
                description="Having seen the rental market struggle with unclear listings, surprise fees and limited support, we set out to do things differently. We envisioned a platform where renters feel confident and landlords feel cared for. That vision still drives us today."
                buttonText="Let’s Help you Find an Apartment"
            />
            <div id="meet-the-team" className="scroll-mt-20">
                <MeetTheTeam members={teamMembers} />
            </div>

            <TestimonialSection />

            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

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
                            className={`w-full flex-1 h-12 bg-[#1C56BA] mt-10 px-3 py-2 text-white rounded-full font-semibold text-sm transition`}
                        >
                            Find Us on map
                        </button>
                    </div>

                </div>
            </div>

            <SocialFollow />
        </div>
    )
}
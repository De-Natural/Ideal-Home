
import { FacebookIcon } from "../assets/Icons/FacebookIcon";
import { InstagramIcon } from "../assets/Icons/InstagramIcon";
import { LinkedinIcon } from "../assets/Icons/LinkedinIcon";
import { TiwtterIcon } from "../assets/Icons/TiwtterIcon";

export default function SocialFollow() {
  return (
    <section className="bg-[#F2F9FF] py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Icons */}
        <div className="flex justify-center items-center gap-6 mb-6 text-[#1C56BA]">
          <FacebookIcon />
          
          <TiwtterIcon />

          <InstagramIcon />

          <LinkedinIcon />
        </div>

        {/* Divider + Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-[#BFDFFF]" />

          <p className="text-sm md:text-base font-semibold text-[#1C56BA] whitespace-nowrap">
            Follow Us on Social Media
          </p>

          <div className="flex-1 h-[2px] bg-[#BFDFFF]" />
        </div>

      </div>
    </section>
  );
}


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import CompanyLogo from '../assets/images/Week2week Serviced Apartments Newcastle Logo.png';
import FlagComponent from '../assets/images/FlagComponents.png'
import { HamburgerIcon } from "../assets/Icons/HamburgerIcon";
import { CloseIcon } from "../assets/Icons/CloseIcon";
import navData from "./_jsonData.json"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    document.body.style.overflow = "auto";
  };

  const handleDropdownEnter = (pathName) => {
    setOpenDropdown(pathName);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };
  

  return (
    <nav className="font-sans w-full">
      {/* Top Header Banner - Always visible */}
      <div className="bg-black text-white py-2 px-4 text-sm">
        <h2 className="text-center font-[Montserrat] text-[8px] lg:text-base not-italic font-bold uppercase leading-4">
          Accommodation Experts for Extended Stays - Projects, Relocation, Business Travel - Short-term and Long-term
        </h2>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 px-8 h-28">
        <div className="container mx-auto flex justify-between items-center mb-2">
          {/* Logo */}
          <div className="">
            <img 
              src={CompanyLogo} 
              alt="Company Logo" 
              className="h-9 lg:h-24 w-11 lg:w-32" 
            />
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="cursor-pointer absolute top-32 right-10 lg:hidden z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <CloseIcon />
            ) : (
              <HamburgerIcon />
            )}
          </button>

          {/* Overlay for Mobile Menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/35 z-30 lg:hidden"
              onClick={closeMenu}
            ></div>
          )}

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed top-0 left-0 w-full bg-white p-6 z-40 transition-transform duration-300 ease-in-out lg:hidden ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
          >
            <div className="max-h-[80vh] overflow-y-auto p-6 mt-20">
              {/* Mobile Menu Items */}
              <div className="flex items-start flex-col gap-y-6">
                {navData?.map((data, ind) => (
                  data.pathName === "Home" ? (
                    <a 
                      key={ind}
                      href={data.link} 
                      className="text-gray-800 hover:text-black font-medium text-base md:text-lg transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      {data.pathName}
                    </a>
                  ) : (
                    <div key={ind} className="relative w-full">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === data.pathName ? null : data.pathName)}
                        className="text-gray-800 hover:text-black font-medium text-base md:text-lg flex items-center justify-between w-full transition-colors duration-200"
                      >
                        {data.pathName}
                        {openDropdown === data.pathName ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                      
                      {openDropdown === data.pathName && (
                        <div className="mt-2 ml-4 bg-white rounded-md">
                          <div className="flex flex-col items-start gap-y-4 p-4">
                            {data?.children?.map((child, childInd) => (
                              <Link key={childInd} to={child.link} className="" onClick={closeMenu}>
                                <h2 className="font-[Montserrat] text-sm md:text-base not-italic font-semibold leading-normal text-black hover:text-[#1C56BA]">{child.pathName}</h2>
                                {child.description && (
                                  <p className="text-[#979797] flex font-[Montserrat] text-xs not-italic font-normal leading-4">{child.description}</p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-8 flex gap-4 flex-row md:flex-col gap-y-4">
                <button 
                  className="bg-white text-black text-xs md:text-base flex px-2 py-4 rounded-3xl items-center justify-center border border-[#1C56BA] w-full"
                  onClick={closeMenu}
                >
                  Let Your Property
                </button>
                <Link to="/contact-us" className="bg-[#1C56BA] text-white text-xs md:text-base flex px-2 py-4 rounded-3xl items-center justify-center w-full" onClick={closeMenu}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            {navData?.map((data, ind) => (
              data.pathName === "Home" ? (
                <a 
                  key={ind}
                  href={data.link} 
                  className="text-gray-800 hover:text-black font-medium text-lg transition-colors duration-200"
                >
                  {data.pathName}
                </a>
              ) : (
                <div 
                  key={ind}
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(data.pathName)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="text-gray-800 hover:text-black font-medium text-lg flex items-center gap-1 transition-colors duration-200"
                  >
                    {data.pathName}
                    {openDropdown === data.pathName ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  
                  {openDropdown === data.pathName && (
                    <div 
                      className="absolute left-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                      onMouseEnter={() => handleDropdownEnter(data.pathName)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 w-[650px] px-8 py-10 content-start gap-10">
                        {data?.children?.map((child, childInd) => (
                          <Link key={childInd} to={child.link} className="flex flex-col gap-2">
                            <h2 className="font-[Montserrat] text-base not-italic font-semibold leading-[100%] text-black hover:text-[#1C56BA]">{child.pathName}</h2>
                            {child.description && (
                              <p className="text-[#979797] font-[Montserrat] text-xs not-italic font-normal leading-normal">{child.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>

          {/* Desktop CTA Buttons - Hidden on mobile */}
          <div className="hidden lg:flex gap-4 items-center">
            <button className="bg-white text-black flex px-6 py-3 rounded-3xl items-center justify-center border border-[#1C56BA]">
              Let Your Property
            </button>
           <Link to="/contact-us" className="bg-[#1C56BA] text-white flex px-6 py-3 rounded-3xl items-center justify-center">
              Contact Us
           </Link>
          </div>

          <div>
            <img src={FlagComponent} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
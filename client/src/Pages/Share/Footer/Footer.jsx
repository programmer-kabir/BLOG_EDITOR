import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import logo from "../../../assets/Logo/logo1.png";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-[#F3F4F6] pt-8 pb-6 mt-12">
      <div className="w-[95%] mx-auto px-4 ">
        <div className="lg:flex justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <Link to={"/"} className="md:flex gap-2  items-center">
              <img className="h-[35px]" src={logo} alt="Logo" />
              <h2 className="text-black text-[17px] font-semibold">
                Blog Editor
              </h2>
            </Link>
            <h5 className="text-sm mt-2 mb-2 [#1F2937]">
              Making the world a better place through constructing <br />{" "}
              elegant hierarchies.
            </h5>
            <div className="space-y-2 gap-4  mt-4">
              <button
                className="flex items-center gap-2 text-[#1F2937] font-normal  hover:text-black "
                type="button"
              >
                <GrLocation size={22} />
                <span className="text-[#1F2937] text-[15px]">
                  {" "}
                  Sylhet Bangladesh
                </span>
              </button>
              <button
                className="flex items-center gap-2 text-[#1F2937] font-normal  hover:text-black "
                type="button"
              >
                <LuPhoneCall size={22} />
                <span className="text-[#1F2937] text-[15px]">
                  {" "}
                  0100000000000
                </span>
              </button>
            </div>
          </div>

          {/* meddle Section */}
          <div className="w-full lg:w-1/5">
            <h4 className="text-black text-[17px] font-semibold">
              Importance link
            </h4>

            <div className=" mb-6 flex flex-col text-lg mt-2">
              <Link
                to="/about-us"
                className="text-[15px] [#1F2937] hover:underline"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="text-[15px] [#1F2937] hover:underline"
              >
                Contact Us
              </Link>
              <Link
                to="/trems-conditions"
                className="text-[15px] [#1F2937] hover:underline"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/faqs"
                className="text-[15px] [#1F2937] hover:underline"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Left Section */}
          <div className="w-full lg:w-[25%]">
            <h4 className="text-2xl [#1F2937] font-semibold ">
              Let's keep in touch!
            </h4>
            <h5 className="text-sm mt-2 mb-2 [#1F2937]">
              Making the world a better place through constructing <br />{" "}
              elegant hierarchies.
            </h5>
            <h2 className="text-base text-[#1F2937] font-medium mt-6  lg:mb-0">
              Connect with Us
            </h2>
            <div className=" mb-6 flex gap-4 text-lg mt-2">
              <button
                className=" text-[#1F2937] font-normal  hover:text-black "
                type="button"
              >
                <FaTwitter />
              </button>
              <button className=" text-[#1F2937] font-normal  hover:text-black ">
                <FaFacebookF size={19} />
              </button>
              <button className=" text-[#1F2937] font-normal  hover:text-black ">
                <FaLinkedin size={19} />
              </button>
              <button className=" text-[#1F2937] font-normal  hover:text-black ">
                <FaGithub size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

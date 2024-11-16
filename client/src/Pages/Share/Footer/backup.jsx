import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import logo from '../../../assets/Logo/logo1.png'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F3F4F6] pt-8 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Left Section */}
          <div className="w-full lg:w-6/12 ">
            <h4 className="text-2xl text-[#000000] font-semibold ">
              Let's keep in touch!
            </h4>
            <h5 className="text-sm mt-2 mb-2 text-[#737373]">
              Making the world a better place through constructing <br /> elegant
              hierarchies.
            </h5>
              <h2 className="text-xl text-[#1F2937] font-medium mt-6  lg:mb-0">Connect with Us</h2>
            <div className=" mb-6 flex gap-4 text-lg mt-2">
              <button
               className=" text-[#1F2937] font-normal  hover:text-black "
                type="button" 
              >
                <FaTwitter />
              </button>
              <button
                className=" text-[#1F2937] font-normal  hover:text-black "
              >
                <FaFacebookF size={19} />
              </button>
              <button
               className=" text-[#1F2937] font-normal  hover:text-black "
              >
                <FaLinkedin size={19} />
              </button>
              <button
               className=" text-[#1F2937] font-normal  hover:text-black "
              >
                <FaGithub size={19} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              {/* Useful Links */}
              <div className="w-full lg:w-4/6 px-4 ml-auto">
              <div className="w-full ">
            <h4 className="text-2xl text-[#000000] font-semibold ">
              Let's keep in touch!
            </h4>
            <h5 className="text-sm mt-2 mb-2 text-[#737373]">
              Making the world a better place through constructing <br /> elegant
              hierarchies.
            </h5>
              <h2 className="text-xl text-[#1F2937] font-medium mt-6  lg:mb-0">Connect with Us</h2>
            <div className=" mb-6 flex gap-4 text-lg mt-2">
              <button
               className=" text-[#1F2937] font-normal  hover:text-black "
                type="button" 
              >
                <FaTwitter />
              </button>
              <button
                className=" text-[#1F2937] font-normal  hover:text-black "
              >
                <FaFacebookF size={19} />
              </button>
              <button
               className=" text-[#1F2937] font-normal  hover:text-black "
              >
                <FaLinkedin size={19} />
              </button>
              <button
               className=" text-[#1F2937] font-normal  hover:text-black "
              >
                <FaGithub size={19} />
              </button>
            </div>
          </div>
              </div>

              {/* Other Resources */}
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {currentYear}{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notus JS
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

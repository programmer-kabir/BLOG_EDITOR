import React from "react";
import BannerImage from "../../../assets/Banner/web-development-and-coding-software-ui-ux-kit-vector-42114272.jpg";
import "./Banner.css";
// import Collection from "../Collection/Collection";
const Banner = () => {
  return (
    <section className="relative">
      <div className="">
        <img
          className="h-[250px] md:h-[500px] w-full object-fill"
          src={BannerImage}
          alt=""
        />
      </div>

      <div className="absolute left-0 inset-0 flex flex-col justify-center items-start space-y-2 md:space-y-4 md:pl-20 pl-5">
        <div className="space-y-1 text-white ">
          <p className="capitalize text-white text-sm md:text-base font-medium">
            Inroducing
          </p>
          <h2 className=" text-xl lg:text-5xl font-semibold">
            NEW FACETS IN <br />A NEW WRAPPER
          </h2>
          <h2 className=" text-base lg:text-xl ">
            Blog post  &<br />Blog Editor Design
          </h2>
          <button className="px-8 bannerButton py-2 bg-[#f50400] text-white font-semibold text-xl">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

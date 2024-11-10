import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BannerImage from "../../../assets/Banner/Green Minimalist Blog Post Linkedin Article Cover (1).png";
import BannerImage1 from "../../../assets/Banner/Green Minimalist Blog Post Linkedin Article Cover.png";
import BannerImage2 from "../../../assets/Banner/happy-programmers-day-banner-modern-style_541170-3193.png";
import "./Banner.css";


const Banner = () => {
  return (
    <section className="relative">
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img
            className="h-[200px] rounded-md md:h-[450px] w-full object-fill"
            src={BannerImage1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[200px] md:h-[450px] w-full object-fill"
            src={BannerImage}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[200px] md:h-[450px] w-full object-fill"
            src={BannerImage2}
            alt=""
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Banner;

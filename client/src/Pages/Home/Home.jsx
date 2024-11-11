import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import InfoCard from "../../Components/Home/InfoCard/InfoCard";
import BlogCategory from "../../Components/Home/BlogCategory/BlogCategory";
import PopularBlog from "../../Components/Home/PopularBlog/PopularBlog";
import Newsletter from "../../Components/Home/Newsletter/Newsletter";
import CompanyInfo from "../../Components/Home/CompanyInfo/CompanyInfo";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <div className="w-[90%] md:w-[95%] mx-auto">
        <InfoCard />
      <BlogCategory />
      <PopularBlog />
      <Newsletter />
      <CompanyInfo />
      </div>
    </div>
  );
};

export default Home;

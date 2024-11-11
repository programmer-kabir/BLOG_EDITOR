import React from "react";
import BlogCard from "../../Design/BlogCard";
const data = [
  {
    image: "https://i.ibb.co/b2gzYjy/Designer-3.png",
    title: "The Importance of Staying Active: A Guide to Fitness",
    category: "programming",
    introduction:
      "In today's fast-paced world, staying active has become more important than ever. With the rise of sedentary lifestyles, it's crucial to prioritize physical health in our daily routines. This blog post will explore the importance of staying active, the benefits of regular exercise, and some simple steps to incorporate more movement into your day.",
    content: [
        {
            
        }
    ],
  },
];
const PopularBlog = () => {
  return (
    <section className="  mx-auto ">
      <h2 className="capitalize text-white text-xl md:text-2xl lg:text-2xl font-bold text-center mb-6">
        Popular Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4">
        <BlogCard />
      </div>
    </section>
  );
};

export default PopularBlog;

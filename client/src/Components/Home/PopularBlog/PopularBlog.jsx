import React, { useEffect } from "react";
import BlogCard from "../../Design/BlogCard";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../Pages/Redux/Blogs/blogSlice";

const PopularBlog = () => {
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const blogsWithLikes = Blogs.filter((data) => data.like.count > 0);
  const sortedBlogs = blogsWithLikes.sort((a, b) => b.like.count - a.like.count);
  const topBlogs = sortedBlogs.slice(0, 7);
  return (
    <section className="  mx-auto ">
      <h2 className="capitalize text-white text-xl md:text-2xl lg:text-2xl font-bold text-center mb-6">
        Popular Blogs
      </h2>
<div  className="flex flex-col items-center ">
      <div className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sortedBlogs.map((data) => (
          <BlogCard key={data._id} data={data} />
        ))}
      </div>
      <button className="flex items-center justify-center gap-1 rounded font-medium bg-[#F50400] px-5 py-2 text-white transition-all duration-300 ease-in-out group">
        View All
        <IoMdArrowDropright
          size={25}
          className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
        />
      </button></div>
    </section>
  );
};

export default PopularBlog;

import React, { useEffect } from "react";
import useAuth from "../../../Components/Hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchBloggerBlogs } from "../../Redux/BloggerBlogs/bloggerBlogSlice";
import BlogCard from "../../../Components/Design/BlogCard";
import AllBlogCard from "../../../Components/Dashboard/AllBlogCard";

const ShowBlog = () => {
  const { user } = useAuth();
  // console.log(user.email);
  const dispatch = useDispatch();
  const { isBloggerBlogLoading, BloggerBlog, isBloggerBlogError } = useSelector(
    (state) => state.BloggerBlog
  );
  useEffect(() => {
    dispatch(fetchBloggerBlogs(user.email));
  }, []);

  return (
    <section className="w-[95%] mx-auto py-10">
      <h2 className="text xl md:text-3xl font-semibold text-center mb-4">
        All Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {BloggerBlog.map((blog) => (
          <AllBlogCard link={`../blogger/blog-details/${blog._id}`} key={blog._id} data={blog} />
        ))}
      </div>
    </section>
  );
};

export default ShowBlog;

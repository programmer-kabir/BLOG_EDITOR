import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Pages/Redux/Blogs/blogSlice";
import BlogCard from "../Design/BlogCard";
import { AiOutlineExclamation, AiOutlineExclamationCircle } from "react-icons/ai";
const Blog = () => {
  const { name } = useParams();
  // console.log(name);

  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, name]);
  const filteredBlogs = Blogs.filter((blog) => blog.status === "approved");
  const updateData = filteredBlogs.filter((sa) => sa.category === name);
  // console.log(filteredBlogs);
  const blogsToDisplay = name ? updateData : filteredBlogs;

  // console.log(blogsToDisplay);
  //  console.log(data);
  return (
    <section className="px-5">
      {/* Breadcumbs */}
      <div className="flex items-center pt-5 gap-1 text-sm">
        <Link to="/" className="text-gray-500">
          Home
        </Link>
        <BsSlashLg />
        <Link to="/blogs" className="text-gray-500">
          Blogs
        </Link>
        <BsSlashLg />
        <p>category</p>
        <BsSlashLg />
        <p>{name}</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-7 pt-7 px-0 md:px-5">
        {/* Check if there are any blogs to display */}
        {blogsToDisplay.length === 0 ? (
          <div className="flex items-center justify-center col-span-3 my-auto ">
          <p className="flex items-center gap-3 border p-3 rounded-md text-center m-auto text-gray-500">
            <AiOutlineExclamationCircle /> No blogs available
          </p>
        </div>
        ) : (
          blogsToDisplay.map((data) => (
            <BlogCard
              link={`/blogs/details/${data._id}`}
              key={data._id}
              data={data}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Blog;

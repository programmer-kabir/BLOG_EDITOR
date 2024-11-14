import React, { useEffect } from "react";
import { LuBook } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { fetchBloggerBlogs } from "../../Redux/BloggerBlogs/bloggerBlogSlice";
import useAuth from "../../../Components/Hooks/useAuth";
const Blogger = () => {
  const { user } = useAuth();
  // console.log(user.email);
  const dispatch = useDispatch();
  const { isBloggerBlogLoading, BloggerBlog, isBloggerBlogError } = useSelector(
    (state) => state.BloggerBlog
  );
  useEffect(() => {
    dispatch(fetchBloggerBlogs(user.email));
  }, [dispatch]);
  const approvedBlogs = BloggerBlog.filter(blog =>blog.status === 'approved')
  const pendingBlogs = BloggerBlog.filter(blog =>blog.status === 'pending')
  const rejectBlogs = BloggerBlog.filter(blog =>blog.status === 'reject')
  // console.log(approvedBlogs);
  return (
    <section className="w-[95%] mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* First */}
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{BloggerBlog.length}</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Approve Blogs            </h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{approvedBlogs.length}</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Pending Blogs
            </h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{pendingBlogs.length}</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Reject Blogs</h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{rejectBlogs.length}</h2>
        </div>
      </div>
    </section>
  );
};

export default Blogger;

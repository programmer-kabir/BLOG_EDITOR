import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Pages/Redux/Blogs/blogSlice";

const DetailsBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );

  // Dispatch fetchBlogs when the component mounts
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Ensure Blogs is populated before trying to find a specific blog
  const currentBlog = Blogs && Blogs.length > 0 ? Blogs.find((blog) => blog._id === Number(id)) : null;
console.log(currentBlog,id);
  if (isBlogLoading) {
    return <div>Loading...</div>;
  }

  if (isBlogError) {
    return <div>Error loading blogs</div>;
  }

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="px-5">
      <div className="flex items-center pt-5 gap-1 text-sm">
        <Link to="/" className="text-gray-500">
          Home
        </Link>
        <BsSlashLg />
        <Link to="/blogs" className="text-gray-500">
          Blogs
        </Link>
        <BsSlashLg />
        <p>Details</p>
      </div>

      <div className=" border mt-7">
        {/* Ensure the image is displayed */}
        <img src={currentBlog.image} alt={currentBlog.title} className="w-full h-[500px] object-fill rounded-t" />
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default DetailsBlog;

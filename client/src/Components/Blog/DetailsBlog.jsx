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
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, name]);
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
      <div className="pt-5">
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default DetailsBlog;

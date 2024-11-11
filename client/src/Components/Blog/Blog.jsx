import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Pages/Redux/Blogs/blogSlice";
const Blog = () => {
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(Blogs);
  return <div>Blog</div>;
};

export default Blog;

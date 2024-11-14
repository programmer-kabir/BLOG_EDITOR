import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Pages/Redux/Blogs/blogSlice";
import BlogCard from "../Design/BlogCard";
const Blog = () => {
  const { name } = useParams();
  // console.log(name);
  if (name === "technologies") {
    name;
  }
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, name]);
  const FilterData = Blogs.filter((blog) => {
    if (name === "technologies") {
      return blog.category === "technology";
    } else if (name === "travels") {
      return blog.category === "travel";
    } else if (name === "educations") {
      return blog.category === "education";
    } else if (name === "lifestyles") {
      return blog.category === "lifestyle";
    } else if (name === "fashions") {
      return blog.category === "fashion";
    } else if (name === "foods") {
      return blog.category === "food";
    } else {
      return blog.category === name; // General filter for other categories
    }
  });
  const blogsToDisplay = FilterData.length > 0 ? FilterData : Blogs;

  //  console.log(data);
  return (
    <section className="px-5">
      {/* Breadcumbs */}
<div className="flex items-center pt-5 gap-1 text-sm">
<Link to='/' className="text-gray-500">Home</Link>
<BsSlashLg />
<Link to='/blogs' className="text-gray-500">Blogs</Link>
<BsSlashLg />
<p>category</p>
<BsSlashLg />
<p>{name}</p>
</div>
<div className="grid lg:grid-cols-3 gap-7 pt-7 px-5" >

      {blogsToDisplay .map((data) => (
        <BlogCard key={data._id} data={data} />
      ))}
</div>
    </section>
  );
};

export default Blog;

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Pages/Redux/Blogs/blogSlice";
import BlogCard from "../Design/BlogCard";
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
  const filteredBlogs = Blogs.filter(blog =>blog.status !== "reject")
const updateData = filteredBlogs.filter(sa => sa.category === name)
  // console.log(filteredBlogs);
  const blogsToDisplay = name ? updateData : filteredBlogs;

// console.log(blogsToDisplay);
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
<div className="grid lg:grid-cols-3 gap-7 pt-7 px-5">
  {/* Check if there are any blogs to display */}
  {blogsToDisplay.length === 0 ? (
    <p className="col-span-3 text-center text-gray-500">No blogs available</p>
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

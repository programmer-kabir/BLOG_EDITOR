import React, { useEffect } from 'react'
import useAuth from '../../../Components/Hooks/useAuth'
import { useDispatch, useSelector } from "react-redux";
import { fetchBloggerBlogs } from '../../Redux/BloggerBlogs/bloggerBlogSlice';

const ShowBlog = () => {
const {user} = useAuth()
console.log(user.email);
const dispatch = useDispatch()
const {
    isBloggerBlogLoading,
    BloggerBlog,
    isBloggerBlogError,
  } = useSelector((state) => state.BloggerBlog);
  useEffect(()=>{
dispatch(fetchBloggerBlogs(user.email))
  },[])
  console.log(BloggerBlog);
  return (
    <section className="w-[95%] mx-auto py-10"> 
    <h2 className='text xl md:text-3xl font-semibold text-center mb-4'>All Blogs</h2>
    </section>
  )
}

export default ShowBlog
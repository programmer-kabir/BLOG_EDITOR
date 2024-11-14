import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../Redux/Blogs/blogSlice';
import { LuBook } from 'react-icons/lu';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
const AdminBoard = () => {
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const approvedBlogs = Blogs.filter(blog =>blog.status === 'approved')
  const pendingBlogs = Blogs.filter(blog =>blog.status === 'pending')
  const rejectBlogs = Blogs.filter(blog =>blog.status === 'reject')
  return (
    <section className="w-[95%] mx-auto pt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* First */}
      <div className="border p-5 rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
          <LuBook  color="#F50400 "/>
        </div>
        <h2 className="pt-2 text-2xl font-semibold">{Blogs.length}</h2>
      </div>
      <div className="border p-5 rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h2 className=" text-gray-800 text-sm ">Approve Blogs            </h2>
          <IoCheckmarkDoneOutline  color="#F50400" size={19}/>
        </div>
        <h2 className="pt-2 text-2xl font-semibold">{approvedBlogs.length}</h2>
      </div>
      <div className="border p-5 rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h2 className=" text-gray-800 text-sm ">Pending Blogs
          </h2>
          <MdOutlinePending  color="#F50400 " size={19}/>
        </div>
        <h2 className="pt-2 text-2xl font-semibold">{pendingBlogs.length}</h2>
      </div>
      <div className="border p-5 rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h2 className=" text-gray-800 text-sm ">Reject Blogs</h2>
          <FcCancel  color="#F50400 " size={20}/>
        </div>
        <h2 className="pt-2 text-2xl font-semibold">{rejectBlogs.length}</h2>
      </div>
    </div>
  </section>
  )
}

export default AdminBoard
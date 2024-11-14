import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/Blogs/blogSlice";
import { formatDate } from "../../../Components/DateFomate/DateFormate";
import { BsThreeDots } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";

const AdminBlogs = () => {
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch,Blogs]);

  // State to handle dropdown and reject modal visibility
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleApprove = (blogId) => {
    setActiveDropdown(null);
    const data={blogId,status:"approved"}
    console.log(data);
   axios.put("http://localhost:3000/blogs",data)
    .then(response =>{
      console.log(response.data);
      if(response.data.modifiedCount===1){
        toast.success("Blog is Approved")
      }
    })
  };

  const handleReject = (blogId) => {
    setActiveDropdown(null);

    setSelectedBlog(blogId);
    
    setShowRejectModal(true);
  };

  const handleRejectSubmit = () => {
    console.log("Reason for rejection:", rejectReason);
    setShowRejectModal(false);
    const data={blogId:selectedBlog,status:"reject",rejectReason}
    console.log(data);
    axios.put("http://localhost:3000/blogs",data)
    .then(response =>{
      console.log(response.data);
      if(response.data.modifiedCount===1){
        toast.success("Blog is Reject and Notes Submit")
      }
    })
    // toast.error("Blog Rejected");
   
  };

  return (
    <section className="pt-10">
      <div className="w-[95%] mx-auto">
        <h2 className="text xl md:text-3xl font-semibold text-center mb-4">
          All Blogs
        </h2>
        <div className="relative overflow-x-auto border-t border-l border-r rounded">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-[#737373] uppercase bg-gray-50 border-b">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">Image</th>
                <th scope="col" className="px-6 py-3 font-medium">Email</th>
                <th scope="col" className="px-6 py-3 font-medium">Category</th>
                <th scope="col" className="px-6 py-3 font-medium">Title</th>
                <th scope="col" className="px-6 py-3 font-medium">Published Status</th>
                <th scope="col" className="px-6 py-3 font-medium">Created At</th>
                <th scope="col" className="px-6 py-3 font-medium">Change Status</th>
              </tr>
            </thead>
            <tbody>
              {Blogs.map((blog) => (
                <tr key={blog._id} className="bg-white border-b">
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-md" src={blog.photo} alt="" />
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                    {blog.email}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                    {blog.category}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                    <button className="bg-[#F50400] px-4 py-1 rounded-full text-white">
                      {blog.status}
                    </button>
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                    {formatDate(blog.date)}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap relative">
                    <BsThreeDots
                      className="cursor-pointer"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === blog._id ? null : blog._id)
                      }
                    />
                    {activeDropdown === blog._id && (
                      <div className="absolute right-16 mt-1 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleApprove(blog._id)}
                        >
                          Approve
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleReject(blog._id)}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Reject Reason</h2>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg outline-none"
              rows="4"
              placeholder="Enter rejection reason..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowRejectModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleRejectSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminBlogs;

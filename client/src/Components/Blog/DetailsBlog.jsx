import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Pages/Redux/Blogs/blogSlice";
import {
  FaBookmark,
  FaComment,
  FaCopy,
  FaFacebook,
  FaLinkedin,
  FaPlus,
  FaRegComment,
  FaShareAlt,
} from "react-icons/fa";
import { BiSolidLike, BiSolidShareAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import useAuth from "../Hooks/useAuth";
import Loader from "../Loader/Loader";
import axios from "axios";

const DetailsBlog = () => {
  const { id } = useParams();
  const {user} = useAuth()
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );

  // Dispatch fetchBlogs when the component mounts
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Ensure Blogs is populated before trying to find a specific blog
  const currentBlog =
    Blogs && Blogs.length > 0 ? Blogs.find((blog) => blog._id === id) : null;
  // Comment
  const [isCommentModal, setIsCommentModal] = useState(false);
  const toggleCommentModal = () => {
    setIsCommentModal(!isCommentModal);
  };
  // Share
  const [isShareModal, setIsShareModal] = useState(false);
  const toggleShareModal = () => {
    setIsShareModal(!isShareModal);
  };
  if (isBlogLoading) {
    return <Loader />
  }

  if (isBlogError) {
    return <Loader />
  }

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }
const handleLike = (id) =>{
  console.log(id);
  const data = {
    email:user.email,
    id,
    like : 1
  }
  axios.put('http://localhost:3000/blogs',data)
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

      <div className=" border mt-7 rounded">
        {/* Ensure the image is displayed */}
        <img
          src={currentBlog?.photo}
          alt={currentBlog?.title}
          className="w-full h-[500px] object-fill rounded-t"
        />
        {/* Header */}
        <div className="pt-5 flex items-center justify-between border-b px-5 py-2">
          <img
            className="h-11 w-11 rounded-full"
            src="https://i.ibb.co/ZgTm450/newuser-02.jpg"
            alt=""
          />
          <p>October 29th 2024</p>
        </div>
        {/* Content */} 
        <div className="space-y-5 px-5">
        <h2 className="md:text-md text-xl   font-semibold">
          {currentBlog?.title}
        </h2>
        <p className="text-xl font-semibold">
          Category:{" "}
          <span className="text-base font-normal">{currentBlog.category}</span>
        </p>
        <div />
        <p className=" border-b pb-5"  dangerouslySetInnerHTML={{ __html: currentBlog?.content }}>
        </p>
        </div>
        {/* Button */}
        <div className="my-4 px-5 flex items-center justify-center gap-4">
          {/*  */}

          <button onClick={()=>handleLike(currentBlog._id)} className="flex items-center gap-1">
            <BiSolidLike size={22} /> {currentBlog.like}
          </button>
          <button
            onClick={toggleCommentModal}
            className="flex items-center gap-1"
          >
            <FaComment size={22} /> {currentBlog.like}
          </button>
          <button onClick={toggleShareModal}>
            <BiSolidShareAlt size={25} color="#000" />
          </button>
          <FaBookmark size={20} color="#000" />
          {(isCommentModal || isShareModal) && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => {
                setIsCommentModal(false);
                setIsShareModal(false);
              }}
            ></div>
          )}
          {/* Comment Modal */}
          {isCommentModal && (
            <div className="fixed top-1/2 w-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white  rounded-lg shadow-lg z-50">
              <h2 className="text-xl font-semibold mb-3  ">Comment</h2>
              <div className="flex flex-col items-end">
                <input
                  type="text"
                  name=""
                  className="outline-none border border-gray-300 px-4 rounded py-2 w-full"
                  placeholder="Enter Your Comment"
                  id=""
                />
                <button
                  className="mt-2 flex items-center justify-end bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={toggleCommentModal}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {/* Share Modal */}
          {isShareModal && (
            <div className="fixed top-1/2 w-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white  rounded-lg shadow-lg z-50">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-3  ">
                  Share Social Media
                </h2>
                <button onClick={toggleShareModal}>
                  <FaPlus className="rotate-45" />
                </button>
              </div>
              <div className="flex  items-center justify-center gap-5">
                <RiWhatsappFill color="#25D366" size={35} />
                <FaFacebook color="#316FF6" size={32} />
                <FaLinkedin color="#0077B5" size={30} />
                <FaCopy size={23} color="#000" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsBlog;

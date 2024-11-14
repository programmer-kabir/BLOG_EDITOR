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

const DetailsBlog = () => {
  const { id } = useParams();
  console.log(id);
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
    Blogs && Blogs.length > 0
      ? Blogs.find((blog) => blog._id === id)
      : null;
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

      <div className=" border mt-7 rounded">
        {/* Ensure the image is displayed */}
        <img
          src={currentBlog.image}
          alt={currentBlog.title}
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
        <p className="text-xl font-semibold mt-5 px-5 ">
          Category:{" "}
          <span className="text-base font-normal">{currentBlog.category}</span>
        </p>
        <p className="mt-5 px-5 border-b pb-5">
          Why React is the Best Choice for Modern Web Development In the world
          of front-end development, choosing the right framework can
          significantly impact the success of your project. With numerous
          options available, React has emerged as a leading choice among
          developers and businesses alike. This post explores why React is the
          preferred framework for building scalable, efficient, and modern web
          applications. 1. What is React? React is an open-source JavaScript
          library developed by Facebook for building user interfaces. It focuses
          on creating reusable UI components, making development faster and more
          efficient. Initially released in 2013, React has gained widespread
          adoption due to its simplicity and flexibility. 2. Key Features of
          React a. Component-Based Architecture React allows you to break down
          your UI into independent, reusable components, making your code more
          modular and easier to maintain. For instance, you can create separate
          components for buttons, forms, and navigation bars, each with its own
          logic and styling. b. Virtual DOM The Virtual DOM is a lightweight
          copy of the actual DOM. React uses this to optimize rendering by
          updating only the parts of the DOM that have changed, resulting in
          faster performance. c. JSX Syntax React uses JSX (JavaScript XML)
          syntax, which allows you to write HTML code directly within
          JavaScript. This makes your code more readable and easier to debug. d.
          React Hooks Introduced in React 16.8, hooks like useState and
          useEffect allow you to manage state and side effects in functional
          components. This means you no longer need to rely solely on
          class-based components for complex logic. 6. Conclusion React is more
          than just a trend in front-end development; it’s a powerful tool that
          continues to evolve with the industry. Its component-based
          architecture, performance optimizations, and vast ecosystem make it
          the best choice for modern web development. Whether you’re building a
          small website or a large-scale application, React can help you create
          efficient, scalable, and user-friendly solutions. So why wait? Dive
          into the world of React and unlock the potential of your next project.
        </p>
        {/* Button */}
        <div className="my-4 px-5 flex items-center justify-center gap-4">
          {/*  */}

          <button className="flex items-center gap-1">
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
              <button onClick={toggleShareModal}><FaPlus className="rotate-45"/></button>
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

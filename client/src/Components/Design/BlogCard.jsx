import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaBookmark, FaCopy, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
const BlogCard = ({ data,link }) => {
  return (
    // <Link to={`details/${data._id}`}>
    <Link to={link}>

      <div className="block rounded-md border border-gray-300 shadow-sm hover:shadow-md shadow-indigo-100">
        <img
          alt=""
          src={data.photo}
          className="h-56 w-full rounded-t-md object-cover"
        />

        <div className="mt-2 pb-7 flex flex-col justify-end">
          <div>
            {/* Heading */}
            <div className="flex items-center justify-between border-b pb-2 border-gray-300">
              <div className="flex items-center gap-2  px-2">
                <img
                  className="h-10 w-10 rounded-full "
                  src="https://i.ibb.co/ZgTm450/newuser-02.jpg"
                  alt=""
                />
                <p className="text-sm font-medium">Name</p>
              </div>

              <p className="text-sm px-2 text-gray-700">2 month age</p>
            </div>
            {/* Title */}
            <h2 className="truncate  px-2 w-full font-semibold text-xl mt-3">
              {data.title}
            </h2>
          </div>
          {/* Icons  */}
          <div className="mt-4  px-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RiWhatsappFill color="#25D366" size={22} />
              <FaFacebook color="#316FF6" size={20} />
              <FaLinkedin color="#0077B5" size={20} />
              <FaCopy size={18} color="#000"/>
              <FaBookmark size={17} color="#000" />
            </div>
            <button className="flex items-center gap-1">
              <BiSolidLike size={21}/> {data.like}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaBookmark, FaCopy, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
const BlogCard = ({ data }) => {
  console.log(data);
  return (
    <Link to={`../details/${data._id}`}>
      
      <div className="block rounded-md border border-gray-300 shadow-sm hover:shadow-md shadow-indigo-100">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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

              <p className="text-sm px-2">2 month age</p>
            </div>
            {/* Title */}
            <h2 className="truncate  px-2 w-full font-semibold text-xl mt-3">
              {data.title}
            </h2>
          </div>
          {/* Icons  */}
          <div className="mt-4  px-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RiWhatsappFill color="#25D366" size={25} />
              <FaFacebook color="#316FF6" size={23} />
              <FaLinkedin color="#0077B5" size={23} />
              <FaCopy size={21} color="#383838"/>
              <FaBookmark size={21} color="#383838" />
            </div>
            <button className="flex items-center gap-1">
              <BiSolidLike size={22}/> {data.like}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

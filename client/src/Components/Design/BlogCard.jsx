import React, { useEffect } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaBookmark, FaCopy, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Pages/Redux/Users/userSlice";
import { calculateMonthDifference } from "../DateFomate/DateFormate";
const BlogCard = ({ data,link }) => {
  const dispatch = useDispatch();
  const { isUsersLoading, Users, isUsersError } = useSelector(
    (state) => state.Users
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const blogWriter = Users.find(user =>user.email===data.email)
  const monthDifference = calculateMonthDifference(data.date);

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
                  className="h-9 w-9 rounded-full "
                  src={blogWriter?.photo}
                  alt=""
                />
                <p className="text-sm font-medium">{blogWriter?.name}</p>
              </div>

              <p className="text-sm px-2 text-gray-700"> {monthDifference === 0
                ? "This month"
                : `${monthDifference} month${monthDifference > 1 ? "s" : ""} ago`}</p>
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
              <BiSolidLike size={21}/> {data.like.count}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

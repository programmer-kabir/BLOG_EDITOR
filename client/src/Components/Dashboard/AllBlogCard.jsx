import React, { useState, useEffect } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaBookmark, FaCopy, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import Ribbon from "../Design/Ribbon/Ribbon";
import { calculateMonthDifference } from "../DateFomate/DateFormate";

const AllBlogCard = ({ data, link }) => {
  const [rejectModal, setRejectModal] = useState(false);

  // Function to toggle the modal only if status is "reject"
  const toggleRejectModal = () => {
    if (data.status === "reject") {
      setRejectModal(!rejectModal);
    }
  };



  // Calculate the difference in months using the provided date
  const monthDifference = calculateMonthDifference(data.date);

  return (
    <div className="relative rounded-md border border-gray-300 shadow-sm hover:shadow-md shadow-indigo-100">
      <Link to={link}>
        <img
          alt=""
          src={data.photo}
          className="h-56 w-full rounded-t-md object-cover"
        />
      </Link>

      {/* Ribbon */}
      <div
        onClick={toggleRejectModal}
        className="absolute cursor-pointer top-2 -left-[10px]"
      >
        <Ribbon status={data.status} />
      </div>

      <div className="mt-2 pb-7 flex flex-col justify-end">
        <div>
          {/* Heading */}
          <div className="flex items-center justify-between border-b pb-2 border-gray-300">
            <div className="flex items-center gap-2 px-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co/ZgTm450/newuser-02.jpg"
                alt=""
              />
              <p className="text-sm font-medium">Name</p>
            </div>

            {/* Display the difference in months */}
            <p className="text-sm px-2 text-gray-700">
              {monthDifference === 0
                ? "This month"
                : `${monthDifference} month${monthDifference > 1 ? "s" : ""} ago`}
            </p>
          </div>

          {/* Title */}
          <h2 className="truncate px-2 w-full font-semibold text-xl mt-3">
            {data.title}
          </h2>
        </div>

        {/* Icons */}
        <div className="mt-4 px-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RiWhatsappFill color="#25D366" size={22} />
            <FaFacebook color="#316FF6" size={20} />
            <FaLinkedin color="#0077B5" size={20} />
            <FaCopy size={18} color="#000" />
            <FaBookmark size={17} color="#000" />
          </div>
          <button className="flex items-center gap-1">
            <BiSolidLike size={21} /> {data.like}
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {rejectModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setRejectModal(false)}
        ></div>
      )}

      {/* Reject Comment Modal */}
      {rejectModal && (
        <div className="fixed top-1/2 w-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg z-50">
          <h2 className="text-xl font-semibold mb-3">Reject Reason</h2>
          <div className="flex flex-col">
            <p className="text-start text-[#F50400]">
             {data.rejectReason}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={toggleRejectModal}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogCard;

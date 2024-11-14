import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/Users/userSlice";
import Swal from "sweetalert2";
import { formatDate } from "../../../Components/DateFomate/DateFormate";
import axios from "axios";
// import toast form 'react-hot-toast'
import toast from 'react-hot-toast'

const AllBloggers = () => {
  const dispatch = useDispatch();
  const { isUsersLoading, Users, isUsersError } = useSelector(
    (state) => state.Users
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch,Users]);

  const bloggers = Users.filter((user) => user.role === "blogger");
  const handleDelete = (email) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: "Are you sure you want to delete this item? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        console.log(email);
        axios.delete(`http://localhost:3000/users/${email}`)
        .then(res=>{
          console.log(res.data);
          toast.success(res.data.message)
        })
      }
    });
  };
  return (
    <section className="pt-10">
      <div className="w-[95%] mx-auto">
        <div className="relative overflow-x-auto border-t border-l border-r rounded">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-[#737373] uppercase bg-gray-50 border-b">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Contact Number
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bloggers.map((user) => (
                <tr key={user._id} className="bg-white border-b">
                  <td
                    scope="row"
                    className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap "
                  >
                    <img
                      className="w-10 h-10 rounded-md"
                      src={user.photo}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap ">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap ">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap ">
                    {user.number}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap ">
                    {formatDate(user.date)}
                  </td>
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap ">
                    <button onClick={()=>handleDelete(user.email)} className="px-3 py-2 border  rounded-md hover:bg-[#f3f3f3]">
                       
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllBloggers;

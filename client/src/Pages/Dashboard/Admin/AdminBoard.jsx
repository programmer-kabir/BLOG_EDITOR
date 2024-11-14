import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/Blogs/blogSlice";
import { LuBook } from "react-icons/lu";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// const AdminBoard = () => {
//   const dispatch = useDispatch();
//   const { isBlogLoading, Blogs, isBlogError } = useSelector(
//     (state) => state.Blogs
//   );
//   useEffect(() => {
//     dispatch(fetchBlogs());
//   }, [dispatch]);
//   const approvedBlogs = Blogs.filter((blog) => blog.status === "approved");
//   const pendingBlogs = Blogs.filter((blog) => blog.status === "pending");
//   const rejectBlogs = Blogs.filter((blog) => blog.status === "reject");
//   const dynamicData = [];
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   months.forEach((month) => {
//     const ordersInMonth = Blogs.filter((blog) => {
//       // Convert date string to Date object
//       const orderDate = new Date(blog.date); // Adjust this based on the order data structure

//       // Check if the month matches the current one
//       return orderDate.getMonth() === months.indexOf(month);
//     });

//     // Add month data to dynamicData
//     dynamicData.push({
//       name: month,
//       uv: ordersInMonth.length, // `uv` represents the number of blogs in this month
//     });
//   });
//   console.log(dynamicData); // Check if dynamicData has values

//   return (
//     <section className="w-[95%] mx-auto pt-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* First */}
//         <div className="border p-5 rounded-lg">
//           <div className="flex items-center justify-between w-full">
//             <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
//             <LuBook color="#F50400 " />
//           </div>
//           <h2 className="pt-2 text-2xl font-semibold">{Blogs.length}</h2>
//         </div>
//         <div className="border p-5 rounded-lg">
//           <div className="flex items-center justify-between w-full">
//             <h2 className=" text-gray-800 text-sm ">Approve Blogs </h2>
//             <IoCheckmarkDoneOutline color="#F50400" size={19} />
//           </div>
//           <h2 className="pt-2 text-2xl font-semibold">
//             {approvedBlogs.length}
//           </h2>
//         </div>
//         <div className="border p-5 rounded-lg">
//           <div className="flex items-center justify-between w-full">
//             <h2 className=" text-gray-800 text-sm ">Pending Blogs</h2>
//             <MdOutlinePending color="#F50400 " size={19} />
//           </div>
//           <h2 className="pt-2 text-2xl font-semibold">{pendingBlogs.length}</h2>
//         </div>
//         <div className="border p-5 rounded-lg">
//           <div className="flex items-center justify-between w-full">
//             <h2 className=" text-gray-800 text-sm ">Reject Blogs</h2>
//             <FcCancel color="#F50400 " size={20} />
//           </div>
//           <h2 className="pt-2 text-2xl font-semibold">{rejectBlogs.length}</h2>
//         </div>
//       </div>
//       {/*  */}
//       <ResponsiveContainer width="100%" height="100%">
//         <ComposedChart
//           data={dynamicData} // Use dynamicData
//           margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis dataKey="name" scale="band" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="uv" barSize={20} fill="#413ea0" />
//           <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </section>
//   );
// };

// export default AdminBoard;
const AdminBoard = () => {
  const dispatch = useDispatch();
  const { isBlogLoading, Blogs, isBlogError } = useSelector(
    (state) => state.Blogs
  );
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Filter blogs by status
  const approvedBlogs = Blogs.filter((blog) => blog.status === "approved");
  const pendingBlogs = Blogs.filter((blog) => blog.status === "pending");
  const rejectBlogs = Blogs.filter((blog) => blog.status === "reject");

  const staticData = [
    { name: "January", uv: 5 },
    { name: "February", uv: 8 },
    { name: "March", uv: 10 },
    { name: "April", uv: 12 },
    { name: "May", uv: 15 },
    { name: "June", uv: 18 },
    { name: "July", uv: 20 },
    { name: "August", uv: 22 },
    { name: "September", uv: 25 },
    { name: "October", uv: 28 },
    { name: "November", uv: 30 },
    { name: "December", uv: 35 }
  ];
  

  // Populate dynamicData with blog counts per month
  // months.forEach((month) => {
  //   const ordersInMonth = Blogs.filter((blog) => {
  //     const orderDate = new Date(blog.date); // Ensure valid date
  //     return orderDate.getMonth() === months.indexOf(month);
  //   });

  //   dynamicData.push({
  //     name: month,
  //     uv: ordersInMonth.length,
  //   });
  // });

  // console.log("Dynamic Data:", dynamicData); // Debugging dynamicData

  // if (dynamicData.length === 0) {
  //   return <p>No data available for the chart.</p>;
  // }

  return (
    <section className="w-[95%] mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card Components */}
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-gray-800 text-sm">Total Blogs</h2>
            <LuBook color="#F50400" />
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{Blogs.length}</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-gray-800 text-sm">Approve Blogs</h2>
            <IoCheckmarkDoneOutline color="#F50400" size={19} />
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{approvedBlogs.length}</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-gray-800 text-sm">Pending Blogs</h2>
            <MdOutlinePending color="#F50400" size={19} />
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{pendingBlogs.length}</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-gray-800 text-sm">Reject Blogs</h2>
            <FcCancel color="#F50400" size={20} />
          </div>
          <h2 className="pt-2 text-2xl font-semibold">{rejectBlogs.length}</h2>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
           data={staticData} // Use dynamicData
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
};

export default AdminBoard;

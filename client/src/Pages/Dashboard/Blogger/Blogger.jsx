import React from "react";
import { LuBook } from "react-icons/lu";
const Blogger = () => {
  return (
    <section className="w-[95%] mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* First */}
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">5</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">5</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">5</h2>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-gray-800 text-sm ">Total Blogs</h2>
            <LuBook  color="#F50400 "/>
          </div>
          <h2 className="pt-2 text-2xl font-semibold">5</h2>
        </div>
      </div>
    </section>
  );
};

export default Blogger;

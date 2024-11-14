import React from "react";
import svg from "../../assets/Error/404.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div className="error-img lg:px-80 pt-5 flex flex-col justify-center items-center ">
        <img className="w-full h-full" src={svg} alt="svg" />
       <Link to={'/'}>
       <button className="bg-[#F50400] hover:bg-[#03041C] font-medium px-10 py-3 text-white transition-colors duration-300 ease-in-out">
          Back to Home
        </button></Link>
      </div>
    </div>
  );
};

export default Error;
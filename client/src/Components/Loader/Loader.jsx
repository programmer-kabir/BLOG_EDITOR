import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Default values shown

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ScaleLoader  color="#36d7b7" />
    </div>
  );
};

export default Loader;
import React from "react";
import { BsFillSendArrowDownFill } from "react-icons/bs";
const Newsletter = () => {
  return (
    <section className="flex items-center justify-between gap-10">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold  sm:text-4xl">
          Subscribe to our newsletter
        </h1>
        <p className="mt-4 text-lg  text-gray-700">
          Stay updated with the latest articles and discussions on BlogPlex. Get
          exclusive content, insights, and engage with our community. No spam,
          just quality content.
        </p>
        <form className="space-y-3 mt-5">
          <input
            className="outline-none w-full border border-gray-300 text-base py-2 px-3 rounded-md"
            placeholder="Enter Your Name"
            type="text"
            name=""
            id=""
          />
          <input
            className="outline-none w-full border border-gray-300 text-base py-2 px-3 rounded-md"
            placeholder="Enter Your Email"
            type="email"
            name=""
            id=""
          />
          <button className="flex w-full items-center justify-center gap-4 rounded font-normal bg-[#F50400] px-5 py-2 text-white transition-all duration-300 ease-in-out">
            Subscribe <BsFillSendArrowDownFill size={15} />
          </button>
        </form>
      </div>
      {/* Right Side */}
      <div className="flex md:w-1/2">
        {/*
         */}
        <div className="flex items-start gap-3">
          <img src="https://i.ibb.co.com/dp6Yqv6/application.png" alt="" />
          <div>
            <h2 className="text-lg font-medium text-gray-900">Weekly articles</h2>
            <p className="mt-2 text-base text-gray-500">Discover new articles and discussions every week on BlogPlex. Engage with a vibrant community.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <img src="https://i.ibb.co.com/LNvkcSC/spam.png" alt="" />
          <div>
            <h2 className="text-lg font-medium text-gray-900">No spam</h2>
            <p className="mt-2 text-base text-gray-500">We value your privacy and time. Receive only the content you love without any spam.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

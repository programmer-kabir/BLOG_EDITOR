import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section className="md:flex pt-10 gap-10">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold  sm:text-4xl">
          Work with Blog Editor
        </h1>
        <p className="mt-4 text-lg  text-gray-700">
          At BlogPlex, we are committed to creating a vibrant community of
          content creators and readers. Join our team to contribute to a
          platform that reaches thousands of visitors daily, and help shape the
          future of content creation and consumption.
        </p>
      </div>

      <div className="md:w-1/2   flex flex-col md:flex-row pt-10 md:pt-0 justify-between gap-7">
        <div
          ref={elementRef}
          className="rounded-lg border w-full shadow-sm flex flex-col items-center p-4 group"
        >
          <img
            className="group-hover:scale-90 transition-all duration-75"
            src="https://i.ibb.co.com/G9zHYX2/staff.png"
            alt=""
          />
          <h2 className="mt-4 text-2xl font-semibold">
            {isVisible && (
              <CountUp start={0} end={25} duration={1} suffix=" +" />
            )}
          </h2>
          <p className="mt-2 text-base text-gray-500">Total Employees</p>
        </div>

        <div
          ref={elementRef}
          className="rounded-lg border w-full shadow-sm flex flex-col items-center p-4 group"
        >
          <img
            className="group-hover:scale-90 transition-all duration-75"
             src="https://i.ibb.co.com/fYZmZrn/audience.png"
            alt=""
          />
          <h2 className="mt-4 text-2xl font-semibold">
            {isVisible && (
              <CountUp start={0} end={1000} duration={3} suffix=" +" />
            )}
          </h2>
          <p className="mt-2 text-base text-gray-500">Total Visitors</p>
        </div>

        <div
          ref={elementRef}
          className="rounded-lg border w-full shadow-sm flex flex-col items-center p-4 group"
        >
          <img
            className="group-hover:scale-90 transition-all duration-75"
            src="https://i.ibb.co.com/NV2CprC/christmas-card.png"
            alt=""
          />
          <h2 className="mt-4 text-2xl font-semibold">
            {isVisible && (
              <CountUp start={0} end={3000} duration={4} suffix=" +" />
            )}
          </h2>
          <p className="mt-2 text-base text-gray-500">Total Subscribers</p>
        </div>
       
       
      </div>
    </section>
  );
};

export default CompanyInfo;

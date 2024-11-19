import React from "react";
import bechara1 from "../../assets/Team-Member/Andrei-M.png";
// import bechara2 from "../../assets/Team-Member/2.png";
// import bechara3 from "../../assets/Team-Member/3.png";
// import bechara4 from "../../assets/Team-Member/4.png";
const teamMembers = [
  {
    image: "https://i.ibb.co.com/0B28kqL/Saranya-B.png",
    name: "Saranya Babu",
  },
  {
    image: "https://i.ibb.co.com/cLjMNQ2/Andrei-M.png",
    name: "Andrei Mierla",
  },
  {
    image: "https://i.ibb.co.com/y8FSQFr/John.png",
    name: "John Foster",
  },
  {
    image: "https://i.ibb.co.com/Xkhr70s/Roxi-1.png",
    name: "Roxi Laza",
  },
];
const AboutUs = () => {
  return (
    <section className="w-[90%] mx-auto py-8">
      <div className="text-center">
        <h2 className="text-2xl text-[#000000] font-bold  sm:text-[26px]">
          About Us
        </h2>
        <p className="text-base mt-2 mb-2 text-[#1F2937]">
          Welcome to BloxPlex, where innovation meets creativity.
        </p>
      </div>
      {/* Content */}
      <section className="space-y-7">
        <div className="flex items-center gap-10 justify-end">
          <div className="md:w-[40%] space-y-5">
            <h2 className="text-4xl text-[#000000] font-semibold">
              Our vision
            </h2>
            <p className="text-[#1F2937] text-justify text-[17px]">
              Today less than 4% of ad clicks turn into conversions. We believe
              that personalization is the future of marketing and that every
              potential customer can engage with relevant, conversion-optimized
              landing pages after clicking on an ad.
            </p>
          </div>
          <div className="md:w-[60%] ">
            <div className="w-[550px] ml-auto">
              <img src="https://i.ibb.co.com/0YJQhKd/Group-9494.png" alt="" />
            </div>
          </div>
        </div>
        {/*  Our story*/}
        <div className="flex items-center gap-10 justify-end">
          <div className="md:w-[60%] ">
            <div className="w-[510px] mr-auto">
              <img src="https://i.ibb.co.com/DgjYD6t/Group-9805.png" alt="" />
            </div>
          </div>
          <div className="md:w-[40%] space-y-5">
            <h2 className="text-4xl text-[#000000] font-semibold">Our story</h2>
            <p className="text-[#1F2937] text-justify text-[17px]">
              From the very beginning we’ve been focused on helping teams and
              agencies increase conversions and lower the cost of customer
              acquisition. We started out empowering customers to do this by
              giving them the power to make beautiful landing pages quickly.
              From the lessons these successes taught us, we envisioned a new
              path forward for the digital advertising industry at large.
            </p>
          </div>
        </div>
        {/* Our future */}
        {/*  */}
        <div className="flex items-center gap-10 justify-end">
          <div className="md:w-[40%] space-y-5">
            <h2 className="text-4xl text-[#000000] font-semibold">
              Our future
            </h2>
            <p className="text-[#1F2937] text-justify text-[17px]">
              We enable our customers to create, personalize, and optimize
              landing pages at scale, in minutes, without a developer. With our
              unique combination of conversion expertise and advanced landing
              page technology, we’re making that world a reality.
            </p>
          </div>
          <div className="md:w-[60%] ">
            <div className="w-[550px] ml-auto">
              <img src="https://i.ibb.co.com/sm4C4vh/Group-9807.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Meet the leadership team */}
      <div className="text-center space-y-7 lg:w-[75%] mx-auto mt-20">
        <h2 className="text-4xl text-[#000000] font-semibold">
          Meet the leadership team
        </h2>
        <p className="text-[#1F2937] text-center text-[17px]">
          Built on the belief that marketers don’t have to settle for the status
          quo, our senior leadership team champion an inclusive and innovative
          culture that embraces accountability, encourages employees to think
          big, and strives to consistently make a positive impact for our
          customers, partners, and each other.
        </p>
        {/* Team Member */}
        <div className="grid grid-cols-1 lg:grid-cols-3 ga">
          {teamMembers.map((team, index) => (
            <div key={index} className="space-y-2 text-left pt-5">
              <img src={team.image} alt="" />
              <h2 className="text-2xl pt-1 text-[#000000] font-semibold">
                {team.name}
              </h2>
              <p className="text-base font-light text-[#425d87]">
                General Manager
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

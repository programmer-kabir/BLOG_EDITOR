import React from 'react'
const cardInfo = [
    {
        title:"Explore Diverse Topics",
        image:"https://i.ibb.co.com/HhWypnT/explore.png"
    },
    {
        title:"Subscribe for Updates",
        image:"https://i.ibb.co.com/GQv6MgL/subscribe.png"
    },
    {
        title:"Community Engagement",
        image:"https://i.ibb.co.com/vQs65sB/customer-engagement.png"
    },
    {
        title:"User-Friendly Interface",
        image:"https://i.ibb.co.com/SJN8xxc/share.png"
    }
]
const InfoCard = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {
            cardInfo.map(data =><div key={data.title} className="bg-[#FCA5A5] flex items-center gap-6 justify-center rounded-lg border shadow-sm p-10 hover:bg-[#FCA5A5] group">

                <div className="overflow-hidden">
                  <img
                    className="w-[40px] bg-[#FCA5A5] transform transition-transform duration-300 group-hover:scale-110"
                    src="https://i.ibb.co.com/HhWypnT/explore.png"
                    alt="Explore"
                  />
                </div>
                <h2 className="bg-[#FCA5A5] font-semibold text-gray-600">
                  Explore Diverse Topics
                </h2>
              </div>)
        }
       



    </section>
  )
}

export default InfoCard
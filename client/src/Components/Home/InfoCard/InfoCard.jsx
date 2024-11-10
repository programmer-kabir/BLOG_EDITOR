import React from 'react'
// https://i.ibb.co.com/GQv6MgL/subscribe.png
// https://i.ibb.co.com/vQs65sB/customer-engagement.png
// 
// https://i.ibb.co.com/SJN8xxc/share.png
const InfoCard = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='bg-[#FCA5A5] flex items-center gap-6 justify-center rounded-lg border  shadow-sm p-10 '>
            <img className='bg-[#FCA5A5]' src="https://i.ibb.co.com/HhWypnT/explore.png" alt="" />
            <h2 className='bg-[#FCA5A5] font-semibold text-gray-600'>Explore Diverse Topics</h2>
        </div>
    </section>
  )
}

export default InfoCard
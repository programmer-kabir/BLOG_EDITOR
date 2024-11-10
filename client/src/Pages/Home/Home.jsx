import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import InfoCard from '../../Components/Home/InfoCard/InfoCard'

const Home = () => {
  return (
    <div className='mt-[70px] w-[90%] md:w-[95%] mx-auto space-y-10'>
      <Banner />
      <InfoCard />
    </div>
  )
}

export default Home
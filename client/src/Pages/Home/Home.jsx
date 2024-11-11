import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import InfoCard from '../../Components/Home/InfoCard/InfoCard'
import BlogCategory from '../../Components/Home/BlogCategory/BlogCategory'
import PopularBlog from '../../Components/Home/PopularBlog/PopularBlog'

const Home = () => {
  return (
    <div className=' w-[90%] md:w-[95%] mx-auto space-y-10'>
      <Banner />
      <InfoCard />
      <BlogCategory />
      <PopularBlog />
    </div>
  )
}

export default Home
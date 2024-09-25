import React from 'react'
import  Hero from '../components/Hero';
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import  LatestCollection from '../components/LatestCollection';
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
    
      <NewsLetterBox/>
    </div>
  )
}

export default Home
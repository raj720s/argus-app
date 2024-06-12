import React from 'react'
import MobileAds from '../components/MobileAds'
import BreakingNews from './home/components/BreakingNews'
import MobileSponsorsAds from '@/components/header/MobileSponsorAds'

function page() {
  return (

    <div className="home-page">
      <MobileAds />
      <BreakingNews />
      <MobileSponsorsAds />

      <h1 className="text-3xl ">
        Hello world!
      </h1>
    </div>

  )
}

export default page
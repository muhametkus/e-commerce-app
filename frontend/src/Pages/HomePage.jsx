import React from 'react'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Product from '../components/Products/Products'
import Campaigns from '../components/Campaigns/Campaigns'
import Blogs from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
const HomePage = () => {
  return (
    <React.Fragment>
    <Slider/>
    <Categories/>
    <Product/>
    <Campaigns/>
    <Product/>
    <Blogs/>
    <Brands/>
    <CampaignSingle/>
    </React.Fragment>
  )
}

export default HomePage
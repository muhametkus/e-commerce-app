import React from 'react'
import Header from '../components/Layout/Header/Header'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Product from '../components/Products/Products'
import Campaigns from '../components/Campaigns/Campaigns'
import Blogs from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'
const HomePage = () => {
  return (
    <React.Fragment>
    <Header/>
    <Slider/>
    <Categories/>
    <Product/>
    <Campaigns/>
    <Product/>
    <Blogs/>
    <Brands/>
    <CampaignSingle/>
    <Footer/>
    </React.Fragment>
  )
}

export default HomePage
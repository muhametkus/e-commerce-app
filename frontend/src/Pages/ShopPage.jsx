import React from 'react'
import Header from '../components/Layout/Header/Header'
import Categories from '../components/Categories/Categories'
import Product from '../components/Products/Products'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

const ShopPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Categories/>
      <Product/>
      <CampaignSingle/>
      <Product/>
      <Footer/>
    </React.Fragment>
  )
}

export default ShopPage
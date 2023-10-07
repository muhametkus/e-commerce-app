import React from 'react'
import Header from '../components/Layout/Header/Header'
import Auth from '../components/Auth/Auth'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

const AuthPage = () => {
  return (
    <React.Fragment>
        <Header/>
        <Auth/>
        <Footer/>
    </React.Fragment>
  )
}

export default AuthPage
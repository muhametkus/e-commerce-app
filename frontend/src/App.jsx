import Categories from './components/Categories/Categories'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Product from './components/Products/Products'
import Slider from './components/Slider/Slider'
import './App.css'
import Campaigns from './components/Campaigns/Campaigns'
import Blogs from './components/Blogs/Blogs'


function App() {

  return (
    <>
    <Header/>
    <Slider/>
    <Categories/>
    <Product/>
    <Campaigns/>
    <Product/>
    <Blogs/>
    <Policy/>
    <Footer/>
    </>
  )
}

export default App

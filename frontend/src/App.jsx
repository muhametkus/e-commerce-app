import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import AuthPage from "./Pages/AuthPage";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import CartPage from "./Pages/CartPage";
import CartTotals from "./components/Cart/CartTotals";
import BlogPage from "./Pages/BlogPage";
import BlogDeatilsPage from "./Pages/BlogDeatilsPage";

function App() {
  return (
    <React.Fragment>
      <BlogDeatilsPage/>
    </React.Fragment>
  );
}

export default App;

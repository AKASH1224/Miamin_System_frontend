import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Product from "./pages/Product"; 
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import About from "./pages/About";
import Checkout from "./pages/Checkout"; // Import Checkout component
import OurPolicy from "./components/OurPolicy";
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Place-order' element={<PlaceOrder />} />
        <Route path="/About" element={<About />} /> {/* Fixed 'component' to 'element' */}
        <Route path='/checkout' element={<Checkout />} /> {/* Added route for Checkout */}
        <Route path='/products/:productId' element={<Product />} /> 
      </Routes>
      <OurPolicy/>
      <Footer />
    </div>
  );
}

export default App;

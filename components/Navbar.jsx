// components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, cart } = useContext(ShopContext);

  // Function to get cart item count
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const cartCount = getCartCount();

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/">   
        <img src={assets.logo} className='w-36' alt="Logo" /> 
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      {/* Right side of navbar */}
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />
  
        <div className="relative group">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray'>
              <p className='cursor-pointer hover:text-black'>Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>  
        </div>     
        <Link to='/cart' className="relative">
          <img src={assets.cart_icon} className='w-5' alt="Cart" />
          {cartCount > 0 && (
            <span className='absolute right-[-5px] top-[-5px] w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center'>
              {cartCount}
            </span>
          )}
        </Link>  
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer hover:text-black' />
      </div>
      {/* Sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        {/* Sidebar content */}
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
        </div>
      </div> 
    </div>
  );
}

export default Navbar;

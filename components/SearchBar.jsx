import React,{useContext,useEffect,useState  } from 'react'
import {ShopContext} from '../context/ShopContext'
import {assets} from '../assets/assets'
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location =useLocation();

    useEffect(() => {
      if (location.pathname.includes('collection') ) {
        setVisible(true);
        
      }else{
        setVisible(false)
      }
    }, [location])
    
  // when show search will be true then the below div will be shown, otherwise it will be null
    return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
     <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-5 rouded:full mx-1 my-2'>
        <input  value={search} onChange={(e) =>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm ' text="text" placeholder="Search" /> 
        <img className='w-4' src={assets.search_icon} alt=""/>
     </div>
     <img  onClick={()=>setShowSearch(false)}className='inline w-3 cursor-pointer' src={assets.cross_icon} alt=""/>
    </div>
  ): null
}

export default SearchBar
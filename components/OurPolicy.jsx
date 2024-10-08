import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center '>

        <div>
            <img src ={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt=""/>
            <p className='font-semibold'>Easy exchange</p>
            <p className='text-green-400'>We offer hassle free exchange policy</p>
        </div>
    
        

        <div>
            <img src ={assets.quality_icon} className='w-12 m-auto mb-5 ' alt=""/>
            <p className='font-semibold'>Easy exchange</p>
            <p className='text-green-400'>We offer hassle free exchange policy</p>
        </div>
         <div>
            <img src ={assets.support_img} className='w-12 m-auto mb-5 ' alt=""/>
            <p className='font-semibold'>Easy exchange</p>
            <p className='text-green-400'>We offer hassle free exchange policy</p>
        </div>

    </div>
  )
}

export default OurPolicy
import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler =((event)=>{
  event.preventDefault();
  })
  return (
    <div className="text-center">Subscribe now and get 20% off
    <p className ='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt repudiandae
        </p>
   
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 items-center gap-3 mx-auto my-6 border pl-3'>
        <input className = 'w-full sm:flex-1 outline-none ' type= 'mail '  placeholder='enter your email here'></input>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewsLetterBox
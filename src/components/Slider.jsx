"use client"

import Image from 'next/image'

import React, { useEffect, useState } from 'react'
const data = [{
  id:1,
  title:'Always Fresh always crispy always hot',
  src:'/slide1.png'
},{
  id:2,
  title:'Always Fresh always crispy always hot second slide',
  src:'/slide3.jpg'
},{
  id:3,
  title:'Always Fresh always crispy always hot third slide',
  src:'/slide2.png'
}]


const Slider = () => {
  const [curentSlide , setCurentSlide]=useState(0)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurentSlide((prev) => (prev ===data.length-1?0:prev+1)); 
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []);
  
  
  return (
    <div className='flex flex-col md:flex-row w-full h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5.5rem)] bg-gray-300  '>
      <div className='h-1/2 md:h-full flex  items-center justify-center gap-1  md:gap-8 flex-col  p-5  w-full mb-4 '>
       <h1 className='text-lg md:text-3xl lg:text-5xl p-3 font-bold text-orange-500 text-center md:text-start  uppercase  '>  {data[curentSlide].title}</h1>
       <button className='uppercase bg-blue-600 p-2  md:p-4 rounded-md  text-sm text-white md:justify-start ' >
       order 
       </button>
      </div>

      <div className='relative h-1/2 md:h-full w-full  ' >
        <Image className='object-cover' src={data[curentSlide].src} fill/>
      </div>
    </div>
  )
}

export default Slider

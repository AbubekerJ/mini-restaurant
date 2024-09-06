import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row h-[calc(100vh-3.5rem)] md:items-center md:justify-center   '>
        {/* image container */}
        <div className='relative w-full h-[40%] md:h-[70%]  md:w-[25%] shadow-md shadow-gray-300 border'>
           <Image src={'/loginBg.png'} alt='' fill />
        </div>
        {/* login container */}
        <div className='w-full h-[60%]   md:h-[70%] -500  md:w-[25%] shadow-md shadow-gray-300 border flex flex-col gap-2 md:gap-4 p-4'>
           <h1 className='font-bold text-lg'>welcome</h1>
           <p className='text-sm'>Log in to your account or creat new one using social accounts</p>
           <button className='flex gap-3 border shadow-gray-200 p-2 rounded-md py-4'>
             <Image src={'/google.png'} width={20} height={20}/>
             <h1 className='text-sm '>sign in with google</h1>
           </button>
           <button className='flex gap-3 border shadow-gray-200 p-2 rounded-md py-4'>
             <Image src={'/facebook.png'} width={20} height={20}/>
             <h1 className='text-sm '>sign in with facebook</h1>
           </button>
           <div className='flex gap-1 items-center'>
           <h1 className='text-[12px] md:text-sm'>Have a problem? </h1>
           <span className='text-[10px]  md:text-sm underline'>contact us</span>
           </div>
          
        </div>
      
    </div>
  )
}

export default page

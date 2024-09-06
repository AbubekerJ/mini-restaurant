import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
<div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-black p-4 bg h-[90vh] md:bg-[url('/offerBg.png')]">
{/* text */}
      <div className='flex flex-col gap-4'>
        <h1 className='text-center font-bold text-white text-5xl md:text-7xl'> Delicius Burger</h1>
        <p className='text-center text-sm text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum corporis </p>
      </div>
      {/* image */}
      <div className='relative w-screen h-[60vh]'>
        <Image src={'/offerProduct.png'} alt='' fill/>
      </div>
      
    </div>
  )
}

export default Offer

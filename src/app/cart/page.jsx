import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row h-[calc(100vh-3.5rem)] md:h-[calc(100vh-5.5rem)] w-full'>
        {/* products */}
        <div className='w-full h-1/2 md:h-full md:w-2/3 lg:w-1/2 overflow-y-scroll no-scrollbar p-5  lg:p-10 '>
        {/* single product */}
        <div className='flex justify-between gap-5 items-center py-3 md:py-8'>
            <div className=' relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px]'>
                 <Image src={'/temporary/p1.png'} alt='' fill className='bg-contain' />
            </div>
           
            <div className='flex flex-col text-orange-400'>
             <h1 className='font-bold text-lg'>Sicilian</h1>
             <span>Small</span>
            </div>
            <h1 className='font-bold text-orange-300'>24.50 ETB </h1>
            <h1 className='font-bold text-orange-300'>X</h1>

        </div>
        <div className='flex justify-between gap-5 items-center py-3'>
            <div className=' relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px]'>
                 <Image src={'/temporary/p1.png'} alt='' fill className='bg-contain' />
            </div>
            <div className='flex flex-col text-orange-400'>
             <h1 className='font-bold text-lg'>Sicilian</h1>
             <span>Small</span>
            </div>
            <h1 className='font-bold text-orange-300'>24.50 ETB </h1>
            <h1 className='font-bold text-orange-300'>X</h1>

        </div>
        <div className='flex justify-between gap-5 items-center py-3'>
           <div className=' relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px]'>
                 <Image src={'/temporary/p1.png'} alt='' fill className='bg-contain' />
            </div>
            <div className='flex flex-col text-orange-400'>
             <h1 className='font-bold text-lg'>Sicilian</h1>
             <span>Small</span>
            </div>
            <h1 className='font-bold text-orange-300'>24.50 ETB </h1>
            <h1 className='font-bold text-orange-300'>X</h1>

        </div>
        <div className='flex justify-between gap-5 items-center py-3'>
            <div className=' relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px]'>
                 <Image src={'/temporary/p1.png'} alt='' fill className='bg-contain' />
            </div>
            <div className='flex flex-col text-orange-400'>
             <h1 className='font-bold text-lg'>Sicilian</h1>
             <span>Small</span>
            </div>
            <h1 className='font-bold text-orange-300'>24.50 ETB </h1>
            <h1 className='font-bold text-orange-300'>X</h1>

        </div>

        </div>
        {/* price */}
        <div className='w-full h-1/2 md:w-1/3 lg:w-1/2 bg-orange-100 md:h-full p-5 lg:p-20'>
        {/* top */}
        <div className='flex justify-between  text-orange-400'>
            <h1>Subtotal(3 item)</h1>
            <h1>40 ETB</h1>
        </div>
        <div className='flex justify-between py-3 text-orange-400'>
            <h1>Service cost</h1>
            <h1>0</h1>
        </div>
        <div className='flex justify-between  text-orange-400'>
            <h1>Delivery</h1>
            <h1 className='text-green-500'>Free</h1>
        </div>
        {/* bottom */}
        <hr className='my-2 md:my-6'/>
        <div className=' flex flex-col md:gap-4'>
           <div className='flex justify-between mb-3'>
            <h1 className='uppercase  font bold text-orange-400'>Total(inc tax)</h1>
            <span className='text-orange-400 '>40 ETB</span>
           </div>
           <button className='uppercase text-white bg-blue-600 p-1 rounded self-end md:text-lg md:p-3 '>checkout</button>
        </div>

        </div>
      
    </div>
  )
}

export default page

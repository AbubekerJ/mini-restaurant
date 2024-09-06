import Price from '@/components/Price';
import { pizzas } from '@/data'
import Image from 'next/image'
import React from 'react'

const page = ({params}) => {
  const pizza = pizzas.find((pizza) => pizza.id === Number(params.id) );

  
  return (
  <div className='flex flex-col md:flex-row h-[150vh] md:h-[100vh] p-5 gap-3 lg:gap-6 lg:px-40  text-orange-400 items-center justify-center'>
    {/* image container */}
    <div className='relative w-full h-1/2 md:h-[70%] lg:h-[80%] '>
      <Image src={pizza.img} fill className='object-contain'/>
    </div>
    {/* text container */}
    <div className='h-1/2  md:h-[70%] lg:h-[80%] flex flex-col md:justify-center '>
     {/* title and desc */}
     <div className='flex flex-col gap-4 '>
      <h1 className='uppercase font-bold text-lg'>{pizza.title}</h1>
      <p className='text-sm'>{pizza.desc}</p>
     </div>
     {/* quantity */}
     <Price price={pizza.price} options={pizza.options}/>

    </div>

  </div>
  )
}

export default page

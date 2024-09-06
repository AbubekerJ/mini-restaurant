import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Catagories = () => {
  return (
    <div className='flex flex-wrap  '>
      {pizzas.map((item)=>(
        <Link  href={`/products/${item.id}`} className=' even:bg-green-100 flex flex-col justify-between p-5  relative border-r-2 border-b-2  border-blue-500 h-[60vh] w-full md:w-1/2 lg:w-1/3 group'>
           <div className='relative h-[80%]'>
           <Image src={item.img} fill/>
           </div>
          
          <div className='flex justify-between items-center '>
            <h1 className='font-bold  text-lg md:text-xl text-blue-500'>{item.title}</h1>
            <span className='group-hover:hidden font-bold'> {item.price} ETB</span>
            <button className=' hidden group-hover:block bg-orange-400 text-white p-2 text-[10px] md:text-lg md:p-3 rounded-md'>Add To Cart</button>
          </div>

        </Link>
      ))}
      
    </div>
  )
}

export default Catagories

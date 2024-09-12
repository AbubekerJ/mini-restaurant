
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const getData = async (slug)=>{
  const res  =await  fetch(`http://localhost:3000/api/products?cat=${slug}`)
  if(!res.ok){
    throw new Error("somthing went wrong")
  }

  return res.json()
}

const Catagories = async ({params}) => {

  const products = await getData(params.catagories)
  console.log(products)

  return (
  
    <div className='flex flex-wrap  '>
      {products.map((item)=>(
        <Link  href={`/products/${item.id}`} className=' even:bg-green-100 flex flex-col justify-between p-5  relative border-r-2 border-b-2  border-blue-500 h-[60vh] w-full md:w-1/2 lg:w-1/3 group'>
           <div className='relative h-[80%]'>
          {item.img &&( <Image src={item.img} fill/>)}
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

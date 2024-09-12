
import Image from 'next/image'
import React from 'react'



const getData = async ()=>{
  const res  =await  fetch(`http://localhost:3000/api/products`)
  if(!res.ok){
    throw new Error("somthing went wrong")
  }

  return res.json()
}


const Featured =async () => {
  const featuredProducts = await getData()
  console.log(featuredProducts)
  return (
    <div className='w-screen overflow-x-scroll text-blue-600'>
      {/* wrapper */}
      <div className='w-max flex gap-4  '>
        {/* single item */}
        {featuredProducts.map((item)=>(
              <div key={item.id} className=' w-screen h-[80vh] md:w-[50vw] lg:w-[33vw]  bg-gray-300 rounded-md shadow-sm   flex flex-col items-center justify-around my-3  p-4  '>
              {/* image */}
              <div className='relative flex-1 w-full'>
              <Image className='object-contain hover:rotate-180 duration-1000'  src={item.img}fill alt=''/> 
              </div>
              
              {/* text */}
              <div className='flex flex-col flex-1 items-center '>
                <h1 className='font-bold uppercase mb-3'>{item.title}</h1>
                <h2 className='text-center text-sm'>{item.desc}</h2>
                <span className='font-bold text-lg'>{item.price}</span>
                <button className='bg-blue-500 p-2 text-white rounded-md'>Add to Cart</button>
              </div>
    
            </div>

        ))}
       
  
       
  
      </div>
    </div>
  )
}

export default Featured

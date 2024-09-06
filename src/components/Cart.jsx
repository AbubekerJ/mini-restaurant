import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className='flex gap-2  items-center justify-center '>
       <Image src={'/cart.png'} width={13} height={13}/>
       <span>Cart (3)</span>
    </div>
  )
}

export default Cart

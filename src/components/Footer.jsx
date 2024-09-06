import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-3 md:px-10 items-center  border-blue-500 py-5  '>
      <Link href={'/'}  className="text-blue-600 text-lg uppercase md:text-xl ">
          <span>shi</span>
          <span className="text-orange-400">ro</span>
        </Link>
        <p className='uppercase text-xs md:text-sm '> @All right reserved</p> 
    </div>
  )
}

export default Footer

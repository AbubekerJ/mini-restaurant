'use client'

import React, { useEffect, useState } from "react";

const Price = ({ price, options }) => {
  const [select , setSelect]=useState(0)
  const [total ,setTotal]=useState(price)
  const [quantity , setQuantity]=useState(1)
  
  useEffect(()=>{
    setTotal(quantity*(options.length>0 && options?price + options[select].additionalPrice:price

    ))
  },[quantity, price ,options ,select])
  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-lg font-bold">{total} ETB</h1>
      <div className="flex gap-2 ">
        {options?.map((option ,index) => (
          <button onClick={()=>setSelect(index)} key={option.title} className={ `ring-2 ring-orange-300 p-1 md:p-2 min-w-[4rem] ${select===index?"bg-orange-400 text-white":"bg-white"} `}>{option.title}</button>
        ))}
      </div>
       {/* quantity and add to cart button */}
     
       
        {/* quantity */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between p-2  w-full ring-1 py-3 ring-orange-300 ">
          <label className="text-sm"> Quantity</label>
        <div className="flex gap-2">
          <button onClick={()=>setQuantity((prev)=>prev===1?prev:prev-1)}>{"<"} </button>
            <span>{quantity}</span>
          <button onClick={()=>setQuantity((prev)=>prev===9?prev:prev+1)}>{">"} </button>
        </div>
          </div>
       
        {/* Add to cart */}
        <button className="bg-orange-400 text-[10px] md:text-sm text-white ring-1  ring-blue-40 w-full py-4 md:py-4">Add to cart</button>
        </div>
        
      
    </div>
  );
};

export default Price;

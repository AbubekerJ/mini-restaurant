'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import {  signOut, useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";


const menues = [  {
    id:1,
    title:'Home',
    href:'/'
} ,
{
    id:1,
    title:'Menu',
    href:'/menu'
} ,{
    id:1,
    title:'Working-Houre',
    href:'/workingHoure'
} ,{
    id:1,
    title:'Contact',
    href:'/contact'
}  ]

const Menu = () => {
    const [open, setOpen] = useState(false);
    const { status } = useSession();
    const router = useRouter();
    const handleLogout =()=>{
       signOut()
       router.push('/')

    }

  return (
    <div>
            {/* MOBILE */}
         <div className="md:hidden">
          {!open ? (
            <Image
              src={"/open.png"}
              width={15}
              height={15}
              onClick={() => setOpen(true)}
            />
          ) : (
            <Image
              src={"/close.png"}
              width={15}
              height={15}
              onClick={() => setOpen(false)}
            />
          )}
         
          {open&&(
            <div className="absolute top-[4.5rem] left-0 flex flex-col gap-3 items-center justify-center bg-blue-600 w-full h-[calc(100vh-4.5rem)] uppercase text-white z-10 ">
            {menues.map((menu)=>(
              <Link href={menu.href} key={menu.id} onClick={()=>setOpen(false)} >
                    {menu.title}
              </Link>
              
            ))}
       {status==='authenticated'?(<div className="flex flex-col gap-2"> 
        <Link href={'/orders'} onClick={()=>setOpen(false)} >Orders</Link>
        <h1 onClick={handleLogout} className="uppercase cursor-pointer">logOut</h1>
       </div>
      
      ):<Link href={'/login'} onClick={()=>setOpen(false)}>Login</Link>} 

            {/* i create cart component because i am using this compnent in navbar and i dont want to make my navbar client componnt since cart is interactive */}
            <Link href={'/cart'} onClick={()=>setOpen(false)}>
            <Cart/>
            </Link>
            </div>
          )}
 
        </div>
             {/* LARGSCREEN */}
           <div className=" hidden  md:flex   justify-between items-center  gap-7 uppercase text-orange-600 ">
           {menues.map((menu)=>(
              <Link href={menu.href} key={menu.id}  >
                    {menu.title}
              </Link>
              
            ))}
       {status==='authenticated'?(<div className="flex gap-2"> 
        <Link href={'/orders'} onClick={()=>setOpen(false)} >Orders</Link>
        <h1 onClick={()=>signOut()} className="uppercase cursor-pointer">logOut</h1>
       </div>
      
      ):<Link href={'/login'} onClick={()=>setOpen(false)}>Login</Link>} 

            <Link href={'/cart'} >
            <Cart/>
            </Link>
           </div>
    </div>
   
  )
}

export default Menu

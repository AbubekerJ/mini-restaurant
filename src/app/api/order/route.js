import { GetAuthSession } from "@/utils/auth"
import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const GET =async ()=>{
    const session =await  GetAuthSession()

    if(!session){
        return new NextResponse( JSON.stringify({message:'you are not authenticated!' }), {status:401})
       }


   const user =  await prisma.User.findUnique({
    where: {
        email :session.user.email
    }
   })
  
   try {
    
    if(user.isAdmin){
    const  orders =  await prisma.Order.findMany()
     return new NextResponse(JSON.stringify(orders),{status:200})
    }

    const orders = await prisma.Order.findMany({
        where:{
            userEmail:session.user.email
        }
    })
    return new NextResponse(JSON.stringify(orders),{status:200})
   } catch (error) {
    return new NextResponse('somthing went wrong!' , {status:400})
   }
    



    
}
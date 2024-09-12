import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (request , { params }) => { //request as the first argument to access params 
  console.log('the id is'+ params.id)
    const productId  = params.id 
    
  try {
    const result = await prisma.Product.findUnique({
      where:  {id:productId} ,
    });
  
    return  new NextResponse(JSON.stringify (result), { status: 200 });  
  } catch (error) {
    return  new NextResponse(error, { status: 401 });  
  }
   
  };
  
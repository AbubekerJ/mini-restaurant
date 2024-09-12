
import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"


// FETCH ALL CATEGORIES

export const GET= async ()=>{
    const menu = await prisma.category.findMany()
   
    
    return new NextResponse(JSON.stringify( menu))
}
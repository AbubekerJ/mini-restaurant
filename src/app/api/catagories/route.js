import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

// FETCH ALL CATEGORIES

export const GET= async ()=>{
    const menu = await prisma.category.findMany()
   
    
    return new NextResponse(JSON.stringify( menu))
}
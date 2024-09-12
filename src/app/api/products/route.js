import { PrismaClient } from "@prisma/client"

import { NextResponse } from "next/server"

const prisma  = new PrismaClient()

export const GET = async (req) => {
    const url = new URL(req.url)
    const cat = url.searchParams.get('cat')
    console.log(cat) // Log the 'cat' parameter

    try {
        const product  = await prisma.product.findMany(
            {
             where:cat?{catSlug:cat}:{ isFeatured:true}
            }
           
        )
        return  new NextResponse(JSON.stringify(product))
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
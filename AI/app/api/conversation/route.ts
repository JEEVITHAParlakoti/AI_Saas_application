import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import OpenAI from "openai"



const openai = new OpenAI({
    apiKey: process.env.OPENAI_APIKEY
})

export async function POST(
    req:Request
){
    try{

        const {userId} = auth();
        const body = await req.json()

        const {messages} = body
        
        if(!userId){
            return new NextResponse("unauthorized", {status:401})
        }

        if(!messages){
            return new NextResponse("promt is required ", {status:400} )
        }

        if(!openai.apiKey){
            return new NextResponse("OpenAi key is not configured",{status:500})
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
          });


        return  NextResponse.json(response.choices[0].message)

    }catch(error:any){
        console.log("[conversation error]", error)
        return new NextResponse("internal error ", {status:500})
    }
}
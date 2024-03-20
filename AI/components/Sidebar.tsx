"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {LayoutDashboardIcon,MessageSquareIcon,ImageIcon,VideoIcon,Music2Icon,Code2Icon,SettingsIcon } from "lucide-react"
import { cn } from '@/lib/utils'
import {usePathname} from "next/navigation"

const routes = [
    {
        label:"Dashboard",
        icon: LayoutDashboardIcon,
        href: "/dashboard",
        color: "text-pink-600"
    },
    {
        label:"Conversation",
        icon: MessageSquareIcon,
        href: "/conversation",
        color: "text-pink-600"
    },
    {
        label:"Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-600"
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-pink-600"
    },
    {
        label:"Music Generation",
        icon: Music2Icon,
        href: "/music",
        color: "text-pink-600"
    },
    {
        label:"Code Generation",
        icon: Code2Icon,
        href: "/code",
        color: "text-pink-600"
    },
    {
        label:"Settings",
        icon: SettingsIcon,
        href: "/settings",
        color: "text-pink-600"
    }

]

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <div className='flex flex-col py-2 space-y-3 h-full text-white bg-[#111827]'>
        <div className='flex-1 py-3 px-3'>
            <Link href={"/dashboard"} className='flex items-center pl-3 mb'>
                <div className='w-8 h-8 mr-4 relative'>
                    <Image 
                        fill
                        alt='logo'
                        src="/logo.png"
                    />
                </div>
                <h1>GENIUS</h1>
            </Link>
            <div className='space-y-1 py-9'>
                {routes.map((route)=>(
                    <Link href={route.href} id={route.label} className={cn('text-sm group flex p-3 justify-start w-full cursor-pointer hover:bg-slate-700 hover:text-white  p-3 rounded-lg transition',
                        pathname == route.href ? "text-white bg-white/20" : "text-zinc-400"
                    )}>
                    <div className='flex flex-1 items-center'>
                        <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                        {route.label}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
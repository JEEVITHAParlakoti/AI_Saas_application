"use client"

import React from "react";
import {MessageSquare,ImageIcon,VideoIcon,Code2Icon,Music}from "lucide-react"
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {ArrowRightIcon} from "lucide-react"
import { useRouter } from "next/navigation";

const tools=[
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgcolor:"bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Image",
    icon: ImageIcon,
    color: "text-emarald-500",
    bgcolor:"bg-emarald-500/10",
    href: "/image"
  },
  {
    label: "Video",
    icon: VideoIcon,
    color: "text-pink-700",
    bgcolor:"bg-pink-700/10",
    href: "/video"
  },
  {
    label: "Code",
    icon: Code2Icon,
    color: "text-green-500",
    bgcolor:"bg-green-500/10",
    href: "/code"
  },
  {
    label: "Music",
    icon: Music,
    color: "text-red-500",
    bgcolor:"bg-red-500/10",
    href: "/music"
  }
]

const Dashboard = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=>(
          <Card 
            onClick={()=>router.push(tool.href)}
            key={tool.label}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8",tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
              
            </div>
            <ArrowRightIcon />
          </Card>
        ))}
           
      </div>
    </div>
  );
};

export default Dashboard;

"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuSquare } from "lucide-react";
import Sidebar from "./Sidebar";
import {useState,useEffect} from "react"

const MobilesideBar = () => {

    const [ismounted, setismounted] = useState(false)

    useEffect(() => {
        setismounted(true)
    }, [])

    if(!ismounted){
        return null
    }
    
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} className="md:hidden " size={"icon"}>
          <MenuSquare />
        </Button>
      </SheetTrigger>
      <SheetContent className=" p-0" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobilesideBar;

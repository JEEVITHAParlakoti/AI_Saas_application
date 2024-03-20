import React from "react";
import { Button } from "./ui/button";
import { MenuSquare } from "lucide-react";
import { UserButton } from "@clerk/nextjs/app-beta";
import MobilesideBar from "./MobilesideBar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 ">
      <MobilesideBar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
      
    </div>
  );
};

export default Navbar;

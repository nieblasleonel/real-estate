"use client"
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from '@clerk/nextjs';
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export const Header = () => {
    const path = usePathname();
    const {user, isSignedIn} = useUser();
  
    
  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white"> 
      <div className="flex gap-12 items-center">
        <Image src={"/log.png"} width={150} height={150} alt="logo" />
        <ul className="flex gap-10">
          <Link href={'/'}>
            <li className={`'hover:text-primary 
            font-medium text-sm cursor-pointer'
            ${path=='/' && 'text-primary'}`}>For Sell</li></Link>
          <Link href={'/for-rent'}><li className={`'hover:text-primary 
            font-medium text-sm cursor-pointer'
            ${path=='/for-rent' && 'text-primary'}`}>For Rent</li></Link>
          <Link href={'/agent-finder'}><li className={`'hover:text-primary 
            font-medium text-sm cursor-pointer'
            ${path=='/agent-finder' && 'text-primary'}`}>Agent Finder</li></Link>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
         <Link href={"/add-new-listing"}><Button className="flex gap-2"><Plus className="h-5 w-5"/> Post Your Ad</Button></Link>       
         {isSignedIn ? <UserButton/>: <Link href={'/sign-in'}><Button variant="outline">Log in</Button></Link>}        
      </div>
    </div>
  );
};

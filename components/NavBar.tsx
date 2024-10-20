import React from 'react'
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"
import { MenuIcon } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const NavBar = () => {
  return (
    <nav className='flex items-center h-16 bg-background/60 top-0 sticky border-b shadow-md px-8 backdrop-blur justify-between'>
        <div className='text-lg font-bold md:text-xl'>
            ProgrammingWithHarry
        </div>
        <ul className='hidden md:flex w-full justify-end space-x-4 items-center'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li className="space-x-2">
                <Link href={'/login'} className={buttonVariants({ variant: "outline" })}>Login</Link>
                <Link href={'/singup'} className={buttonVariants({ variant: "outline" })}>Sing Up</Link>
            </li>
        </ul>
        <div className="flex gap-2 items-center ml-2">
            <ModeToggle/>
            <Sheet>
            <SheetTrigger><MenuIcon className="size-8 md:hidden"/></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
        </div>
    </nav>
    
  )
}

export default NavBar
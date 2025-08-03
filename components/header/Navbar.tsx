import React from "react";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 h-14 gap-4">
      {/* logo */}
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold">
          YT <span className="text-red-500">Shorts</span>
        </h1>
      </div>

      {/* search bar */}
      <div className="flex-grow max-w-xl">
        <Input type="text" placeholder="Search ..." className="w-full" />
      </div>

      {/* icons */}
      <div className="flex items-center space-x-2">
        <Link href={'/upload'} ><Button className="cursor-pointer">
          <Plus className="mr-1" />
          Create
        </Button></Link>
        
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

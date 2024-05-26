import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Link from "next/link";
import UserAccountnav from "./userAccountnav";

export const Navbar = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <Logo />
            <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            {session?.user ? (
                <UserAccountnav />
            ) : (
                <Link className={buttonVariants()} href='/sign-in'>
                Sign in
                </Link>
            )} 
            </div>
        </div>
    </div>
  );
};

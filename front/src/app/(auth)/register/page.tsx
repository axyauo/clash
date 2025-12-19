import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[550px] bg-white rounded-lg shadow-md px-10 py-5 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Clash
        </h1>
        <h1 className="text-3xl font-bold">Register </h1>
        <p>Welcome to Clash</p>
        <form>
            <div className="mt-4 flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" name="name" placeholder="Enter your name.." />
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="Enter your email.." />
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" placeholder="Enter your password " />
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="cpassword" type="password" name="cpassword" placeholder="Enter your password again" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <Button className="w-full">Submit</Button>
            </div>
        </form>
        <p>Already have an account? <strong><Link href="login">Login</Link></strong></p>
      </div>
    </div>
  );
};

export default login;

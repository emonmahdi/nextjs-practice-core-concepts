"use client";

import DashboardLayout from "@/app/(dashboard)/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  if (pathname.includes('dashboard')) {
    return <DashboardLayout></DashboardLayout>;
  } else {
    return (
      <div className="flex justify-between items-center bg-gray-700 text-white px-8 py-4">
        <div>
          <h4 className="text-3xl">Next Logo</h4>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/recipies"}>Recipes</Link>
            </li>
            <li>
              <Link href={"/meals"}>Meals</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/profile"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Navbar;

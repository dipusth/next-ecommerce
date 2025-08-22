"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "./DropDown";
import navLinks from "@/constant/NavLink";

const Navigation = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {navLinks.map((navLink, index) => (
        <Link
          key={index}
          href={navLink.route}
          className={
            pathname === navLink.route
              ? "font-bold text-blue-500  mr-4"
              : "mr-4"
          }
        >
          {navLink.label}
        </Link>
      ))}
      <ModeToggle />
    </div>
  );
};

export default Navigation;

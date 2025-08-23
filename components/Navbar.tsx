"use client";
import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ChevronDown, ShoppingCart, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import {
  deleteActiveUser,
  getActiveUser,
  IuserType,
} from "@/utils/LocalStorage";
import { redirect, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const { cart } = useCart();
  const [activeUser, setActiveUser] = useState<IuserType>();
  const pathname = usePathname();
  console.log("pathname", pathname);

  useEffect(() => {
    const data = getActiveUser();
    // if (data == null) {
    //   redirect("/login");
    // }
    setActiveUser(data);
  }, []);

  const handleLogOut = () => {
    deleteActiveUser();
    redirect("/login");
  };
  const hasCart = cart.length;
  console.log("cart lemnth", hasCart);
  return (
    <header className="sticky top-0 bg-white z-1">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center container mx-auto max-w-screen-xl">
          <div className="flex lg:flex-1">
            <Link href={"/"} className="flex items-center">
              <Image src="/logo.png" alt="Logo" width="100" height="100" />
            </Link>

            <div className="flex items-center lg:order-2 hidden">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Register
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Navigation />
          <div className="flex gap-5 lg:flex-1 lg:justify-end items-center">
            <Link href={"/cart"} className="cart notification">
              <ShoppingCart />
              {hasCart > 0 ? (
                <span className="badge rounded-full bg-red-600">{hasCart}</span>
              ) : (
                ""
              )}
            </Link>
            <div className="user-profile flex items-center mr-2">
              <span className="circle circle-sm border-4 border-slate-200 mr-2 relative">
                {/* <Image
                    src={"/profile.jpg"}
                    alt={"Profile"}
                    fill
                    style={{ objectFit: "cover" }}
                  /> */}
                <UserRound />
              </span>
              {activeUser ? (
                <>
                  <div className=" flex flex-col">
                    <h4> {activeUser?.name}</h4>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="p-2 cursor-pointer">
                      <span className="angle-down text-slate-500">
                        {" "}
                        <ChevronDown />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="start"
                      side="left"
                      sideOffset={8}
                    >
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogOut}
                          className="cursor-pointer"
                        >
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link href={"/login"} className="cart notification">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Login } from "./login";
import useScrollDirection from "./useScrollDirection";

export default function Megabar() {
  const scrollDirection = useScrollDirection();
  const show = scrollDirection === "up";

  return (
    <Navbar
      fluid
      className={`z-50 sticky top-0 bg-[#032541] ${
        show ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300`}
    >
      <Navbar.Brand>
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="top bk logo" />
        <span className=" bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TOP BK Ltd.
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Login />
        <Button className="mx-2" gradientDuoTone="purpleToBlue">
          <Link className="text-lg" to="/register">
            Sign Up
          </Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-xl mr-2 text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="/search" className="text-xl text-white">
          About
        </Navbar.Link>
        <Navbar.Link href="/search" className="text-xl text-white">
          Searching
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl text-white">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className=" text-xl text-white">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

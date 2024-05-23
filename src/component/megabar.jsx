"use client";

import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Login } from "./login";

export default function Megabar() {
  return (
    <Navbar fluid>
      <Navbar.Brand>
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="top bk logo" />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TOP BK Ltd.
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Login />
        <Button className="mr-2" gradientDuoTone="purpleToBlue">
          <Link to="/register">Sign Up</Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-lg mr-2">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className=" text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

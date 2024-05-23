"use client";

import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import Darkmode from "./darkmode";

export function NavbarFlow() {
  return (
    <Navbar fluid>
      <Navbar.Brand>
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="top bk logo" />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TOP BK Ltd.
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className=" mr-2">
          <Darkmode />
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">FirstN LastN</span>
            <span className="block truncate text-sm font-medium">
              name@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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

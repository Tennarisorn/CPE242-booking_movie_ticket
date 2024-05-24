import React, { useState, useEffect } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import useScrollDirection from './useScrollDirection';

export function NavbarFlow() {
  const scrollDirection = useScrollDirection();
  const show = scrollDirection === 'up';

  return (
    <Navbar
      fluid
      className={`z-50 sticky top-0 bg-[#032541] ${show ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`}
    >
      <Navbar.Brand>
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="top bk logo" />
        <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TOP BK Ltd.
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className=" mr-2"></div>
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
        <Navbar.Link href="#" className="text-xl mr-2 text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl text-white">
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
};
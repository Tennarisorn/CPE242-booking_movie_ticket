import React, { useState, useEffect } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import useScrollDirection from './useScrollDirection';
import { Modal } from "flowbite-react"
import TicketList from "./ticket";
import { Link as ScrollLink } from "react-scroll";

export function NavbarFlow() {
  const scrollDirection = useScrollDirection();
    const [openModal, setOpenModal] = useState(false);
  const show = scrollDirection === 'up';

    function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <Navbar
      fluid
      className={`z-50 sticky top-0 bg-[#032541] ${
        show ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300`}
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
          <Dropdown.Item onClick={() => setOpenModal(true)}>
            Your Tickets
          </Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ScrollLink
          to="home"
          smooth={true}
          className="text-xl mr-2 text-white"
        >
          Home
        </ScrollLink>
        <ScrollLink to="product" smooth={true} className="text-xl text-white">
          Movie
        </ScrollLink>
        <ScrollLink to="search" smooth={true} className="text-xl text-white">
          Searching
        </ScrollLink>
        <ScrollLink to="member" smooth={true} className="text-xl text-white">
          Membership
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} className=" text-xl text-white">
          Contact
        </ScrollLink>
      </Navbar.Collapse>
      <Modal show={openModal} size="5xl" onClose={onCloseModal} popup>
        <Modal.Header className="bg-black" />
        <Modal.Body className=" bg-gray-100">
          <TicketList />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};
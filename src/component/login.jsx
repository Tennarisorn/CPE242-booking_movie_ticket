"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

export function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [Username, setUser] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Button
        className="mr-2"
        gradientDuoTone="pinkToOrange"
        onClick={() => setOpenModal(true)}
      >
        <span className="text-lg">Login</span>
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                placeholder="Your Username"
                value={Username}
                onChange={(event) => setUser(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                placeholder="Your Password"
              />
            </div>
            <div className="w-full">
              <Button
                onClick={() => {
                  Swal.fire({
                    title: "Loading",
                    icon: "info",
                    showConfirmButton: false,
                    timer: 1000,
                  }).then(() => {
                    // Perform any additional actions after the loading effect
                    // For example, you can submit the form or navigate to another page
                    Swal.fire({
                      title: "Success",
                      text: "Your payment was successful",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => {
                      // Redirect to another page
                      window.location.href = "/";
                    });
                  });
                }}
              >
                Log in to your account
              </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="/register"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

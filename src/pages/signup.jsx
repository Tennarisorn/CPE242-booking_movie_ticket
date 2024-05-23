import { Label, TextInput, FileInput, Button } from "flowbite-react";
import {
  HiMail,
  HiUser,
  HiCalendar,
  HiKey,
  HiCheckCircle,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function SignUp() {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img
            src="banner.svg"
            alt="banner"
            width="524.67004"
            height="531.39694"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Sign Up
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Join to Our Community with all time access and free
          </h1>
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between"></div>
          <RegisterForm />
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-orange-600 hover:underline font-bold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterForm() {
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [image, setImage] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const SaveData = (e) => {
    // Create an object to collect the data
    const formData = {
      fName: fName,
      mName: mName,
      lName: lName,
      dob: dob,
      email: email,
      username: username,
      password: password,
      image: image,
    };

    // Check if all input fields are filled
    const isFormFilled = Object.values(formData).every((value) => value !== "");

    if (isFormFilled) {
      // Save the input values here
      e.preventDefault();
      console.log(formData);
      console.log("Password Match: ", passwordMatch);
    } else {
      console.log("Please fill in all the input fields.");
    }
  };

  useEffect(() => {
    if (password === reenterPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
    console.log("Password Match: ", passwordMatch);
  }, [password, reenterPassword]);
  return (
    <form className="max-w-md p-4 rounded">
      <div className="mb-2 block">
        <Label htmlFor="fName" value="First Name" />
        <TextInput
          id="fName"
          type="text"
          icon={HiUser}
          placeholder="First Name"
          required
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />

        <Label htmlFor="mName" value="Middle Name" />
        <TextInput
          id="mName"
          type="text"
          icon={HiUser}
          placeholder="Middle Name"
          value={mName}
          onChange={(e) => setMName(e.target.value)}
        />

        <Label htmlFor="lName" value="Last Name" />
        <TextInput
          id="lName"
          type="text"
          icon={HiUser}
          placeholder="Last Name"
          required
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />

        <Label htmlFor="dob" value="Date of Birth" />
        <TextInput
          id="dob"
          type="date"
          icon={HiCalendar}
          placeholder="Date of Birth"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          type="email"
          icon={HiMail}
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && (
          <div className="text-sm text-green-500">
            <span className="font-medium">Alright!</span> Email available!
          </div>
        )}

        <Label htmlFor="username" value="Username" />
        <TextInput
          id="username"
          type="text"
          icon={HiUser}
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label htmlFor="password" value="Password" />
        <TextInput
          id="password"
          type="password"
          icon={HiKey}
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Label htmlFor="reenterPassword" value="Re-enter Password" />
        <TextInput
          id="reenterPassword"
          type="password"
          icon={HiKey}
          placeholder="Re-enter Password"
          required
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
        />

        <Label htmlFor="image" value="Image" />
        <FileInput
          id="image"
          icon={HiKey}
          placeholder="Upload Image"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <Button
          className="bg-blue-900 border-none rounded text-white cursor-pointer flex text-base py-2 w-full mt-[1rem]"
          type="submit"
          icon={HiCheckCircle}
          color="primary"
          onClick={SaveData}
          disabled={!passwordMatch}
        >
          Register
        </Button>
      </div>
    </form>
  );
}

export default SignUp;

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }
    const data = { userName, email, password };
    axios
      .post("http://localhost:3000/users/add", data)
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo bar */}
      <div className="w-full h-16 sticky top-0 bg-black flex items-center justify-center">
        <Icon icon="logos:spotify" width="130" />
      </div>

      {/* Form Container */}
      <div className="flex justify-center items-center flex-grow bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div className="flex flex-col w-full max-w-md sm:p-8 rounded-lg bg-black h-auto justify-center">
          <h1 className="text-white font-bold text-center text-2xl sm:text-4xl mb-6">
            Sign up
          </h1>
          <form className="flex flex-col items-center gap-4">
            <div className="flex flex-col w-full">
              <label className="text-white" htmlFor="userName">
                Username
              </label>
              <input
                id="userName"
                className="p-2 w-full rounded-lg"
                type="text"
                placeholder="Enter username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="p-2 w-full rounded-lg"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="p-2 w-full rounded-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                className="p-2 w-full rounded-lg"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-green-500 p-3 w-full rounded-3xl mt-6"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

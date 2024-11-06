import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async () => {
    try {
      const data = { email, password };
      const resp = await axios.post("http://localhost:3000/users/login", data);
      console.log(resp.data + " success");
      console.log(data);

      if (resp.data.success) {
        setLoggedIn(true);
        navigate("/loginhome");
      } else {
        console.log("Login failed");
        console.log(resp.data);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* logo bar */}
      <div className="flex justify-center items-center w-full h-16 sticky top-0 bg-black">
        <Icon className="" icon="logos:spotify" width="130" />
      </div>

      {/* form */}
      <div className="flex justify-center items-center w-full h-full flex-grow bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div className="flex flex-col h-auto p-6 sm:p-8 w-full max-w-md rounded-lg bg-black">
          <h1 className="text-white font-bold text-center text-3xl sm:text-4xl mb-4">
            Log in
          </h1>

          <form className="flex flex-col items-center mt-4 gap-4">
            <div className="flex flex-col w-full">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 w-full rounded-lg"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white" htmlFor="password">
                Password
              </label>
              <input
                className="p-2 w-full rounded-lg"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-green-500 p-2 w-full rounded-3xl mt-6"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              Login
            </button>

            <div className="w-full border-b border-gray-300 my-6"></div>

            <div className="text-center">
              <h2 className="text-gray-500 mb-1 text-lg">
                Don't have an account?
              </h2>
              <Link
                to="/signup"
                className="text-white hover:text-green-500 text-lg"
              >
                Sign up for Spotify
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

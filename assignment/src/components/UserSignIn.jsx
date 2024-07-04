import React from "react";
import loginImage from "../assets/LoginImage.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainpageHeader } from "./Mainpageheader";
import TestPage from "./TestPage";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const UserSignIn = ({ users }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
    if (user && user.firstName === password) {
      toast.success("Sign-in successful!");
      login();
      navigate("/test-page");
    } else {
      setError("Invalid email or password");
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="flex justify-center">
        <div className="flex max-w-screen-xl md:mt-12">
          <div className="hidden h-[529px] w-[765px] md:ml-[-200px] md:mr-10 md:inline-block">
            <img src={loginImage} alt="" />
          </div>

          <div className="mx-3 mt-5 rounded-lg border px-4 pt-4 shadow-md md:w-96">
            <div className="text-lg font-medium md:text-2xl">Login</div>
            <form className="mt-7 md:mt-10" onSubmit={handleSignIn}>
              <label htmlFor="email" className="text-sm">
                Email ID / Username
              </label>
              <input
                id="email"
                type="text"
                className="mb-2 mt-2 w-full rounded-md border border-[#c4c4c4] p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mb-3 mt-2 w-full rounded-md border border-[#c4c4c4] p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Link to="/forgot-password" className="text-sm text-[#641cc0]">
                Forgot Password?
              </Link>
              <button
                type="submit"
                className="mb-5 mt-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:mt-8 md:h-14"
              >
                Login
              </button>
              <div className="mb-8 w-full text-center text-sm font-normal text-[#4f5665] md:mb-16 md:text-base">
                <span>New User?{"  "}</span>
                <Link
                  to="/sign-up"
                  className="text-[#0d0d0e] underline underline-offset-2"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};

export default UserSignIn;

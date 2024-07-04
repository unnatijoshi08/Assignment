import React from "react";
import { MainpageHeader } from "./Mainpageheader";
import SignupImage from "../assets/SignupImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";


const UserSignup = ({addUser}) => {

  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();

  const [newUser,setNewUser]= useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "",
    password: "",
    confirmPassword: "",
  });


const handleChange=(e)=>{
    const {name,value}=e.target;
    setNewUser({...newUser,[name]:value});
}

  const handleSignUp = async (e) => {
    e.preventDefault();//To avoid page from refreshing
    addUser(newUser);
    login();
   
   
    

    navigate("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="flex justify-end">
        <div className="flex max-w-screen-lg md:mt-12 pr-8">
          <div className="hidden h-[529px] w-[765px] md:ml-[-200px] md:mr-10 md:flex ">
            <img src={SignupImage} alt="" />
          </div>

          <div className="mx-3 mt-5 rounded-lg border px-4 pt-4 md:ml-10 md:w-96 md:border-0">
            <div className="text-lg font-medium md:text-2xl">
              Sign up as a new user
            </div>
            <div>
              <div className="text-sm font-normal text-[#7e7e7e] md:text-base">
                or already registered?{" "}
                <Link to="/" className="text-[#641cc0]">
                  Login now
                </Link>
              </div>
              <form className="mt-9 md:mt-12" onSubmit={handleSignUp}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={newUser.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={newUser.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={newUser.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                  value={newUser.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-5"
                  value={newUser.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="mb-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:h-14"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};

export default UserSignup;

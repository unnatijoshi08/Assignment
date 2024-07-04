import React, { useState } from "react";
import { MainpageHeader } from "./Mainpageheader";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const ForgotPassword = ({users}) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
     navigate(`/reset-password/${user.id}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <MainpageHeader />
      </div>

      <div className="items-center md:flex md:flex-grow md:justify-center">
        <form
          className="mx-3 mt-4 rounded-md border p-4 shadow-lg md:w-[450px] md:border-0 md:text-center md:shadow-none"
          onSubmit={handleForgotPassword}
        >
          <div className="text-lg font-medium md:text-4xl">Forgot Password</div>
          <div className="mt-6 md:mt-10">
            <div>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="mb-3 h-11 w-full rounded-md border border-[#c4c4c4] p-3 md:mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mb-5 h-12 w-full rounded-md bg-[#641cc0] text-lg font-medium text-white md:h-14"
                >
                  Reset Password
                </button>
              </div>
              <div className="mt-3 md:mt-4">
                <Link
                  to="/sign-in"
                  className="text-sm text-[#641cc0] underline underline-offset-2"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-auto py-4 text-center text-xs font-light text-[#4f5665] md:bg-[#f5f6f8]">
        Copyright © 2021 Multikart. All rights reserved.
      </div>
    </div>
  );
};
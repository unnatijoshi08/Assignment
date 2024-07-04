import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


import HeaderIcon from "../assets/HeaderIcon";
import MultiImage from "../assets/multicartIcon.jpg";

export const MainpageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      navigate("/sign-up");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-2 shadow-md md:py-2">
        <img
          className="m-3 h-[28px] w-[157px] md:ml-12"
          src={MultiImage}
          alt="multikart_logo"
        />
        <div className="md:hidden">
        <HeaderIcon  />
        </div>
       
        <button
          type="button"
          className="mr-20 hidden rounded-md border border-[#c4c4c4] px-5 py-2 text-sm font-normal md:inline"
          onClick={handleClick}
        >
          {location.pathname === "/" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};
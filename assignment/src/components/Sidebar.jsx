import MultiImage from "../assets/multicartIcon.jpg";
import UserIcon from "../assets/UserIcon";
import Vector from "../assets/Vector";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="hidden md:block h-[1000px] w-50 bg shadow-xl font-poppins">
      <img className="my-4 mx-9 w-36" src={MultiImage} alt="" />
      <div className="">
        <div className="text-sm my-10 text-gray-400 mx-9">MAIN MENU</div>
        <div className="my-8 mx-9 ">
          <div className="flex items-center">
            <Vector />
            <Link to="/dashboard" className="font-mono text-lg mx-1">
              Dashboard
            </Link>
          </div>

          <div className=" text-purple-800 font-mono text-lg flex items-center my-4 ">
            <UserIcon className={"text-purple-800"} />
            <Link to="/" className="mx-1">
              Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

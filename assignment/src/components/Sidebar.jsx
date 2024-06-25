import MultiImage from "../assets/multicartIcon.jpg";
import UserIcon from "../assets/UserIcon";
import Vector from "../assets/Vector";
export default function Sidebar() {
  return (
    <div className="hidden md:block h-screen w-64 bg shadow-xl font-poppins">
      <img className="my-4 mx-9" src={MultiImage} alt="" />
      <div className="">
        <div className="text-sm my-10 text-gray-400 mx-9">MAIN MENU</div>
        <div className="my-8 mx-16 ">
          <div className="flex items-center">
            <Vector />
            <p className="font-mono text-lg mx-1">Dashboard</p>
          </div>

          <div className=" text-purple-800 font-mono text-lg flex items-center my-4 ">
            <UserIcon className={"text-purple-800"} />
            <p className="mx-1">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

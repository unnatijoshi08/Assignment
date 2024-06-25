import HeaderIcon from "../assets/HeaderIcon";
import MultiImage from "../assets/multicartIcon.jpg";

export default function Header() {
  return (
    <div className="shadow-lg flex justify-between p-4">
      <img className="md:hidden" src={MultiImage} alt="" />
      <div className="my-auto">
        <HeaderIcon />
      </div>
    </div>
  );
}

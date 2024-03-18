import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-light.png";
import logo2 from "../assets/logo-dark.png";
import { useState } from "react";
import { IoLogOut, IoPersonSharp, IoSettings } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex p-3 justify-between items-center md:bg-primary">
        <div className="w-1/3">
          <img src={logo} alt="Logo" className="hidden md:block md:h-10" />
          <img src={logo2} alt="Logo" className="md:hidden h-10" />
        </div>
        <div className="w-2/3">
          <GiHamburgerMenu
            size={35}
            className="ml-auto md:hidden"
            color="#F7996E"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div className="hidden md:flex gap-x-10 justify-end text-primary font-roboto">
            <div>
              <a href="#">
                <IoPersonSharp size={25} color="white" />
              </a>
            </div>
            <div>
              <a href="#">
                <IoSettings size={25} color="white" />
              </a>
            </div>
            <div>
              <a href="#">
                <IoLogOut size={25} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          className="md:hidden bg-primary text-white text-center flex flex-col justify-center text-2xl"
          style={{ height: "calc(100vh - 63px)" }}
        >
          <div className="py-7">
            <a href="#">Profile</a>
          </div>
          <div className="py-7">
            <a href="#">Settings</a>
          </div>
          <div className="py-7">
            <a href="#">Logout</a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

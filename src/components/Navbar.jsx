import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-dark.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex p-3 justify-between">
        <div className="w-1/3">
          <img src={logo} alt="Logo" className="md:h-10" />
        </div>
        <div className="w-2/3">
          <GiHamburgerMenu
            size={35}
            className="ml-auto md:hidden"
            color="#4F7CAC"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
      {isMenuOpen ? (
        <div
          className="md:hidden bg-primary text-white text-center flex flex-col justify-center text-2xl"
          style={{ height: "calc(100vh - 63px)" }}
        >
          <div className="py-7">
            <p>Profile</p>
          </div>
          <div className="py-7">
            <p>Settings</p>
          </div>
          <div className="py-7">
            <p>Logout</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

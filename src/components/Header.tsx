import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/img/logo.svg";
import { HiMenuAlt2 } from "react-icons/hi";
import NavBar from "./NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="bg-white py-5 flex justify-between items-center container
     sticky top-0 left-0 z-10"
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <IoMdClose size={30} /> : <HiMenuAlt2 size={30} />}
      </button>
      <NavBar isOpen={isOpen} />
    </header>
  );
};

export default Header;

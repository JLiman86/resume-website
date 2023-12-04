import { nav } from "../data";
import { Link } from "react-scroll";

type NavBarProps = {
  isOpen: boolean;
};

const NavBar = ({ isOpen }: NavBarProps) => {
  return (
    <nav
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full "
      }  bg-accent fixed top-0 left-0 h-screen w-3/4 md:w-[500px] flex justify-center items-center
       duration-500`}
    >
      <ul className="text-white text-center">
        {nav.map((item,idx) => {
          return (
            <li key={idx}>
              <Link
              activeClass="border-b-white"
              offset={-86}
                to={item.name}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:border-b-white border-2 border-transparent capitalize cursor-pointer p-2 "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

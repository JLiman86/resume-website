import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const Button = () => {
  return (
    <Link
      to="home"
      offset={-86}
      spy={true}
      smooth={true}
      duration={500}
      className="bg-accent text-white fixed right-10 bottom-10 cursor-pointer z-30"
    >
      <MdKeyboardArrowUp size={40} />
    </Link>
  );
};

export default Button;

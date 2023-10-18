import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";

// react icons
import { AiOutlineUser } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

// logo
import Logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";

const SideNav = ({ isOpen, toggle }) => {
  const { user } = useAuth();
  return (
    <>
      <aside
        className={`lg:hidden fixed top-0 bg-white w-[280px] md:w-[350px] h-screen p-5 z-50 duration-300 ease-in ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-blue/60 pb-2">
          {/* logo */}
          <Link to="/">
            <img className="w-24 md:w-28" src={Logo} alt="anyvessel" />
          </Link>

          {/* close button */}
          <button
            onClick={toggle}
            className="p-3 bg-dark text-white rounded-full"
          >
            <FaXmark />
          </button>
        </div>

        {/* nav items */}
        <ul className="lg:hidden flex flex-col mt-4">
          <NavItems />
        </ul>

        {/* login & sign in buttons */}
        {!user?.email && (
          <div className="flex flex-col items-center justify-center gap-5 mt-5">
            <Link to="/login" className="btn__primary flex items-center gap-5">
              <BiLogInCircle size="24" /> Log in
            </Link>
            <Link to="/sign_in" className="btn__white flex items-center gap-5">
              <AiOutlineUser size="24" /> Sign In
            </Link>
          </div>
        )}
      </aside>
      {/* overlay */}
      <div
        onClick={toggle}
        className={`fixed lg:hidden w-full h-screen top-0 left-0 z-30 bg-dark bg-opacity-30 duration-300 ease-in ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default SideNav;

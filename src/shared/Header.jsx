import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import SideNav from "./SideNav";

// react icons
import { FaBars } from "react-icons/fa";

// logo
import Logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";
import UserProfile from "./UserProfile";

const Header = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 300) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <header
      className={`fixed w-full shadow-xl duration-300 ease-in-out ${
        navState
          ? "backdrop-blur-md bg-white/60 pt-4 pb-4 shadow-green/10"
          : "bg-white pt-9 pb-4 backdrop-blur-md"
      } z-50`}
    >
      <nav className="flex items-center justify-between px-5">
        {/* logo */}
        <div className="relative w-48 h-full">
          <Link
            to="/"
            className={` bg-white flex items-center justify-center rounded-b-[10px]  ${
              user?.email
                ? "h-full w-full"
                : "absolute -top-4 md:-top-8 lg:-top-16 left-0 w-full h-full md:h-32 lg:h-48 shadow-3xl"
            }`}
          >
            <img className="w-[120px]" src={Logo} alt="anyvessel" />
          </Link>
        </div>

        {/* nav items */}
        <ul className="hidden lg:flex items-center gap-5">
          <NavItems />
        </ul>

        {/* login & sign in buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <UserProfile />
        </div>

        {/* toggle button */}
        <button onClick={toggle} className="lg:hidden text-blue">
          <FaBars className="text-3xl" />
        </button>

        {/* side navbar */}
        <SideNav isOpen={isOpen} toggle={toggle} />
      </nav>
    </header>
  );
};

export default Header;

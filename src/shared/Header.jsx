import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import SideNav from "./SideNav";

// react icons
import { AiOutlineUser } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

// logo
import Logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";

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
                : "absolute -top-16 left-0 w-full h-48 shadow-3xl"
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
        {/* <div className="hidden lg:flex items-center gap-5">
          {user?.email ? (
            <>
              <Link to="/profile">
                <div className="flex items-center gap-4 border-2 border-blue py-2 pl-3 pr-5 rounded-[50px]">
                  <div className="h-[42px] w-[42px] overflow-hidden rounded-full shadow-lg flex items-center justify-center">
                    {user?.photoURL?.length > 0 ? (
                      <img
                        className="w-full h-full object-cover object-center"
                        src={user?.photoURL}
                        alt={user?.displayName}
                      />
                    ) : (
                      <h3 className="text-darkBlue text-xl font-semibold drop-shadow-xl uppercase">
                        {user?.displayName?.slice(0, 2)}
                      </h3>
                    )}
                  </div>
                  <div>
                    <p className="text-blue text-sm">Welcome</p>
                    <h3 className="text-[#050F36] text-sm">
                      {user?.displayName}
                    </h3>
                  </div>
                </div>
              </Link>
              <button onClick={() => logOut()}>Logout</button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn__primary flex items-center gap-5"
              >
                <BiLogInCircle size="24" /> Log in
              </Link>
              <Link
                to="/register"
                className="btn__white flex items-center gap-5"
              >
                <AiOutlineUser size="24" /> Sign up
              </Link>
            </>
          )}
        </div> */}
        {/* login & sign in buttons */}
        <div className="hidden lg:flex items-center gap-5">
          {user?.email ? (
            <>
              {/* <Link to="/profile">
                  <div className="flex items-center gap-4 py-2 pl-3 pr-5 rounded-[50px]">
                    <div className="h-[42px] w-[42px] overflow-hidden rounded-full shadow-lg flex items-center justify-center">
                      {user?.photoURL?.length > 0 ? (
                        <img
                          className="w-full h-full object-cover object-center"
                          src={user?.photoURL}
                          alt={user?.displayName}
                        />
                      ) : (
                        <h3 className="text-darkBlue text-xl font-semibold drop-shadow-xl uppercase">
                          {user?.displayName?.slice(0, 2)}
                        </h3>
                      )}
                    </div>
                    <div>
                      <p className="text-blue text-sm">Welcome</p>
                      <h3 className="text-[#050F36] text-sm">
                        {user?.displayName}
                      </h3>
                    </div>
                  </div>
                </Link>
                <button onClick={() => logOut()}>Logout</button> */}

              <div className="relative group">
                {/* <div className="border-2 border-blue p-1.5 rounded-full cursor-pointer">
                  <div className="h-[38px] w-[38px] overflow-hidden rounded-full shadow-lg flex items-center justify-center">
                    {user?.photoURL?.length > 0 && (
                      <img
                        className="w-full h-full object-cover object-center"
                        src={user?.photoURL}
                        alt={user?.displayName}
                      />
                    )}
                  </div>
                </div> */}

                <div className="flex items-center gap-4 py-2 pl-3 pr-5 rounded-[50px] border-2 border-blue">
                  <div className="h-[42px] w-[42px] overflow-hidden rounded-full shadow-lg flex items-center justify-center">
                    {user?.photoURL?.length > 0 ? (
                      <img
                        className="w-full h-full object-cover object-center"
                        src={user?.photoURL}
                        alt={user?.displayName}
                      />
                    ) : (
                      <h3 className="text-darkBlue text-xl font-semibold drop-shadow-xl uppercase">
                        {user?.displayName?.slice(0, 2)}
                      </h3>
                    )}
                  </div>
                  <div>
                    <p className="text-blue text-sm">Welcome</p>
                    <h3 className="text-[#050F36] text-sm">
                      {user?.displayName.split(" ", 2).join(" ")}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-28 right-0 pt-2.5 opacity-0 invisible group-hover:top-full group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="min-w-max bg-white  shadow-lg p-2 rounded-lg flex flex-col gap-0.5 justify-start items-start">
                    <div className="">
                      <p className="text-blue text-md">Welcome</p>
                      <h3 className="text-[#050F36] text-md">
                        {user?.displayName}
                      </h3>
                    </div>

                    <Link
                      className="py-2 px-2 transition duration-300 hover:bg-blue hover:text-white w-full text-left rounded-md"
                      to="/profile"
                    >
                      Profile
                    </Link>

                    <button
                      className="py-2 px-2 transition duration-300 hover:bg-blue hover:text-white w-full text-left rounded-md"
                      onClick={() => logOut()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn__primary flex items-center gap-5"
              >
                <BiLogInCircle size="24" /> Log in
              </Link>
              <Link
                to="/register"
                className="btn__white flex items-center gap-5"
              >
                <AiOutlineUser size="24" /> Sign up
              </Link>
            </>
          )}
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

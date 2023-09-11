import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import SideNav from "./SideNav";

// react icons
import { FaBars } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

// logo
import Logo from '../assets/images/logo.png';

const Header = () => {
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
        <header className={`fixed w-full shadow-xl duration-300 ease-in-out ${navState ? 'backdrop-blur-md bg-white/60 pt-5 pb-5 shadow-green/10' : 'bg-white pt-9 pb-5 backdrop-blur-md'} z-50`}>
            <nav className="flex items-center justify-between px-5">
                {/* logo */}
                <div className="relative w-48 h-full">
                    <Link to="/" className="absolute -top-16 left-0 w-full h-48 bg-white flex items-center justify-center rounded-b-[10px] shadow-3xl">
                        <img className="w-[120px]" src={Logo} alt="anyvessel" />
                    </Link>
                </div>

                {/* nav items */}
                <ul className="hidden lg:flex items-center gap-5">
                    <NavItems />
                </ul>

                {/* login & sign in buttons */}
                <div className="hidden lg:flex items-center gap-5">
                    <Link to='/login' className="btn__primary flex items-center gap-5">
                        <BiLogInCircle size='24' /> Log in
                    </Link>
                    <Link to='/register' className="btn__white flex items-center gap-5">
                        <AiOutlineUser size='24' /> Sign up
                    </Link>
                    {/* <Link to='/sign_in' className="btn__white flex items-center gap-5">
                        <AiOutlineUser size='24' /> Sign In
                    </Link> */}
                </div>

                {/* toggle button */}
                <button
                    onClick={toggle}
                    className="lg:hidden text-blue">
                    <FaBars className="text-3xl" />
                </button>

                {/* side navbar */}
                <SideNav isOpen={isOpen} toggle={toggle} />
            </nav>
        </header>
    );
};

export default Header;
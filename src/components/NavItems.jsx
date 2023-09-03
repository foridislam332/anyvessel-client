import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";

// react icons
import { PiUser } from "react-icons/pi";

const NavItems = () => {
    // const role = 'user';
    const role = 'candidate';
    // const role = 'recruiter';
    return (
        <>
            <li>
                <ActiveLink to='/'>
                    Home
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/about_us'>
                    About us
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/crew_search'>
                    Crew search
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/boat_search'>
                    Boat search
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/boat_sale'>
                    Boat for sale
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/boat_services'>
                    Boat services
                </ActiveLink>
            </li>
            {/* <li>
                <ActiveLink to='/forum'>
                    Forum
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/contact_us'>
                    Contact us
                </ActiveLink>
            </li> */}
        </>
    );
};

export default NavItems;
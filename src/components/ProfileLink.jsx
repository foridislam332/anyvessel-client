import { NavLink } from "react-router-dom";

const ProfileLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-darkBlue text-2xl font-semibold duration-300"
                    : "text-midBlue hover:text-darkBlue  duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default ProfileLink;
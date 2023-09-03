import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "inline-block lg:inline text-dark text-[17px] p-[10px] font-medium border-b-2 border-dark duration-300"
                    : "inline-block lg:inline text-gray text-[17px] p-[10px] hover:text-dark  border-b-2 border-transparent hover:border-dark duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
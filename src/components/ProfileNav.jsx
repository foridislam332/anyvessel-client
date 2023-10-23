import useAuth from "../hooks/useAuth";
import ProfileLink from "./ProfileLink";

const ProfileNav = () => {
    const { currentUser } = useAuth();
    return (
        <nav className="bg-white px-8 py-5 rounded-lg">
            <ul className="flex items-center flex-wrap gap-x-10 gap-y-1">
                <li>
                    <ProfileLink to=''>CHARTER COMPANY</ProfileLink>
                </li>
                <li>
                    <ProfileLink to='/vessel'>Vessel</ProfileLink>
                </li>
                <li>
                    <ProfileLink to='/location'>Location</ProfileLink>
                </li>
                <li>
                    <ProfileLink to='/contact'>Contact details</ProfileLink>
                </li>
                <li>
                    <ProfileLink to='/advertised'>Advertised Position</ProfileLink>
                </li>
                <li>
                    <ProfileLink to='/booking'>Booking calendar</ProfileLink>
                </li>
                {/* only boat route */}
                {currentUser?.role === "boat" && (
                    <>

                    </>
                )}
            </ul>

        </nav>
    );
};

export default ProfileNav;
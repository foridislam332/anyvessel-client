import useCurrentUser from "../hooks/useCurrentUser";
import ProfileLink from "./ProfileLink";

const ProfileNav = () => {
  const { currentUser } = useCurrentUser();
  // console.log("currentUser -> ", currentUser);
  return (
    <nav className="bg-white px-8 py-5 rounded-lg">
      <ul className="flex items-center flex-wrap gap-x-10 gap-y-1">
        {/* only boat route */}
        {currentUser?.role === "boat" && (
          <>
            <li>
              <ProfileLink to="">CHARTER COMPANY</ProfileLink>
            </li>
            <li>
              <ProfileLink to="/vessel">Vessel</ProfileLink>
            </li>
            <li>
              <ProfileLink to="/location">Location</ProfileLink>
            </li>
            <li>
              <ProfileLink to="/contact">Contact details</ProfileLink>
            </li>
            <li>
              <ProfileLink to="/advertised">Advertised Position</ProfileLink>
            </li>
            <li>
              <ProfileLink to="/booking">Booking calendar</ProfileLink>
            </li>
          </>
        )}

        {/* only crew route */}
        {currentUser?.role === "crew" && (
          <>
            <li>
              <ProfileLink to="/">Crew Establishment</ProfileLink>
            </li>

            <li>
              <ProfileLink to="/crew-location">Location</ProfileLink>
            </li>

            <li>
              <ProfileLink to="/crew-contact-details">
                Contact Details
              </ProfileLink>
            </li>

            <li>
              <ProfileLink to="/crew-service"> Service </ProfileLink>
            </li>

            <li>
              <ProfileLink to="/crew-advert"> Advert </ProfileLink>
            </li>
          </>
        )}

        {/* only boat service route */}
        {currentUser?.role === "boatServices" && (
          <>
            <li>
              <ProfileLink to="/">Boat services establishment</ProfileLink>
            </li>

            <li>
              <ProfileLink to="/service-location">Location</ProfileLink>
            </li>

            <li>
              <ProfileLink to="/contact-details">Contact Details</ProfileLink>
            </li>

            <li>
              <ProfileLink to="/boat-service"> Service </ProfileLink>
            </li>

            <li>
              <ProfileLink to="/advert"> Advert </ProfileLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default ProfileNav;

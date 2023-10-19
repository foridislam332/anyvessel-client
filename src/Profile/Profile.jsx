// internal files
import BoatServiceProfile from "../components/Profile/BoatServiceProfile";
import CrewProfile from "../components/Profile/CrewProfile";
import useCurrentUser from "../hooks/useCurrentUser";
import BoatProfile from "./BoatProfile";

const Profile = () => {
  const { currentUser } = useCurrentUser();
  return (
    <section className="py-20">
      <div className="w-1/2 mx-auto ">
        {currentUser?.role === "boat" && <BoatProfile user={currentUser} />}
        {currentUser?.role === "boatServices" && (
          <BoatServiceProfile user={currentUser} />
        )}
        {currentUser?.role === "crew" && <CrewProfile user={currentUser} />}
      </div>
    </section>
  );
};

export default Profile;

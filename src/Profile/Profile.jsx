// internal files
import useCurrentUser from "../hooks/useCurrentUser";
import BoatProfile from "./BoatProfile";
import BoatServiceProfile from "./BoatServiceProfile";
import CrewProfile from "./CrewProfile";

const Profile = () => {
  const {currentUser, currentUserLoading, refetch} = useCurrentUser();
  return (
    <section className="py-20">
      <div className="w-1/2 mx-auto ">
        {currentUser?.role === "boat" && <BoatProfile user={currentUser} refetch={refetch} currentUserLoading={currentUserLoading} />}
        {currentUser?.role === "boatServices" && (
          <BoatServiceProfile user={currentUser} refetch={refetch} currentUserLoading={currentUserLoading}  />
        )}
        {currentUser?.role === "crew" && <CrewProfile user={currentUser} refetch={refetch} currentUserLoading={currentUserLoading}  />}
      </div>
    </section>
  );
};

export default Profile;

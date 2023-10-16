import useCurrentUser from "../hooks/useCurrentUser";
import BoatProfile from "./BoatProfile";

const Profile = () => {
    const { currentUser } = useCurrentUser();
    console.log(currentUser)
    return (
        <section className="py-44">
            <div className="w-1/2 mx-auto ">
                {
                    currentUser?.role === "boat" && <BoatProfile user={currentUser} />
                }
                {/* {
                    currentUser?.role === "boat" && <BoatProfile user={currentUser} />
                } */}
            </div>

        </section>
    );
};

export default Profile;
// local image
import userBgImg from "../assets/images/user-bg.jpg";

// internal files
import BoatServiceProfile from "../components/Profile/BoatServiceProfile";
import CrewProfile from "../components/Profile/CrewProfile";
import BoatProfile from "../components/Profile/boatProfile";
import useProfileData from "../hooks/useProfileData";

const Profile = () => {
  const { profileData } = useProfileData();

  return (
    <>
      <section className="">
        <div
          style={{ backgroundImage: `url(${userBgImg})` }}
          className="h-[300px] md:h-[350px] flex items-center justify-center bg-cover bg-center"
        ></div>

        <div>
          {profileData?.role == "crew" ? (
            <CrewProfile profileData={profileData} />
          ) : profileData?.role == "boatServices" ? (
            <BoatServiceProfile profileData={profileData} />
          ) : (
            profileData?.role == "boat" && (
              <BoatProfile profileData={profileData} />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
